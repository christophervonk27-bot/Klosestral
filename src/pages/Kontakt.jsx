import React from 'react';
import { Link } from 'react-router-dom';

const MailIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

function Kontakt() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kontakt</h1>
            <p className="text-gray-600 text-lg">Ich freue mich auf Ihre Anfrage. Hier finden Sie alle Möglichkeiten, um mit mir in Kontakt zu treten.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MailIcon className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Mail</h3>
              <p className="text-gray-600 mb-4">Schreiben Sie mir eine Nachricht – ich antworte in der Regel innerhalb von 24 Stunden.</p>
              <a href="mailto:christopher@kloseup.eu" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                christopher@kloseup.eu
              </a>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPinIcon className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Standort</h3>
              <p className="text-gray-600 mb-4">Ich bin in Salzburg ansässig und biete meine Dienstleistungen vorrangig im Raum Salzburg und dem angrenzenden bayerischen Grenzgebiet an.</p>
              <p className="font-medium text-gray-800">Salzburg, Österreich</p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ClockIcon className="text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verfügbarkeit</h3>
              <p className="text-gray-600 mb-4">Nebenberufliche Tätigkeit mit 10–15 Stunden pro Woche. Termine nach Vereinbarung.</p>
              <p className="font-medium text-gray-800">Mo–Fr: 17:00–20:00 Uhr</p>
              <p className="font-medium text-gray-800">Sa: 9:00–13:00 Uhr</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Or schreiben Sie mir direkt:</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <p className="text-gray-600 mb-4">Nutzen Sie einfach den E-Mail-Link oben oder senden Sie Ihre Anfrage direkt an:</p>
              <a href="mailto:christopher@kloseup.eu?subject=Anfrage%20Zoho-Beratung&body=Sehr%20geehrter%20Herr%20Klose,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20Zoho-Beratungsdienstleistungen.%20Bitte%20kontaktieren%20Sie%20mich%20für%20ein%20unverbindliches%20Gespräch.%0D%0A%0D%0AMit%20freundlichen%20Grüßen" className="btn btn-primary w-full text-center">
                <MailIcon className="mr-2" />
                E-Mail an christopher@kloseup.eu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihre Zoho-Lösung?</h2>
            <p className="text-primary-100 text-lg mb-8">Ich freue mich darauf, Sie kennenzulernen und zu besprechen, wie ich Ihr Unternehmen mit Zoho-Produkten unterstützen kann.</p>
            <a href="mailto:christopher@kloseup.eu" className="btn btn-secondary text-primary-600 bg-white hover:bg-gray-100">Jetzt Kontakt aufnehmen</a>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Häufige Fragen</h2>
            <p className="text-gray-600 mb-6">Hier finden Sie Antworten auf häufig gestellte Fragen. Für individuelle Anfragen stehe ich Ihnen gerne persönlich zur Verfügung.</p>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Bieten Sie auch Schulungen an?</h3>
                <p className="text-gray-600">Ja, ich biete individuelle Schulungen für Sie und Ihr Team an, damit Sie Zoho-Produkte optimal nutzen können.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Unterstützen Sie bei der Datenmigration?</h3>
                <p className="text-gray-600">Ja, ich helfe Ihnen bei der Migration Ihrer bestehenden Daten in Zoho-Produkte – egal ob von Excel, anderen CRM-Systemen oder Datenbanken.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Arbeiten Sie auch mit Unternehmen außerhalb von Salzburg?</h3>
                <p className="text-gray-600">Mein Fokus liegt auf dem Raum Salzburg und dem angrenzenden bayerischen Grenzgebiet. Bei Anfragen aus anderen Regionen prüfe ich individuell, ob ich Ihnen helfen kann.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kontakt;