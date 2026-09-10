globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as maybeRenderHead, i as renderComponent, p as addAttribute, u as renderTemplate } from "./server_CxJNEKB-.mjs";
import { t as createComponent } from "./compiler_BbSIq9rB.mjs";
import { r as $$Logo } from "./Footer_nFBoCAh8.mjs";
//#region src/components/OptInForm.astro
var $$OptInForm = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="optin-card" data-astro-cid-ul26w753><p class="eyebrow" data-astro-cid-ul26w753>Kostenlos</p><h3 data-astro-cid-ul26w753>Die ultimative Zoho-CRM-Checkliste für KMUs</h3><p data-astro-cid-ul26w753>Erhalten Sie unsere bewährte Checkliste – perfekt für den Einstieg in Zoho CRM. Tragt euch ein und ladet sie direkt herunter.</p><div class="sneak-peeks-container" data-astro-cid-ul26w753><div class="sneak-peeks-logo" data-astro-cid-ul26w753>${renderComponent($$result, "Logo", $$Logo, {
		"variant": "small",
		"showLink": false,
		"data-astro-cid-ul26w753": true
	})}</div><div class="sneak-peeks-center" data-astro-cid-ul26w753><h3 data-astro-cid-ul26w753>Sneak Peaks</h3><ul class="peek-list" data-astro-cid-ul26w753><li data-astro-cid-ul26w753>Prozessanalyse & Zieldefinition</li><li data-astro-cid-ul26w753>Schritt-für-Schritt CRM-Einrichtung</li><li data-astro-cid-ul26w753>Datenmigration aus Alt-Systemen</li><li data-astro-cid-ul26w753>Automatisierungen für Vertrieb & Service</li><li data-astro-cid-ul26w753>Integration mit E-Mail & Kalender</li></ul></div><div class="optin-form-wrapper" data-astro-cid-ul26w753><form id="optin-form" class="optin-form" action="/api/optin" method="POST" data-astro-cid-ul26w753><!-- HONEYPOT --><div style="position: absolute; left: -9999px; top: -9999px;" aria-hidden="true" data-astro-cid-ul26w753><label for="website-optin" data-astro-cid-ul26w753>Website (nicht ausfüllen)</label><input type="text" id="website-optin" name="website" tabindex="-1" autocomplete="off" data-astro-cid-ul26w753></div><div class="optin-group" data-astro-cid-ul26w753><label for="optin-name" class="optin-label" data-astro-cid-ul26w753>Ihr Name (optional)</label><input type="text" id="optin-name" name="name" class="optin-input" placeholder="Vor- und Nachname" data-astro-cid-ul26w753></div><div class="optin-group" data-astro-cid-ul26w753><label for="optin-email" class="optin-label" data-astro-cid-ul26w753>E-Mail-Adresse *</label><input type="email" id="optin-email" name="email" class="optin-input" placeholder="ihre@email.at" required data-astro-cid-ul26w753></div><div class="optin-group optin-consent" data-astro-cid-ul26w753><input type="checkbox" id="optin-consent" name="consent" value="yes" required data-astro-cid-ul26w753><label for="optin-consent" data-astro-cid-ul26w753>Ich habe die <a href="/datenschutz" target="_blank" data-astro-cid-ul26w753>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner E-Mail-Adresse zu. *</label></div><button type="submit" class="btn optin-btn" data-astro-cid-ul26w753><span class="btn-text" data-astro-cid-ul26w753>Checkliste anfordern</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-ul26w753>→</span></button></form></div></div><div id="optin-success" class="optin-success" style="display: none;" data-astro-cid-ul26w753><p class="optin-success-msg" data-astro-cid-ul26w753>Vielen Dank! Die Checkliste ist auf dem Weg zu Ihrem Postfach.</p><p class="optin-success-hint" style="color: var(--ink-soft); font-size: 13px; margin-top: 8px;" data-astro-cid-ul26w753>Bitte prüfen Sie auch Ihren Spam-Ordner.</p></div></div><script>
  document.getElementById('optin-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('optin-email').value.trim();
    const consent = document.getElementById('optin-consent').checked;
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    if (!consent) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Wird gesendet…';

    try {
      const formData = new FormData(e.target);
      const response = await fetch('/api/optin', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Server error');
      const data = await response.json();

      if (data.success) {
        document.getElementById('optin-form').style.display = 'none';
        document.getElementById('optin-success').style.display = 'block';
      } else {
        alert(data.error || 'Fehler beim Senden. Bitte versuchen Sie es später erneut.');
      }
    } catch (error) {
      console.error('Fehler:', error);
      alert('Netzwerkfehler. Bitte versuchen Sie es später erneut.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Checkliste anfordern';
    }
  });
<\/script>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/OptInForm.astro", void 0);
//#endregion
//#region src/components/ContactForm.astro
var $$ContactForm = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="contact-layout" data-astro-cid-vekgkm42><div class="contact-main" data-astro-cid-vekgkm42><div class="section-head" data-astro-cid-vekgkm42><p class="eyebrow" data-astro-cid-vekgkm42>Kontakt</p><h2 data-astro-cid-vekgkm42>Bereit für den ersten Blick auf Ihre Prozesse?</h2><p data-astro-cid-vekgkm42>Schreiben Sie mir kurz, worum es geht und ich melde mich zeitnah für ein unverbindliches Erstgespräch zurück.</p></div><form id="contact-form" class="form" action="/api/contact" method="POST" data-astro-cid-vekgkm42><!-- HONEYPOT — verstecktes Feld für Spambots --><div style="position: absolute; left: -9999px; top: -9999px;" aria-hidden="true" data-astro-cid-vekgkm42><label for="website-ct" data-astro-cid-vekgkm42>Website (nicht ausfüllen)</label><input type="text" id="website-ct" name="website" tabindex="-1" autocomplete="off" data-astro-cid-vekgkm42></div><!-- ENDE HONEYPOT --><div class="form-group" data-astro-cid-vekgkm42><label for="name" class="form-label" data-astro-cid-vekgkm42>Ihr Name *</label><input type="text" id="name" name="name" class="form-input" placeholder="Vor- und Nachname" required data-astro-cid-vekgkm42><span class="error-message" id="name-error" data-astro-cid-vekgkm42></span></div><div class="form-group" data-astro-cid-vekgkm42><label for="email" class="form-label" data-astro-cid-vekgkm42>E-Mail-Adresse *</label><input type="email" id="email" name="email" class="form-input" placeholder="ihre@email.at" required data-astro-cid-vekgkm42><span class="error-message" id="email-error" data-astro-cid-vekgkm42></span></div><div class="form-group" data-astro-cid-vekgkm42><label for="message" class="form-label" data-astro-cid-vekgkm42>Ihre Nachricht *</label><textarea id="message" name="message" class="form-input form-textarea" placeholder="Beschreiben Sie kurz, wobei ich Sie unterstützen kann …" rows="5" required data-astro-cid-vekgkm42></textarea><span class="error-message" id="message-error" data-astro-cid-vekgkm42></span></div><div class="form-group checkbox-group" data-astro-cid-vekgkm42><input type="checkbox" id="privacy" name="privacy" required data-astro-cid-vekgkm42><label for="privacy" data-astro-cid-vekgkm42>Ich habe die <a${addAttribute(`/datenschutz`, "href")} target="_blank" data-astro-cid-vekgkm42>Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu. *</label><span class="error-message" id="privacy-error" data-astro-cid-vekgkm42></span></div><button type="submit" class="btn btn-short" data-astro-cid-vekgkm42><span class="btn-text" data-astro-cid-vekgkm42>Nachricht senden</span><span class="btn-arrow" aria-hidden="true" data-astro-cid-vekgkm42>→</span></button></form><div id="form-success" class="form-success" style="display: none;" data-astro-cid-vekgkm42><h3 data-astro-cid-vekgkm42>Danke für Ihre Nachricht.</h3><p data-astro-cid-vekgkm42>Ich melde mich zeitnah bei Ihnen.</p></div></div>${renderComponent($$result, "OptInForm", $$OptInForm, { "data-astro-cid-vekgkm42": true })}</div><script>
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('name-error');
    if (!name) {
      nameError.textContent = 'Bitte geben Sie Ihren Namen ein.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!email) {
      emailError.textContent = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('message-error');
    if (!message) {
      messageError.textContent = 'Bitte schreiben Sie eine Nachricht.';
      isValid = false;
    } else {
      messageError.textContent = '';
    }

    // Privacy checkbox validation
    const privacy = document.getElementById('privacy').checked;
    const privacyError = document.getElementById('privacy-error');
    if (!privacy) {
      privacyError.textContent = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
      isValid = false;
    } else {
      privacyError.textContent = '';
    }

    if (isValid) {
      const formData = new FormData(e.target);
      const submitBtn = e.target.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = 'Wird gesendet…';

      fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) throw new Error('Server error');
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('form-success').style.display = 'block';
            document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            alert(data.error || 'Fehler beim Senden. Bitte versuchen Sie es später erneut.');
          }
        })
        .catch((error) => {
          console.error('Fehler:', error);
          alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.querySelector('.btn-text').textContent = 'Nachricht senden';
        });
    }
  });
<\/script>`;
}, "/home/runner/work/Klosestral/Klosestral/src/components/ContactForm.astro", void 0);
//#endregion
export { $$ContactForm as t };
