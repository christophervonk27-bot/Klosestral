globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_OMT4BR2f.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Seite nicht gefunden | kloseup.eu",
		"description": "Die gesuchte Seite existiert nicht. Bitte prüfen Sie die URL oder kehren Sie zur Startseite zurück.",
		"noindex": true,
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ibpinaeu": true })}${maybeRenderHead($$result)}<main id="top" data-astro-cid-ibpinaeu><section class="legal-hero" data-astro-cid-ibpinaeu><div class="wrap" data-astro-cid-ibpinaeu><p class="eyebrow" data-astro-cid-ibpinaeu>404</p><h1 data-astro-cid-ibpinaeu>Seite nicht gefunden.</h1><p data-astro-cid-ibpinaeu>Die von Ihnen gesuchte Seite existiert nicht. Möglicherweise wurde sie verschoben oder gelöscht.</p><a href="/" class="btn" style="margin-top: 20px; display: inline-flex; align-items: center; gap: 10px;" data-astro-cid-ibpinaeu><span class="btn-text" data-astro-cid-ibpinaeu>Zur Startseite</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-ibpinaeu>→</span></a></div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ibpinaeu": true })}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/404.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
