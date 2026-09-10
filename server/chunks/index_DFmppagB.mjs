globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_nFBoCAh8.mjs";
import { t as $$Button } from "./Button_LMpF2Yrn.mjs";
import { t as $$ContactForm } from "./ContactForm_CtsUgkju.mjs";
//#region src/components/Aperture.astro
var $$Aperture = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="aperture-wrap" data-astro-cid-wvjkjens><svg class="aperture" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-astro-cid-wvjkjens><circle cx="160" cy="160" r="150" stroke="#D9DFD2" stroke-width="1" data-astro-cid-wvjkjens></circle><g class="blade" fill="#14432F" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L160 34 L214 46 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#1B5138" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L272 96 L260 152 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#215C41" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L268 226 L214 258 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#2A6B4C" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L160 286 L106 274 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#347A58" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L48 224 L60 168 Z" data-astro-cid-wvjkjens></path></g><g class="blade" fill="#4C8C6B" opacity="0.92" data-astro-cid-wvjkjens><path d="M160 160 L52 94 L106 62 Z" data-astro-cid-wvjkjens></path></g><circle cx="160" cy="160" r="30" fill="#F6F7F2" stroke="#14432F" stroke-width="1.5" data-astro-cid-wvjkjens></circle></svg></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Aperture.astro", void 0);
//#endregion
//#region src/components/Service.astro
createAstro("https://klosestral.pages.dev");
var $$Service = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Service;
	const { title, description } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="service" data-astro-cid-b236p4vs><div class="dot" data-astro-cid-b236p4vs></div><h3 data-astro-cid-b236p4vs>${title}</h3><p data-astro-cid-b236p4vs>${description}</p></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Service.astro", void 0);
//#endregion
//#region src/components/Badge.astro
createAstro("https://klosestral.pages.dev");
var $$Badge = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Badge;
	const { label, name } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="badge"><div class="label">${label}</div><div class="name">${name}</div></div>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Badge.astro", void 0);
//#endregion
//#region src/components/PriceCard.astro
createAstro("https://klosestral.pages.dev");
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
		"title": "Zoho Beratung Salzburg – CRM Einrichtung & Integration | kloseup.eu",
		"description": "Zoho Beratung in Salzburg: CRM-Einrichtung, Analytics-Dashboards und Team-Schulung für KMU. Kostenloses Erstgespräch mit Christopher Klose, Zoho-Berater."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {})}${maybeRenderHead($$result)}<main id="top"><!-- Hero Section --><section class="hero"><div class="wrap hero-grid"><div><p class="eyebrow">Digitalisierungsprojekte und Zoho Beratung in Salzburg</p><h1>Zoho Beratung in Salzburg<br><em>scharf gestellt auf Ihre Prozesse.</em></h1><p class="lede">Ich unterstütze kleine und mittelständische Unternehmen in Salzburg und Umgebung bei der Einführung von Zoho-Produkten. Von der Beratung bis zur nahtlosen Integration.</p><div style="display: flex; gap: 14px; flex-wrap: wrap;">${renderComponent($$result, "Button", $$Button, {
		"href": "#kontakt",
		"variant": "primary",
		"label": "Erstgespräch anfragen",
		"showArrow": true
	})}${renderComponent($$result, "Button", $$Button, {
		"href": "#leistungen",
		"variant": "ghost",
		"label": "Leistungen ansehen",
		"showArrow": true
	})}</div></div>${renderComponent($$result, "Aperture", $$Aperture, {})}</div></section><!-- Leistungen Section --><section id="leistungen"><div class="wrap"><div class="section-head"><p class="eyebrow">Leistungen</p><h2 style="margin-bottom: 16px;">Vier Bereiche, ein Blickwinkel.</h2></div><div class="services">${renderComponent($$result, "Service", $$Service, {
		"title": "CRM & Vertrieb",
		"description": "Zoho Bigin und Zoho CRM — von der Einrichtung bis zur automatisierten Pipeline."
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Auswertung",
		"description": "Zoho Analytics für Dashboards und Kennzahlen, die tatsächlich genutzt werden."
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Kommunikation",
		"description": "Zoho Calendar und Meet, sauber verzahnt mit Ihren Vertriebs- und Kundenprozessen."
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Schulung",
		"description": "Einführung Ihres Teams, damit das System auch im Alltag ankommt."
	})}</div></div></section><!-- Zielgruppe Section --><section id="zielgruppe"><div class="wrap target"><div><p class="eyebrow">Zielgruppe & Förderung</p><h2 style="font-size: clamp(26px, 3vw, 34px); margin-bottom: 16px;">Für Betriebe, die es genau wissen wollen.</h2><p style="margin-top: 20px;">Ich arbeite mit kleinen und mittleren Unternehmen im Raum Salzburg und dem bayerischen Grenzgebiet — branchenoffen, mit Fokus auf klare, nutzbare Lösungen statt Überkomplexität.</p><p>Viele Digitalisierungsprojekte sind förderfähig. Ich unterstütze Sie dabei, die passende Förderung zu nutzen.</p></div><div class="badges">${renderComponent($$result, "Badge", $$Badge, {
		"label": "Bundesförderung",
		"name": "KMU.DIGITAL Beratungsförderung"
	})}${renderComponent($$result, "Badge", $$Badge, {
		"label": "Land Salzburg",
		"name": "Salzburger Digi-Bonus"
	})}</div></div></section><!-- Preise Section --><section id="preise"><div class="wrap"><div class="section-head"><p class="eyebrow">Preise</p><h2 style="margin-bottom: 16px;">Transparent kalkuliert.</h2></div><div class="pricing">${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Beratung",
		"amount": "ab 95 €",
		"unit": "/ Std.",
		"description": "Prozessanalyse, Troubleshooting, Ad-hoc-Support."
	})}${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Projekt",
		"amount": "ab 650 €",
		"unit": "/ Projekt",
		"description": "CRM-Setup, Migration, Automatisierung, Integration."
	})}${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Betreuung",
		"amount": "ab 290 €",
		"unit": "/ Monat",
		"description": "Laufender Support und Weiterentwicklung im Retainer."
	})}</div><p class="pricing-note">Alle Preise zzgl. gesetzl. USt., sofern zutreffend. Finales Angebot nach individuellem Scoping-Gespräch.</p></div></section><!-- Kontakt Section --><section id="kontakt"><div class="wrap">${renderComponent($$result, "ContactForm", $$ContactForm, {})}</div></section></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/index.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
