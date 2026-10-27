import { ArrowIcon, MergeIcon } from "./icons";
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
			className="border-b-3 border-ink lg:flex lg:min-h-[878px] lg:flex-col lg:justify-center"
		>
			<div className={`${secWrap} lg:py-[70px]`}>
				<div className={secHead}>
					<div className="flex max-w-[720px] flex-col gap-5">
						<span className={`${tag} bg-ink text-emerald`}>&lt;OpenSource /&gt;</span>
						<h2 className={`${h2} text-[clamp(34px,calc(4.6*var(--vw)),64px)] leading-none`}>
							Código meu no{" "}
							<br />
							projeto dos outros.
						</h2>
						<p className="max-w-[560px] text-[17px] leading-[1.65] font-medium text-copy">
							Contribuições na plataforma da He4rt Devs e no typescript4noobs, curso gratuito de
							TypeScript em português — todas revisadas e mergeadas pelos mantenedores.
						</p>
					</div>
					<a
						className={`${btn} min-h-11 rounded-brut border-3 border-ink bg-white px-[22px] py-3.5 font-display text-ink shadow-[5px_5px_0_var(--color-ink)] max-sm:w-full`}
						href="https://github.com/search?q=author%3ADavyDevcosmo+type%3Apr&type=pullrequests"
						target="_blank"
						rel="noopener noreferrer"
					>
						Todos os PRs
						<ArrowIcon />
					</a>
				</div>

				<div className="overflow-hidden rounded-brut border-3 border-ink bg-white shadow-[8px_8px_0_var(--color-ink)]">
					<div className="flex flex-wrap justify-between gap-3 bg-ink px-6 py-3.5 font-mono text-[13px] font-bold tracking-[.06em] text-paper uppercase max-sm:px-4 max-sm:py-3 max-sm:text-[11px]">
						<span>git log --author=DavyDevcosmo</span>
						<span className="text-emerald">
							{pullRequests.length} PRs · {pullRequests.length} merged
						</span>
					</div>
					<ol>
						{pullRequests.map((pr, i) => (
							<li
								key={`${pr.repo}-${pr.number}`}
								className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 px-5 py-3 max-sm:flex-col max-sm:items-stretch max-sm:gap-1.5 max-sm:px-4 max-sm:py-3.5 ${i > 0 ? "border-t-2 border-ink" : ""
									} ${i >= MOBILE_LIMIT ? "max-sm:hidden" : ""}`}
							>
								<span className="inline-flex w-[104px] flex-none items-center justify-center gap-1.5 rounded-full bg-ink py-[5px] font-mono text-[11px] font-bold text-emerald uppercase max-sm:self-start">
									<MergeIcon />
									Merged
								</span>
								<div className="flex min-w-0 flex-[999_1_380px] flex-col gap-0.5 max-sm:flex-none">
									<span className="font-mono text-[12px] font-bold text-muted">
										{pr.repo} · #{pr.number}
									</span>
									<h3 className="font-display text-[16px] leading-[1.3] font-bold">{pr.title}</h3>
								</div>
								<div className="flex flex-[1_1_200px] items-center justify-end gap-2.5 max-sm:flex-none max-sm:justify-start">
									<span className={`${chip} bg-sage px-[7px] py-[3px] text-[11px]`}>{pr.stack}</span>
									<span className="font-mono text-[12px] font-bold whitespace-nowrap text-muted">set 2026</span>
									<a
										href={`https://github.com/${pr.repo}/pull/${pr.number}`}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={`Abrir PR #${pr.number} no GitHub`}
										className={`${btn} size-11 flex-none rounded-[10px] border-2 border-ink bg-emerald p-0 text-ink shadow-[3px_3px_0_var(--color-ink)]`}
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
