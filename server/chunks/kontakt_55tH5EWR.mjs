globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { b as unescapeHTML, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_nFBoCAh8.mjs";
import { t as $$ContactForm } from "./ContactForm_CtsUgkju.mjs";
//#region src/pages/kontakt.astro
var kontakt_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kontakt,
	file: () => $$file,
	url: () => $$url
});
var $$Kontakt = createComponent(($$result, $$props, $$slots) => {
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "Kostet das Erstgespräch etwas?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Nein. Das Erstgespräch ist kostenlos und unverbindlich. Wir klären gemeinsam, ob und wie ich Ihnen helfen kann. Passt es nicht, sage ich das ehrlich."
				}
			},
			{
				"@type": "Question",
				"name": "Arbeiten Sie auch außerhalb von Salzburg?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Ja. Ich arbeite remote mit Kunden in ganz Österreich und Deutschland. Vor-Ort-Termine sind im Raum Salzburg und im bayerischen Grenzgebiet möglich."
				}
			},
			{
				"@type": "Question",
				"name": "Welche Zoho-Produkte decken Sie ab?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Zoho Bigin, Zoho CRM, Zoho Analytics, Zoho Calendar, Zoho Meet, Zoho Books und Zoho Inventory. Wenn Sie ein anderes Zoho-Modul brauchen, fragen Sie einfach."
				}
			},
			{
				"@type": "Question",
				"name": "Was kostet eine Zoho-Implementierung?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Das hängt vom Umfang ab. Beratung ab 95 € pro Stunde, Projektarbeiten ab 650 €. Viele Projekte sind förderfähig. Ein finales Angebot erhalten Sie nach dem Erstgespräch."
				}
			}
		]
	};
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Kontakt – Zoho Beratung Salzburg, kostenloses Erstgespräch | kloseup.eu",
		"description": "Kostenloses Erstgespräch mit Christopher Klose, Zoho-Berater in Salzburg. Schreiben Sie mir, ich melde mich innerhalb von 24 Stunden zurück.",
		"data-astro-cid-657w5j3a": true
	}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-657w5j3a": true })}<script type="application/ld+json">${unescapeHTML(JSON.stringify(faqSchema))}<\/script>${maybeRenderHead($$result2)}<main id="top" data-astro-cid-657w5j3a><!-- Hero --><section class="hero kontakt-hero" data-astro-cid-657w5j3a><div class="wrap" data-astro-cid-657w5j3a><p class="eyebrow" data-astro-cid-657w5j3a>Kontakt</p><h1 class="kontakt-hero-h1" data-astro-cid-657w5j3a>Kostenloses Erstgespräch in Salzburg<br data-astro-cid-657w5j3a><em data-astro-cid-657w5j3a>für Ihr Zoho-Projekt.</em></h1><p class="lede" data-astro-cid-657w5j3a>Kostenloses Erstgespräch. Ich sage Ihnen ehrlich, ob und wie Zoho für Sie Sinn macht. Kein Verkaufspitch, kein Blendeffekt. Nur eine echte Einschätzung.</p></div></section><!-- Formular Section --><section id="kontakt-formular" class="kontakt-section" data-astro-cid-657w5j3a><div class="wrap" data-astro-cid-657w5j3a><div class="kontakt-section-head" data-astro-cid-657w5j3a><p class="eyebrow" data-astro-cid-657w5j3a>Schreiben Sie mir</p><h2 data-astro-cid-657w5j3a>Erzählen Sie mir, worum es geht.</h2><p class="kontakt-intro" data-astro-cid-657w5j3a>Je genauer Sie beschreiben, wobei ich Sie unterstützen kann, desto gezielter kann ich antworten. Ich melde mich innerhalb von 24 Stunden.</p></div>${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-657w5j3a": true })}</div></section><!-- Info-Strip: 3 Karten nebeneinander --><section id="kontakt-info" class="kontakt-info-strip" data-astro-cid-657w5j3a><div class="wrap" data-astro-cid-657w5j3a><div class="info-strip-grid" data-astro-cid-657w5j3a><!-- Karte 1: Direkter Draht --><div class="info-card" data-astro-cid-657w5j3a><p class="eyebrow" data-astro-cid-657w5j3a>Direkt</p><h3 class="info-card-title" data-astro-cid-657w5j3a>Lieber direkt schreiben?</h3><p class="info-card-text" data-astro-cid-657w5j3a>Wählen Sie Ihren Weg. Beide landen direkt bei mir.</p><div class="info-card-actions" data-astro-cid-657w5j3a><a href="mailto:christopher@kloseup.eu" class="btn info-card-btn" data-astro-cid-657w5j3a><span class="btn-text" data-astro-cid-657w5j3a>Per E-Mail</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-657w5j3a>→</span></a><a href="https://wa.me/436641234567" class="btn info-card-btn" data-astro-cid-657w5j3a><span class="btn-text" data-astro-cid-657w5j3a>Per WhatsApp</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-657w5j3a>→</span></a></div></div><!-- Karte 2: Wann & Wo --><div class="info-card" data-astro-cid-657w5j3a><p class="eyebrow" data-astro-cid-657w5j3a>Wann &amp; Wo</p><h3 class="info-card-title" data-astro-cid-657w5j3a>Was Sie wissen sollten</h3><ul class="info-card-list" data-astro-cid-657w5j3a><li data-astro-cid-657w5j3a><span class="info-card-label" data-astro-cid-657w5j3a>Antwortzeit</span><span class="info-card-value" data-astro-cid-657w5j3a>Innerhalb von 24 Stunden</span></li><li data-astro-cid-657w5j3a><span class="info-card-label" data-astro-cid-657w5j3a>Standort</span><span class="info-card-value" data-astro-cid-657w5j3a>Salzburg, Österreich</span></li><li data-astro-cid-657w5j3a><span class="info-card-label" data-astro-cid-657w5j3a>Einsatzgebiet</span><span class="info-card-value" data-astro-cid-657w5j3a>Salzburg &amp; bayerisches Grenzgebiet</span></li><li data-astro-cid-657w5j3a><span class="info-card-label" data-astro-cid-657w5j3a>Erstgespräch</span><span class="info-card-value" data-astro-cid-657w5j3a>Kostenlos &amp; unverbindlich</span></li></ul></div><!-- Karte 3: Förderung --><div class="info-card info-card--accent" data-astro-cid-657w5j3a><p class="eyebrow" data-astro-cid-657w5j3a>Förderung</p><h3 class="info-card-title" data-astro-cid-657w5j3a>Bis zu 50 % förderfähig</h3><p class="info-card-text" data-astro-cid-657w5j3a>Viele Beratungskosten sind über die KMU.Digital Beratungsförderung oder den Salzburger Digi-Bonus förderfähig. Ich prüfe das für Sie mit.</p><a href="#kontakt-formular" class="btn btn-ghost info-card-btn" data-astro-cid-657w5j3a><span class="btn-text" data-astro-cid-657w5j3a>Förderung prüfen</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-657w5j3a>→</span></a></div></div></div></section><!-- FAQ Section --><section id="faq" class="kontakt-faq" data-astro-cid-657w5j3a><div class="wrap" data-astro-cid-657w5j3a><div class="section-head" data-astro-cid-657w5j3a><p class="eyebrow" data-astro-cid-657w5j3a>Häufige Fragen</p><h2 data-astro-cid-657w5j3a>Bevor Sie schreiben.</h2></div><div class="faq-list" data-astro-cid-657w5j3a><details class="faq-item" data-astro-cid-657w5j3a><summary data-astro-cid-657w5j3a>Kostet das Erstgespräch etwas?</summary><div class="faq-answer" data-astro-cid-657w5j3a><p data-astro-cid-657w5j3a>Nein. Das Erstgespräch ist kostenlos und unverbindlich. Wir klären gemeinsam, ob und wie ich Ihnen helfen kann. Passt es nicht, sage ich das ehrlich.</p></div></details><details class="faq-item" data-astro-cid-657w5j3a><summary data-astro-cid-657w5j3a>Arbeiten Sie auch außerhalb von Salzburg?</summary><div class="faq-answer" data-astro-cid-657w5j3a><p data-astro-cid-657w5j3a>Ja. Ich arbeite remote mit Kunden in ganz Österreich und Deutschland. Vor-Ort-Termine sind im Raum Salzburg und im bayerischen Grenzgebiet möglich.</p></div></details><details class="faq-item" data-astro-cid-657w5j3a><summary data-astro-cid-657w5j3a>Welche Zoho-Produkte decken Sie ab?</summary><div class="faq-answer" data-astro-cid-657w5j3a><p data-astro-cid-657w5j3a>Zoho Bigin, Zoho CRM, Zoho Analytics, Zoho Calendar, Zoho Meet, Zoho Books und Zoho Inventory. Wenn Sie ein anderes Zoho-Modul brauchen, fragen Sie einfach.</p></div></details><details class="faq-item" data-astro-cid-657w5j3a><summary data-astro-cid-657w5j3a>Was kostet eine Zoho-Implementierung?</summary><div class="faq-answer" data-astro-cid-657w5j3a><p data-astro-cid-657w5j3a>Das hängt vom Umfang ab. Beratung ab 95 € pro Stunde, Projektarbeiten ab 650 €. Viele Projekte sind förderfähig. Ein finales Angebot erhalten Sie nach dem Erstgespräch.</p></div></details></div></div></section></main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-657w5j3a": true })}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/kontakt.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/kontakt.astro";
var $$url = "/kontakt";
//#endregion
//#region \0virtual:astro:page:src/pages/kontakt@_@astro
var page = () => kontakt_exports;
//#endregion
export { page };
