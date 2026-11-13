import { ChevronMark } from "./icons";
import NewTab from "./newTab";
import TextType from "./textType";
import { CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, btn, tag, wrap } from "./ui";

// Sombra verde para aparecer no fundo escuro (o hover herda a cor).
const contactBtn = `${btn} rounded-brut border-3 border-ink bg-white px-6.5 py-4.5 font-display text-lg text-ink shadow-hard-6 shadow-emerald max-sm:p-3.5 max-sm:text-base max-sm:shadow-hard-5`;


const Contact = () => {
	return (
		<section id="contato" className="relative overflow-hidden border-b border-paper/15 bg-ink text-paper">
			<div
				className="absolute -top-10 -right-20 size-115 opacity-12 max-sm:-right-15 max-sm:size-65 [&_svg]:size-full"
				aria-hidden="true"
			>
				<ChevronMark size={460} color="var(--color-emerald)" />
			</div>
			<div className={`${wrap} relative flex flex-col gap-10 py-20 max-sm:gap-5 max-sm:py-14`}>
				<span className={`${tag} bg-emerald text-ink`}>&lt;Contato /&gt;</span>
				<h2 className="font-display text-contact font-black tracking-tight max-sm:text-4xl">
					<TextType text="Vamos construir algo?" cursorClassName="bg-emerald" />
				</h2>
				<p className="-mt-4 max-w-140 text-xl leading-relaxed font-medium text-paper/85 max-sm:-mt-1 max-sm:text-lg">
					Tem uma vaga ou um projeto? Me chama.
				</p>
				<p className="font-display text-email leading-tight font-extrabold tracking-tight max-sm:text-email-sm">
					<a
						href={`mailto:${EMAIL}?subject=${encodeURIComponent("Contato via portfólio")}`}
						className="inline-block border-b-4 border-emerald pb-2 transition-colors hover:text-emerald motion-reduce:transition-none"
					>
						{EMAIL}
					</a>
				</p>

				<div className="flex flex-wrap gap-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3.5">
					<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={contactBtn}>
						LinkedIn
						<NewTab />
					</a>
					<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={contactBtn}>
						GitHub
						<NewTab />
					</a>
					<a href={CV_URL} className={`${contactBtn} max-sm:col-span-2`}>
						Baixar CV
						<span className="sr-only"> em PDF</span>
					</a>
				</div>
				<div
					className="absolute right-[8%] -bottom-10 font-mono text-deco leading-none font-bold tracking-tighter whitespace-nowrap text-emerald opacity-8"
					aria-hidden="true"
				>
					&lt;/&gt;
				</div>
			</div>
		</section>
	);
};

export default Contact;
