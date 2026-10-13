globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_Bvl89sLO.mjs";
import { t as $$Button } from "./Button_DiAqw2P7.mjs";
import { t as $$PageHero } from "./PageHero_BFMlKxcI.mjs";
import { t as $$ContactForm } from "./ContactForm_DSZuTnr1.mjs";
//#region src/components/Aperture.astro
var $$Aperture = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="aperture-wrap" data-astro-cid-wvjkjens><svg class="aperture" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-wvjkjens><circle cx="160" cy="160" r="150" stroke="#D9DFD2" stroke-width="1" data-astro-cid-wvjkjens></circle><g class="blade" fill="#14432F" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L160 34 L214 46 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#1B5138" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L272 96 L260 152 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#215C41" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L268 226 L214 258 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#2A6B4C" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L160 286 L106 274 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#347A58" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L48 224 L60 168 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#4C8C6B" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L52 94 L106 62 Z" data-astro-cid-wvjkjens></path></g><circle cx="160" cy="160" r="30" fill="#F6F7F2" stroke="#14432F" stroke-width="1.5" data-astro-cid-wvjkjens></circle></svg></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Aperture.astro", void 0);
//#endregion
//#region src/components/Service.astro
createAstro("https://kloseup.eu");
var $$Service = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Service;
	const { title, description } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="service" data-astro-cid-b236p4vs><div class="dot" data-astro-cid-b236p4vs></div><h3 data-astro-cid-b236p4vs>${title}</h3><p data-astro-cid-b236p4vs>${description}</p></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Service.astro", void 0);
//#endregion
//#region src/components/Badge.astro
createAstro("https://kloseup.eu");
var $$Badge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Badge;
	const { label, name } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="badge"><div class="label">${label}</div><div class="name">${name}</div></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Badge.astro", void 0);
//#endregion
//#region src/components/PriceCard.astro
createAstro("https://kloseup.eu");
var $$PriceCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$PriceCard;
	const { label, amount, unit, description } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="price-card"><div class="label">${label}</div><div class="amount">${amount} <span>${unit}</span></div><p>${description}</p></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/PriceCard.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Zoho Beratung Salzburg – CRM Einrichtung & Integration",
		"description": "Zoho Beratung in Salzburg: CRM-Einrichtung, Analytics-Dashboards und Team-Schulung für KMU. Kostenloses Erstgespräch mit Christopher Klose, Zoho-Berater.",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-lcdefpme": true })}${maybeRenderHead($$result)}<main id="top" data-astro-cid-lcdefpme>${renderComponent($$result, "PageHero", $$PageHero, {
		"eyebrow": "Digitalisierungsprojekte und Zoho Beratung in Salzburg",
		"titel": "Zoho Beratung in Salzburg",
		"titelEm": "scharf gestellt auf Ihre Prozesse.",
		"lede": "Ich unterstütze kleine und mittelständische Unternehmen in Salzburg und Umgebung bei der Einführung von Zoho-Produkten. Von der Beratung bis zur nahtlosen Integration.",
		"data-astro-cid-lcdefpme": true
	}, {
		"default": ($$result) => renderTemplate`<div style="display: flex; gap: 14px; flex-wrap: wrap;" data-astro-cid-lcdefpme>${renderComponent($$result, "Button", $$Button, {
			"href": "#kontakt",
			"variant": "primary",
			"label": "Erstgespräch anfragen",
			"showArrow": true,
			"data-astro-cid-lcdefpme": true
		})}${renderComponent($$result, "Button", $$Button, {
			"href": "#leistungen",
			"variant": "ghost",
			"label": "Leistungen ansehen",
			"showArrow": true,
			"data-astro-cid-lcdefpme": true
		})}</div>`,
		"aside": ($$result) => renderTemplate`${renderComponent($$result, "Aperture", $$Aperture, {
			"slot": "aside",
			"data-astro-cid-lcdefpme": true
		})}`
	})}<!-- Leistungen Section --><section id="leistungen" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><div class="section-head" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Leistungen</p><h2 style="margin-bottom: 16px;" data-astro-cid-lcdefpme>Vier Bereiche, ein Blickwinkel.</h2></div><div class="services" data-astro-cid-lcdefpme>${renderComponent($$result, "Service", $$Service, {
		"title": "CRM & Vertrieb",
		"description": "Zoho Bigin und Zoho CRM. Von der Einrichtung bis zur automatisierten Pipeline.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Auswertung",
		"description": "Zoho Analytics für Dashboards und Kennzahlen, die tatsächlich genutzt werden.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Kommunikation",
		"description": "Zoho Calendar und Meet. Sauber verzahnt mit Ihren Vertriebs- und Kundenprozessen.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Schulung",
		"description": "Ihr Team nutzt das System von selbst, weil es ihm im Alltag wirklich hilft.",
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Zielgruppe Section --><section id="zielgruppe" data-astro-cid-lcdefpme><div class="wrap target" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Zielgruppe & Förderung</p><h2 style="font-size: clamp(26px, 3vw, 34px); margin-bottom: 16px;" data-astro-cid-lcdefpme>Für Betriebe, die es genau wissen wollen.</h2><p style="margin-top: 20px;" data-astro-cid-lcdefpme>Ich arbeite mit kleinen und mittleren Unternehmen im Raum Salzburg und dem bayerischen Grenzgebiet, branchenoffen, mit Fokus auf klare, nutzbare Lösungen statt Überkomplexität.</p><p data-astro-cid-lcdefpme>Viele Digitalisierungsprojekte sind förderfähig. Ich unterstütze Sie dabei, die passende Förderung zu nutzen.</p></div><div class="badges" data-astro-cid-lcdefpme>${renderComponent($$result, "Badge", $$Badge, {
		"label": "Bundesförderung",
		"name": "KMU.DIGITAL Beratungsförderung",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Badge", $$Badge, {
		"label": "Land Salzburg",
		"name": "Salzburger Digi-Bonus",
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Preise Section --><section id="preise" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><div class="section-head" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Preise</p><h2 style="margin-bottom: 16px;" data-astro-cid-lcdefpme>Transparent kalkuliert.</h2></div><div class="pricing" data-astro-cid-lcdefpme>${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Beratung",
		"amount": "ab 95 €",
		"unit": "/ Std.",
		"description": "Prozessanalyse, Troubleshooting, Ad-hoc-Support.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Projekt",
		"amount": "ab 650 €",
		"unit": "/ Projekt",
		"description": "CRM-Setup, Migration, Automatisierung, Integration.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Betreuung",
		"amount": "ab 290 €",
		"unit": "/ Monat",
		"description": "Laufender Support und Weiterentwicklung im Retainer.",
		"data-astro-cid-lcdefpme": true
	})}</div><p class="pricing-note" data-astro-cid-lcdefpme>Kein Umsatzsteuerausweis gemäß Kleinunternehmerregelung. Finales Angebot nach individuellem Scoping-Gespräch.</p></div></section><!-- Kontakt Section --><section id="kontakt" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme>${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-lcdefpme": true })}</div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lcdefpme": true })}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/index.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
