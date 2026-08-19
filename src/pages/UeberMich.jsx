import React from 'react';
import { Link } from 'react-router-dom';

const UserIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
    <path d="M12 2v20M2 7h20" />
  </svg>
);

const NetworkIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="1" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
    <line x1="1" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="23" y2="12" />
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

function UeberMich() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Über mich</h1>
            <p className="text-gray-600 text-lg">Erfahren Sie mehr über meine Expertise und wie ich Ihnen helfen kann.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserIcon className="w-16 h-16 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Christopher Klose</h2>
                <p className="text-gray-600">Zoho-Berater & Digitalisierungsexperte</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Mein Werdegang</h2>
              <p className="text-gray-600">
                Seit mehreren Jahren bin ich im Digitalisierungsbereich tätig und habe dabei umfangreiche Erfahrung mit Zoho-Produkten gesammelt. 
                Mein Fokus liegt auf der praktischen Anwendung – ich kenne die Herausforderungen und Bedürfnisse von KMU aus erster Hand.
              </p>
              <p className="text-gray-600">
                Neben meiner Haupttätigkeit biete ich nun auch nebenberuflich Zoho-Beratung an, mit dem Ziel, lokalen Unternehmen in Salzburg 
                und Umgebung zu helfen, ihre Prozesse zu digitalisieren und effizienter zu gestalten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meine Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center space-x-3 mb-4"><BriefcaseIcon /><h3 className="text-xl font-semibold text-gray-900">Berufserfahrung</h3></div>
              <p className="text-gray-600 mb-4">Aktuell arbeite ich im Digitalisierungsbereich und setze dort Zoho-Produkte eigenverantwortlich ein. Diese praktische Erfahrung bringt mir das nötige Know-how, um Ihre Herausforderungen zu verstehen und passende Lösungen zu entwickeln.</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><CheckIcon /><span>Jahre der Erfahrung mit Zoho-Produkten</span></li>
                <li className="flex items-center space-x-2"><CheckIcon /><span>Praktische Implementierungserfahrung</span></li>
                <li className="flex items-center space-x-2"><CheckIcon /><span>Projektmanagement-Kenntnisse</span></li>
              </ul>
            </div>
            <div className="card">
              <div className="flex items-center space-x-3 mb-4"><NetworkIcon /><h3 className="text-xl font-semibold text-gray-900">Netzwerk & Kooperationen</h3></div>
              <p className="text-gray-600 mb-4">Ich bin gut vernetzt in der lokalen IT-Szene und arbeite mit verschiedenen Partnern zusammen, um Ihnen ein umfassendes Angebot zu bieten.</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><CheckIcon /><span>WKO Salzburg Gründerservice</span></li>
                <li className="flex items-center space-x-2"><CheckIcon /><span>Fachgruppe UBIT Salzburg</span></li>
                <li className="flex items-center space-x-2"><CheckIcon /><span>KMU.DIGITAL-Berater (in Registrierung)</span></li>
                <li className="flex items-center space-x-2"><CheckIcon /><span>Zoho-Partnerprogramm (geplant)</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Mein Zoho-Fokus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zoho Bigin</h3>
              <p className="text-gray-600">Der perfekte Einstieg in die CRM-Welt für Kleinstunternehmen. Ich helfe Ihnen, Bigin optimal für Ihre Bedürfnisse einzurichten.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zoho CRM</h3>
              <p className="text-gray-600">Die umfassende Lösung für wachsende Unternehmen. Meine Expertise umfasst die gesamte Bandbreite von der Implementierung bis zur Schulung Ihrer Mitarbeiter.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zoho Analytics</h3>
              <p className="text-gray-600">Datenanalyse und Reporting für datengetriebene Entscheidungen. Ich erstelle für Sie individuelle Dashboards und Berichte.</p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zoho Calendar & Meet</h3>
              <p className="text-gray-600">Professionelles Terminmanagement und Videokonferenzen. Ideal für Unternehmen mit Remote-Teams oder vielen Kundenkontakten.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meine Philosophie</h2>
            <p className="text-primary-100 text-lg mb-4">Ich glaube daran, dass Digitalisierung nicht kompliziert sein muss. Mein Ansatz ist praxisorientiert und auf Ihre individuellen Bedürfnisse zugeschnitten.</p>
            <p className="text-primary-100 text-lg mb-8">Als lokaler Anbieter in Salzburg kenne ich die Herausforderungen von KMU in der Region und kann Ihnen gezielt helfen, diese zu meistern.</p>
            <Link to="/kontakt" className="btn btn-secondary text-primary-600 bg-white hover:bg-gray-100">Lassen Sie uns reden</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UeberMich;