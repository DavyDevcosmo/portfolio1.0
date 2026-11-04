import Image from "next/image";
import { ArrowIcon } from "./icons";
import { btn, card, chip, h2, secHead, secWrap, tag } from "./ui";

type Project = {
	title: string;
	kind: string;
	description: string;
	image: string;
	alt: string;
	demoUrl: string;
	githubUrl?: string;
	technologies: string[];
};

const projects: Project[] = [
	{
		title: "PsicoPro",
		kind: "SaaS · 01",
		description:
			"Gestão simples e eficiente para psicólogos e clínicas. Centraliza agendamentos, serviços e planos, com uma página pública para o paciente agendar a consulta online em poucos cliques.",
		image: "/img/psicopro-preview.jpg",
		alt: "Painel de agendamentos do PsicoPro com versão mobile da página pública",
		demoUrl: "https://psicopro.vercel.app",
		githubUrl: "https://github.com/DavyDevcosmo/odontopro",
		technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "PostgreSQL", "Prisma", "Stripe"],
	},
	{
		title: "Portfólio",
		kind: "Portfólio · 02",
		description:
			"Meu portfólio pessoal: apresenta quem eu sou, minhas ferramentas e os projetos que construí, com uma interface neo-brutalista pensada para UX e acessibilidade.",
		image: "/img/portfolio-preview.png",
		alt: "Topo do portfólio de Davy Cosmo com o título Sua ideia, funcionando na web e a foto do Davy",
		demoUrl: "https://www.davycosmo.com",
		technologies: ["Next.js", "Tailwind", "Vercel"],
	},
];

const actionBtn = `${btn} min-h-11 rounded-brut border-3 border-ink px-4.5 py-3 font-display text-ink shadow-hard-4 shadow-ink max-sm:flex-1`;

const Projects = () => {
	return (
		<section
			id="projetos"
			className="border-b-3 border-ink bg-ink text-paper"
		>
			<div
				className={`${secWrap} lg:py-20`}
			>
				<div className={secHead}>
					<div className="flex max-w-180 flex-col gap-5">
						<span className={`${tag} bg-accent text-ink`}>&lt;Projetos /&gt;</span>
						<h2
							className={`${h2} text-title leading-none`}
						>
							Cases que saíram{" "}
							<br />
							do papel.
						</h2>
					</div>
					<a
						className={`${btn} min-h-11 rounded-brut border-3 border-paper bg-paper px-5.5 py-3.5 font-display text-ink shadow-hard-5 shadow-accent max-sm:w-full`}
						href="https://github.com/DavyDevcosmo"
						target="_blank"
						rel="noopener noreferrer"
					>
						Mais no GitHub
						<ArrowIcon />
					</a>
				</div>

				<div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-10">
					{projects.map((project) => (
						<article
							key={project.title}
							className={`${card} flex flex-col overflow-hidden rounded-brut border-3 border-paper bg-paper text-ink shadow-hard-10 shadow-accent max-sm:shadow-hard-6`}
						>
							{/* A imagem é o destaque do card e aparece inteira: os prints são 16:9, como o espaço. */}
							<div className="relative aspect-video border-b-3 border-ink bg-white">
								<Image
									src={project.image}
									alt={project.alt}
									fill
									sizes="(max-width: 900px) 100vw, 600px"
									className="object-cover"
								/>
							</div>
							<div className="flex flex-auto flex-col gap-4.5 p-8 max-sm:gap-3.5 max-sm:p-5">
								<div className="flex items-center justify-between gap-3">
									<span className="font-mono text-sm font-bold tracking-wider uppercase">{project.kind}</span>
									<span className="flex-none rounded-full border-2 border-ink bg-emerald px-2.5 py-1 font-mono text-xs font-bold">
										No ar
									</span>
								</div>
								<h3 className="font-display text-5xl leading-none font-black tracking-tight max-sm:text-3xl">
									{project.title}
								</h3>
								<p className="text-base leading-relaxed font-medium">
									{project.description}
								</p>
								<ul className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<li key={tech} className={`${chip} bg-white px-2 py-1 text-xs`}>
											{tech}
										</li>
									))}
								</ul>
								<div className="mt-auto flex flex-wrap gap-3 pt-2">
									<a
										className={`${actionBtn} bg-accent`}
										href={project.demoUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										Ver online
										<ArrowIcon size={16} />
									</a>
									{project.githubUrl && (
										<a
											className={`${actionBtn} bg-white`}
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
										>
											Código
										</a>
									)}
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
