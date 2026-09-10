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
createAstro("https://klosestral.pages.dev");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Layout;
	const { title = "kloseup. – Zoho-Beratung & Integration | Christopher Klose", description = "Zoho-Beratung und Integration für kleine und mittlere Unternehmen in Salzburg und der Grenzregion." } = Astro2.props;
	const baseUrl = "/";
	const siteUrl = "https://klosestral.pages.dev";
	const canonicalUrl = `${siteUrl}${Astro2.url.pathname.replace(/\/$/, "")}`;
	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "kloseup",
		"description": "Zoho-Beratung & Integration für KMU in Salzburg",
		"url": `${siteUrl}`,
		"telephone": "+43-664-1234567",
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
	return renderTemplate`<html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(`https://klosestral.pages.dev/logos/Logo_mit_Text.svg`, "content")}><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="kloseup – Zoho-Beratung &amp; Integration in Salzburg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet"><link rel="icon" type="image/svg+xml"${addAttribute(`${baseUrl}logos/Logo.svg`, "href")}><!-- Schema.org Structured Data --><script type="application/ld+json">${unescapeHTML(JSON.stringify(localBusinessSchema))}<\/script>${renderSlot($$result, $$slots["head"])}${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}<!-- Klaro Cookie Consent --><script${addAttribute("/klaro-config.js", "src")}><\/script><script${addAttribute("/klaro.js", "src")}><\/script><!-- Google Analytics - lädt erst nach Consent --><script type="text/plain" data-type="application/javascript" data-name="google-analytics">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
  <\/script>${renderScript($$result, "/home/runner/work/Klosestral/Klosestral/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/runner/work/Klosestral/Klosestral/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/components/Logo.astro
createAstro("https://klosestral.pages.dev");
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
	return renderTemplate`${showLink ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`${baseUrl}`, "href")} class="brand" aria-label="kloseup – Startseite"><img${addAttribute(`${baseUrl}logos/Logo_mit_Text.svg`, "src")} alt="kloseup" class="logo-img"${addAttribute(sizeStyle, "style")}></a>` : renderTemplate`<img${addAttribute(`${baseUrl}logos/Logo_mit_Text.svg`, "src")} alt="kloseup" class="logo-img"${addAttribute(sizeStyle, "style")}>`}`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Logo.astro", void 0);
//#endregion
//#region src/components/Header.astro
createAstro("https://klosestral.pages.dev");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Header;
	const { currentSection } = Astro2.props;
	const baseUrl = "/";
	return renderTemplate`${maybeRenderHead($$result)}<header data-astro-cid-nen7h5rs><div class="nav" data-astro-cid-nen7h5rs>${renderComponent($$result, "Logo", $$Logo, {
		"variant": "header",
		"data-astro-cid-nen7h5rs": true
	})}<ul class="nav-links" id="navLinks" data-astro-cid-nen7h5rs><li data-astro-cid-nen7h5rs><a${addAttribute(`${baseUrl}`, "href")} data-astro-cid-nen7h5rs>Startseite</a></li><li data-astro-cid-nen7h5rs><a${addAttribute(`${baseUrl}ueber-mich`, "href")} data-astro-cid-nen7h5rs>Über mich</a></li><li data-astro-cid-nen7h5rs><a${addAttribute(`${baseUrl}leistungen`, "href")} data-astro-cid-nen7h5rs>Leistungen</a></li><li data-astro-cid-nen7h5rs><a${addAttribute(`${baseUrl}kontakt`, "href")} data-astro-cid-nen7h5rs>Kontakt</a></li></ul><a${addAttribute(`${baseUrl}kontakt#kontakt-formular`, "href")} class="status-pill" aria-label="Verfügbar für Projekte – zur Kontaktseite" data-astro-cid-nen7h5rs><span class="status-dot" aria-hidden="true" data-astro-cid-nen7h5rs></span>Verfügbar für Projekte</a><button class="nav-toggle" aria-label="Menü öffnen" aria-expanded="false" id="navToggle" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span></button></div></header>${renderScript($$result, "/home/runner/work/Klosestral/Klosestral/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const baseUrl = "/";
	return renderTemplate`${maybeRenderHead($$result)}<footer data-astro-cid-jo6i4kqk><div class="wrap" data-astro-cid-jo6i4kqk><div class="foot-row" data-astro-cid-jo6i4kqk><a${addAttribute(`${baseUrl}`, "href")} class="brand" aria-label="kloseup – Startseite" data-astro-cid-jo6i4kqk><img${addAttribute(`${baseUrl}logos/Logo_mit_Text.svg`, "src")} alt="kloseup" class="logo-img" data-astro-cid-jo6i4kqk></a><div class="meta" data-astro-cid-jo6i4kqk>© 2026 Christopher Klose · kloseup.eu</div></div><div class="foot-links" data-astro-cid-jo6i4kqk><a${addAttribute(`${baseUrl}impressum`, "href")} data-astro-cid-jo6i4kqk>Impressum</a><a${addAttribute(`${baseUrl}datenschutz`, "href")} data-astro-cid-jo6i4kqk>Datenschutz</a></div></div></footer>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/Footer.astro", void 0);
//#endregion
export { $$Layout as i, $$Header as n, $$Logo as r, $$Footer as t };
