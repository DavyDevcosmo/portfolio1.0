import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Display, Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

// Pôster do herói: condensada de cartaz de rua (sinalização de Chicago), só o peso 900.
const poster = Big_Shoulders_Display({
	subsets: ["latin"],
	weight: "900",
	variable: "--font-poster-family",
	display: "swap",
});

// Títulos e texto: grotesca de jornal, um arquivo variável (400–900) para todos os pesos.
const grotesk = Schibsted_Grotesk({
	subsets: ["latin"],
	variable: "--font-grotesk-family",
	display: "swap",
});

// Etiquetas <Nome /> e metadados: mono larga, com cara de rotuladora.
const mono = Martian_Mono({
	subsets: ["latin"],
	variable: "--font-mono-family",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Davy Cosmo",
	description:
		"Davy Cosmo, desenvolvedor full-stack (Next.js, React, TypeScript) aberto a vagas e freelas.",
	authors: [{ name: "Davy", url: "https://Davycosmo.com" }],
	keywords: [
		"portfolio",
		"desenvolvedor",
		"react",
		"next.js",
		"criação de sites",
		"full-stack",
		"front-end",
		"davy cosmo",
	],
	manifest: "/site.webmanifest",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
		title: "Davy Cosmo",
	},
};

export const viewport: Viewport = {
	themeColor: "#e5ead6",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`scroll-smooth ${poster.variable} ${grotesk.variable} ${mono.variable}`}
		>
			<body className="antialiased">{children}</body>
		</html>
	);
}
