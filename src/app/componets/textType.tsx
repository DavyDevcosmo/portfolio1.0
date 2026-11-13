"use client";

// Título digitado como num terminal, com cursor em bloco. Adaptado do TextType do React Bits:
// uma frase só, digitada uma vez quando entra na tela. O texto completo fica invisível por baixo
// e reserva o espaço, então a página não pula enquanto as letras aparecem.

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

type Props = {
	text: string;
	/** Intervalo aleatório entre teclas, em ms, para parecer gente digitando. */
	speed?: { min: number; max: number };
	initialDelay?: number;
	cursorClassName?: string;
};

const TextType = ({ text, speed = { min: 45, max: 110 }, initialDelay = 250, cursorClassName = "" }: Props) => {
	const chars = Array.from(text);
	// O servidor envia a frase completa: se o JS falhar, o título continua inteiro na tela.
	const [count, setCount] = useState(chars.length);
	const [started, setStarted] = useState(false);
	const rootRef = useRef<HTMLSpanElement>(null);

	// No navegador, antes da primeira pintura, zera o texto para digitar. Com movimento reduzido, fica completo.
	useIsoLayoutEffect(() => {
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setCount(0);
	}, []);

	// Começa quando o título aparece na tela.
	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				setStarted(true);
				observer.disconnect();
			},
			{ threshold: 0.5 },
		);
		observer.observe(root);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!started || count >= chars.length) return;
		const delay = (count === 0 ? initialDelay : 0) + speed.min + Math.random() * (speed.max - speed.min);
		const timer = setTimeout(() => setCount((c) => c + 1), delay);
		return () => clearTimeout(timer);
	}, [started, count, chars.length, initialDelay, speed.min, speed.max]);

	// O cursor fica aceso enquanto digita e pisca depois, como num terminal (animação em CSS).
	const typing = started && count < chars.length;

	return (
		<span ref={rootRef} className="relative block">
			<span className="sr-only">{text}</span>
			{/* Reserva o espaço final do título. */}
			<span className="invisible" aria-hidden="true">
				{text}
			</span>
			<span className="absolute inset-0" aria-hidden="true">
				{chars.slice(0, count).join("")}
				<span
					className={`ml-[0.04em] inline-block h-[0.8em] w-[0.5em] translate-y-[0.06em] align-baseline ${
						typing ? "" : "animate-blink motion-reduce:animate-none"
					} ${cursorClassName}`}
				/>
			</span>
		</span>
	);
};

export default TextType;
