"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowIcon, MenuIcon } from "./icons";
import { btn, wrap } from "./ui";

const links = [
	{ href: "#sobre", label: "Sobre" },
	{ href: "#open-source", label: "Open Source" },
	{ href: "#projetos", label: "Freelancer" },
	{ href: "#stack", label: "Stack" },
	{ href: "#contato", label: "Contato" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	return (
		<header className="relative z-50 bg-sage">
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
							className="hover:underline hover:decoration-3 hover:underline-offset-6"
						>
							{link.label.toUpperCase()}
						</a>
					))}
				</div>

				<a
					href="#contato"
					className={`${btn} min-h-11 justify-self-end rounded-brut border-3 border-ink bg-emerald px-4.5 py-2.5 font-display text-ink shadow-hard-4 shadow-ink max-md:hidden`}
				>
					Fale comigo
					<ArrowIcon />
				</a>

				<button
					type="button"
					onClick={() => setIsOpen((open) => !open)}
					className={`${btn} size-11 justify-self-end rounded-lg border-3 border-ink bg-emerald p-0 text-ink shadow-hard-3 shadow-ink md:hidden`}
					aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
					aria-expanded={isOpen}
				>
					<MenuIcon open={isOpen} />
				</button>
			</nav>

			{isOpen && (

				<div className="flex flex-col gap-1.5 border-t-3 border-ink bg-ink px-6 pt-3 pb-5 max-sm:px-4 md:hidden">
					{links.map((link, i) => (
						<a
							key={link.href}
							href={link.href}
							onClick={closeMenu}
							className={`flex min-h-13 items-center font-display text-2xl leading-tight font-semibold text-paper ${i === links.length - 1 ? "mb-3.5" : ""
								} ${link.href === "#stack" ? "max-sm:hidden" : ""}`}
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
