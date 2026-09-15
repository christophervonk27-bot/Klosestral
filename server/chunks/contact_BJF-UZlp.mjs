globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
//#region src/pages/api/contact.ts
var contact_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, locals }) => {
	try {
		const formData = await request.formData();
		if (formData.get("website")?.toString()) return new Response(JSON.stringify({
			success: true,
			message: "Nachricht gesendet!"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
		const name = formData.get("name")?.toString().trim() || "";
		const email = formData.get("email")?.toString().trim() || "";
		const message = formData.get("message")?.toString().trim() || "";
		if (!name || !email || !message) return new Response(JSON.stringify({
			success: false,
			error: "Bitte füllen Sie alle Pflichtfelder aus."
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return new Response(JSON.stringify({
			success: false,
			error: "Bitte geben Sie eine gültige E-Mail-Adresse ein."
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const nameParts = name.split(/\s+/);
		const firstName = nameParts[0] || "";
		const lastName = nameParts.slice(1).join(" ") || "";
		const runtimeEnv = locals?.runtime?.env;
		const brevoApiKey = runtimeEnv?.BREVO_API_KEY;
		if (!brevoApiKey) {
			const availableKeys = runtimeEnv ? Object.keys(runtimeEnv).join(", ") || "(leer — keine Umgebungsvariablen gebunden)" : "locals.runtime.env ist undefined";
			console.error("BREVO_API_KEY fehlt im Worker-Runtime! Verfügbare Schlüssel:", availableKeys);
			return new Response(JSON.stringify({
				success: false,
				error: "Konfigurationsfehler: Brevo API-Key fehlt."
			}), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
		}
		const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
			method: "POST",
			headers: {
				"api-key": brevoApiKey,
				"Content-Type": "application/json",
				"accept": "application/json"
			},
			body: JSON.stringify({
				email,
				attributes: {
					FIRSTNAME: firstName,
					LASTNAME: lastName,
					ANFRAGE: message
				},
				listIds: [4],
				updateEnabled: true
			})
		});
		if (!brevoResponse.ok) {
			const errorData = await brevoResponse.text();
			console.error("Brevo API Fehler:", brevoResponse.status, errorData);
		}
		return new Response(JSON.stringify({
			success: true,
			message: "Nachricht gesendet!"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Contact form Fehler:", error);
		return new Response(JSON.stringify({
			success: false,
			error: "Server-Fehler beim Senden der Nachricht."
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/contact@_@ts
var page = () => contact_exports;
//#endregion
export { page };
