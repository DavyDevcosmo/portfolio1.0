"use client";

import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import {
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiStripe,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

type Tech = {
	name: string;
	icon: IconType;
};

type Project = {
	title: string;
	description: string;
	image: string;
	githubUrl: string;
	demoUrl?: string;
	technologies?: Tech[];
};

const projects: Project[] = [
	{
		title: "PsicoPro",
		description:
			"Gestão simples e eficiente para psicólogos e clínicas. A plataforma centraliza agendamentos, serviços e planos em um único ecossistema, oferecendo uma página pública e intuitiva para que os pacientes agendem suas consultas online em poucos cliques.",
		image: "/img/bg-psicopro.png",
		githubUrl: "https://github.com/DavyDevcosmo/odontopro",
		demoUrl: "https://psicopro.vercel.app",
		technologies: [
			{ name: "Next.js 15", icon: SiNextdotjs },
			{ name: "React 19", icon: SiReact },
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "Tailwind CSS", icon: SiTailwindcss },
			{ name: "PostgreSQL", icon: SiPostgresql },
			{ name: "Prisma", icon: SiPrisma },
			{ name: "Stripe", icon: SiStripe },
		],
	},
	{
		title: "Portfólio",
		description:
			"Meu portfólio profissional e hub de projetos. Uma aplicação completa criada para demonstrar minhas habilidades em desenvolvimento front-end, arquitetura de componentes, design responsivo e microinterações.",
		image: "/img/bg-portfolio.png",
		githubUrl: "https://github.com/DavyDevcosmo/portfolio1.0",
		technologies: [
			{ name: "Next.js 15", icon: SiNextdotjs },
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "Tailwind CSS", icon: SiTailwindcss },

		],
	},
];

const Projects = () => {
	return (
		<section className="min-h-[40vh] md:min-h-[60vh] lg:min-h-screen bg-[#0A0F1C] md:pt-16 relative pb-12 md:pb-20 ">
			<div className="relative flex items-center justify-center md:justify-start h-[28vh] sm:h-[32vh] md:h-[40vh] lg:h-[55vh] overflow-hidden">
				<img
					className="w-full h-full object-cover absolute inset-0"
					src="/img/homeImg.png"
					alt=""
				/>
				<div className="absolute inset-0 bg-black/40" />

				<div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
					<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
						<h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold stroke-text rampart-one-regular">
							PORTFÓLIO
						</h1>
						<GradientText
							className="text-base sm:text-lg md:text-3xl lg:text-4xl font-light lg:font-extralight mt-2"
							colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
							animationSpeed={9}
						>
							Ùltimos Cases de Criação de Sites
						</GradientText>
					</FadeContent>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-20">
				<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-montserrat text-[var(--color-primary)] mb-8 sm:mb-10 md:mb-16 text-center">
					Projetos
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
					{projects.map((project) => (
						<article
							key={project.title}
							className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#111827] transition duration-300 hover:border-[var(--color-primary)]/50"
						>
							<div className="relative w-full overflow-hidden bg-[#0A0F1C]">
								<img
									src={project.image}
									alt={`Preview do projeto ${project.title}`}
									className="w-full h-auto object-contain block transition duration-500 group-hover:scale-105"
								/>
							</div>

							<div className="flex flex-1 flex-col p-4 sm:p-5 md:p-8">
								<h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-white mb-2 sm:mb-3">
									{project.title}
								</h3>
								<p className="text-[#D3D3D3] font-montserrat text-sm sm:text-base md:text-lg mb-5 sm:mb-6 leading-relaxed flex-1">
									{project.description}
								</p>

								<div className="mt-auto flex items-center justify-between gap-3">
									<div className="flex flex-wrap items-center gap-2 sm:gap-3">
										{project.technologies?.map((tech) => {
											const Icon = tech.icon;
											return (
												<span
													key={tech.name}
													className="relative inline-flex items-center justify-center text-white/80 transition hover:text-[var(--color-primary)] group/tech"
													aria-label={tech.name}
												>
													<Icon className="size-5 sm:size-6" />
													<span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#0A0F1C] px-2 py-1 text-xs font-montserrat text-white opacity-0 shadow-lg transition group-hover/tech:opacity-100">
														{tech.name}
													</span>
												</span>
											);
										})}
									</div>

									<div className="flex shrink-0 items-center gap-4 sm:gap-5">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={`Código do ${project.title} no GitHub`}
											className="text-white transition hover:text-[var(--color-primary)]"
										>
											<FaGithub className="size-6 sm:size-7 md:size-8" />
										</a>
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label={`Acessar o projeto ${project.title}`}
												className="text-white transition hover:text-[var(--color-primary)]"
											>
												<FiExternalLink className="size-6 sm:size-7 md:size-8" />
											</a>
										)}
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
