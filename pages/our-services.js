console.info("Running our-services.js");

// Event on click => Redirection to index.html
document.getElementById("nav-logo").addEventListener('click', () => {
    window.location.href = "/index.html"
});

// Scroll-triggered animation for contact form and map
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, observerOptions);

// Observe the contact form and map container
const contactForm = document.querySelector('.contact-cta');
const mapContainer = document.querySelector('.map-container');

if (contactForm) {
    contactForm.classList.add('slide-animation');
    observer.observe(contactForm);
}

if (mapContainer) {
    mapContainer.classList.add('slide-animation');
    observer.observe(mapContainer);
}
