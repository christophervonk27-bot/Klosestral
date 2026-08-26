import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

// Pfad zur JSON-Datei, in der E-Mails gespeichert werden
const DATA_DIR = path.join(process.cwd(), 'data');
const EMAILS_FILE = path.join(DATA_DIR, 'optin-emails.json');

// Stelle sicher, dass das data-Verzeichnis existiert
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Erstelle die Datei mit leeren Array, falls sie nicht existiert
if (!fs.existsSync(EMAILS_FILE)) {
  fs.writeFileSync(EMAILS_FILE, JSON.stringify([], null, 2));
}

export const post: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: 'E-Mail ist erforderlich' }),
        { status: 400 }
      );
    }

    // Einfache E-Mail-Validierung
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Ungültige E-Mail-Adresse' }),
        { status: 400 }
      );
    }

    // Lesen der bestehenden E-Mails
    const existingEmails = JSON.parse(fs.readFileSync(EMAILS_FILE, 'utf-8'));

    // Neue E-Mail mit Timestamp hinzufügen
    const newEntry = {
      email,
      timestamp: new Date().toISOString(),
      source: 'optin-form'
    };

    existingEmails.push(newEntry);

    // Zurück in die Datei schreiben
    fs.writeFileSync(EMAILS_FILE, JSON.stringify(existingEmails, null, 2));

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'E-Mail gespeichert! Danke für dein Interesse.' 
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Speichern der E-Mail:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Server-Fehler beim Speichern der E-Mail' 
      }),
      { status: 500 }
    );
  }
};
