"use client";

import Particles from "@/blocks/Backgrounds/Particles/Particles";
import React, { useState } from "react";

interface TechnologyItem {
	imgSrc: string;
	name: string;
	colorHover: string;
	size?: number;
}

const CardsTechnology: React.FC = () => {
	const [hovered, setHovered] = useState<string | null>(null);
	const iconSize = 100;

	const icons: TechnologyItem[] = [
		{ imgSrc: "/img/javascript.png", colorHover: "#F7DF1E", name: "JavaScript" },
		{ imgSrc: "/img/React.webp", colorHover: "#61DAFB", name: "React" },
		{ imgSrc: "/img/nextjs.png", colorHover: "#FFFFFF", name: "Next.js" },
		{ imgSrc: "/img/typescript.png", colorHover: "#3178C6", name: "TypeScript" },
		{ imgSrc: "/img/tailwind-css.png", colorHover: "#38B2AC", name: "Tailwind CSS" },
		{ imgSrc: "/img/figma.png", colorHover: "#F24E1E", name: "Figma" },
		{ imgSrc: "/img/github2.png", colorHover: "#FFFFFF", name: "GitHub" },
		{ imgSrc: "/img/git.png", colorHover: "#F05032", name: "Git" },
		{ imgSrc: "/img/vercel.png", colorHover: "#FFFFFF", name: "Vercel" },
		{ imgSrc: "/img/nextAuth.png", colorHover: "#000000", name: "NextAuth" },
		{ imgSrc: "/img/zod.webp", colorHover: "#4A90E2", name: "Zod" },
		{ imgSrc: "/img/zustand.png", colorHover: "#E07A5F", name: "Zustand", size: 130 },
	];

	return (
		<section className="relative h-auto bg-[#0A0F1C] min-h-screen px-4 md:px-6 lg:px-8 overflow-hidden">
			<div className="absolute inset-0 w-full h-full z-0">
				<Particles
					particleColors={["#0AC4BF", "#07918D", "#055E5C"]}
					particleCount={200}
					particleSpread={10}
					speed={0.1}
					particleBaseSize={100}
					moveParticlesOnHover={true}
					alphaParticles={true}
					disableRotation={true}
				/>
			</div>

			<div className="relative z-10">
				<h1 className="font-Poppins font-bold text-base text-[#F3F4F6] md:text-4xl lg:text-3xl text-center responsive-padding py-24">
					Utilizo as tecnologias de forma cirúrgica, pois entendo que cada
					produto possui características únicas. Apresento as linguagens e
					frameworks no qual trabalho e possuo expertise.
				</h1>

				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
					{icons.map((item) => (
						<div
							key={item.name}
							className="relative flex flex-col items-center cursor-pointer group"
							onMouseEnter={() => setHovered(item.name)}
							onMouseLeave={() => setHovered(null)}
						>
							<div className="absolute top-0 w-2/3 h-[1px] bg-[#4e4e4e] transition-all duration-700 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#0AC4BF] group-hover:via-[#07918D] group-hover:to-[#055E5C] group-hover:h-[4px]" />

							<div className="flex flex-col items-center group-hover:-translate-y-4 duration-700 mt-16">
								<img
									src={item.imgSrc}
									alt={item.name}
									className="object-contain"
									style={{
										width: item.size || iconSize,
										height: item.size || iconSize,
									}}
								/>
								<span
									className="mt-2 text-lg font-semibold transition-colors duration-300 mb-24"
									style={{
										color: hovered === item.name ? item.colorHover : "#cdcdcd",
									}}
								>
									{item.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardsTechnology;
