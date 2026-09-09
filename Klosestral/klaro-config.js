window.klaroConfig = {
  version: 1,
  elementID: 'klaro',
  noAutoLoad: false,
  storageMethod: 'localStorage',
  cookieName: 'klaro',
  default: false,
  mustConsent: false,
  acceptAll: true,
  groupByPurpose: true,
  translations: {
    de: {
      privacyPolicyUrl: '/datenschutz',
      consentNotice: {
        description: 'Um unsere Website für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.'
      },
      consentModal: {
        title: 'Einwilligung in die Verwendung von Cookies',
        description: 'Auf dieser Website werden Cookies verwendet, um die Nutzung der Website zu analysieren. Die Informationen werden an unsere Partner für Analyse weitergegeben. Mit Ihrer Zustimmung helfen Sie uns, unsere Website zu verbessern.',
        acceptAll: 'Alle akzeptieren',
        acceptSelected: 'Auswahl akzeptieren',
        declineAll: 'Alle ablehnen'
      },
      purposes: {
        analytics: {
          title: 'Analyse',
          description: 'Dient der Analyse des Nutzerverhaltens und ermöglicht uns, die Funktionsfähigkeit unserer Website zu messen, zu verstehen und zu verbessern.',
          required: false
        }
      },
      apps: {
        googleAnalytics: {
          title: 'Google Analytics',
          description: 'Erstellt Nutzerprofile, um das Nutzerverhalten auf unserer Website zu analysieren.',
          purposes: ['analytics']
        }
      }
    }
  },
  apps: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: ['_ga', '_ga_*', '_gid'],
      required: false,
      optOut: false
    }
  ]
};
