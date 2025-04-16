"use client";

import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

const Projects = () => {
	return (
		<section className="h-[50vh] md:h-[60vh] lg:h-[100vh] bg-[#0A0F1C] md:pt-16 relative">
			<div className="relative text-center justify-center bg-center bg-cover flex items-center md:justify-start  h-[30vh] md:h-[40vh] lg:h-[60vh]">

				<img
					className="w-full h-full object-cover absolute top-0 left-0 "
					src="/img/homeImg.png"
					alt=""
				/>


				<div className="cols text-left translate-y-1/4 ml-8 relative z-10">
					<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
						<h1 className="text-white text-4xl md:text-5xl font-bold flex justify-center items-center p-4 stroke-text rampart-one-regular">
							PORTFÓLIO
						</h1>
						<GradientText
							className="text-lg md:text-4xl font-light lg:font-extralight p-4"
							colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
							animationSpeed={9}>
							Ùltimos Cases de Criação de Sites
						</GradientText>
					</FadeContent>
				</div>

			</div>
			<h1 className="text-3xl pt-10 md:text-5xl font-bold font-montserrat text-[var(--color-primary)] md:pb-16 md:pt-24 w-full text-center">Projetos em andamento...</h1>
		</section>
	);
};

export default Projects;
