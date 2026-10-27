// Classes compartilhadas. Cada constante só define o que nunca muda entre usos
// (cor, borda, raio, padding e sombra ficam em cada componente para não haver conflito de utilitários).

// Afunda e levanta como botão neo-brutalista.
export const press =
	"transition-[transform,box-shadow] duration-[120ms] ease-in-out hover:[transform:translate(-2px,-2px)] hover:shadow-[7px_7px_0_var(--color-ink)] active:[transform:translate(3px,3px)] active:shadow-[1px_1px_0_var(--color-ink)] motion-reduce:transition-none motion-reduce:hover:[transform:none]";

export const btn = `inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-bold cursor-pointer [&_svg]:flex-none ${press}`;

// Cards levantam e giram de leve no hover.
export const card =
	"transition-transform duration-150 hover:[transform:translate(-3px,-3px)_rotate(-.4deg)] motion-reduce:transition-none motion-reduce:hover:[transform:none]";

export const wrap = "mx-auto w-full max-w-[1240px] px-6 max-sm:px-4";

// Container interno das seções padrão (o padding vertical do desktop fica em cada seção).
export const secWrap = `${wrap} flex flex-col gap-12 py-[104px] max-sm:gap-7 max-sm:py-14`;

export const secHead = "flex flex-wrap items-end justify-between gap-6";

export const h2 = "font-display font-extrabold tracking-[-0.035em]";

export const tag = "self-start rounded-lg px-3 py-1.5 font-mono text-[15px] font-bold";

export const chip = "whitespace-nowrap rounded-md border-2 border-ink font-mono font-bold";

export const dots =
	"absolute h-[72px] w-9 bg-[radial-gradient(var(--color-muted)_1.6px,transparent_2px)] [background-size:12px_12px]";
