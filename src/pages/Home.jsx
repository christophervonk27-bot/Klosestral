import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professionelle <span className="gradient-text">Zoho-Beratung</span> für KMU
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Lokale Unterstützung bei der Implementierung und Nutzung von Zoho-Produkten für kleine und mittlere Unternehmen in Salzburg und dem angrenzenden bayerischen Grenzgebiet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt" className="btn btn-primary">Kostenlose Erstberatung</Link>
                <Link to="/leistungen" className="btn btn-secondary">Unsere Leistungen</Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-primary-100 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">Z</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-zoho-blue rounded-full"></div>
                        <div className="w-3 h-3 bg-zoho-orange rounded-full"></div>
                      </div>
                      <p className="text-gray-600 font-medium">Zoho-Produkte für Ihr Unternehmen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unsere Zoho-Lösungen</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Entdecken Sie, wie Zoho-Produkte Ihr Unternehmen digitaler und effizienter machen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card group">
              <div className="feature-icon"><UsersIcon /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zoho Bigin</h3>
              <p className="text-gray-600 mb-4">CRM-Einstieg für Kleinstunternehmen – einfach, intuitiv und kostengünstig.</p>
              <Link to="/leistungen#bigin" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="card group">
              <div className="feature-icon"><ChartIcon /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zoho CRM</h3>
              <p className="text-gray-600 mb-4">Die Standardlösung für wachsende KMU – umfassend und anpassbar.</p>
              <Link to="/leistungen#crm" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="card group">
              <div className="feature-icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Zoho Analytics</h3>
              <p className="text-gray-600 mb-4">Reporting und Dashboards für datengetriebene Entscheidungen.</p>
              <Link to="/leistungen#analytics" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="card group">
              <div className="feature-icon"><CalendarIcon /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calendar & Meet</h3>
              <p className="text-gray-600 mb-4">Terminmanagement und Videokonferenzen – perfekt für Remote-Teams.</p>
              <Link to="/leistungen#calendar" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Mehr erfahren
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Warum Zoho-Beratung Salzburg?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Wir bieten Ihnen lokale Expertise mit praktischer Erfahrung.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokale Betreuung</h3>
              <p className="text-gray-600">Vor-Ort-Service in Salzburg und Umgebung – wir verstehen Ihre regionalen Bedürfnisse.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Praktische Erfahrung</h3>
              <p className="text-gray-600">Jahrelange Erfahrung im Digitalisierungsbereich – wir sprechen Ihre Sprache.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Förderungen nutzen</h3>
              <p className="text-gray-600">Wir helfen Ihnen, Förderprogramme wie KMU.DIGITAL oder den Salzburger Digi-Bonus zu nutzen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Über mich</h2>
              <p className="text-gray-600 mb-6">
                Ich bin Christopher Klose – seit Jahren im Digitalisierungsbereich tätig und spezialisiert auf Zoho-Produkte. 
                Meine Erfahrung aus der Praxis hilft Ihnen, die richtigen Lösungen für Ihr Unternehmen zu finden.
              </p>
              <p className="text-gray-600 mb-6">
                Nebenberuflich biete ich Ihnen meine Expertise an – mit Fokus auf lokale KMU in Salzburg und dem angrenzenden bayerischen Grenzgebiet.
              </p>
              <Link to="/ueber-mich" className="btn btn-primary">Mehr über mich</Link>
            </div>
            <div className="bg-primary-50 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3"><CheckIcon /><span>10+ Jahre Digitalisierungserfahrung</span></div>
                <div className="flex items-center space-x-3"><CheckIcon /><span>Zoho-Experte mit Praxiserfahrung</span></div>
                <div className="flex items-center space-x-3"><CheckIcon /><span>Vertriebserfahrung für optimale Beratung</span></div>
                <div className="flex items-center space-x-3"><CheckIcon /><span>Lokale Präsenz in Salzburg</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="text-primary-100 text-lg mb-8">
              Kontaktieren Sie mich für eine unverbindliche Beratung und erfahren Sie, wie Zoho-Produkte Ihr Unternehmen voranbringen können.
            </p>
            <a href="mailto:christopher@kloseup.eu" className="btn btn-secondary text-primary-600 bg-white hover:bg-gray-100">
              <MailIcon className="mr-2" />
              christopher@kloseup.eu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;