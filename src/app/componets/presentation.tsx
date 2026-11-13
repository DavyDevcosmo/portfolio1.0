import Image from "next/image";
import { DownloadIcon, GithubIcon, LinkedinIcon } from "./icons";
import { NEW_TAB } from "./newTab";
import { CV_URL, GITHUB_URL, LINKEDIN_URL, btn, dots, wrap } from "./ui";

// Mesmo `sizes` nas duas versões da foto: o pré-carregamento vira um só arquivo.
// Larguras reais da foto: ~320px no celular (moldura max-w-77.5), ~480px até o lg (1100px), ~640px no desktop.
const HERO_SIZES = "(max-width: 640px) 330px, (max-width: 1099px) 480px, 640px";

const Presentation = () => {
	return (
		<section
			id="inicio"
			className="@container relative overflow-hidden border-b-3 border-ink lg:flex lg:min-h-[calc(var(--h-full)_-_134px)] lg:flex-col lg:justify-center"
		>

			<div className="hidden lg:block" aria-hidden="true">
				<div className="absolute top-8 right-10 bottom-0 left-[57%] border-l-[1.5px] border-ink/35 bg-panel" />
				<div className="absolute inset-x-10 top-0 bottom-0 border-[1.5px] border-b-0 border-ink/35">
					<div className={`${dots} top-152 left-3.5`} />
				</div>
				<div className={`${dots} top-24 right-16`} />
				<div className="absolute top-[54.4%] bottom-0 left-[58.8%] w-[4.1%] animate-print bg-ink [animation-delay:200ms] motion-reduce:animate-none" />
				<div className="absolute top-[45.6%] left-[76%] h-[23.7%] w-[15.3%] animate-print bg-emerald [animation-delay:330ms] motion-reduce:animate-none" />
				<div className="absolute top-[69.3%] left-[78.6%] h-[18.8%] w-[14.7%] animate-print bg-ink [animation-delay:460ms] motion-reduce:animate-none" />
				<Image
					className="absolute -bottom-[8%] left-[72.5%] h-[98%] w-auto max-w-none -translate-x-1/2"
					src="/img/davy-hero.png"
					alt=""
					width={880}
					height={1186}
					priority
					sizes={HERO_SIZES}
				/>
			</div>

			<div
				className={`${wrap} relative z-1 pt-22 max-sm:pt-14 tab:max-lg:grid tab:max-lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] tab:max-lg:items-stretch tab:max-lg:gap-8 tab:max-lg:pt-14 lg:pt-[clamp(32px,calc(6*var(--vh)),88px)]`}
			>
				<div className="flex max-w-160 flex-col items-start gap-7 pb-24 max-tab:pb-10 max-sm:gap-5 max-sm:pb-8 tab:max-lg:justify-center tab:max-lg:pb-14 lg:gap-[clamp(16px,calc(3*var(--vh)),28px)] lg:pb-[clamp(32px,calc(7*var(--vh)),96px)]">
					<span className="animate-stamp bg-emerald px-2.5 py-1 [animation-delay:560ms] motion-reduce:animate-none font-mono text-sm font-bold tracking-wider uppercase">
						&lt; ABERTO A VAGAS E FREELAS /&gt;
					</span>

					<h1 className="relative font-poster text-hero font-black uppercase max-sm:text-hero-sm tab:max-lg:text-hero-md lg:text-hero-lg lg:before:absolute lg:before:inset-y-0 lg:before:left-[calc(14px_-_max(0px,(100cqw_-_1240px)/2))] lg:before:w-2 lg:before:bg-ink lg:before:content-['']">
						<span className="block animate-line whitespace-nowrap motion-reduce:animate-none">Sua ideia,</span>{" "}
						<span className="block animate-line whitespace-nowrap [animation-delay:90ms] motion-reduce:animate-none">funcionando na</span>{" "}
						<span className="block animate-line whitespace-nowrap [animation-delay:180ms] motion-reduce:animate-none">web</span>
					</h1>
					<p className="max-w-110 text-lg leading-relaxed font-medium text-copy max-sm:mb-3 max-sm:text-lg">
						Eu sou Davy, desenvolvedor full-stack. Construo sistemas web completos (login,
						pagamentos, banco de dados e interface), como o PsicoPro, que já está no ar.
					</p>
					<div className="flex flex-wrap items-center gap-4">
						{/* Para quem recruta, o CV é a ação principal. */}
						<a
							href={CV_URL}
							className={`${btn} h-13.5 rounded-brut border-3 border-ink bg-emerald px-5.5 font-display text-lg text-ink shadow-hard-4 shadow-ink`}
						>
							<DownloadIcon />
							<span className="sr-only">Baixar </span>
							CV
							<span className="sr-only"> em PDF</span>
						</a>
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`LinkedIn${NEW_TAB}`}
							className={`${btn} size-13.5 rounded-brut border-3 border-ink bg-ink p-0 text-white shadow-hard-5 shadow-accent`}
						>
							<LinkedinIcon />
						</a>
						<a
							href={GITHUB_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`GitHub${NEW_TAB}`}
							className={`${btn} size-13.5 rounded-brut border-3 border-ink bg-white p-0 text-ink shadow-hard-4 shadow-ink`}
						>
							<GithubIcon />
						</a>
					</div>
				</div>

				<div
					className="relative mx-auto aspect-579/794 max-w-115 overflow-hidden max-sm:max-w-77.5 border-[1.5px] border-b-0 border-ink/35 bg-panel tab:max-lg:m-0 tab:max-lg:w-full tab:max-lg:max-w-none tab:max-lg:self-end lg:hidden"
					aria-hidden="true"
				>
					<div className={`${dots} top-[8%] right-[4%] max-sm:h-16 max-sm:w-8`} />
					<div className="absolute top-[52.5%] bottom-0 left-[4.5%] w-[10.2%] animate-print bg-ink [animation-delay:200ms] motion-reduce:animate-none" />
					<div className="absolute top-[43.4%] left-[47.3%] h-[24.7%] w-[38%] animate-print bg-emerald [animation-delay:330ms] motion-reduce:animate-none" />
					<div className="absolute top-[68.1%] left-[53.8%] h-[19.6%] w-[36.6%] animate-print bg-ink [animation-delay:460ms] motion-reduce:animate-none" />
					<Image
						className="absolute -bottom-[8.3%] left-[38.5%] h-[102%] w-auto max-w-none -translate-x-1/2"
						src="/img/davy-hero.png"
						alt=""
						width={880}
						height={1186}
						priority
						sizes={HERO_SIZES}
					/>
				</div>
			</div>
		</section>
	);
};

export default Presentation;
