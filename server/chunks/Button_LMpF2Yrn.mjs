globalThis.process ??= {};
globalThis.process.env ??= {};
import { C as createAstro, d as maybeRenderHead, p as addAttribute, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
//#region src/components/Button.astro
createAstro("https://klosestral.pages.dev");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const { variant = "primary", href, label, showArrow = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(variant === "ghost" ? "btn btn-ghost" : "btn", "class")}${addAttribute(href, "href")}><span class="btn-text">${label}</span>${showArrow && renderTemplate`<span class="btn-arrow" aria-hidden="true">→</span>`}</a>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Button.astro", void 0);
//#endregion
export { $$Button as t };
