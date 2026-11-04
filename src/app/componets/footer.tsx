import { ChevronMark } from "./icons";
import { wrap } from "./ui";

const Footer = () => {
	return (
		<div className="bg-ink text-paper">
			<div
				className={`${wrap} flex flex-wrap items-center justify-between gap-4 py-8 max-sm:flex-col max-sm:items-start max-sm:gap-2.5 max-sm:py-7`}
			>
				<span className="flex items-center gap-3 font-display text-lg font-extrabold tracking-tight">
					<ChevronMark />
					DAVY COSMO
				</span>
				<small className="font-mono text-sm text-silver max-sm:text-xs">
					Desenvolvido por Davy Cosmo · © {new Date().getFullYear()}
				</small>
			</div>
		</div>
	);
};

export default Footer;
