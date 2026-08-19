import React from 'react';

function Impressum() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impressum</h1>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-600">Christopher Klose</p>
              <p className="text-gray-600">[Ihre Adresse in Salzburg einfügen]</p>
              <p className="text-gray-600">Salzburg, Österreich</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">Kontakt</h2>
              <p className="text-gray-600">
                E-Mail: <a href="mailto:christopher@kloseup.eu" className="text-primary-600 hover:underline">christopher@kloseup.eu</a>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">Berufsbezeichnung</h2>
              <p className="text-gray-600">Freies Gewerbe: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik</p>
              <p className="text-gray-600">Gewerberegistrierung: Bei der zuständigen Bezirksverwaltungsbehörde Salzburg</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">Umsatzsteuer</h2>
              <p className="text-gray-600">Kleinunternehmerregelung gemäß § 6 Abs. 1 Z 27 UStG – keine Umsatzsteuerpflicht.</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">EU-Streitschlichtung</h2>
              <p className="text-gray-600">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-600">Unsere E-Mail-Adresse finden Sie oben im Kontaktbereich.</p>
              <p className="text-gray-600">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impressum;