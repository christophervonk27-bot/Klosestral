globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_D8dChTMD.mjs";
import { t as $$Button } from "./Button_LMpF2Yrn.mjs";
//#region src/pages/leistungen.astro
var leistungen_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Leistungen,
	file: () => $$file,
	url: () => $$url
});
var $$Leistungen = createComponent(($$result, $$props, $$slots) => {
	const leistungen = [
		{
			num: "01",
			title: "CRM & Vertrieb",
			desc: "Ihre Vertriebspipeline funktioniert, nicht nur auf dem Papier. Von der Einrichtung in Zoho Bigin oder Zoho CRM bis zur automatisierten Workflow-Pipeline, die Ihre Vertriebler auch wirklich nutzen.",
			points: [
				"Einrichtung & Konfiguration von Zoho Bigin oder Zoho CRM, exakt auf Ihre Vertriebsprozesse abgestimmt",
				"Automatisierte Sales-Pipelines: Leads, Deals, Follow-ups ohne manuelle Doppelpflege",
				"Saubere Migration Ihrer bestehenden Kundendaten, ohne Verlust und ohne Downtime",
				"Anbindung an E-Mail, Telefonie und Bestehendsysteme. Ein System, eine Wahrheit."
			]
		},
		{
			num: "02",
			title: "Auswertung",
			desc: "Dashboards, die jemand ansieht. Zoho Analytics verbindet Ihre Datenquellen und zeigt Ihnen die Kennzahlen, die Ihre Entscheidungen wirklich beeinflussen, nicht die, die gut aussehen.",
			points: [
				"Zoho Analytics-Dashboards nach Ihren KPIs. Keine Standard-Reports, sondern Ihre Metriken",
				"Verknüpfung von CRM-, Finanz- und externen Datenquellen in einer zentralen Ansicht",
				"Automatisierte Reportings per Mail oder Slack, damit der Report kommt, bevor Sie danach fragen",
				"Klare Visualisierungen statt Datenfriedhöfe. Sie sehen in 30 Sekunden, wo Sie stehen."
			]
		},
		{
			num: "03",
			title: "Kommunikation",
			desc: "Termine, Meetings und Follow-ups in einem System, sauber verzahnt mit Ihren Vertriebs- und Kundenprozessen. Zoho Calendar und Meet, damit kein Termin mehr verloren geht.",
			points: [
				"Zoho Calendar & Zoho Meet direkt ins CRM integriert. Kein Kontextwechsel mehr.",
				"Automatische Terminerinnerungen und Follow-ups. Ihr System denkt mit, Sie vergessen nichts.",
				"Synchronisation mit bestehenden Kalendersystemen: Google, Outlook, Apple.",
				"Virtuelle Kundenmeetings ohne Tool-Sprung. Vom Deal zum Gespräch in einem Klick."
			]
		},
		{
			num: "04",
			title: "Schulung",
			desc: "Ihr Team kennt das System und nutzt es. Kein Standard-Workshop, sondern praxisnahe Einführung, die Ihre Prozesse und Ihre Sprache spricht. Damit die Investition im Alltag ankommt.",
			points: [
				"Praxisnahe Team-Schulungen vor Ort oder remote, an Ihren Beispielen und nicht an Demo-Daten.",
				"Individuelle Userguides & Kurzvideos für Ihre Prozesse, als Nachschlagewerk, wenn es zählt.",
				"Change Management, das Mitarbeiter abholt statt überfährt. Akzeptanz statt Widerstand.",
				"Follow-up-Support in den ersten Wochen nach Go-Live, bis es im Alltag sitzt."
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Zoho CRM Einrichtung & Analytics Beratung in Salzburg | kloseup.eu",
		"description": "Zoho CRM, Bigin, Analytics, Calendar und Meet in Salzburg einrichten lassen. Vier Bereiche, ein Pragmatiker: Integration die Ihre Prozesse respektiert.",
		"data-astro-cid-iustjyzp": true
	}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-iustjyzp": true })}${maybeRenderHead($$result2)}<main id="top" data-astro-cid-iustjyzp><!-- Hero --><section class="hero leistungen-hero" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Leistungen</p><h1 class="leistungen-hero-h1" data-astro-cid-iustjyzp>Zoho CRM Einrichtung und Integration<br data-astro-cid-iustjyzp><em data-astro-cid-iustjyzp>pragmatisch umgesetzt.</em></h1><p class="lede" data-astro-cid-iustjyzp>Zoho-Integration, die Ihre Prozesse respektiert. Kein Tool-Verkauf, sondern Lösungen, die im Alltag funktionieren. Vier Bereiche, ein Ansatz: pragmatisch, nutzerfreundlich, messbar.</p><div class="leistungen-hero-cta" data-astro-cid-iustjyzp>${renderComponent($$result2, "Button", $$Button, {
		"href": "#kontakt",
		"variant": "primary",
		"label": "Kostenloses Erstgespräch",
		"showArrow": true,
		"data-astro-cid-iustjyzp": true
	})}${renderComponent($$result2, "Button", $$Button, {
		"href": "#prozess",
		"variant": "ghost",
		"label": "So arbeite ich",
		"showArrow": true,
		"data-astro-cid-iustjyzp": true
	})}</div></div></section><!-- Leistungen Detail --><section id="leistungen-detail" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="leistungen-grid" data-astro-cid-iustjyzp>${leistungen.map((l) => renderTemplate`<article class="leistung-card" data-astro-cid-iustjyzp><div class="leistung-card-head" data-astro-cid-iustjyzp><span class="leistung-num" data-astro-cid-iustjyzp>${l.num}</span><h2 class="leistung-title" data-astro-cid-iustjyzp>${l.title}</h2></div><p class="leistung-desc" data-astro-cid-iustjyzp>${l.desc}</p><ul class="leistung-points" data-astro-cid-iustjyzp>${l.points.map((p) => renderTemplate`<li class="leistung-point" data-astro-cid-iustjyzp><span class="leistung-point-dot" aria-hidden="true" data-astro-cid-iustjyzp></span><span data-astro-cid-iustjyzp>${p}</span></li>`)}</ul></article>`)}</div></div></section><!-- Prozess --><section id="prozess" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="section-head" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Mein Prozess</p><h2 data-astro-cid-iustjyzp>In vier Schritten zur Lösung, die funktioniert.</h2></div><ol class="prozess-steps" data-astro-cid-iustjyzp><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>1</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Analyse</h3><p data-astro-cid-iustjyzp>Wir schauen uns Ihre Prozesse an, ehrlich und ohne Blindeffekt. Wo hakt es? Wo versickert Zeit? Wo fließt Geld, ohne dass es zurückkommt?</p></div></li><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>2</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Evaluierung</h3><p data-astro-cid-iustjyzp>Welche Zoho-Module passen zu Ihnen? Ich empfehle nur, was messbar hilft, und sage Ihnen auch, was Sie nicht brauchen.</p></div></li><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>3</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Umsetzung</h3><p data-astro-cid-iustjyzp>Schrittweise Einrichtung, Migration und Automatisierung. Sie sehen nach jedem Schritt, was sich verändert hat, ohne Überforderung und ohne Chaos.</p></div></li><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>4</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Schulung & Optimierung</h3><p data-astro-cid-iustjyzp>Ihr Team wird fit gemacht, an Ihren Prozessen und nicht an Demo-Daten. Danach optimieren wir kontinuierlich, bis das System im Alltag sitzt.</p></div></li></ol></div></section><!-- Förderung Hinweis --><section id="foerderung" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="foerderung-box" data-astro-cid-iustjyzp><div class="foerderung-content" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Förderung</p><h2 data-astro-cid-iustjyzp>Digitalisierung muss nicht teuer sein.</h2><p data-astro-cid-iustjyzp>Viele Digitalisierungsprojekte sind förderfähig, bis zu 50 % der Beratungskosten können übernommen werden. Ich prüfe für Sie, ob die <strong data-astro-cid-iustjyzp>KMU.Digital Beratungsförderung</strong> des Bundes oder der <strong data-astro-cid-iustjyzp>Salzburger Digi-Bonus</strong> passen, und übernehme die Antragsstellung mit.</p></div><div class="foerderung-cta" data-astro-cid-iustjyzp>${renderComponent($$result2, "Button", $$Button, {
		"href": "#kontakt",
		"variant": "ghost",
		"label": "Förderung prüfen lassen",
		"showArrow": true,
		"data-astro-cid-iustjyzp": true
	})}</div></div></div></section><!-- Kontakt --><section id="kontakt" data-astro-cid-iustjyzp><div class="wrap kontakt-box" data-astro-cid-iustjyzp><div class="kontakt-text" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Bereit?</p><h2 data-astro-cid-iustjyzp>Reden wir über Ihr Projekt.</h2><p data-astro-cid-iustjyzp>Kostenloses Erstgespräch. Ich sage Ihnen ehrlich, ob und wie Zoho für Sie Sinn macht. Kein Verkaufspitch, kein Blendeffekt. Nur eine echte Einschätzung.</p></div><div class="kontakt-actions" data-astro-cid-iustjyzp><a href="mailto:christopher@kloseup.eu" class="btn" data-astro-cid-iustjyzp><span class="btn-text" data-astro-cid-iustjyzp>Per Mail</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-iustjyzp>→</span></a><a href="https://wa.me/436641234567" class="btn" data-astro-cid-iustjyzp><span class="btn-text" data-astro-cid-iustjyzp>Per WhatsApp</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-iustjyzp>→</span></a></div></div></section></main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-iustjyzp": true })}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/leistungen.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/leistungen.astro";
var $$url = "/leistungen";
//#endregion
//#region \0virtual:astro:page:src/pages/leistungen@_@astro
var page = () => leistungen_exports;
//#endregion
export { page };
