"use client";

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import Squares from "@/blocks/Backgrounds/Squares/Squares";
import ScrollingText from "./ScrollingText";

const Presentation = () => {
	return (
		<header>
			<section className="relative flex w-full min-h-[100svh] h-[100svh] max-h-[100svh] flex-col overflow-hidden bg-gradient-primary pt-16 sm:min-h-[70vh] sm:h-[70vh] sm:max-h-none lg:min-h-screen lg:h-screen">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Squares
						speed={0.3}
						squareSize={50}
						direction="diagonal"
						borderColor="rgba(255, 255, 255, 0.1)"
						hoverFillColor="rgba(34, 34, 34, 0.3)"
					/>
				</div>

				<div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-20 pt-2 sm:px-6 sm:pb-20 sm:pt-4 md:px-8 md:justify-start md:pt-6 lg:px-10">
					<img
						src="/img/logo-semFundo.png"
						alt="Logo Davy Cosmo"
						className="mb-2 h-20 w-20 object-contain sm:mb-4 sm:h-28 sm:w-28 md:h-40 md:w-40 lg:h-52 lg:w-52"
					/>

					<h1 className="max-w-[18ch] pb-4 font-Poppins text-2xl font-bold leading-tight text-white sm:max-w-none sm:pb-6 sm:text-4xl md:text-5xl lg:text-7xl">
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

					<div className="flex items-center gap-5 pt-4 sm:gap-7 sm:pt-6 md:gap-10 md:pt-8">
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
