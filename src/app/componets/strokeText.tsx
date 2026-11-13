"use client";

// Título que se "desenha": o contorno em ink traça as letras, a tinta preenche da esquerda para a
// direita e o realce lime entra por último, como passada de serigrafia (mesma linguagem do herói).
// Adaptado do StrokeText do React Bits para várias linhas com escala única e realce por trecho.

import type { gsap } from "gsap";
import { type CSSProperties, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";

// No servidor o layout effect não roda (e o React avisa); no navegador ele roda antes da pintura.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export type StrokeSegment = { text: string; highlight?: boolean };
export type StrokeLine = StrokeSegment[];

type Box = { x: number; y: number; width: number; height: number };

type Props = {
	lines: StrokeLine[];
	fontSize?: number;
	lineHeight?: number;
	/** Em `em`, como o tracking do Tailwind. */
	letterSpacing?: number;
	strokeColor?: string;
	fillColor?: string;
	highlightColor?: string;
	strokeWidth?: number;
	drawDuration?: number;
	stagger?: number;
	fillDelay?: number;
	className?: string;
};

const EASE_OUT_EXPO = "expo.out";

const StrokeText = ({
	lines,
	fontSize = 56,
	lineHeight = 1.04,
	letterSpacing = -0.025,
	strokeColor = "var(--color-ink)",
	fillColor = "var(--color-ink)",
	highlightColor = "var(--color-accent)",
	strokeWidth = 1.4,
	drawDuration = 0.9,
	stagger = 0.018,
	fillDelay = 0.05,
	className = "",
}: Props) => {
	const rootRef = useRef<HTMLSpanElement>(null);
	const groupRef = useRef<SVGGElement>(null);
	const wipeRef = useRef<SVGRectElement>(null);
	const lineRefs = useRef<(SVGTextElement | null)[]>([]);

	const [box, setBox] = useState<Box | null>(null);
	const [highlights, setHighlights] = useState<Box[]>([]);
	// Até o SVG estar medido e no estado inicial da animação, quem aparece é o título em HTML.
	// Assim, se o JS falhar ou demorar, o título continua visível.
	const [ready, setReady] = useState(false);

	const wipeId = `stroke-wipe-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
	const dash = Math.max(fontSize * 7, 200);

	const fontStyle = useMemo<CSSProperties>(
		() => ({
			fontFamily: "inherit",
			fontSize: `${fontSize}px`,
			fontWeight: 800,
			letterSpacing: `${letterSpacing * fontSize}px`,
			whiteSpace: "pre",
		}),
		[fontSize, letterSpacing],
	);

	// Cada linha vira caracteres soltos (para o traço em sequência), lembrando quais são realce.
	const charLines = useMemo(
		() =>
			lines.map((line) =>
				line.flatMap((segment) =>
					Array.from(segment.text).map((char) => ({ char, highlight: !!segment.highlight })),
				),
			),
		[lines],
	);

	// Mede o texto real (com a fonte já carregada) para o viewBox e para os blocos de realce.
	useIsoLayoutEffect(() => {
		const root = rootRef.current;
		if (!root) return;
		let cancelled = false;

		const measure = () => {
			if (cancelled || !groupRef.current) return;
			let bbox: DOMRect;
			try {
				bbox = groupRef.current.getBBox();
			} catch {
				return;
			}
			if (!bbox.width) return;

			// Sem folga à esquerda: o título alinha com o parágrafo; o realce pode vazar um pouco (overflow visível).
			const padX = fontSize * 0.14;
			const padY = fontSize * 0.08;
			setBox({ x: bbox.x, y: bbox.y - padY, width: bbox.width + padX, height: bbox.height + padY * 2 });

			const marks: Box[] = [];
			charLines.forEach((chars, lineIndex) => {
				const el = lineRefs.current[lineIndex];
				if (!el) return;
				let start = -1;
				const flush = (end: number) => {
					if (start < 0) return;
					const a = el.getExtentOfChar(start);
					const b = el.getExtentOfChar(end);
					const pad = fontSize * 0.12;
					// Altura de uma linha (não da caixa da fonte), centrada no glifo: os blocos de linhas vizinhas não se sobrepõem.
					const height = fontSize * lineHeight * 0.96;
					marks.push({
						x: a.x - pad,
						y: a.y + (a.height - height) / 2,
						width: b.x + b.width - a.x + pad * 2,
						height,
					});
					start = -1;
				};
				chars.forEach((c, i) => {
					if (c.highlight && start < 0) start = i;
					if (!c.highlight) flush(i - 1);
				});
				flush(chars.length - 1);
			});
			setHighlights(marks);
		};

		measure();
		document.fonts?.ready?.then(measure).catch(() => {});
		const observer = new ResizeObserver(measure);
		observer.observe(root);
		return () => {
			cancelled = true;
			observer.disconnect();
		};
	}, [charLines, fontSize, lineHeight]);

	// Linha do tempo: traço → tinta → realce. Começa quando o título entra na tela, uma vez só.
	useIsoLayoutEffect(() => {
		const root = rootRef.current;
		const wipe = wipeRef.current;
		if (!root || !box || !wipe) return;

		const strokes = [...root.querySelectorAll<SVGTSpanElement>("[data-stroke-char]")];
		const marks = [...root.querySelectorAll<SVGRectElement>("[data-mark]")];
		const markWidth = (mark: SVGRectElement) => Number(mark.getAttribute("data-width") ?? 0);

		// O estado inicial é aplicado direto no DOM, sem esperar o GSAP: ele só baixa quando for animar.
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			for (const s of strokes) s.style.strokeDashoffset = "0";
			wipe.setAttribute("width", String(box.width));
			for (const m of marks) m.setAttribute("width", String(markWidth(m)));
			setReady(true);
			return;
		}

		for (const s of strokes) {
			s.style.strokeDasharray = String(dash);
			s.style.strokeDashoffset = String(dash);
		}
		wipe.setAttribute("width", "0");
		for (const m of marks) m.setAttribute("width", "0");
		// Só agora o SVG (já no estado inicial) troca de lugar com o título em HTML, antes da pintura.
		setReady(true);

		let cancelled = false;
		let timeline: gsap.core.Timeline | undefined;
		// Começa a baixar o GSAP em segundo plano; fora do pacote inicial da página.
		const gsapReady = import("gsap").then((mod) => mod.gsap);

		const play = async () => {
			const gsap = await gsapReady;
			if (cancelled) return;
			const fillAt = drawDuration + stagger * strokes.length * 0.6 + fillDelay;
			timeline = gsap
				.timeline()
				.to(strokes, { strokeDashoffset: 0, duration: drawDuration, ease: "power2.out", stagger }, 0)
				.to(wipe, { attr: { width: box.width }, duration: 0.55, ease: EASE_OUT_EXPO }, fillAt);
			marks.forEach((mark, i) => {
				timeline?.to(
					mark,
					{ attr: { width: markWidth(mark) }, duration: 0.5, ease: EASE_OUT_EXPO },
					fillAt + 0.35 + i * 0.12,
				);
			});
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				play().catch(() => {
					// Sem GSAP (rede falhou): mostra o título pronto em vez de deixá-lo vazio.
					for (const s of strokes) s.style.strokeDashoffset = "0";
					wipe.setAttribute("width", String(box.width));
					for (const m of marks) m.setAttribute("width", String(markWidth(m)));
				});
			},
			{ threshold: 0.4 },
		);
		observer.observe(root);

		return () => {
			cancelled = true;
			observer.disconnect();
			timeline?.kill();
		};
	}, [box, dash, drawDuration, stagger, fillDelay]);

	const step = fontSize * lineHeight;
	const viewBox = box ? `${box.x} ${box.y} ${box.width} ${box.height}` : `0 ${-fontSize} 600 ${step * lines.length}`;

	const renderLines = (layer: "stroke" | "fill") =>
		charLines.map((chars, lineIndex) => (
			<text
				// biome-ignore lint/suspicious/noArrayIndexKey: as linhas são fixas e na ordem do texto.
				key={`${layer}-${lineIndex}`}
				ref={
					layer === "fill"
						? (el) => {
								lineRefs.current[lineIndex] = el;
							}
						: undefined
				}
				x="0"
				y={lineIndex * step}
				style={fontStyle}
				{...(layer === "stroke"
					? { fill: "none", stroke: strokeColor, strokeWidth, strokeLinejoin: "round" as const }
					: { fill: fillColor, clipPath: `url(#${wipeId})` })}
			>
				{chars.map((c, i) => (
					<tspan
						// biome-ignore lint/suspicious/noArrayIndexKey: caracteres fixos, a posição é a identidade.
						key={i}
						data-stroke-char={layer === "stroke" ? true : undefined}
					>
						{c.char}
					</tspan>
				))}
			</text>
		));

	return (
		<span ref={rootRef} className={`relative block w-full ${className}`} aria-hidden="true">
			{/* Título em HTML: é o que o servidor envia e o que fica se o JS falhar. */}
			{!ready && (
				<span className="block">
					{lines.map((line, lineIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: as linhas são fixas e na ordem do texto.
						<span key={lineIndex}>
							{lineIndex > 0 && " "}
							{line.map((segment) =>
								segment.highlight ? (
									<span key={segment.text} className="box-decoration-clone bg-accent px-[.12em]">
										{segment.text}
									</span>
								) : (
									segment.text
								),
							)}
						</span>
					))}
				</span>
			)}
			{/* Enquanto mede, o SVG fica invisível por cima do HTML; pronto, ele assume o lugar. */}
			<span className={ready ? "block leading-[0]" : "pointer-events-none invisible absolute inset-x-0 top-0 leading-[0]"}>
			<svg
				viewBox={viewBox}
				className="block h-auto w-full overflow-visible select-none"
				style={{ maxWidth: box ? `${box.width}px` : undefined }}
			>
				<defs>
					<clipPath id={wipeId} clipPathUnits="userSpaceOnUse">
						<rect ref={wipeRef} x={box?.x ?? 0} y={box?.y ?? 0} width={box?.width ?? 0} height={box?.height ?? 0} />
					</clipPath>
				</defs>
				{highlights.map((mark) => (
					<rect
						key={`${mark.x}-${mark.y}`}
						data-mark
						data-width={mark.width}
						x={mark.x}
						y={mark.y}
						width={mark.width}
						height={mark.height}
						fill={highlightColor}
					/>
				))}
				<g ref={groupRef}>{renderLines("fill")}</g>
				{renderLines("stroke")}
			</svg>
			</span>
		</span>
	);
};

export default StrokeText;
