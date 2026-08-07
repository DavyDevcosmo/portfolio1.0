"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
	{ href: "#home", label: "Início" },
	{ href: "#about", label: "Sobre" },
	{ href: "#projects", label: "Projetos" },
	{ href: "#technologies", label: "Tecnologias" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => setIsOpen(false);

	return (
		<nav className="fixed top-0 left-0 z-50 w-full bg-[#0A0F1C]/90 backdrop-blur-md border-b border-white/10">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
				<a
					href="#home"
					className="font-montserrat text-lg font-bold text-[var(--color-primary)] sm:text-xl"
					onClick={closeMenu}
				>
					Davy Cosmo
				</a>

				<ul className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className="font-montserrat text-sm font-medium text-white transition hover:text-[var(--color-primary)] lg:text-base"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>

				<button
					type="button"
					onClick={() => setIsOpen((open) => !open)}
					className="inline-flex items-center justify-center text-white md:hidden"
					aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
					aria-expanded={isOpen}
				>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>

			{isOpen && (
				<div className="border-t border-white/10 bg-[#0A0F1C] md:hidden">
					<ul className="flex flex-col items-center gap-6 py-8">
						{links.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									onClick={closeMenu}
									className="font-montserrat text-lg font-medium text-white transition hover:text-[var(--color-primary)]"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
