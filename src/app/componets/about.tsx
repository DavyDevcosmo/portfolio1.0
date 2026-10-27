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
		text: "Membro da He4rt Devs, contribuindo com o site e com quem está começando.",
		inverse: true,
	},
];

const About = () => {
	return (
		<section
			id="sobre"
			className="border-b-3 border-ink lg:flex lg:min-h-[735px] lg:flex-col lg:justify-center"
		>
			<div className={`${secWrap} lg:py-20`}>
				<div className="grid grid-cols-2 items-start gap-14 max-md:grid-cols-1">
					<div className="flex flex-col gap-6">
						<h2 className={`${h2} text-[clamp(34px,calc(4.2*var(--vw)),56px)] leading-[1.04]`}>
							A cada tela, uma nova chance de{" "}
							<span className="box-decoration-clone bg-accent px-[.12em]">encantar</span> o usuário.
						</h2>
						<p className="max-w-[560px] text-[18px] leading-[1.7] font-medium max-sm:text-[16px]">
							Me chamo Davy e sou desenvolvedor full-stack freelancer. Comecei no front-end com
							React e hoje construo SaaS completos: autenticação, pagamentos, banco de dados e a
							interface que o cliente vê. Estou cursando Ciência da Computação e tenho paixão por
							experiência do usuário e acessibilidade.
						</p>
						<p className="max-w-[560px] text-[18px] leading-[1.7] font-medium max-sm:text-[16px]">
							Também participo da comunidade <strong>He4rt Devs</strong>, onde aprendo e contribuo
							com quem está construindo junto.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-[22px] pb-7 max-sm:grid-cols-1 max-sm:gap-[18px] max-sm:pb-0">
						{skills.map((skill, i) => (
							<div
								key={skill.title}
								className={`${card} flex flex-col gap-3 rounded-brut border-3 border-ink p-[26px] max-sm:p-5 ${
									i % 2 === 1 ? "translate-y-7 max-sm:translate-y-0" : ""
								} ${
									skill.inverse
										? "bg-ink text-paper shadow-[6px_6px_0_var(--color-emerald)] max-sm:shadow-[5px_5px_0_var(--color-emerald)]"
										: "bg-white shadow-[6px_6px_0_var(--color-ink)] max-sm:shadow-[5px_5px_0_var(--color-ink)]"
								}`}
							>
								<h3 className="font-display text-[22px] font-extrabold">{skill.title}</h3>
								<p className="text-[15px] leading-[1.55] font-medium">{skill.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
