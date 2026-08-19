import React from 'react';
import { Link } from 'react-router-dom';

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

function Leistungen() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Unsere Leistungen</h1>
            <p className="text-gray-600 text-lg">
              Entdecken Sie, wie wir Ihnen mit Zoho-Produkten helfen können, Ihr Unternehmen digitaler und effizienter zu gestalten.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              { id: 'bigin', label: 'Zoho Bigin', icon: <UsersIcon /> },
              { id: 'crm', label: 'Zoho CRM', icon: <ChartIcon /> },
              { id: 'analytics', label: 'Zoho Analytics', icon: <AnalyticsIcon /> },
              { id: 'calendar', label: 'Calendar & Meet', icon: <CalendarIcon /> },
            ].map((service) => (
              <a key={service.id} href={`#${service.id}`} className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                {service.icon}
                <span>{service.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="bigin" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4"><UsersIcon /><h2 className="text-3xl font-bold text-gray-900">Zoho Bigin</h2></div>
              <p className="text-lg text-gray-600 mb-6">Der perfekte Einstieg in die Welt der CRM-Systeme – speziell für Kleinstunternehmen und Solopreneurs entwickelt.</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unsere Leistungen:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Bedarfsanalyse und Beratung</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Setup und Konfiguration</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Datenmigration von bestehenden Systemen</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Schulung Ihrer Mitarbeiter</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Laufende Betreuung im Retainer-Modell</span></div>
              </div>
              <div className="mt-8"><Link to="/kontakt" className="btn btn-primary">Bigin-Beratung anfragen</Link></div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal für:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Freiberufler und Solopreneurs</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Kleinstunternehmen (1-5 Mitarbeiter)</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Einfache Lead-Verwaltung</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Kostengünstige Lösung</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="crm" className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal für:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Wachsende KMU (5-50 Mitarbeiter)</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Komplexe Verkaufsprozesse</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Automatisierung von Workflows</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Detaillierte Reporting-Funktionen</span></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4"><ChartIcon /><h2 className="text-3xl font-bold text-gray-900">Zoho CRM</h2></div>
              <p className="text-lg text-gray-600 mb-6">Die umfassende CRM-Lösung für Unternehmen, die wachsen wollen. Mit Zoho CRM verwalten Sie nicht nur Ihre Kontakte, sondern optimieren Ihren gesamten Verkaufsprozess.</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unsere Leistungen:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Individuelle Anpassung an Ihre Prozesse</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Integration mit anderen Zoho-Produkten</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Automatisierung von Routineaufgaben</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Erweiterte Reporting- und Analysefunktionen</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Schulung und laufende Betreuung</span></div>
              </div>
              <div className="mt-8"><Link to="/kontakt" className="btn btn-primary">CRM-Beratung anfragen</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section id="analytics" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4"><AnalyticsIcon /><h2 className="text-3xl font-bold text-gray-900">Zoho Analytics</h2></div>
              <p className="text-lg text-gray-600 mb-6">Verwandeln Sie Ihre Daten in wertvolle Erkenntnisse. Mit Zoho Analytics erstellen Sie professionelle Dashboards und Berichte, die Ihnen helfen, bessere Entscheidungen zu treffen.</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unsere Leistungen:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Erstellung individueller Dashboards</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Datenintegration aus verschiedenen Quellen</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Automatisierte Berichterstattung</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Schulung in Datenanalyse und -interpretation</span></div>
              </div>
              <div className="mt-8"><Link to="/kontakt" className="btn btn-primary">Analytics-Beratung anfragen</Link></div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal für:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Unternehmen mit großen Datenmengen</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Datengetriebene Entscheidungsfindung</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Visuelle Datenaufbereitung</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Kollaborative Analyse</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal für:</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Remote-Teams</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Unternehmen mit vielen Terminen</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Kunden mit internationalem Fokus</span></li>
                <li className="flex items-center space-x-2"><svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>Bedarf an professionellem Terminmanagement</span></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-4"><CalendarIcon /><h2 className="text-3xl font-bold text-gray-900">Zoho Calendar & Meet</h2></div>
              <p className="text-lg text-gray-600 mb-6">Professionelles Terminmanagement und Videokonferenzen in einem System. Perfekt für Unternehmen, die auf Remote-Zusammenarbeit setzen.</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unsere Leistungen:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Einrichtung und Konfiguration</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Integration mit anderen Kalendern (Google, Outlook)</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Schulung in der Nutzung</span></div>
                <div className="flex items-center space-x-3"><div className="w-2 h-2 bg-primary-600 rounded-full"></div><span>Technische Betreuung</span></div>
              </div>
              <div className="mt-8"><Link to="/kontakt" className="btn btn-primary">Calendar-Beratung anfragen</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihre Zoho-Lösung?</h2>
            <p className="text-primary-100 text-lg mb-8">Kontaktieren Sie mich für eine unverbindliche Beratung und erfahren Sie, wie wir Ihr Unternehmen mit Zoho-Produkten voranbringen können.</p>
            <Link to="/kontakt" className="btn btn-secondary text-primary-600 bg-white hover:bg-gray-100">Jetzt Beratung anfragen</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leistungen;