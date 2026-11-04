import { ArrowIcon } from "./icons";
import { btn, chip, h2, secHead, secWrap, tag } from "./ui";

const pullRequests = [
	{
		repo: "he4rt/heartdevs.com",
		number: 553,
		title: "feat(portal): refinamento visual da página de artigos",
		stack: "Laravel · Blade",
	},
	{
		repo: "he4rt/heartdevs.com",
		number: 551,
		title: "feat(portal): topo da home simplifica a etiqueta e destaca o card de docs",
		stack: "Laravel · Blade",
	},
	{
		repo: "he4rt/heartdevs.com",
		number: 529,
		title: "feat(portal): redesign visual do navbar",
		stack: "Laravel · Blade",
	},
	{ repo: "Carolis/typescript4noobs", number: 38, title: "docs: adiciona módulo Avançado", stack: "TypeScript" },
	{
		repo: "Carolis/typescript4noobs",
		number: 36,
		title: "docs: reescreve módulo Básico com aulas por assunto",
		stack: "TypeScript",
	},
];

const MOBILE_LIMIT = 3;

const OpenSource = () => {
	return (
		<section
			id="open-source"
			className="border-b-3 border-ink lg:flex lg:min-h-219.5 lg:flex-col lg:justify-center"
		>
			<div className={`${secWrap} lg:py-13`}>
				<div className={secHead}>
					<div className="flex max-w-180 flex-col gap-5">
						<span className={`${tag} bg-ink text-emerald`}>&lt;OpenSource /&gt;</span>
						<h2 className={`${h2} text-title leading-none`}>
							Código meu no{" "}
							<br />
							projeto dos outros.
						</h2>
						<p className="max-w-140 text-lg leading-relaxed font-medium text-copy">
							Contribuições na plataforma da He4rt Devs e no typescript4noobs, curso gratuito de
							TypeScript em português — todas revisadas e mergeadas pelos mantenedores.
						</p>
					</div>
					<a
						className={`${btn} min-h-11 rounded-brut border-3 border-ink bg-white px-5.5 py-3.5 font-display text-ink shadow-hard-5 shadow-ink max-sm:w-full`}
						href="https://github.com/search?q=author%3ADavyDevcosmo+type%3Apr&type=pullrequests"
						target="_blank"
						rel="noopener noreferrer"
					>
						Todos os PRs
						<ArrowIcon />
					</a>
				</div>

				<div className="overflow-hidden rounded-brut border-3 border-ink bg-white shadow-hard-8 shadow-ink">
					<div className="bg-ink px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-paper uppercase max-sm:px-4 max-sm:py-3 max-sm:text-xs">
						git log --author=DavyDevcosmo
					</div>
					<ol>
						{pullRequests.map((pr, i) => (
							<li
								key={`${pr.repo}-${pr.number}`}
								className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 px-5 py-3 max-sm:flex-col max-sm:items-stretch max-sm:gap-1.5 max-sm:px-4 max-sm:py-3.5 ${i > 0 ? "border-t-2 border-ink" : ""
									} ${i >= MOBILE_LIMIT ? "max-sm:hidden" : ""}`}
							>
								<div className="flex min-w-0 flex-[999_1_380px] flex-col gap-0.5 max-sm:flex-none">
									<span className="font-mono text-xs font-bold text-muted">
										{pr.repo} · #{pr.number}
									</span>
									<h3 className="font-display text-base leading-snug font-bold">{pr.title}</h3>
								</div>
								<div className="flex flex-[1_1_200px] items-center justify-end gap-2.5 max-sm:flex-none max-sm:justify-start">
									<span className={`${chip} bg-sage px-1.75 py-0.75 text-xs`}>{pr.stack}</span>
									<a
										href={`https://github.com/${pr.repo}/pull/${pr.number}`}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Abrir PR #${pr.number} no GitHub`}
										className={`${btn} size-11 flex-none rounded-lg border-2 border-ink bg-emerald p-0 text-ink shadow-hard-3 shadow-ink`}
									>
										<ArrowIcon size={16} />
									</a>
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
};

export default OpenSource;
