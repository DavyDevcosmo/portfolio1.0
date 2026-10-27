import { ChevronMark, MailIcon } from "./icons";
import { btn, tag, wrap } from "./ui";


const EMAIL = "";

const contactBtn = `${btn} rounded-brut border-3 border-ink px-[26px] py-[18px] font-display text-[18px] max-sm:p-3.5 max-sm:text-[16px]`;

const Contact = () => {
	return (
		<section
			id="contato"
			className="relative overflow-hidden border-b-3 border-ink bg-emerald lg:flex lg:min-h-[860px] lg:flex-col lg:justify-center"
		>
			<div
				className="absolute -top-10 -right-20 size-[520px] opacity-[.18] max-sm:-right-[60px] max-sm:size-[300px] [&_svg]:size-full"
				aria-hidden="true"
			>
				<ChevronMark size={520} color="var(--color-ink)" />
			</div>
			<div className={`${wrap} relative flex flex-col gap-8 py-28 max-sm:gap-[22px] max-sm:py-16`}>
				<span className={`${tag} bg-ink text-accent`}>&lt;Contato /&gt;</span>
				<h2 className="max-w-[900px] font-display text-[clamp(42px,calc(6.4*var(--vw)),96px)] leading-[.98] font-black tracking-[-0.045em] max-sm:text-[42px]">
					Tem um SaaS pra tirar do papel?
				</h2>
				<p className="max-w-[560px] text-[19px] leading-[1.6] font-semibold max-sm:text-[16px]">
					Me conta a ideia. Respondo com um caminho técnico claro: escopo, stack e próximos passos.
				</p>
				<div className="flex flex-wrap gap-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3.5">
					{EMAIL && (
						<a
							href={`mailto:${EMAIL}`}
							className={`${contactBtn} bg-ink text-paper shadow-[6px_6px_0_#fff] max-sm:col-span-full max-sm:shadow-[5px_5px_0_#fff]`}
						>
							<MailIcon />
							{EMAIL}
						</a>
					)}
					<a
						href="https://www.linkedin.com/in/davy-cosmo-2713152b5"
						target="_blank"
						rel="noopener noreferrer"
						className={`${contactBtn} bg-white text-ink shadow-[6px_6px_0_var(--color-ink)] max-sm:shadow-[5px_5px_0_var(--color-ink)]`}
					>
						LinkedIn
					</a>
					<a
						href="https://github.com/DavyDevcosmo"
						target="_blank"
						rel="noopener noreferrer"
						className={`${contactBtn} bg-white text-ink shadow-[6px_6px_0_var(--color-ink)] max-sm:shadow-[5px_5px_0_var(--color-ink)]`}
					>
						GitHub
					</a>
				</div>
				<div
					className="absolute right-[8%] -bottom-10 font-mono text-[clamp(160px,calc(24*var(--vw)),340px)] leading-none font-bold tracking-[-.06em] whitespace-nowrap opacity-[.09]"
					aria-hidden="true"
				>
					&lt;/&gt;
				</div>
			</div>
		</section>
	);
};

export default Contact;
