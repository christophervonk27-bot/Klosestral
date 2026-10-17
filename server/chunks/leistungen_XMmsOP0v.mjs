globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { i as $$Layout, n as $$Header, t as $$Footer } from "./Footer_OMT4BR2f.mjs";
import { t as $$Button } from "./Button_DiAqw2P7.mjs";
import { t as $$PageHero } from "./PageHero_BFMlKxcI.mjs";
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
			title: "Angebots-Pipeline statt Excel",
			desc: "Ihre Vertriebspipeline funktioniert im Alltag, nicht nur auf dem Papier. Ich richte Zoho Bigin oder Zoho CRM an Ihren Abläufen aus, vom ersten Anruf bis zur Auftragsbestätigung, damit Ihre Leute es wirklich nutzen.",
			points: [
				"Einrichtung & Konfiguration von Zoho Bigin oder Zoho CRM, exakt auf Ihre Abläufe abgestimmt: Anfrage, Angebot, Auftrag, Nacharbeit",
				"Automatisierte Sales-Pipelines: Leads, Deals, Follow-ups ohne manuelle Doppelpflege",
				"Saubere Migration Ihrer bestehenden Kundendaten, ohne Verlust und ohne Downtime",
				"Anbindung an E-Mail, Telefonie und Bestandssysteme. Ein System, eine Wahrheit."
			]
		},
		{
			num: "02",
			title: "Automatisches Nachfassen",
			desc: "Der häufigste Grund für verlorene Aufträge ist nicht der Preis, sondern das vergessene Follow-up. Ich baue Erinnerungen und Wiedervorlagen, die von selbst kommen: kein Angebot bleibt liegen, kein Lead versickert, niemand muss dran denken.",
			points: [
				"Automatische Follow-up-Erinnerungen bei offenen Angeboten, per Task, E-Mail oder WhatsApp-Workflow",
				"Wiedervorlagen, die der Verantwortliche zugewiesen bekommt, nicht „irgendwer\"",
				"Eskalation, wenn Angebote zu lange offen stehen: Der Chef sieht es, bevor der Auftrag weg ist",
				"Messbare Abschlussquote: Sie sehen, ob das Nachfassen tatsächlich wirkt"
			]
		},
		{
			num: "03",
			title: "Auswertung",
			desc: "Dashboards, die jemand ansieht. Zoho Analytics verbindet Ihre Datenquellen und zeigt Ihnen die Kennzahlen, die Ihre Entscheidungen beeinflussen: Wo kommen Aufträge her, wo brechen sie ab, was bringt der Außendienst wirklich.",
			points: [
				"Zoho Analytics-Dashboards nach Ihren KPIs. Keine Standard-Reports, sondern Ihre Metriken",
				"Verknüpfung von CRM-, Finanz- und externen Datenquellen in einer zentralen Ansicht",
				"Automatisierte Reportings per Mail oder Slack, damit der Report kommt, bevor Sie danach fragen",
				"Klare Visualisierungen statt Datenfriedhöfe. Sie sehen in 30 Sekunden, wo Sie stehen."
			]
		},
		{
			num: "04",
			title: "Schulung",
			desc: "Ihr Team kennt das System und nutzt es. Kein Standard-Workshop, sondern praxisnahe Einführung, die Ihre Prozesse und Ihre Sprache spricht, vom Monteur bis zur Bürokraft. Damit die Investition im Alltag ankommt.",
			points: [
				"Praxisnahe Team-Schulungen vor Ort oder online, an Ihren Beispielen und nicht an Demo-Daten",
				"Individuelle Userguides & Kurzvideos für Ihre Prozesse, als Nachschlagewerk, wenn es zählt",
				"Begleitung, die Mitarbeiter abholt statt überfährt. Akzeptanz statt Widerstand.",
				"Follow-up-Support in den ersten Wochen nach Go-Live, bis es im Alltag sitzt."
			]
		}
	];
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Zoho CRM & Analytics Einrichtung für Handwerk & Bau in Salzburg",
		"description": "Angebots-Pipeline, automatisches Nachfassen, Analytics-Dashboards und Team-Schulung mit Zoho. Für Handwerks- und Baubetriebe in Salzburg und dem bayerischen Grenzgebiet.",
		"data-astro-cid-iustjyzp": true
	}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-iustjyzp": true })}${maybeRenderHead($$result2)}<main id="top" data-astro-cid-iustjyzp>${renderComponent($$result2, "PageHero", $$PageHero, {
		"eyebrow": "Leistungen",
		"titel": "Zoho für Handwerk und Bau",
		"titelEm": "so eingerichtet, dass Ihr Team es wirklich nutzt.",
		"lede": "Vier Bereiche, ein Ziel: kein Angebot, keine Anfrage und kein Kunde mehr, der durchrutscht. Kein Tool-Verkauf, sondern Lösungen, die im Alltag funktionieren. Pragmatisch, nutzerfreundlich, messbar.",
		"data-astro-cid-iustjyzp": true
	}, { "default": ($$result3) => renderTemplate`<div class="leistungen-hero-cta" data-astro-cid-iustjyzp>${renderComponent($$result3, "Button", $$Button, {
		"href": "#kontakt",
		"variant": "primary",
		"label": "Kostenloses Erstgespräch",
		"showArrow": true,
		"data-astro-cid-iustjyzp": true
	})}${renderComponent($$result3, "Button", $$Button, {
		"href": "#prozess",
		"variant": "ghost",
		"label": "So arbeite ich",
		"showArrow": true,
		"data-astro-cid-iustjyzp": true
	})}</div>` })}<!-- Leistungen Detail --><section id="leistungen-detail" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="leistungen-grid" data-astro-cid-iustjyzp>${leistungen.map((l) => renderTemplate`<article class="leistung-card" data-astro-cid-iustjyzp><div class="leistung-card-head" data-astro-cid-iustjyzp><span class="leistung-num" data-astro-cid-iustjyzp>${l.num}</span><h2 class="leistung-title" data-astro-cid-iustjyzp>${l.title}</h2></div><p class="leistung-desc" data-astro-cid-iustjyzp>${l.desc}</p><ul class="leistung-points" data-astro-cid-iustjyzp>${l.points.map((p) => renderTemplate`<li class="leistung-point" data-astro-cid-iustjyzp><span class="leistung-point-dot" aria-hidden="true" data-astro-cid-iustjyzp></span><span data-astro-cid-iustjyzp>${p}</span></li>`)}</ul></article>`)}</div></div></section><!-- Prozess --><section id="prozess" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="section-head" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Mein Prozess</p><h2 data-astro-cid-iustjyzp>In vier Schritten zur Lösung, die funktioniert.</h2></div><ol class="prozess-steps" data-astro-cid-iustjyzp><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>1</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Analyse</h3><p data-astro-cid-iustjyzp>Wir schauen uns Ihre Prozesse an, ehrlich und ohne Blindeffekt. Wo hakt es? Wo versickert Zeit? Wo fließt Geld, ohne dass es zurückkommt?</p></div></li><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>2</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Evaluierung</h3><p data-astro-cid-iustjyzp>Welche Zoho-Module passen zu Ihnen? Ich empfehle nur, was messbar hilft, und sage Ihnen auch, was Sie nicht brauchen.</p></div></li><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>3</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Umsetzung</h3><p data-astro-cid-iustjyzp>Schrittweise Einrichtung, Migration und Automatisierung. Sie sehen nach jedem Schritt, was sich verändert hat, ohne Überforderung und ohne Chaos.</p></div></li><li class="prozess-step" data-astro-cid-iustjyzp><div class="prozess-step-num" data-astro-cid-iustjyzp>4</div><div class="prozess-step-body" data-astro-cid-iustjyzp><h3 data-astro-cid-iustjyzp>Schulung & Optimierung</h3><p data-astro-cid-iustjyzp>Ihr Team wird fit gemacht, an Ihren Prozessen und nicht an Demo-Daten. Danach optimieren wir kontinuierlich, bis das System im Alltag sitzt.</p></div></li></ol></div></section><!-- Ehrlich über Kosten Section --><section id="foerderung" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="foerderung-box" data-astro-cid-iustjyzp><div class="foerderung-content" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Ehrlich über Kosten</p><h2 data-astro-cid-iustjyzp>Was es kostet, wissen Sie vorher.</h2><p data-astro-cid-iustjyzp>Ein Angebots-Nachfass-Setup mit Zoho Bigin kostet ab 650 € einmalig plus etwa 7 € pro Nutzer und Monat an Zoho-Lizenzen. Ein einziger Auftrag, der durch Nachfassen nicht verloren geht, hat das meist schon eingespielt.</p></div><div class="foerderung-cta" data-astro-cid-iustjyzp>${renderComponent($$result2, "Button", $$Button, {
		"href": "#kontakt",
		"variant": "ghost",
		"label": "Kosten im Erstgespräch klären",
		"showArrow": true,
		"data-astro-cid-iustjyzp": true
	})}</div></div></div></section><!-- Kontakt --><section id="kontakt" data-astro-cid-iustjyzp><div class="wrap kontakt-box" data-astro-cid-iustjyzp><div class="kontakt-text" data-astro-cid-iustjyzp><p class="eyebrow" data-astro-cid-iustjyzp>Bereit?</p><h2 data-astro-cid-iustjyzp>Reden wir über Ihr Projekt.</h2><p data-astro-cid-iustjyzp>Kostenloses Erstgespräch. Ich sage Ihnen ehrlich, ob und wie Zoho für Sie Sinn macht. Kein Verkaufspitch, kein Blendeffekt. Nur eine echte Einschätzung.</p></div><div class="kontakt-actions" data-astro-cid-iustjyzp><a href="mailto:christopher@kloseup.eu" class="btn" data-astro-cid-iustjyzp><span class="btn-text" data-astro-cid-iustjyzp>Per Mail</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-iustjyzp>→</span></a><a href="https://wa.me/436603612354" class="btn" data-astro-cid-iustjyzp><span class="btn-text" data-astro-cid-iustjyzp>Per WhatsApp</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-iustjyzp>→</span></a></div></div></section><!-- Vertiefen: Referenzen + KI als Karten --><section id="vertiefen" data-astro-cid-iustjyzp><div class="wrap" data-astro-cid-iustjyzp><div class="vertiefen-grid" data-astro-cid-iustjyzp><a href="/projekte/" class="vertiefen-card" data-astro-cid-iustjyzp><p class="vertiefen-eyebrow" data-astro-cid-iustjyzp>Referenzen</p><p class="vertiefen-title" data-astro-cid-iustjyzp>Aus meiner Berufspraxis</p><p class="vertiefen-desc" data-astro-cid-iustjyzp>Vom Bauunternehmen mit Bigin-Pipeline bis zum Analytics-Dashboard für die Geschäftsführung.</p><span class="vertiefen-arrow" aria-hidden="true" data-astro-cid-iustjyzp>→</span></a><a href="/ki-automatisierung/" class="vertiefen-card" data-astro-cid-iustjyzp><p class="vertiefen-eyebrow" data-astro-cid-iustjyzp>Vertiefen</p><p class="vertiefen-title" data-astro-cid-iustjyzp>KI &amp; Automatisierung</p><p class="vertiefen-desc" data-astro-cid-iustjyzp>Eingesetzt, wo sie messbar hilft: vom Angebot-Versand bis zur Nachfass-Automatik.</p><span class="vertiefen-arrow" aria-hidden="true" data-astro-cid-iustjyzp>→</span></a></div></div></section></main>${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-iustjyzp": true })}` })}`;
}, "/home/runner/work/Klosestral/Klosestral/src/pages/leistungen.astro", void 0);
var $$file = "/home/runner/work/Klosestral/Klosestral/src/pages/leistungen.astro";
var $$url = "/leistungen";
//#endregion
//#region \0virtual:astro:page:src/pages/leistungen@_@astro
var page = () => leistungen_exports;
//#endregion
export { page };
