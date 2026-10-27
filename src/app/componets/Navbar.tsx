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
					className="flex items-center gap-3 font-display text-[20px] font-extrabold tracking-[-0.02em] max-sm:text-[18px]"
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

				<div className="flex items-center justify-center gap-7 text-[15px] font-normal max-md:hidden">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="hover:underline hover:decoration-[3px] hover:underline-offset-[6px]"
						>
							{link.label.toUpperCase()}
						</a>
					))}
				</div>

				<a
					href="#contato"
					className={`${btn} min-h-11 justify-self-end rounded-brut border-3 border-ink bg-emerald px-[18px] py-2.5 font-display text-ink shadow-[4px_4px_0_var(--color-ink)] max-md:hidden`}
				>
					Fale comigo
					<ArrowIcon />
				</a>

				<button
					type="button"
					onClick={() => setIsOpen((open) => !open)}
					className={`${btn} size-11 justify-self-end rounded-[10px] border-3 border-ink bg-emerald p-0 text-ink shadow-[3px_3px_0_var(--color-ink)] md:hidden`}
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
							className={`flex min-h-[52px] items-center font-display text-[22px] leading-[1.2] font-semibold text-paper ${i === links.length - 1 ? "mb-3.5" : ""
								} ${link.href === "#stack" ? "max-sm:hidden" : ""}`}
						>
							{link.label}
						</a>
					))}
					<a
						href="#contato"
						onClick={closeMenu}
						className={`${btn} min-h-12 rounded-brut border-3 border-emerald bg-emerald px-[18px] py-3 font-display text-[16px] text-ink shadow-[4px_4px_0_var(--color-ink)]`}
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
