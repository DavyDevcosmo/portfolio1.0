import { wrap } from "./ui";

const Footer = () => {
	return (
		<div className="bg-ink text-paper">
			<div className={`${wrap} py-8 max-sm:py-7`}>
				<small className="font-mono text-sm text-silver max-sm:text-xs">
					Desenvolvido por Davy Cosmo · © {new Date().getFullYear()}
				</small>
			</div>
		</div>
	);
};

export default Footer;
