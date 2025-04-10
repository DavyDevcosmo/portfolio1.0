"use client";

import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import ScrollingText from "./ScrollingText";
import Squares from "@/blocks/Backgrounds/Squares/Squares";



const Presentation = () => {
	return (
		<header>
			<section className="w-full h-screen bg-gradient-primary relative flex flex-col overflow-hidden">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Squares
						speed={0.3}
						squareSize={50}
						direction="diagonal"
						borderColor="rgba(255, 255, 255, 0.1)"
						hoverFillColor="rgba(34, 34, 34, 0.3)"

					/>
				</div>
				<div className="flex-1 relative z-10">


					<h1 className="pl-10 pt-24 pb-10 font-Poppins font-bold text-7xl text-white">
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
						<div className="pl-10 pt-8 flex gap-10">
							<a
								href="https://www.linkedin.com/in/seu-perfil"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="h-14 w-14"
									src="/img/icons8-github-64 1.svg"
									alt="logo-github"
								/>
							</a>

							<a
								href="https://github.com/seu-usuario"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="h-12 w-12"
									src="/img/icons8-whatsapp.svg"
									alt="logo-whatsapp"
								/>
							</a>

							<a
								href="https://twitter.com/seu-usuario"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="h-12 w-12"
									src="/img/icons8-linkedin (1).svg"
									alt="logo-linkedin"
								/>
							</a>

							<a
								href="https://instagram.com/seu-usuario"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="h-12 w-12"
									src="/img/icons8-instagram (1).svg"
									alt="logo-instagram"
								/>
							</a>
						</div>


						<div
							className="bg-green-500 h-14 w-full flex items-center mt-24 absolute bottom-0 "
						>
							<ScrollingText />
						</div>
					</div>
				</div>
			</section>
		</header>
	);
};

export default Presentation;
