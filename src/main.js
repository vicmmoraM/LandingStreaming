// ========================================
// ROROSTREAMING - MAIN JAVASCRIPT
// ========================================

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const mobileMenuBtn = document.getElementById('nav-mobile-btn');
const nav = document.getElementById('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        if (this.classList.contains('close')) {
            nav.classList.add('hidden');
            this.classList.remove('close');
        } else {
            nav.classList.remove('hidden');
            this.classList.add('close');
        }
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (nav && !nav.classList.contains('hidden')) {
                nav.classList.add('hidden');
                mobileMenuBtn.classList.remove('close');
            }
        }
    });
});

// ========================================
// SERVICE BUTTON INTERACTIONS
// ========================================
const serviceButtons = document.querySelectorAll('.service-button');

serviceButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;
        
        // Mostrar mensaje de contacto
        showContactMessage(serviceName);
    });
});

// ========================================
// PRICING BUTTON INTERACTIONS
// ========================================
const pricingButtons = document.querySelectorAll('.pricing-button');

pricingButtons.forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.closest('.pricing-card').querySelector('.pricing-header h3').textContent;
        
        // Redirigir a WhatsApp o mostrar formulario
        const message = `Hola! Estoy interesado en el plan ${plan} de RoRoStreaming`;
        const whatsappNumber = '593999999999'; // Cambiar por tu número
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

// ========================================
// FAQ ACCORDION
// ========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Toggle active class
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.querySelectorAll('.service-card, .benefit-card, .pricing-card, .testimonial-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// CONTACT FORM HANDLING (PLACEHOLDER)
// ========================================
function showContactMessage(serviceName) {
    const message = `Hola! Estoy interesado en ${serviceName} de RoRoStreaming`;
    const whatsappNumber = '593999999999'; // Cambiar por tu número real
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// ========================================
// COUNTER ANIMATION FOR STATS (OPCIONAL)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// FORM VALIDATION (Para futuro formulario de contacto)
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.length >= 10;
}

// ========================================
// LOCAL STORAGE FOR USER PREFERENCES
// ========================================
function saveUserPreference(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log('No se pudo guardar en localStorage', e);
    }
}

function getUserPreference(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.log('No se pudo leer localStorage', e);
        return null;
    }
}

// ========================================
// CURRENCY FORMATTER
// ========================================
function formatPrice(price) {
    return new Intl.NumberFormat('es-EC', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// ========================================
// LOADING ANIMATIONS
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear && footerYear.textContent.includes('2024')) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} RoRoStreaming. Todos los derechos reservados.`;
}

// ========================================
// PLATFORM BADGES INTERACTION
// ========================================
const platformBadges = document.querySelectorAll('.platform-badge');

platformBadges.forEach(badge => {
    badge.addEventListener('click', function() {
        const platform = this.textContent;
        const message = `Hola! Quiero información sobre cuentas de ${platform}`;
        const whatsappNumber = '593999999999';
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

// ========================================
// TESTIMONIALS AUTO-ROTATE (OPCIONAL)
// ========================================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    // Función opcional para rotar testimonios automáticamente
    if (testimonials.length > 0) {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        // Aquí puedes agregar lógica de animación
    }
}

// Descomentar para activar rotación automática cada 5 segundos
// setInterval(rotateTestimonials, 5000);

// ========================================
// CONSOLE LOG WITH STYLE
// ========================================
console.log(
    '%c🎬 RoRoStreaming ', 
    'color: #E50914; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
);
console.log(
    '%c✨ Las mejores cuentas premium de streaming', 
    'color: #999; font-size: 14px;'
);

// ========================================
// DEBOUNCE FUNCTION (UTILITY)
// ========================================
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

// ========================================
// WINDOW RESIZE HANDLER
// ========================================
const handleResize = debounce(() => {
    // Ajustar elementos en resize si es necesario
    const width = window.innerWidth;
    
    if (width < 768) {
        // Lógica para móvil
    } else {
        // Lógica para desktop
    }
}, 250);

window.addEventListener('resize', handleResize);

// ========================================
// SCROLL TO TOP BUTTON (OPCIONAL)
// ========================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 999;
        display: none;
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
            setTimeout(() => {
                button.style.display = 'none';
            }, 300);
        }
    });
    
    document.body.appendChild(button);
}

// Descomentar para activar botón scroll to top
// createScrollToTopButton();

// ========================================
// COPY TO CLIPBOARD (Para códigos de descuento)
// ========================================
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('¡Código copiado!');
        });
    } else {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('¡Código copiado!');
    }
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#4ade80' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========================================
// ANALYTICS TRACKING (Placeholder)
// ========================================
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    
    // Aquí puedes agregar Google Analytics o cualquier otra herramienta
    // gtag('event', eventName, eventData);
}

// Trackear clics en botones importantes
document.querySelectorAll('.service-button, .pricing-button').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('button_click', {
            button_text: button.textContent,
            page_location: window.location.href
        });
    });
});

// ========================================
// INITIALIZE APP
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ RoRoStreaming cargado correctamente');
    
    // Aquí puedes agregar inicializaciones adicionales
    // Por ejemplo, cargar datos de una API
    // fetchServices();
    // loadTestimonials();
    // etc.
});