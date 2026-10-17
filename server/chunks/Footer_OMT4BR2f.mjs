globalThis.process ??= {};
globalThis.process.env ??= {};
import { C as createAstro, b as unescapeHTML, d as maybeRenderHead, f as renderHead, i as renderComponent, m as createRenderInstruction, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://kloseup.eu");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "kloseup: Zoho-Beratung & Integration | Christopher Klose", description = "Zoho-Beratung und Integration für kleine und mittlere Unternehmen in Salzburg und der Grenzregion.", noindex = false, ogTitle, ogDescription, ogImage = "https://kloseup.eu/logos/og-default.jpg" } = Astro.props;
	const siteUrl = "https://kloseup.eu";
	let path = Astro.url.pathname;
	if (path !== "/" && !path.endsWith("/")) path += "/";
	const canonicalUrl = new URL(path, Astro.site);
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "kloseup",
		"description": "Zoho-Beratung & Integration für KMU in Salzburg",
		"url": `${siteUrl}`,
		"telephone": "+43-660-3612354",
		"email": "christopher@kloseup.eu",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Salzburg",
			"addressRegion": "Salzburg",
			"addressCountry": "AT"
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
		"founder": {
			"@type": "Person",
			"name": "Christopher Klose"
		},
		"knowsAbout": [
			"Zoho CRM",
			"Zoho Bigin",
			"Zoho Analytics",
			"Zoho Calendar",
			"Zoho Meet",
			"Zoho Books",
			"Zoho Inventory",
			"CRM Einrichtung",
			"Digitalisierung",
			"Change Management",
			"Prozessautomatisierung",
			"KMU Beratung"
		],
		"priceRange": "€€",
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			"opens": "08:00",
			"closes": "18:00"
		}
	};
	return renderTemplate`<html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${noindex && renderTemplate`<meta name="robots" content="noindex">`}<meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(ogTitle || title, "content")}><meta property="og:description"${addAttribute(ogDescription || description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="kloseup.eu, Zoho Beratung Salzburg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(ogTitle || title, "content")}><meta name="twitter:description"${addAttribute(ogDescription || description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><title>${title}</title><link rel="icon" href="/logos/favicon_144_kloseup.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/logos/favicon_144_kloseup.svg"><link rel="apple-touch-icon" sizes="180x180" href="/logos/apple-touch-icon_kloseup.png"><!-- Schema.org Structured Data --><script type="application/ld+json">${unescapeHTML(JSON.stringify(localBusinessSchema))}<\/script>${renderSlot($$result, $$slots["head"])}${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/home/runner/work/Klosestral/Klosestral/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/Logo.astro
createAstro("https://kloseup.eu");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Logo;
	const baseUrl = "/";
	const { variant = "header", showLink = true } = Astro2.props;
	const sizeClasses = {
		header: "height: 32px;",
		card: "height: clamp(26.4px, 2.86vw, 37.4px);",
		small: "height: clamp(26.4px, 2.86vw, 37.4px); width: auto; max-width: 100%;"
	};
	const sizeStyle = sizeClasses[variant] || sizeClasses.header;
	return renderTemplate`${showLink ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`${baseUrl}`, "href")} class="brand" aria-label="kloseup: Startseite"><img${addAttribute(`${baseUrl}logos/logo_mit_text_kloseup.svg`, "src")} alt="kloseup" width="1000" height="267" class="logo-img"${addAttribute(sizeStyle, "style")}></a>` : renderTemplate`<img${addAttribute(`${baseUrl}logos/logo_mit_text_kloseup.svg`, "src")} alt="kloseup" width="1000" height="267" class="logo-img"${addAttribute(sizeStyle, "style")}>`}`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Logo.astro", void 0);
//#endregion
//#region src/components/Header.astro
createAstro("https://kloseup.eu");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Header;
	const {} = Astro2.props;
	return renderTemplate`${maybeRenderHead($$result)}<header data-astro-cid-nen7h5rs><div class="nav" data-astro-cid-nen7h5rs>${renderComponent($$result, "Logo", $$Logo, {
		"variant": "header",
		"data-astro-cid-nen7h5rs": true
	})}<ul class="nav-links" id="navLinks" data-astro-cid-nen7h5rs><li data-astro-cid-nen7h5rs><a${addAttribute("/", "href")} data-astro-cid-nen7h5rs>Startseite</a></li><li data-astro-cid-nen7h5rs><a${addAttribute("/ueber-mich", "href")} data-astro-cid-nen7h5rs>Über mich</a></li><li data-astro-cid-nen7h5rs><a${addAttribute("/leistungen", "href")} data-astro-cid-nen7h5rs>Leistungen</a></li><li data-astro-cid-nen7h5rs><a${addAttribute("/projekte", "href")} data-astro-cid-nen7h5rs>Projekte</a></li><li data-astro-cid-nen7h5rs><a${addAttribute("/ki-automatisierung", "href")} data-astro-cid-nen7h5rs>KI & Automatisierung</a></li><li data-astro-cid-nen7h5rs><a${addAttribute("/kontakt", "href")} data-astro-cid-nen7h5rs>Kontakt</a></li></ul><a${addAttribute("/kontakt#kontakt-formular", "href")} class="status-pill" aria-label="Verfügbar für Projekte: zur Kontaktseite" data-astro-cid-nen7h5rs><span class="status-dot" aria-hidden="true" data-astro-cid-nen7h5rs></span>Verfügbar für Projekte</a><button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false" id="navToggle" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span></button></div></header>${renderScript($$result, "/home/runner/work/Klosestral/Klosestral/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const baseUrl = "/";
	return renderTemplate`${maybeRenderHead($$result)}<footer data-astro-cid-jo6i4kqk><div class="wrap" data-astro-cid-jo6i4kqk><div class="foot-row" data-astro-cid-jo6i4kqk><a${addAttribute(`${baseUrl}`, "href")} class="brand" aria-label="kloseup: Startseite" data-astro-cid-jo6i4kqk><img${addAttribute(`${baseUrl}logos/logo_mit_text_kloseup.svg`, "src")} alt="kloseup" width="1000" height="267" class="logo-img" data-astro-cid-jo6i4kqk></a><div class="meta" data-astro-cid-jo6i4kqk>© 2026 Christopher Klose · kloseup.eu</div></div><div class="foot-links" data-astro-cid-jo6i4kqk><a${addAttribute(`${baseUrl}impressum`, "href")} data-astro-cid-jo6i4kqk>Impressum</a><a${addAttribute(`${baseUrl}datenschutz`, "href")} data-astro-cid-jo6i4kqk>Datenschutz</a></div></div></footer>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Footer.astro", void 0);
//#endregion
export { $$Layout as i, $$Header as n, $$Logo as r, $$Footer as t };
