import type { Metadata } from "next";
import { Anton, JetBrains_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-montserrat-family",
	display: "swap",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["600", "700", "800", "900"],
	variable: "--font-poppins-family",
	display: "swap",
});

const anton = Anton({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-anton-family",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["500", "700"],
	variable: "--font-mono-family",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Davy Cosmo",
	description:
		"Desenvolvedor front-end Freelancer, especializado em React, Next.js e desenvolvimento web moderno",
	authors: [{ name: "Davy", url: "https://Davycosmo.com" }],
	keywords: [
		"portfolio",
		"desenvolvedor",
		"react",
		"next.js",
		"criação de sites",
		"front-end",
		"davy cosmo",
	],
	manifest: "/favicon/site.webmanifest",
	themeColor: "#ffffff",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
		title: "Davy Cosmo",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className={`scroll-smooth ${montserrat.variable} ${poppins.variable} ${anton.variable} ${jetbrainsMono.variable}`}
		>
			<body className="antialiased">{children}</body>
		</html>
	);
}
