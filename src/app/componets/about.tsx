import { card, h2, secWrap } from "./ui";

const skills = [
	{ title: "Front-end", text: "React, Next.js, TypeScript, Tailwind CSS, Zustand, Zod" },
	{
		title: "Back-end & dados",
		text: "Next.js (Server Actions e Route Handlers), TypeScript, Prisma, Neon (Postgres), Zod, Better Auth, Stripe Connect",
	},
	{ title: "Testes", text: "Vitest, React Testing Library, Playwright, Lighthouse CI" },
	{
		title: "Comunidade",
		text: "Contribuidor open source na He4rt Devs: UI/UX, correção de bugs, documentação e code review.",
		inverse: true,
	},
];

const About = () => {
	return (
		<section
			id="sobre"
			className="border-b-3 border-ink lg:flex lg:min-h-183.75 lg:flex-col lg:justify-center"
		>
			<div className={`${secWrap} lg:py-20`}>
				<div className="grid grid-cols-2 items-start gap-14 max-md:grid-cols-1">
					<div className="flex flex-col gap-6">
						<h2 className={`${h2} text-title-about`}>
							A cada tela, uma nova chance de{" "}
							<span className="box-decoration-clone bg-accent px-[.12em]">encantar</span> o usuário.
						</h2>
						<p className="max-w-140 text-lg leading-relaxed font-medium max-sm:text-base">
							Me chamo Davy e sou desenvolvedor full-stack freelancer. Comecei no front-end com
							React e hoje construo SaaS completos: autenticação, pagamentos, banco de dados e a
							interface. Estou cursando Ciência da Computação e tenho paixão por
							experiência do usuário e acessibilidade.
						</p>
						<p className="max-w-140 text-lg leading-relaxed font-medium max-sm:text-base">
							Também participo da comunidade <strong>He4rt Devs</strong>, onde aprendo e contribuo
							com quem está construindo junto.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-5.5 pb-7 max-sm:grid-cols-1 max-sm:gap-4.5 max-sm:pb-0">
						{skills.map((skill, i) => (
							<div
								key={skill.title}
								className={`${card} flex flex-col gap-3 rounded-brut border-3 border-ink p-6.5 max-sm:p-5 ${
									i % 2 === 1 ? "translate-y-7 max-sm:translate-y-0" : ""
								} ${
									skill.inverse
										? "bg-ink text-paper shadow-hard-6 shadow-emerald max-sm:shadow-hard-5"
										: "bg-white shadow-hard-6 shadow-ink max-sm:shadow-hard-5"
								}`}
							>
								<h3 className="font-display text-2xl font-extrabold">{skill.title}</h3>
								<p className="text-base leading-normal font-medium">{skill.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
