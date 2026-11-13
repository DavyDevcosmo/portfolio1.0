"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, MenuIcon } from "./icons";
import { btn, wrap } from "./ui";

// Na mesma ordem das seções da página. O contato fica só no botão "Fale comigo".
const links = [
	{ href: "#sobre", label: "Sobre" },
	{ href: "#projetos", label: "Projetos" },
	{ href: "#open-source", label: "Open Source" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [current, setCurrent] = useState<string | null>(null);
	const toggleRef = useRef<HTMLButtonElement>(null);

	const closeMenu = () => setIsOpen(false);

	// Esc fecha o menu do celular e devolve o foco ao botão que o abriu.
	useEffect(() => {
		if (!isOpen) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;
			setIsOpen(false);
			toggleRef.current?.focus();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [isOpen]);

	// Marca no menu a seção que está no meio da tela.
	useEffect(() => {
		const sections = [...links.map((link) => link.href), "#contato"]
			.map((href) => document.querySelector(href))
			.filter((el): el is Element => el !== null);
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setCurrent(`#${entry.target.id}`);
				}
			},
			{ rootMargin: "-45% 0px -55% 0px" },
		);
		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	}, []);

	return (
		<header className="relative z-50 bg-sage">
			<a
				href="#conteudo"
				className="sr-only rounded-brut border-3 border-ink bg-white px-4 py-2.5 font-display font-bold text-ink focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-60"
			>
				Pular para o conteúdo
			</a>
			<nav
				aria-label="Principal"
				className={`${wrap} grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3 max-md:grid-cols-[1fr_auto]`}
			>
				<a
					href="#inicio"
					className="flex items-center gap-3 font-display text-xl font-extrabold tracking-tight max-sm:text-lg"
					onClick={closeMenu}
				>
					<Image
						src="/img/logo-icon.png"
						alt=""
						width={153}
						height={133}
						priority
						className="h-auto w-9 max-sm:w-8"
					/>
					DAVY COSMO
				</a>

				<div className="flex items-center justify-center gap-7 text-base font-normal max-md:hidden">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							aria-current={current === link.href ? "true" : undefined}
							className="underline decoration-transparent decoration-3 underline-offset-6 transition-[text-decoration-color] duration-200 hover:decoration-current aria-[current]:font-bold aria-[current]:decoration-current motion-reduce:transition-none"
						>
							{link.label.toUpperCase()}
						</a>
					))}
				</div>

				<a
					href="#contato"
					aria-current={current === "#contato" ? "true" : undefined}
					className={`${btn} min-h-11 justify-self-end rounded-brut border-3 border-ink bg-emerald px-4.5 py-2.5 font-display text-ink shadow-hard-4 shadow-ink max-md:hidden`}
				>
					Fale comigo
					<ArrowIcon />
				</a>

				<button
					ref={toggleRef}
					type="button"
					onClick={() => setIsOpen((open) => !open)}
					className={`${btn} size-11 justify-self-end rounded-lg border-3 border-ink bg-emerald p-0 text-ink shadow-hard-3 shadow-ink md:hidden`}
					aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
					aria-expanded={isOpen}
					aria-controls="menu-celular"
				>
					<MenuIcon open={isOpen} />
				</button>
			</nav>

			{isOpen && (
				<div
					id="menu-celular"
					className="flex animate-drop flex-col gap-1.5 border-t-3 border-ink bg-ink px-6 pt-3 pb-5 max-sm:px-4 md:hidden motion-reduce:animate-none"
				>
					{links.map((link, i) => (
						<a
							key={link.href}
							href={link.href}
							onClick={closeMenu}
							className={`flex min-h-13 items-center font-display text-2xl leading-tight font-semibold text-paper ${
								i === links.length - 1 ? "mb-3.5" : ""
							}`}
						>
							{link.label}
						</a>
					))}
					<a
						href="#contato"
						onClick={closeMenu}
						className={`${btn} min-h-12 rounded-brut border-3 border-emerald bg-emerald px-4.5 py-3 font-display text-base text-ink shadow-hard-4 shadow-ink`}
					>
						Fale comigo
						<ArrowIcon />
					</a>
				</div>
			)}
		</header>
	);
};

export default Navbar;
