globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { C as createAstro, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_OMT4BR2f.mjs";
import { t as $$Button } from "./Button_DiAqw2P7.mjs";
import { t as $$PageHero } from "./PageHero_BFMlKxcI.mjs";
import { t as $$ContactForm } from "./ContactForm_80haeGb0.mjs";
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
		"title": "Zoho CRM für Handwerk & Bau in Salzburg | kloseup",
		"description": "Weniger verlorene Aufträge für Handwerks- und Baubetriebe: Zoho Bigin/CRM-Setup mit Pipeline und automatischem Angebot-Nachfassen. Für Betriebe in Salzburg und dem bayerischen Grenzgebiet.",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-lcdefpme": true })}${maybeRenderHead($$result)}<main id="top" data-astro-cid-lcdefpme>${renderComponent($$result, "PageHero", $$PageHero, {
		"eyebrow": "Vertriebs-Struktur für Handwerk und Bau in Salzburg",
		"titel": "Ihre Angebote, die niemand mehr vergisst.",
		"titelEm": "Weniger verlorene Aufträge, mit Bigin ab 7 € pro Nutzer.",
		"lede": "Ich richte Zoho Bigin für Handwerks- und Baubetriebe ein: eine Pipeline statt Excel-Listen, automatisches Nachfassen bei offenen Angeboten, alle Kundendaten an einem Ort. Eingerichtet in Tagen, nicht Monaten.",
		"data-astro-cid-lcdefpme": true
	}, {
		"default": ($$result) => renderTemplate`<div style="display: flex; gap: 14px; flex-wrap: wrap;" data-astro-cid-lcdefpme>${renderComponent($$result, "Button", $$Button, {
			"href": "#kontakt",
			"variant": "primary",
			"label": "Kostenloses Erstgespräch",
			"showArrow": true,
			"data-astro-cid-lcdefpme": true
		})}${renderComponent($$result, "Button", $$Button, {
			"href": "#schmerz",
			"variant": "ghost",
			"label": "Ist das Ihr Betrieb?",
			"showArrow": true,
			"data-astro-cid-lcdefpme": true
		})}</div>`,
		"aside": ($$result) => renderTemplate`${renderComponent($$result, "Aperture", $$Aperture, {
			"slot": "aside",
			"data-astro-cid-lcdefpme": true
		})}`
	})}<!-- Schmerz Section --><section id="schmerz" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><div class="section-head" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Ist das Ihr Betrieb?</p><h2 style="margin-bottom: 16px;" data-astro-cid-lcdefpme>Diese drei Sätze höre ich in fast jedem Erstgespräch.</h2></div><div class="schmerz-grid" data-astro-cid-lcdefpme><div class="schmerz-card" data-astro-cid-lcdefpme><p class="schmerz-quote" data-astro-cid-lcdefpme>„Der Anrufer von letzte Woche? Keine Ahnung, was daraus geworden ist.“</p><p class="schmerz-erkl" data-astro-cid-lcdefpme>Anfragen versickern zwischen Posteingang, WhatsApp und Zetteln. Deren Aufträge holt die Konkurrenz.</p></div><div class="schmerz-card" data-astro-cid-lcdefpme><p class="schmerz-quote" data-astro-cid-lcdefpme>„Wir haben 14 offene Angebote. Ob da schon jemand nachgefasst hat? Gute Frage.“</p><p class="schmerz-erkl" data-astro-cid-lcdefpme>Ohne systematisches Nachfassen sackt die Abschlussquote ab. Excel erinnert Sie nicht von selbst.</p></div><div class="schmerz-card" data-astro-cid-lcdefpme><p class="schmerz-quote" data-astro-cid-lcdefpme>„Ich suche wieder mal die Notiz vom Kunden vom Baustellenbesuch.“</p><p class="schmerz-erkl" data-astro-cid-lcdefpme>Kundendaten leben in drei Köpfen, zwei Handys und einer Excel-Liste von 2019. Wenn einer fehlt, fehlt alles.</p></div></div><p class="schmerz-nach" style="margin-top: 32px; max-width: 60ch;" data-astro-cid-lcdefpme>Ab 30 aktiven Kunden und fünf gleichzeitig offenen Angeboten kippt Excel. Niemand sieht mehr, welche Anfrage offen ist. Niemand fasst von selbst nach. Sie brauchen kein großes CRM. Sie brauchen eines, das Ihr Team wirklich nutzt.</p></div></section><!-- Leistungen Section --><section id="leistungen" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><div class="section-head" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Leistungen</p><h2 style="margin-bottom: 16px;" data-astro-cid-lcdefpme>Vier Bereiche, ein Ziel.</h2></div><div class="services" data-astro-cid-lcdefpme>${renderComponent($$result, "Service", $$Service, {
		"title": "Angebots-Pipeline",
		"description": "Zoho Bigin statt Excel: Anfrage bis Auftragsbestätigung in einer Pipeline, mit Status und Verantwortlichem.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Automatisches Nachfassen",
		"description": "Follow-up-Erinnerungen und Wiedervorlagen, die ohne Zutun kommen. Sie wissen jederzeit, welches Angebot noch offen ist.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Auswertung",
		"description": "Zoho Analytics: Wo kommen Aufträge her, wo brechen sie ab, was bringt der Außendienst.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Service", $$Service, {
		"title": "Schulung",
		"description": "Ihr Team greift zum System, weil es ihm im Alltag hilft. Vor Ort oder online, an Ihren Beispielen.",
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Zielgruppe Section --><section id="zielgruppe" data-astro-cid-lcdefpme><div class="wrap target" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Für wen ich arbeite</p><h2 style="font-size: clamp(26px, 3vw, 34px); margin-bottom: 16px;" data-astro-cid-lcdefpme>Für inhabergeführte Handwerks- und Baubetriebe, die Struktur suchen. Kein Tool.</h2><p style="margin-top: 20px;" data-astro-cid-lcdefpme>Ich arbeite mit Handwerks-, Bau- und Gewerbebetrieben ab 5 Mitarbeitern im Raum Salzburg, Flachgau und dem bayerischen Grenzgebiet. Typischerweise mit 30 oder mehr aktiven Kunden, deren Verwaltung über Excel, E-Mail-Postfach und Telefon läuft.</p><p data-astro-cid-lcdefpme>Für Kleinstbetriebe unter 30 Kunden lohnt sich das meist noch nicht. Das sage ich Ihnen im Erstgespräch offen, bevor Sie Geld ausgeben.</p></div><div class="badges" data-astro-cid-lcdefpme>${renderComponent($$result, "Badge", $$Badge, {
		"label": "Branchen-Fokus",
		"name": "Handwerk, Bau und Gewerbe",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "Badge", $$Badge, {
		"label": "Einsatzgebiet",
		"name": "Salzburg & bayerisches Grenzgebiet",
		"data-astro-cid-lcdefpme": true
	})}</div></div></section><!-- Preise Section --><section id="preise" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><div class="section-head" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>Preise</p><h2 style="margin-bottom: 16px;" data-astro-cid-lcdefpme>Transparent kalkuliert.</h2></div><div class="pricing" data-astro-cid-lcdefpme>${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Angebots-Setup",
		"amount": "ab 650 €",
		"unit": "/ Projekt",
		"description": "Bigin-Einrichtung, Pipeline, automatisches Nachfassen, Migration Ihrer Kundendaten. In etwa zwei Wochen einsatzbereit.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Beratung",
		"amount": "ab 95 €",
		"unit": "/ Std.",
		"description": "Prozessanalyse, Troubleshooting, Ad-hoc-Support.",
		"data-astro-cid-lcdefpme": true
	})}${renderComponent($$result, "PriceCard", $$PriceCard, {
		"label": "Betreuung",
		"amount": "ab 290 €",
		"unit": "/ Monat",
		"description": "Laufender Support und Weiterentwicklung im Betreuungspaket, z. B. 90 Tage bis die Abschlussquote sitzt. Monatlich kündbar.",
		"data-astro-cid-lcdefpme": true
	})}</div><p class="pricing-note" data-astro-cid-lcdefpme>Kein Umsatzsteuerausweis gemäß Kleinunternehmerregelung. Zoho-Lizenzen (Bigin ab ca. 7 €/Nutzer/Monat) kommen direkt von Zoho dazu. Finales Angebot nach dem ersten Gespräch.</p></div></section><!-- Referenzen Verweis --><section id="referenzen" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><div class="referenz-box" data-astro-cid-lcdefpme><p class="referenz-text" data-astro-cid-lcdefpme>Konkrete Beispiele gefällig? <a href="/projekte/" data-astro-cid-lcdefpme>Referenzen aus meiner Berufspraxis</a>: vom Bauunternehmen mit Bigin-Pipeline bis zum Analytics-Dashboard für die Geschäftsführung.</p></div></div></section><!-- Kontakt Section --><section id="kontakt" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme>${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-lcdefpme": true })}</div></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-lcdefpme": true })}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/index.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
