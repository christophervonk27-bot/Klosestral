globalThis.process ??= {};
globalThis.process.env ??= {};
import { C as createAstro, d as maybeRenderHead, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
//#region src/components/PageHero.astro
createAstro("https://kloseup.eu");
var $$PageHero = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PageHero;
	const { eyebrow, titel, titelEm, lede, kompakt = false } = Astro.props;
	const hasAside = Astro.slots.has("aside");
	const hasDefault = Astro.slots.has("default");
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(kompakt ? "hero hero--kompakt" : "hero", "class")} data-astro-cid-75ysl5lo><div${addAttribute(["wrap", [hasAside ? "hero-grid" : ""]], "class:list")} data-astro-cid-75ysl5lo><div class="hero-content" data-astro-cid-75ysl5lo><p class="eyebrow" data-astro-cid-75ysl5lo>${eyebrow}</p><h1 data-astro-cid-75ysl5lo>${titel}${titelEm && renderTemplate`<em data-astro-cid-75ysl5lo>${titelEm}</em>`}</h1>${hasDefault && renderTemplate`${renderSlot($$result, $$slots["default"])}`}</div>${hasAside && renderTemplate`<div class="hero-aside" data-astro-cid-75ysl5lo>${renderSlot($$result, $$slots["aside"])}</div>`}${lede && renderTemplate`<p class="lede" data-astro-cid-75ysl5lo>${lede}</p>`}</div></section>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/PageHero.astro", void 0);
//#endregion
export { $$PageHero as t };
