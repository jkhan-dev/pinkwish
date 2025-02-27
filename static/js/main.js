// Theme Switcher
document.querySelectorAll('[data-theme]').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const theme = this.dataset.theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .testimonial-card, .value-card, .benefit-card, .gallery-card, .process-card, .tip-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Enhanced navbar effects
const enhanceNavbar = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Add background blur effect based on scroll position
        if (currentScroll > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.backdropFilter = 'blur(5px)';
        }

        // Hide/show navbar on scroll
        if (currentScroll > lastScroll && currentScroll > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
};


// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    enhanceNavbar();
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600);
    });
});