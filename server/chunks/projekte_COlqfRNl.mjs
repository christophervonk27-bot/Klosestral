globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { b as unescapeHTML, d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_Bvl89sLO.mjs";
import { t as $$PageHero } from "./PageHero_BFMlKxcI.mjs";
import { t as $$CtaBox } from "./CtaBox_DfLaSr_Q.mjs";
//#region src/pages/projekte.astro
var projekte_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projekte,
	file: () => $$file,
	url: () => $$url
});
var $$Projekte = createComponent(($$result, $$props, $$slots) => {
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
			"name": "Projekte",
			"item": `${siteUrl}/projekte`
		}]
	};
	const projekte = [
		{
			nummer: "01",
			title: "Zoho Bigin für ein Bauunternehmen",
			branche: "Bau",
			team: "Team aus 10 Mitarbeitern (3 Außendienst, 2 Innendienst)",
			tool: "Zoho Bigin",
			ausgangslage: "Alle Projekte liefen über Excel-Tabellen und Outlook. Niemand konnte verlässlich beantworten: Wo stehen unsere Projekte? Wo hängen sie? Was wurde vergessen?",
			umsetzung: "Einführung von Zoho Bigin als zentralem Projekt-CRM. Seither laufen alle Projekte in einer Pipeline mit klaren Phasen, automatischen Wiedervorlagen und einem zentralen Informationsspeicher für Dokumente und Kundenkontakte.",
			ergebnis: "Volle Nachverfolgbarkeit aller Projekte, keine versickerten Vorgänge mehr, saubere Auswertung der Außendienst-Performance und ein Controlling auf Basis echter Zahlen statt Bauchgefühl."
		},
		{
			nummer: "02",
			title: "Zoho Bigin für ein Elektronikunternehmen",
			branche: "Elektronik",
			team: "Team aus 3 Mitarbeitern",
			tool: "Zoho Bigin",
			ausgangslage: "Ein kleines Team, das Projekte und Kundenanfragen parallel managen musste, ohne dass ein System den Überblick behielt.",
			umsetzung: "Schlankes Zoho-Bigin-Setup mit Fokus auf Projektübersicht, Nachverfolgbarkeit und strukturiertem Leadmanagement. Bewusst ohne Überkomplexität, die ein Dreier-Team nicht braucht.",
			ergebnis: "Jedes Projekt und jeder Lead hat einen Status, einen Verantwortlichen und eine Wiedervorlage. Nichts wird mehr vergessen."
		},
		{
			nummer: "03",
			title: "Zoho Analytics für die Geschäftsführung",
			branche: "Bau (wie Projekt 1)",
			team: "Geschäftsführung",
			tool: "Zoho Analytics",
			ausgangslage: "Finanz- und Umsatzzahlen lagen vor, aber nicht in einer Form, die eine Geschäftsführung in 30 Sekunden erfasst.",
			umsetzung: "Visuelles Dashboard mit Umsätzen, Marge und Stückzahlen, filterbar nach Außendienstgebiet und Monat. Dazu Cashflow-Planung und Cashflow-Forecasting mit Was-wäre-wenn-Szenarien.",
			ergebnis: "Der CEO sieht die steuerungsrelevanten Zahlen jederzeit auf einen Blick. Szenario-Entscheidungen wie \"Was macht ein Umsatzminus im vierten Quartal mit dem Cashflow?\" sind in Minuten statt Tagen durchgerechnet."
		},
		{
			nummer: "04",
			title: "Automatisierte Datenabfrage aus dem Bestands-ERP",
			branche: "Bau (wie Projekt 1)",
			team: "Projektverantwortlicher",
			tool: "ERP-API, Skripte",
			ausgangslage: "Monatliche Auswertungen bedeuteten, Zahlen aus einem in die Jahre gekommenen ERP-System manuell zusammenzukopieren.",
			umsetzung: "Datenabfrage aus dem alten ERP über dessen API, aufbereitet mit Skripten. Einmal gebaut, danach lief der monatliche Datenzugriff automatisch.",
			ergebnis: "Monatliches Reporting ohne manuelle Handgriffe, keine Übertragungsfehler mehr, und die Zahlen im Analytics-Dashboard (Projekt 3) sind immer aktuell."
		},
		{
			nummer: "05",
			title: "Mistral AI als interner KI-Assistent",
			branche: "unternehmensinterne Nutzung",
			team: "Außendienst und interne Teams",
			tool: "Mistral AI",
			ausgangslage: "Informationen für den Außendienst und Produktdatenblätter mussten aus einer unübersichtlichen Ordnerstruktur auf einer internen Cloud manuell zusammengesucht werden. Das war zeitaufwendig und fehleranfällig.",
			umsetzung: "Einführung von Mistral AI als internem KI-Assistenten: Zusammenstellen von Außendienst-Informationen, Erstellen von Produktdatenblättern und gezieltes Extrahieren von Wissen aus der bestehenden Cloud-Ordnerstruktur.",
			ergebnis: "Der Außendienst erhält aufbereitete Informationen in Minuten statt in Stunden, und das im Unternehmen vorhandene Wissen wird endlich genutzt, statt in Ordnerstrukturen zu verstauben."
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Zoho-Projekte & Referenzen aus Salzburg",
		"description": "Echte Projekte statt Standard-Demos: Einführung von Zoho Bigin & Analytics, ERP-Anbindungen und KI-Assistenten in KMU. Pragmatisch, messbar, ohne Blendeffekt.",
		"ogTitle": "Zoho-Projekte & Referenzen aus Salzburg",
		"ogDescription": "Echte Projekte statt Standard-Demos: Einführung von Zoho Bigin & Analytics, ERP-Anbindungen und KI-Assistenten in KMU. Pragmatisch, messbar, ohne Blendeffekt.",
		"data-astro-cid-qerp545y": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, { "data-astro-cid-qerp545y": true })}${maybeRenderHead($$result)}<main id="top" data-astro-cid-qerp545y>${renderComponent($$result, "PageHero", $$PageHero, {
		"eyebrow": "Projekte",
		"titel": "Referenzen aus meiner Berufspraxis",
		"lede": "Echte Projekte statt Standard-Demos: Einführung von Zoho Bigin & Analytics, ERP-Anbindungen und KI-Assistenten in KMU. Pragmatisch, messbar, ohne Blendeffekt.",
		"data-astro-cid-qerp545y": true
	})}<!-- Projekte List --><section id="projekte-detail" data-astro-cid-qerp545y><div class="wrap" data-astro-cid-qerp545y>${projekte.map((p) => renderTemplate`<article class="projekt-row" data-astro-cid-qerp545y><div class="projekt-row-inner" data-astro-cid-qerp545y><div class="projekt-num" data-astro-cid-qerp545y>${p.nummer}</div><div class="projekt-content" data-astro-cid-qerp545y><h2 class="projekt-title" data-astro-cid-qerp545y>${p.title}</h2><div class="projekt-meta-chips" data-astro-cid-qerp545y><span class="meta-chip" data-astro-cid-qerp545y>${p.branche}</span><span class="meta-chip" data-astro-cid-qerp545y>${p.team}</span><span class="meta-chip" data-astro-cid-qerp545y>${p.tool}</span></div><div class="projekt-section" data-astro-cid-qerp545y><span class="projekt-label" data-astro-cid-qerp545y>Ausgangslage</span><p data-astro-cid-qerp545y>${p.ausgangslage}</p></div><div class="projekt-section" data-astro-cid-qerp545y><span class="projekt-label" data-astro-cid-qerp545y>Umsetzung</span><p data-astro-cid-qerp545y>${p.umsetzung}</p></div><div class="projekt-section projekt-section--ergebnis" data-astro-cid-qerp545y><span class="projekt-label" data-astro-cid-qerp545y>Ergebnis</span><p data-astro-cid-qerp545y>${p.ergebnis}</p></div></div></div></article>`)}</div></section><!-- KI Verweis --><section id="ki-verweis" data-astro-cid-qerp545y><div class="wrap" data-astro-cid-qerp545y><p class="ki-verweis-text" data-astro-cid-qerp545y>Wie KI konkret eingesetzt wird, sehen Sie unter <a href="/ki-automatisierung/" data-astro-cid-qerp545y>KI & Automatisierung</a>.</p></div></section><!-- Kontakt CTA --><section id="kontakt" data-astro-cid-qerp545y>${renderComponent($$result, "CtaBox", $$CtaBox, {
		"eyebrow": "Bereit?",
		"titel": "Lassen Sie uns über Ihr Projekt sprechen.",
		"text": "Kostenloses Erstgespräch. Ich sage Ihnen ehrlich, ob ich Ihnen helfen kann, und lasse es bleiben, wenn nicht. Nur eine echte Einschätzung.",
		"data-astro-cid-qerp545y": true
	})}</section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-qerp545y": true })}<script type="application/ld+json">${unescapeHTML(JSON.stringify(breadcrumbSchema))}<\/script><script type="application/ld+json">${unescapeHTML(JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Projekte & Referenzen | kloseup.eu",
		"description": "Echte Projekte statt Standard-Demos: Einführung von Zoho Bigin & Analytics, ERP-Anbindungen und KI-Assistenten in KMU.",
		"url": `${siteUrl}/projekte`
	}))}<\/script>` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/projekte.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/projekte.astro";
var $$url = "/projekte";
//#endregion
//#region \0virtual:astro:page:src/pages/projekte@_@astro
var page = () => projekte_exports;
//#endregion
export { page };
