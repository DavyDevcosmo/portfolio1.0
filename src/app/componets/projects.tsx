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
		image: "/img/bg-portfolio.png",
		alt: "Tela do portfólio de Davy Cosmo",
		demoUrl: "https://www.davycosmo.com",
		technologies: ["Next.js", "Tailwind", "Vercel"],
	},
];

const actionBtn = `${btn} min-h-11 rounded-brut border-3 border-ink px-[18px] py-3 font-display text-ink shadow-[4px_4px_0_var(--color-ink)] max-sm:flex-1`;

const Projects = () => {
	return (
		<section
			id="projetos"
			className="border-b-3 border-ink bg-ink text-paper lg:flex lg:min-h-[calc(var(--h-full)_-_74px)] lg:flex-col lg:justify-center"
		>
			<div
				className={`${secWrap} lg:gap-[clamp(20px,calc(3.4*var(--vh)),48px)] lg:py-[clamp(32px,calc(5*var(--vh)),80px)]`}
			>
				<div className={secHead}>
					<div className="flex max-w-[720px] flex-col gap-5 lg:gap-[clamp(10px,calc(1.8*var(--vh)),20px)]">
						<span className={`${tag} bg-accent text-ink`}>&lt;Projetos /&gt;</span>
						<h2
							className={`${h2} text-[clamp(34px,calc(4.6*var(--vw)),64px)] leading-none lg:text-[clamp(30px,min(calc(4.6*var(--vw)),calc(6.4*var(--vh))),64px)]`}
						>
							Cases que saíram{" "}
							<br className="lg:hidden" />
							do papel.
						</h2>
					</div>
					<a
						className={`${btn} min-h-11 rounded-brut border-3 border-paper bg-paper px-[22px] py-3.5 font-display text-ink shadow-[5px_5px_0_var(--color-accent)] max-sm:w-full`}
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
							className={`${card} flex flex-col overflow-hidden rounded-brut border-3 border-paper bg-paper text-ink shadow-[10px_10px_0_var(--color-accent)] max-sm:shadow-[6px_6px_0_var(--color-accent)]`}
						>
							<div className="relative aspect-[16/10] border-b-3 border-ink bg-white lg:aspect-auto lg:h-[clamp(110px,calc(16*var(--vh)),260px)]">
								<Image
									src={project.image}
									alt={project.alt}
									fill
									sizes="(max-width: 900px) 100vw, 600px"
									className="object-cover"
								/>
							</div>
							<div className="flex flex-auto flex-col gap-[18px] p-8 max-sm:gap-3.5 max-sm:p-5 lg:gap-[clamp(10px,calc(1.6*var(--vh)),18px)] lg:p-[clamp(18px,calc(2.8*var(--vh)),32px)]">
								<div className="flex items-center justify-between gap-3">
									<span className="font-mono text-[13px] font-bold tracking-[.06em] uppercase">
										{project.kind}
									</span>
									<span className="flex-none rounded-full border-2 border-ink bg-emerald px-2.5 py-1 font-mono text-[12px] font-bold">
										No ar
									</span>
								</div>
								<h3 className="font-display text-[44px] leading-none font-black tracking-[-0.035em] max-sm:text-[32px] lg:text-[clamp(28px,calc(4.6*var(--vh)),44px)]">
									{project.title}
								</h3>
								<p className="text-[16px] leading-[1.65] font-medium max-sm:text-[15px] lg:text-[15px] lg:leading-[1.55]">
									{project.description}
								</p>
								<ul className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<li key={tech} className={`${chip} bg-white px-2 py-1 text-[12px]`}>
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
