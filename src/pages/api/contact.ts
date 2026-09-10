import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();
    const privacy = formData.get('privacy') === 'on';
    const botcheck = formData.get('botcheck');

    // Honeypot — bots fill hidden fields
    if (botcheck) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!privacy) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte stimmen Sie der Datenschutzerklärung zu.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[\s@]+@[\s@]+\.[\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Resend API key from Cloudflare runtime env
    const runtime = locals.runtime;
    const resendKey = runtime?.env?.RESEND_API_KEY;

    if (!resendKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Serverfehler – E-Mail-Dienst nicht konfiguriert.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'kontakt@kloseup.eu',
        to: 'christopher@kloseup.eu',
        subject: `Neue Kontaktanfrage von ${name}`,
        reply_to: email,
        text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
        html: `<h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!res.ok) {
      console.error('Resend API error:', await res.text());
      return new Response(
        JSON.stringify({ success: false, error: 'Fehler beim Versenden der E-Mail.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Nachricht erfolgreich gesendet.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Serverfehler beim Verarbeiten der Anfrage.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
