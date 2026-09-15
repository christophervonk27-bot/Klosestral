import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();

    // Honeypot — Spambots füllen dieses versteckte Feld aus
    const honeypot = formData.get('website')?.toString();
    if (honeypot) {
      // Tu so als wäre alles OK, aber ignoriere die Anfrage
      return new Response(
        JSON.stringify({ success: true, message: 'Nachricht gesendet!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Felder extrahieren
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    // Validierung
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Namen in Vor- und Nachname aufteilen
    const nameParts = name.split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Brevo API Key — im deployed Cloudflare Worker NUR über locals.runtime.env verfügbar.
    // WICHTIG: import.meta.env darf hier NICHT verwendet werden — der Adapter wirft damit einen Fehler!
    const runtimeEnv = (locals as { runtime?: { env?: Record<string, string | undefined> } })?.runtime?.env;
    const brevoApiKey = runtimeEnv?.BREVO_API_KEY;

    if (!brevoApiKey) {
      // Diagnose: welche Schlüssel stehen im Worker-Runtime tatsächlich zur Verfügung?
      const availableKeys = runtimeEnv
        ? Object.keys(runtimeEnv).join(', ') || '(leer — keine Umgebungsvariablen gebunden)'
        : 'locals.runtime.env ist undefined';
      console.error('BREVO_API_KEY fehlt im Worker-Runtime! Verfügbare Schlüssel:', availableKeys);
      return new Response(
        JSON.stringify({ success: false, error: 'Konfigurationsfehler: Brevo API-Key fehlt.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Kontakt in Brevo anlegen
    // listIds: [4] — ID der Liste "Kontaktanfragen"
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          ANFRAGE: message,
        },
        listIds: [4],
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error('Brevo API Fehler:', brevoResponse.status, errorData);
      // Wir geben trotzdem success zurück, damit der Besucher keine Fehlermeldung sieht
      // Die Anfrage ist protokolliert und kann manuell nachverfolgt werden
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Nachricht gesendet!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form Fehler:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Server-Fehler beim Senden der Nachricht.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
