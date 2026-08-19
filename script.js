/**
 * kloseup | Professionelle Zoho-Beratung
 * Modernes JavaScript mit Scroll-Animationen, Formular-Validation und Interaktivität
 */

// ============================================
// DOM Elements
// ============================================
const loadingScreen = document.querySelector('.loading-screen');
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.header');
const backToTopBtn = document.querySelector('.back-to-top');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// ============================================
// Loading Screen
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }, 2000); // 2 Sekunden Ladeanimation
});

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
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Header background on scroll
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to top button visibility
    if (currentScroll > 300) {
        backToTopBtn?.classList.add('visible');
    } else {
        backToTopBtn?.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Back to Top Button
// ============================================
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Scroll Animations (Intersection Observer)
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

// Observe all sections
const allSections = document.querySelectorAll('.section, .hero, .footer');
allSections.forEach(section => {
    observer.observe(section);
});

// Observe cards for staggered animation
const allCards = document.querySelectorAll('.service-card, .benefit-card, .pricing-card');
let delay = 0;

allCards.forEach((card, index) => {
    card.style.transitionDelay = `${delay}ms`;
    observer.observe(card);
    delay += 100; // 100ms delay between each card
});

// Reset delay for each new section
const cardGroups = document.querySelectorAll('.services-grid, .benefits-grid, .pricing-grid');
cardGroups.forEach(group => {
    const cards = group.querySelectorAll('.service-card, .benefit-card, .pricing-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 100}ms`;
    });
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
            showFormMessage('Bitte füllen Sie alle Pflichtfelder aus.', 'error');
            return;
        }
        
        // Validate email format
        if (!isValidEmail(data.email)) {
            showFormMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual backend integration)
        showFormMessage('Ihre Nachricht wurde erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.', 'success');
        contactForm.reset();
        
        // In a real implementation, you would send the data to a backend:
        // Example with Formspree (free form backend):
        // contactForm.action = 'https://formspree.io/f/YOUR_FORM_ID';
        // contactForm.method = 'POST';
        // contactForm.submit();
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
            const headerHeight = header?.offsetHeight || 80;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Tilt Effect for Cards (Vanilla JS)
// ============================================
document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// Parallax Effect for Hero Section
// ============================================
const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.hero-image');

if (hero && heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (heroImage) {
            heroImage.style.transform = `translateY(${rate}px)`;
        }
    });
}

// ============================================
// Animate Numbers on Scroll (Stats Counter)
// ============================================
const statItems = document.querySelectorAll('.stat-item');

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('€') ? '€' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('€') ? '€' : '');
        }
    }, 16);
};

const observerForStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const target = parseInt(statNumber.textContent.replace(/[^0-9]/g, ''));
                animateCounter(statNumber, target);
            }
            observerForStats.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statItems.forEach(item => {
    observerForStats.observe(item);
});

// ============================================
// Glass Effect for Buttons on Hover
// ============================================
document.querySelectorAll('.btn-glass').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        btn.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`;
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// ============================================
// Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navList?.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
    }
});

// ============================================
// Lazy Loading for Images (if any)
// ============================================
document.querySelectorAll('img[data-src]').forEach(img => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    observer.observe(img);
});

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Prevent flash of unstyled content
    document.body.style.visibility = 'visible';
    
    // Initialize any additional features here
    console.log('kloseup Website initialized successfully');
});

// ============================================
// Error Handling for Critical Features
// ============================================
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.message);
    // You could send this to an error tracking service
});

// ============================================
// Performance Optimization
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    // Scroll handling logic here
}, 10);

window.addEventListener('scroll', debouncedScroll);
