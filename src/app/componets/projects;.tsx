"use client";

import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

const Projects = () => {
	return (
		<section className="h-screen bg-[#0A0F1C] md:pt-16 relative">
			<div className="relative h-14 text-center justify-center bg-center bg-cover flex items-center  md:justify-start md:mx-10 md:h-[40vh] lg:h-[60vh]">

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
		</section>
	);
};

export default Projects;
