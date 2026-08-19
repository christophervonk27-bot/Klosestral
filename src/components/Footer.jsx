import React from 'react';
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <span className="font-bold text-white">Zoho-Beratung</span>
                <span className="text-sm text-gray-400 block">Salzburg</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professionelle Zoho-Beratung und Integration für lokale KMU in Salzburg und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/leistungen', label: 'Leistungen' },
                { path: '/ueber-mich', label: 'Über mich' },
                { path: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:christopher@kloseup.eu" className="text-gray-400 hover:text-white transition-colors">
                  christopher@kloseup.eu
                </a>
              </li>
              <li className="text-gray-400 text-sm">Salzburg, Österreich</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Zoho-Beratung Salzburg. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;