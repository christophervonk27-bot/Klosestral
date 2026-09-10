import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Honeypot
    const honeypot = formData.get('website')?.toString();
    if (honeypot) {
      return new Response(
        JSON.stringify({ success: true, message: 'Checkliste angefordert!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Felder extrahieren
    const email = formData.get('email')?.toString().trim() || '';
    const name = formData.get('name')?.toString().trim() || '';
    const consent = formData.get('consent')?.toString();

    // Validierung
    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: 'E-Mail-Adresse ist erforderlich.' }),
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

    if (!consent) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte stimmen Sie der Datenschutzerklärung zu.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Namen aufteilen (falls angegeben)
    const nameParts = name.split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Kontakt in Brevo anlegen
    // listIds: [5] — ersetze mit der ID der Liste "Checklisten-Downloads"
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': import.meta.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
        },
        listIds: [5], // ERSETZE mit deiner Listen-ID für "Checklisten-Downloads"
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error('Brevo API Fehler:', brevoResponse.status, errorData);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Checkliste angefordert! Bitte prüfen Sie Ihr Postfach.'
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Opt-in form Fehler:', error);
    return new Response(
      JSON.stringify({ success: false,
        error: 'Server-Fehler beim Senden der Anfrage.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
