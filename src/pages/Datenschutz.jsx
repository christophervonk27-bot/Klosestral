import React from 'react';

function Datenschutz() {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-gray-600">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich 
              auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In dieser Datenschutzerklärung informieren wir Sie über 
              die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Kontakt mit uns</h2>
            <p className="text-gray-600">
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten 
              zwecks Bearbeitung der Anfrage und für den Fall von Anfolgefragen bei uns gespeichert. Diese Daten geben wir nicht 
              ohne Ihre Einwilligung weiter.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Ihre Rechte</h2>
            <p className="text-gray-600">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, 
              Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen 
              das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, 
              können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>
            <p className="text-gray-600">
              In Österreich ist dies die <strong>Datenschutzbehörde</strong>:
            </p>
            <p className="text-gray-600">
              Österreichische Datenschutzbehörde<br />
              Barichgasse 40-42<br />
              1030 Wien<br />
              E-Mail: <a href="mailto:dsb@dsb.gv.at" className="text-primary-600 hover:underline">dsb@dsb.gv.at</a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Sie erreichen uns unter:</h2>
            <p className="text-gray-600">Christopher Klose</p>
            <p className="text-gray-600">E-Mail: <a href="mailto:christopher@kloseup.eu" className="text-primary-600 hover:underline">christopher@kloseup.eu</a></p>

            <h2 className="text-2xl font-bold text-gray-900">Datenübertragung bei Vertragsabschluss</h2>
            <p className="text-gray-600">
              Wir weisen darauf hin, dass zum Zweck einer einfachen Abwicklung des Vertragsabschlusses zwischen dem Webseitenbetreiber 
              und dem Kunden, die Daten des Bestellers auch im Rahmen der Vertragsabwicklung an uns als Betreiber dieser Website übermittelt werden.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">Externe Links</h2>
            <p className="text-gray-600">
              Unsere Website enthält Links zu anderen Webseiten. Wir haben keinen Einfluss auf die Einhaltung der Datenschutzbestimmungen 
              durch die Betreiber dieser externen Webseiten. Daher können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
              Dies gilt insbesondere für die Inhalte von Links, die auf der jeweiligen Website enthalten sind, sowie für weitere 
              Links, die auf den verlinkten Seiten enthalten sind. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte 
              sowie für Schäden, die durch die Nutzung der genannten Informationen entstehen, übernehmen wir keine Haftung.
            </p>

            <p className="text-gray-600 pt-6">Stand: August 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Datenschutz;