"use client";

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import ScrollingText from "./ScrollingText";
import Squares from "@/blocks/Backgrounds/Squares/Squares";



const Presentation = () => {
	return (
		<header>
			<section className="w-full h-[70vh] lg:h-screen bg-gradient-primary relative flex flex-col overflow-hidden ">
				<div className="absolute inset-0 z-0 overflow-hidden ">
					<Squares
						speed={0.3}
						squareSize={50}
						direction="diagonal"
						borderColor="rgba(255, 255, 255, 0.1)"
						hoverFillColor="rgba(34, 34, 34, 0.3)"

					/>
				</div>
				<div className="flex-1 relative z-10 px-4 md:px-6 lg:px-8">


					<h1 className=" text-3xl pt-24 pb-10 font-Poppins font-bold md:text-7xl text-white">
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

					<div>
						<div className=" pt-16 flex gap-7 md:gap-10 ">
							<a
								href="https://github.com/DavyDevcosmo"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="h-12 w-12 md:h-14 md:w-14"
									src="/img/icons8-github-64 1.svg"
									alt="logo-github"
								/>
							</a>


							<a
								href="https://www.linkedin.com/in/davy-cosmo-2713152b5/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="h-12 w-12 md:h-14 md:w-14 "
									src="/img/icons8-linkedin (1).svg"
									alt="logo-linkedin"
								/>
							</a>


						</div>


					</div>
				</div>
				<div
					className="bg-[var(--color-primary)] h-14 w-full flex items-center  absolute bottom-0 "
				>
					<ScrollingText />
				</div>
			</section>
		</header>
	);
};

export default Presentation;
