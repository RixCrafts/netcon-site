// Create enhanced network background with purple accents
function createNetworkBackground() {
    const networkBg = document.getElementById('networkBg');
    const nodeCount = 70;

    // Create nodes with blue and purple colors
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = `network-node ${Math.random() > 0.7 ? 'purple' : 'blue'}`;
        node.style.left = Math.random() * 100 + '%';
        node.style.top = Math.random() * 100 + '%';
        node.style.animationDelay = Math.random() * 4 + 's';
        networkBg.appendChild(node);
    }

    // Create connecting lines with varied colors
    for (let i = 0; i < 50; i++) {
        const line = document.createElement('div');
        line.className = `network-line ${Math.random() > 0.6 ? 'purple' : 'blue'}`;
        line.style.left = Math.random() * 100 + '%';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = Math.random() * 400 + 150 + 'px';
        line.style.transform = `rotate(${Math.random() * 360}deg)`;
        line.style.animationDelay = Math.random() * 5 + 's';
        networkBg.appendChild(line);
    }
}

// Smooth scrolling for navigation links
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

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-container');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 20, 37, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 20, 37, 0.95)';
    }
});

// Event on click => Redirection to index.html
document.getElementById("nav-logo").addEventListener('click', () => {
    window.location.href = "/index.html"
});


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
});

// Initialize network background
createNetworkBackground();

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('service-content')) {
                entry.target.style.animation = 'slideInLeft 0.8s ease-out forwards';
            } else if (entry.target.classList.contains('service-tags')) {
                entry.target.style.animation = 'slideInRight 0.8s ease-out 0.2s forwards';
            } else {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            }
        }
    });
}, observerOptions);

// Observe sections and service items for scroll animations
document.querySelectorAll('.section, .service-content, .service-tags').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// Add stagger effect to service items
document.querySelectorAll('.service-item').forEach((item, index) => {
    const content = item.querySelector('.service-content');
    const tags = item.querySelector('.service-tags');

    if (content) content.style.animationDelay = `${index * 0.1}s`;
    if (tags) tags.style.animationDelay = `${index * 0.1 + 0.2}s`;
});

// Simple slider logic for reviews
const slides = document.querySelectorAll('.review-slide');
const navBtns = document.querySelectorAll('.review-nav-btn');
let currentSlide = 0;
function showReviewSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        if (navBtns[i]) navBtns[i].classList.toggle('active', i === idx);
    });
    currentSlide = idx;
}
// Auto-advance every 7 seconds
setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showReviewSlide(next);
}, 7000);
// Initialize
showReviewSlide(0);

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Review slider logic
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.client-reviews-slider');
    if (!slider) return;
    const NAV_CLASS = 'review-nav-container';

    function createOrClearNav() {
        let nav = slider.querySelector(`.${NAV_CLASS}`);
        if (!nav) {
            nav = document.createElement('div');
            nav.className = NAV_CLASS;
            slider.appendChild(nav);
        }
        nav.innerHTML = '';
        return nav;
    }

    function regenNav() {
        const slides = Array.from(slider.querySelectorAll('.review-slide'));
        if (!slides.length) return;
        const nav = createOrClearNav();

        slides.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = 'review-nav-btn';
            btn.type = 'button';
            btn.setAttribute('aria-label', `Show review ${i + 1}`);
            btn.addEventListener('click', () => showReviewSlide(i));
            nav.appendChild(btn);
        });

        const initial = slides.findIndex(s => s.classList.contains('active'));
        setActive(initial >= 0 ? initial : 0);
    }

    function setActive(index) {
        const slides = Array.from(slider.querySelectorAll('.review-slide'));
        const buttons = Array.from(slider.querySelectorAll(`.${NAV_CLASS} .review-nav-btn`));
        slides.forEach((s, i) => s.classList.toggle('active', i === index));
        buttons.forEach((b, i) => b.classList.toggle('active', i === index));
    }

    // Expose showReviewSlide without clobbering existing implementation.
    if (typeof window.showReviewSlide !== 'function') {
        window.showReviewSlide = function (index) {
            const slides = slider.querySelectorAll('.review-slide');
            if (index < 0 || index >= slides.length) return;
            setActive(index);
        };
    } else {
        const original = window.showReviewSlide;
        window.showReviewSlide = function (index) {
            original(index);
            setActive(index);
        };
    }

    // Initial generation
    regenNav();

    // Watch for slides being added/removed and regenerate nav automatically
    const mo = new MutationObserver(() => regenNav());
    mo.observe(slider, { childList: true, subtree: true });
});

// ------------------------------------------------- TESTING
// CTA phone number insertion 
(function () {
    const el = document.getElementById('cta_phone-number');
    if (!el) return;
    const telNumber = '+18132827117';
    const telHref = 'tel:' + telNumber;
    const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (isTouchDevice) {
        const a = document.createElement('a');
        a.href = telHref;
        a.innerText = el.innerText || el.textContent;
        a.id = el.id;
        a.className = el.className || '';
        el.parentNode.replaceChild(a, el);
    } else {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => { window.location.href = telHref; });
    }
})();

