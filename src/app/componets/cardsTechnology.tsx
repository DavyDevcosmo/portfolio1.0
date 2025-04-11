"use client";

import Particles from "@/blocks/Backgrounds/Particles/Particles";
import {
	SiStyledcomponents,
	SiTypescript,
	SiTailwindcss,
	SiReact,
	SiNextdotjs,
	SiJavascript,
	SiFigma,
	SiSass,
	SiGithub,
	SiGit,
	SiBootstrap,
	SiVercel,
} from "react-icons/si";


const CardsTechnology: React.FC = () => {
	const iconSize = 100;

	const icons = [
		{ Icon: SiJavascript, colorHover: "#F7DF1E", name: "JavaScript" },
		{ Icon: SiReact, colorHover: "#61DAFB", name: "React" },
		{ Icon: SiNextdotjs, colorHover: "#FFFFFF", name: "Next.js" },
		{ Icon: SiTypescript, colorHover: "#3178C6", name: "TypeScript" },
		{ Icon: SiTailwindcss, colorHover: "#38B2AC", name: "Tailwind CSS" },
		{
			Icon: SiStyledcomponents,
			colorHover: "#DB7093",
			name: "Styled Components",
		},
		{ Icon: SiSass, colorHover: "#CC6699", name: "Sass" },
		{ Icon: SiFigma, colorHover: "#F24E1E", name: "Figma" },
		{ Icon: SiGithub, colorHover: "#FFFFFF", name: "GitHub" },
		{ Icon: SiGit, colorHover: "#F05032", name: "Git" },
		{ Icon: SiBootstrap, colorHover: "#7952B3", name: "Bootstrap" },
		{ Icon: SiVercel, colorHover: "#FFFFFF", name: "Vercel" },

		{ imgSrc: "/img/nextAuth.png", colorHover: "#000000", name: "NextAuth" },
		{ imgSrc: "/img/zod.webp", colorHover: "#4A90E2", name: "Zod" },
		{
			imgSrc: "/img/zustand.png",
			colorHover: "#E07A5F",
			name: "Zustand",
			size: 130,
		},
	];

	return (
		<section className="h-auto bg-[#0A0F1C] relative min-h-screen px-4 md:px-6 lg:px-8">
			<div className="absolute inset-0 w-full h-screen z-0">
				<Particles
					particleColors={['#0AC4BF', '#07918D', '#055E5C']} // Tons que combinam com seu tema
					particleCount={200}
					particleSpread={10}
					speed={0.1} // Mais lento para um efeito mais suave
					particleBaseSize={200}
					moveParticlesOnHover={true} // Desativado para não distrair
					alphaParticles={true}
					disableRotation={true}
				/>
			</div>

			<div className="relative z-10">
				<h1 className="font-Poppins font-bold text-base text-[#F3F4F6] md:text-4xl lg:text-3xl text-center responsive-padding py-24">
					Utilizo as tecnologias de forma cirúrgica, pois entendo que cada
					produto possui características únicas. apresento as linguagens e
					frameworks no qual trabalho e possuo expertise.
				</h1>

				<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
					{icons.map(({ Icon, imgSrc, name, colorHover }, index) => (
						<div
							key={name}
							className="relative flex flex-col items-center cursor-pointer group"
						>
							<div className="absolute top-0 w-2/3 h-[1px] bg-[#4e4e4e] transition-all duration-700 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#0AC4BF] group-hover:via-[#07918D] group-hover:to-[#055E5C] group-hover:h-[4px]" />

							{/* Ícone ou Imagem e Nome */}
							<div className="flex flex-col items-center group-hover:-translate-y-4 duration-700 mt-16">
								{Icon ? (
									<Icon
										size={iconSize}
										className="transition-colors duration-300"
										style={{ color: "#cdcdcd" }}
									/>
								) : (
									<img
										src={imgSrc}
										alt={name}
										className="w-34 h-34 object-contain transition-transform duration-300"
									/>
								)}
								<span
									className="mt-2 text-lg font-semibold transition-colors duration-300 mb-24"
									style={{ color: "#cdcdcd" }}
								>
									{name}
								</span>
							</div>

							<style jsx>{`
						.group:hover .transition-colors {
						  color: ${colorHover} !important;
						}
						.group:hover img {
						  transform: scale(1.1);
						}
					  `}</style>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CardsTechnology;
