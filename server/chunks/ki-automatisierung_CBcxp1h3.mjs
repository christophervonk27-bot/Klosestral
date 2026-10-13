globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { b as unescapeHTML, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_Bvl89sLO.mjs";
import { t as $$PageHero } from "./PageHero_BFMlKxcI.mjs";
import { t as $$CtaBox } from "./CtaBox_DfLaSr_Q.mjs";
//#region src/pages/ki-automatisierung.astro
var ki_automatisierung_exports = /* @__PURE__ */ __exportAll({
	default: () => $$KiAutomatisierung,
	file: () => $$file,
	url: () => $$url
});
var $$KiAutomatisierung = createComponent(($$result, $$props, $$slots) => {
	const siteUrl = "https://kloseup.eu";
	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement": [{
			"@type": "ListItem",
			"position": 1,
			"name": "Startseite",
			"item": `${siteUrl}`
		}, {
			"@type": "ListItem",
			"position": 2,
			"name": "KI & Automatisierung",
			"item": `${siteUrl}/ki-automatisierung`
		}]
	};
	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "KI-Beratung & Automatisierung für KMU",
		"description": "KI und Automatisierung pragmatisch eingeführt: ChatGPT, Claude und Mistral im Team, automatisierte Reports. Für KMU in Salzburg und der Grenzregion.",
		"provider": {
			"@type": "Organization",
			"name": "kloseup",
			"url": `${siteUrl}`
		},
		"areaServed": [
			{
				"@type": "City",
				"name": "Salzburg"
			},
			{
				"@type": "State",
				"name": "Salzburg"
			},
			{
				"@type": "AdministrativeArea",
				"name": "Bayerisches Grenzgebiet"
			}
		],
		"serviceType": "KI- und Automatisierungsberatung"
	};
	const bereiche = [
		{
			nummer: "01",
			titel: "KI-Assistenten im Team",
			lead: "Mistral AI als interner Assistent: Informationen für den Außendienst aufbereiten, Produktdatenblätter erstellen und verstreutes Unternehmenswissen zentral verfügbar machen. Ihr Team fragt, die KI antwortet mit dem, was im Unternehmen bereits vorhanden ist.",
			bullets: [
				"Einführung von Mistral AI als internem KI-Assistenten, abgestimmt auf Ihre Abläufe",
				"Außendienst-Informationen und Produktdatenblätter in Minuten statt in Stunden",
				"Unternehmenswissen zentral auffindbar machen, statt es in Ordnerstrukturen zu verlieren",
				"Klare Regeln, welche Daten die KI verarbeitet und welche nicht"
			]
		},
		{
			nummer: "02",
			titel: "Automatisierte Abläufe",
			lead: "Monatliche Datenabfragen, Reports und Wiedervorlagen laufen automatisch. Ich verbinde Ihre Systeme über APIs und Skripte, damit Zahlen fließen, ohne dass jemand kopieren muss.",
			bullets: [
				"Automatisierte Datenabfrage aus Bestands- und ERP-Systemen über APIs",
				"Monatsreporting, das sich selbst erstellt, bevor jemand danach fragt",
				"Direkte Verknüpfung mit Ihren Zoho-Dashboards in CRM und Analytics",
				"Weniger Übertragungsfehler, weil niemand mehr manuell kopiert"
			]
		},
		{
			nummer: "03",
			titel: "Die richtigen KI-Tools für Ihren Alltag",
			lead: "ChatGPT, Claude oder Mistral: Ich helfe Ihnen, das Werkzeug zu wählen, das zu Ihren Aufgaben passt, und führe es so ein, dass Ihr Team es wirklich nutzt. Werkzeugauswahl nach Nutzen, nicht nach Hype.",
			bullets: [
				"Auswahl zwischen Mistral, Claude und ChatGPT anhand Ihrer Aufgaben",
				"Einführung und Hands-on-Schulung mit Ihren echten Arbeitsbeispielen, nicht mit Demo-Daten",
				"Wiederverwendbare Prompt-Vorlagen für Angebote, E-Mails und Recherchen",
				"Klare Regeln, welche Firmendaten hineingehören und welche nicht"
			]
		},
		{
			nummer: "04",
			titel: "Einführung & ehrliche Einordnung",
			lead: "Vor jedem Einsatz steht die Frage: Hilft KI hier wirklich? Ich bewerte Ihre Prozesse zuerst ohne KI-Brille und sage Ihnen auch, wenn eine einfachere Lösung reicht.",
			bullets: [
				"Analyse, welche Prozesse sich für KI und Automatisierung eignen, und welche nicht",
				"Datenschutz und EU AI Act ehrlich eingeordnet: keine Rechtsberatung, aber klare Hinweise, worauf Sie achten müssen",
				"Schrittweise Einführung mit messbaren Quick Wins statt Großprojekten",
				"Fördermöglichkeiten prüfen: KMU.DIGITAL und der Salzburger Digi-Bonus übernehmen bis zu 50 % der Beratungskosten"
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "KI-Beratung & Automatisierung für KMU in Salzburg",
		"description": "KI und Automatisierung pragmatisch eingeführt: ChatGPT, Claude und Mistral im Team, automatisierte Reports. Für KMU in Salzburg.",
		"ogTitle": "KI-Beratung & Automatisierung für KMU in Salzburg",
		"ogDescription": "KI und Automatisierung pragmatisch eingeführt: ChatGPT, Claude und Mistral im Team, automatisierte Reports. Für KMU in Salzburg.",
		"data-astro-cid-irbqrchp": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-irbqrchp": true })}${maybeRenderHead($$result)}<main id="top" data-astro-cid-irbqrchp>${renderComponent($$result, "PageHero", $$PageHero, {
		"eyebrow": "KI & Automatisierung",
		"titel": "KI & Automatisierung",
		"titelEm": "eingesetzt, wo sie messbar hilft.",
		"lede": "KI muss kein Hype sein. Richtig eingesetzt spart sie Ihrem Team jede Woche Stunden, antwortet Kunden schneller und holt Wissen aus Ordnern, in denen es sonst verstaubt. Ich führe KI und Automatisierung dort ein, wo sie Ihren Alltag spürbar entlastet, und nirgendwo sonst.",
		"data-astro-cid-irbqrchp": true
	}, { "default": ($$result) => renderTemplate`<div class="ki-badges" data-astro-cid-irbqrchp><span class="ki-badge" data-astro-cid-irbqrchp>Mistral</span><span class="ki-badge" data-astro-cid-irbqrchp>Claude</span><span class="ki-badge" data-astro-cid-irbqrchp>ChatGPT</span><span class="ki-badge" data-astro-cid-irbqrchp>Zoho</span><span class="ki-badge" data-astro-cid-irbqrchp>APIs & Skripte</span></div>` })}<!-- Leistungsbereiche Grid --><section id="bereiche" data-astro-cid-irbqrchp><div class="wrap" data-astro-cid-irbqrchp><div class="bereiche-grid" data-astro-cid-irbqrchp>${bereiche.map((b) => renderTemplate`<article class="bereich-card" data-astro-cid-irbqrchp><div class="bereich-card-head" data-astro-cid-irbqrchp><span class="bereich-num" data-astro-cid-irbqrchp>${b.nummer}</span><h2 class="bereich-title" data-astro-cid-irbqrchp>${b.titel}</h2></div><p class="bereich-lead" data-astro-cid-irbqrchp>${b.lead}</p><ul class="bereich-points" data-astro-cid-irbqrchp>${b.bullets.map((point) => renderTemplate`<li class="bereich-point" data-astro-cid-irbqrchp><span class="bereich-point-dot" aria-hidden="true" data-astro-cid-irbqrchp></span><span data-astro-cid-irbqrchp>${point}</span></li>`)}</ul></article>`)}</div></div></section><!-- Referenz-Abschnitt --><section id="referenz" data-astro-cid-irbqrchp><div class="wrap" data-astro-cid-irbqrchp><div class="section-head" data-astro-cid-irbqrchp><p class="eyebrow" data-astro-cid-irbqrchp>Aus der Praxis</p><h2 data-astro-cid-irbqrchp>Vom Excel-Chaos zur Pipeline, von der Ordnersuche zum KI-Assistenten</h2></div><p class="referenz-text" data-astro-cid-irbqrchp>Auf der <a href="/projekte/" data-astro-cid-irbqrchp>Projekte-Seite</a> sehen Sie, wie das in echten Betrieben aussieht, inklusive der Einführung von Mistral AI als internem KI-Assistenten.</p></div></section><!-- CTA --><section id="kontakt" data-astro-cid-irbqrchp>${renderComponent($$result, "CtaBox", $$CtaBox, {
		"eyebrow": "Bereit?",
		"titel": "Reden wir über Ihren ersten Automatisierungs-Sprint.",
		"text": "Kostenloses Erstgespräch. Ich sage Ihnen ehrlich, ob und wo KI oder Automatisierung in Ihrem Betrieb etwas bringt. Kein Verkaufspitch, keine Buzzword-Wüste. Nur eine echte Einschätzung.",
		"data-astro-cid-irbqrchp": true
	})}</section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-irbqrchp": true })}<script type="application/ld+json">${unescapeHTML(JSON.stringify(breadcrumbSchema))}<\/script><script type="application/ld+json">${unescapeHTML(JSON.stringify(serviceSchema))}<\/script>` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/ki-automatisierung.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/ki-automatisierung.astro";
var $$url = "/ki-automatisierung";
//#endregion
//#region \0virtual:astro:page:src/pages/ki-automatisierung@_@astro
var page = () => ki_automatisierung_exports;
//#endregion
export { page };
