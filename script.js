/**
 * kloseup | Zoho-Beratung für KMU in Salzburg
 * JavaScript für Interaktivität
 */

// ============================================
// DOM Elements
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// ============================================
// Mobile Navigation
// ============================================
if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navList.classList.toggle('active');
    });

    // Close navigation when clicking a link
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============================================
// Header Scroll Effect
// ============================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// ============================================
// Contact Form Handling
// ============================================
if (contactForm && formMessage) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showFormMessage('Bitte füllen Sie alle Felder aus.', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(data.email)) {
            showFormMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual backend integration)
        showFormMessage('Ihre Nachricht wurde gesendet! Wir melden uns in Kürze bei Ihnen.', 'success');
        contactForm.reset();
        
        // In a real implementation, you would send the data to a backend:
        // fetch('your-backend-endpoint', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => showFormMessage('Nachricht gesendet!', 'success'))
        // .catch(error => showFormMessage('Fehler beim Senden.', 'error'));
    });
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('kloseup Website initialized');
});
