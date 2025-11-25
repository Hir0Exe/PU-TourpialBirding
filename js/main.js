/**
 * TOURPIAL BIRDING - MAIN JAVASCRIPT
 * Funcionalidades interactivas del sitio web
 */

// === VARIABLES GLOBALES ===
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');

// === NAVEGACIÓN STICKY ===
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Agregar clase cuando se hace scroll
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// === MENÚ MÓVIL ===
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animar el botón hamburguesa
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(45deg) translate(5px, 5px)' 
        : 'rotate(0) translate(0, 0)';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') 
        ? 'rotate(-45deg) translate(7px, -6px)' 
        : 'rotate(0) translate(0, 0)';
});

// === CERRAR MENÚ AL HACER CLIC EN UN ENLACE ===
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Resetear el botón hamburguesa
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    });
});

// === NAVEGACIÓN ACTIVA ===
const sections = document.querySelectorAll('section[id]');

const navHighlight = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', navHighlight);

// === BOTÓN VOLVER ARRIBA ===
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// === ANIMACIÓN DE SCROLL SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Ajustar por la altura del navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// === FORMULARIO DE CONTACTO ===
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Validación básica
    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }
    
    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    
    // Simular envío (en producción, aquí se enviaría a un servidor)
    console.log('Formulario enviado:', { name, email, phone, message });
    
    // Mostrar mensaje de éxito
    alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.`);
    
    // Resetear formulario
    contactForm.reset();
});

// === ANIMACIONES DE ENTRADA ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a elementos
const animateElements = document.querySelectorAll('.value-card, .service-card, .experience-card, .mission-content, .bird-content');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('Tourpial Birding - Sitio web cargado correctamente');
    
    // Animar hero al cargar
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease';
    }
});

// === ANIMACIÓN FADE IN UP ===
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// === PREVENCIÓN DE ENLACES ROTOS ===
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// === MANEJO DE IMÁGENES NO ENCONTRADAS ===
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Si la imagen no se carga, mostrar un placeholder
        this.style.background = 'linear-gradient(135deg, #2E8B57 0%, #236b43 100%)';
        this.style.minHeight = '200px';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = 'Imagen no disponible';
    });
});

