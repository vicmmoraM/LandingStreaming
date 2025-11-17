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
        const target = document.querySelector(this.getAttribute('href'));
        
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
// VIDEO CARD INTERACTIONS
// ========================================
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
    card.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para abrir un modal con el video
        console.log('Video card clicked!');
        
        // Ejemplo de animación al hacer clic
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// ========================================
// PRICING BUTTON INTERACTIONS
// ========================================
const pricingButtons = document.querySelectorAll('.pricing-button');

pricingButtons.forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.closest('.pricing-card').querySelector('.pricing-header h3').textContent;
        alert(`¡Gracias por elegir el plan ${plan}! Redirigiendo al proceso de pago...`);
        
        // Aquí puedes agregar la lógica de redirección o abrir un formulario
        console.log(`Plan seleccionado: ${plan}`);
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
document.querySelectorAll('.video-card, .pricing-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// RANDOM GRADIENT COLORS FOR VIDEO THUMBNAILS
// ========================================
const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
];

const thumbnails = document.querySelectorAll('.video-thumbnail');
thumbnails.forEach(thumbnail => {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    thumbnail.style.background = randomGradient;
});

// También aplicar al hero
const heroCard = document.querySelector('.video-card-hero');
if (heroCard) {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    heroCard.style.background = randomGradient;
}

// ========================================
// TESTIMONIAL CAROUSEL (OPCIONAL)
// ========================================
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    // Esta función puede ser expandida para crear un carrusel
    // Por ahora solo es un placeholder
    console.log('Testimonial rotation');
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
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} StreamFlix. Todos los derechos reservados.`;
}

// ========================================
// VIDEO PLAYER PLACEHOLDER (Para expandir)
// ========================================
function openVideoPlayer(videoId) {
    // Aquí puedes agregar la lógica para abrir un reproductor de video
    console.log(`Opening video player for: ${videoId}`);
    
    // Ejemplo: crear un modal con iframe de YouTube
    // const modal = document.createElement('div');
    // modal.innerHTML = `
    //     <div class="video-modal">
    //         <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
    //     </div>
    // `;
    // document.body.appendChild(modal);
}

// ========================================
// FORM VALIDATION (Para expandir)
// ========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ========================================
// LOCAL STORAGE FOR USER PREFERENCES
// ========================================
function saveUserPreference(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getUserPreference(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}

// ========================================
// CONSOLE LOG WITH STYLE
// ========================================
console.log(
    '%c🎬 StreamFlix ', 
    'color: #E50914; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
);
console.log(
    '%c¡Bienvenido a StreamFlix! Tu plataforma de streaming favorita.', 
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

// Ejemplo de uso con resize
const handleResize = debounce(() => {
    console.log('Window resized!');
    // Aquí puedes agregar lógica para ajustar elementos en resize
}, 250);

window.addEventListener('resize', handleResize);