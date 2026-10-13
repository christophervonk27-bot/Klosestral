globalThis.process ??= {};
globalThis.process.env ??= {};
import { C as createAstro, d as maybeRenderHead, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
//#region src/components/CtaBox.astro
createAstro("https://kloseup.eu");
var $$CtaBox = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$CtaBox;
	const { eyebrow, titel, text } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="wrap kontakt-box" data-astro-cid-ighxxb4h><div class="kontakt-text" data-astro-cid-ighxxb4h>${eyebrow && renderTemplate`<p class="eyebrow" data-astro-cid-ighxxb4h>${eyebrow}</p>`}<h2 data-astro-cid-ighxxb4h>${titel}</h2><p data-astro-cid-ighxxb4h>${text}</p></div><div class="kontakt-actions" data-astro-cid-ighxxb4h><a href="mailto:christopher@kloseup.eu" class="btn" data-astro-cid-ighxxb4h><span class="btn-text" data-astro-cid-ighxxb4h>Per Mail</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-ighxxb4h>→</span></a><a href="https://wa.me/436603612354" class="btn" data-astro-cid-ighxxb4h><span class="btn-text" data-astro-cid-ighxxb4h>Per WhatsApp</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-ighxxb4h>→</span></a></div></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/CtaBox.astro", void 0);
//#endregion
export { $$CtaBox as t };
