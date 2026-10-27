import { Fragment } from "react";
import { tools } from "./toolIcons";


const Tools = () => {
	return (
		<div
			id="stack"
			className="group overflow-hidden border-b-3 border-emerald bg-ink max-sm:hidden motion-reduce:overflow-x-auto"
		>
			<div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
				{[0, 1].map((copy) => (
					<ul
						key={copy}
						aria-label={copy === 0 ? "Ferramentas que uso" : undefined}
						aria-hidden={copy === 1 ? true : undefined}
						className="flex items-center gap-14 py-6 pr-14"
					>
						{tools.map((tool, i) => (
							<Fragment key={tool.name}>
								{tool.group === "test" && tools[i - 1]?.group === "build" && (
									<li className="h-12 w-[3px] bg-paper" aria-hidden="true" />
								)}
								<li>
									<svg
										role="img"
										aria-label={tool.name}
										viewBox={tool.viewBox}
										fill={tool.fill}
										className="block size-10"
									>
										<title>{tool.name}</title>
										{tool.paths.map((path) => (
											<path key={path.d.slice(0, 24)} d={path.d} fill={path.fill} />
										))}
									</svg>
								</li>
							</Fragment>
						))}
					</ul>
				))}
			</div>
		</div>
	);
};

export default Tools;
