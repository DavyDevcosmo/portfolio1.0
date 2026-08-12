"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import ScrollingText from "./ScrollingText";

const Squares = dynamic(() => import("@/blocks/Backgrounds/Squares/Squares"), {
	ssr: false,
});

const Presentation = () => {
	return (
		<header>
			<section
				id="home"
				className="relative flex w-full min-h-[60svh] flex-col overflow-x-hidden bg-gradient-primary pt-16 lg:min-h-screen"
			>
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Squares
						speed={0.3}
						squareSize={50}
						direction="diagonal"
						borderColor="rgba(255, 255, 255, 0.1)"
						hoverFillColor="rgba(34, 34, 34, 0.3)"
					/>
				</div>

				<div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-24 pt-2 sm:px-6 sm:pb-28 sm:pt-4 md:px-8 md:justify-start md:pt-6 lg:px-10">
					<Image
						src="/img/logo-semFundo.png"
						alt="Logo Davy Cosmo"
						width={176}
						height={176}
						priority
						className="mb-2 h-20 w-20 shrink-0 object-contain sm:mb-4 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44"
					/>

					<h1 className="max-w-[18ch] pb-4 font-Poppins text-2xl font-bold leading-tight text-white sm:max-w-none sm:pb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
						<BlurText
							text="Olá! sou Davy Cosmo,"
							animateBy="words"
							delay={50}
							direction="top"
							className="inline-block"
						/>
						<br />
						<BlurText
							text="Desenvolvedor Front-end"
							animateBy="words"
							delay={150}
							direction="top"
							className="inline-block"
						/>
						<br />
						<BlurText
							text="Freelancer"
							animateBy="words"
							delay={200}
							direction="top"
							className="inline-block"
						/>
					</h1>

					<div className="relative z-20 flex shrink-0 items-center gap-5 pt-4 sm:gap-7 sm:pt-6 md:gap-10 md:pt-8">
						<a
							href="https://github.com/DavyDevcosmo"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							<img
								className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
								src="/img/icons8-github-64 1.svg"
								alt="logo-github"
								width={56}
								height={56}
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/davy-cosmo-2713152b5/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							<img
								className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
								src="/img/icons8-linkedin (1).svg"
								alt="logo-linkedin"
								width={56}
								height={56}
							/>
						</a>
					</div>
				</div>

				<div className="absolute bottom-0 z-10 flex h-12 w-full items-center bg-[var(--color-primary)] sm:h-14">
					<ScrollingText />
				</div>
			</section>
		</header>
	);
};

export default Presentation;
