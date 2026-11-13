"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

const SHOW_AFTER = 400;

const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const goTop = () => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
	};

	return (
		<button
			type="button"
			onClick={goTop}
			aria-label="Voltar ao topo"
			tabIndex={visible ? 0 : -1}
			className={`fixed right-6 bottom-6 z-40 inline-flex size-13 cursor-pointer items-center justify-center rounded-brut border-3 border-ink bg-accent p-0 text-ink shadow-hard-4 shadow-ink transition-all duration-200 max-sm:right-4 max-sm:bottom-4 max-sm:size-12 motion-reduce:transition-none ${visible
					?
					"visible opacity-100 [transform:none] hover:[transform:translate(-2px,-2px)] hover:shadow-hard-7 active:[transform:translate(3px,3px)] active:shadow-hard-1"
					: "invisible opacity-0 [transform:translateY(12px)]"
				}`}
		>
			<ArrowUpIcon />
		</button>
	);
};

export default BackToTop;
