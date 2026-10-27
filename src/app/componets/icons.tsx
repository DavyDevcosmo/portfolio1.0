// Ícones de traço usados no design (estilo Lucide).
type IconProps = { size?: number };

const stroke = (size: number, width: number) => ({
	width: size,
	height: size,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: width,
	strokeLinecap: "round" as const,
	strokeLinejoin: "round" as const,
	"aria-hidden": true,
});

export const ArrowIcon = ({ size = 18 }: IconProps) => (
	<svg {...stroke(size, 2.5)}>
		<path d="M7 17 17 7M7 7h10v10" />
	</svg>
);

export const LinkedinIcon = ({ size = 20 }: IconProps) => (
	<svg {...stroke(size, 2.2)}>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect width="4" height="12" x="2" y="9" />
		<circle cx="4" cy="4" r="2" />
	</svg>
);

export const GithubIcon = ({ size = 20 }: IconProps) => (
	<svg {...stroke(size, 2.2)}>
		<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
		<path d="M9 18c-4.51 2-5-2-7-2" />
	</svg>
);

export const ArrowUpIcon = ({ size = 22 }: IconProps) => (
	<svg {...stroke(size, 2.8)}>
		<path d="M12 19V5M5 12l7-7 7 7" />
	</svg>
);

export const MailIcon = ({ size = 22 }: IconProps) => (
	<svg {...stroke(size, 2.2)}>
		<rect width="20" height="16" x="2" y="4" rx="2" />
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
	</svg>
);

export const MergeIcon = ({ size = 12 }: IconProps) => (
	<svg {...stroke(size, 2.5)}>
		<circle cx="18" cy="18" r="3" />
		<circle cx="6" cy="6" r="3" />
		<path d="M6 21V9a9 9 0 0 0 9 9" />
	</svg>
);

export const MenuIcon = ({ open }: { open: boolean }) => (
	<svg {...stroke(20, 2.6)}>
		<path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
	</svg>
);

// Chevron do logo.
export const ChevronMark = ({ size = 28, color = "var(--color-accent)" }: IconProps & { color?: string }) => (
	<svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
		<path d="M31 4 L5 20 L31 36 L31 26.5 L19 20 L31 13.5 Z" fill={color} />
	</svg>
);
