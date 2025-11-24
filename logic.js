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

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
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