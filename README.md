# Network Concern Website

**Business Technology Partners** | Static Marketing Website

A modern, responsive website showcasing Network Concern's IT managed services and low voltage solutions.

---

## 🚀 Quick Start

This is a **static website** with no build process required.

```bash
# Clone the repository
git clone https://github.com/RixCrafts/netcon-site.git

# Open in browser
open index.html
# or simply double-click index.html
```

---

## 📋 Project Overview

Network Concern provides comprehensive IT and low voltage solutions for businesses. This website serves as the primary marketing and information hub for potential clients.

### Tech Stack
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with animations
- **Vanilla JavaScript** - Interactive features
- **Git/GitHub** - Version control

### Key Features
- ✨ Animated network background
- 🎨 Glassmorphism design effects
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔗 Interactive contact elements
- 📊 Client logo carousel
- 🎯 Scroll-triggered animations

---

## 🏢 Company Services

### IT Services
- **Cybersecurity & EDR:** SentinelOne (+ MDR)
- **Cloud Solutions & Identity:** Microsoft 365 / Azure AD / Cisco Duo (MFA / Conditional Access)
- **Managed Services & RMM/PSA:** ConnectWise Automate / Manage / Control
- **VOIP Phone System:** 3CX
- **IT Consulting**
- **IT Support**
- **Network Management**
- **Cloud Infrastructure Management**

### Field Services
- **Networking, Cabling & WiFi:** Cisco Meraki, UniFi, Fiber, Cat5, Cat6
- **Access Control Systems:** Physical access & badge vendor integration
- **Security Systems:** Surveillance & monitoring solutions
- **Infrastructure Planning & Deployment**

### Data & Compliance
- **Data Backup & Recovery:** Synology (Active Backup for Business / M365) + offsite cloud replication
- **Disaster Recovery:** Synology (Active Backup for Business / M365) + offsite cloud replication
- **Compliance & Regulatory Services**
- **Compliance / Archiving:** OnSite, O365, Global Relay
- **SIEM / Monitoring:** Perch (O365), native Azure/Office logs, Enhanced with P2 License

---

## 📂 File Structure

```
netcon-site/
├── index.html              # Landing page
├── styles.css              # Global stylesheet
├── logic.js                # Main JavaScript
├── pages/
│   ├── our-services.html   # Services catalog
│   ├── our-services.js     # Services page JS
│   ├── about-us.html       # Company & team info
│   ├── about-us.css        # About page styles
│   ├── tech-stack.html     # Technology partners
│   └── tech-stack.css      # Tech stack styles
├── resources/
│   ├── logos/              # Company & client logos
│   └── images/             # Website images
├── README.md               # This file
├── CHANGELOG.md            # Version history
└── AGENTS.md               # AI agent context guide
```

---

## 🎨 Design System

### Colors
- **Primary Blue:** `#00a8ff`
- **Secondary Purple:** `#9c27b0`
- **Background Gradient:** `#0a1628` → `#1e3a5f` → `#2d1b69`
- **Text Primary:** White (`#ffffff`)
- **Text Secondary:** Light Blue (`#b0c4de`)

### Responsive Breakpoints
- **Mobile:** `max-width: 576px`
- **Tablet:** `max-width: 768px`
- **Desktop:** `max-width: 992px`
- **Large Desktop:** `max-width: 1200px`

---

## 📞 Contact Information

- **Email:** info@networkconcern.com
- **Phone:** +1 (813) 282-7117
- **Location:** Serving businesses nationwide
- **Website:** [Network Concern](https://networkconcern.com)

---

## 🔗 Resources & Attributions

### Icons
- Quotation marks icon: [Quotation-marks icons created by ArtBit - Flaticon](https://www.flaticon.com/free-icons/quotation-marks)

### External Services
- Google Maps integration for location display
- Social media platform links (LinkedIn, Twitter, Instagram, YouTube)

---

## ✅ Completed Features

- ✅ Responsive design across all pages
- ✅ Interactive contact elements (mailto:, tel: links)
- ✅ Social media icons with SVG graphics
- ✅ Footer service links to specific sections
- ✅ Hero sections with content and CTAs
- ✅ Client logo carousel
- ✅ Scroll-triggered animations
- ✅ Unified navigation and footer

---

## 📝 Pending Tasks

### High Priority

#### 📧 Contact Form - EmailJS Implementation
**Status:** Ready to implement
**Estimated Time:** 30 minutes
**Solution:** EmailJS (no backend required)

**Steps to Implement:**

1. **Create EmailJS Account** (5 min)
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for free account (200 emails/month free tier)
   - Verify your email address

2. **Configure Email Service** (5 min)
   - Add email service (Gmail, Outlook, etc.)
   - Connect to `info@networkconcern.com` (or designated email)
   - Note down your **Service ID**

3. **Create Email Template** (10 min)
   - Go to Email Templates section
   - Create new template with variables:
     - `{{from_name}}` - Full Name
     - `{{company_name}}` - Company Name
     - `{{from_email}}` - Email Address
     - `{{phone_number}}` - Phone Number
     - `{{message}}` - Description
   - Note down your **Template ID**

4. **Get Public Key** (2 min)
   - Go to Account → API Keys
   - Copy your **Public Key**

5. **Update JavaScript Files** (10 min)
   - Add EmailJS SDK to HTML files (before `</body>`):
     ```html
     <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
     ```

   - Add to `logic.js`:
     ```javascript
     // EmailJS Configuration
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

     // Initialize EmailJS
     emailjs.init(EMAILJS_PUBLIC_KEY);

     // Form submission handler
     document.querySelectorAll('.contact-form').forEach(form => {
         form.addEventListener('submit', function(e) {
             e.preventDefault();

             const submitBtn = this.querySelector('.cta-button');
             const originalText = submitBtn.textContent;

             // Show loading state
             submitBtn.textContent = 'Sending...';
             submitBtn.disabled = true;

             // Prepare form data
             const formData = {
                 from_name: this.querySelector('#full-name').value,
                 company_name: this.querySelector('#company-name').value,
                 from_email: this.querySelector('#email-address').value,
                 phone_number: this.querySelector('#phone-number').value,
                 message: this.querySelector('#description').value
             };

             // Send email via EmailJS
             emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
                 .then(function(response) {
                     // Success
                     alert('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                     form.reset();
                 })
                 .catch(function(error) {
                     // Error
                     alert('Oops! Something went wrong. Please try again or contact us directly at info@networkconcern.com');
                     console.error('EmailJS Error:', error);
                 })
                 .finally(function() {
                     // Reset button
                     submitBtn.textContent = originalText;
                     submitBtn.disabled = false;
                 });
         });
     });
     ```

6. **Test the Form** (3 min)
   - Fill out the contact form on the website
   - Submit and verify email is received
   - Test on mobile devices
   - Verify all form fields are included in email

**Email Template Example:**
```
Subject: New Contact Form Submission - {{from_name}}

New consultation request from Network Concern website:

Name: {{from_name}}
Company: {{company_name}}
Email: {{from_email}}
Phone: {{phone_number}}

Message:
{{message}}

---
Sent via Network Concern Contact Form
```

**Security Notes:**
- Public Key is safe to expose (it's public)
- EmailJS handles spam protection
- Consider adding reCAPTCHA for additional protection

**Alternative Solutions (if needed):**
- Web3Forms (unlimited free emails, privacy-focused)
- Formspree (easy setup, 50 emails/month free)
- Custom backend (PHP/Node.js if you have server access)

---

- [ ] Perch Security logo file (`resources/logos/tools/perch.svg`)

### Medium Priority
- [ ] Blog section implementation
- [ ] Additional client testimonials
- [ ] Performance optimization (image compression, lazy loading)

### Low Priority
- [ ] Add more client logos to carousel
- [ ] Expand tech stack showcase
- [ ] Add case studies/portfolio section

---

## 🚦 Development Guidelines

For detailed development guidelines and AI agent context, see [AGENTS.md](./AGENTS.md).

### Quick Rules
- ✅ Use semantic HTML5
- ✅ Keep vanilla JavaScript (no frameworks)
- ✅ Follow mobile-first design
- ✅ Comment complex code
- ❌ Don't add build tools or dependencies
- ❌ Don't use inline styles

---

## 📚 Documentation

- **[AGENTS.md](./AGENTS.md)** - Complete guide for AI coding assistants and solo developers
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and updates
- **[Dev Notes.md](./resources/Dev%20Notes.md)** - Additional development notes

---

## 🔮 Next Steps

Recommended improvements and actions to take the website to the next level.

### 🧪 Testing & Quality Assurance

#### Mobile Device Testing
- [ ] **Physical Device Testing**
  - Test on actual iOS devices (iPhone 12/13/14/15, iPad)
  - Test on actual Android devices (Samsung Galaxy, Google Pixel)
  - Verify touch interactions (tap targets, swipe gestures)
  - Test form inputs on mobile keyboards
  - Check contact links (tel:, mailto:, maps) functionality
  - Verify scroll animations performance on mobile
  - Test carousel functionality and swipe gestures

- [ ] **Responsive Design Validation**
  - Test all breakpoints (576px, 768px, 1024px, 1280px)
  - Verify navigation hamburger menu on mobile
  - Check image scaling and aspect ratios
  - Test footer layout on small screens
  - Validate hero section on various screen sizes
  - Check glassmorphism effects render correctly on mobile

- [ ] **Browser Compatibility**
  - Safari (iOS and macOS)
  - Chrome (Android and Desktop)
  - Firefox (Desktop and Mobile)
  - Edge (Desktop)
  - Samsung Internet (Android)
  - Verify backdrop-filter support (fallbacks for older browsers)

- [ ] **Performance Testing**
  - Google PageSpeed Insights scores (aim for 90+)
  - Lighthouse audit (Performance, Accessibility, Best Practices, SEO)
  - WebPageTest.org analysis
  - Test on slow 3G/4G connections
  - Measure Time to First Byte (TTFB)
  - Measure Largest Contentful Paint (LCP)
  - Test network background animation performance on low-end devices

### 🎯 SEO Optimization

- [ ] **Meta Tags & Descriptions**
  - Add unique meta descriptions for each page (150-160 characters)
  - Add meta keywords (though less important now)
  - Implement Open Graph tags for social media sharing
  - Add Twitter Card meta tags
  - Implement canonical URLs
  - Add robots meta tag

- [ ] **Structured Data (Schema.org)**
  - Add Organization schema for Network Concern
  - Add LocalBusiness schema with address and contact
  - Add Service schema for each service offered
  - Add BreadcrumbList schema for navigation
  - Add Review schema for client testimonials
  - Validate with Google's Rich Results Test

- [ ] **Technical SEO**
  - Create and submit XML sitemap
  - Create robots.txt file
  - Implement 404 error page with navigation
  - Add favicon in multiple sizes (16x16, 32x32, 180x180, 192x192, 512x512)
  - Ensure all images have descriptive alt text
  - Add title attributes to all links
  - Implement proper heading hierarchy (H1 → H2 → H3)
  - Create descriptive URLs if converting to dynamic routing

### ⚡ Performance Optimization

- [ ] **Image Optimization**
  - Compress all PNG/JPG images (use tools like TinyPNG, ImageOptim)
  - Convert images to WebP format with fallbacks
  - Implement responsive images with srcset
  - Add lazy loading to images below the fold
  - Optimize client logos (currently some are large)
  - Consider using SVG for logos where possible
  - Add proper width/height attributes to prevent layout shift

- [ ] **Code Optimization**
  - Minify CSS (create styles.min.css for production)
  - Minify JavaScript (create logic.min.js for production)
  - Remove unused CSS rules
  - Combine and minimize HTTP requests
  - Implement CSS critical path (inline critical CSS)
  - Defer non-critical JavaScript
  - Add resource hints (preconnect, dns-prefetch for Google Maps/Fonts)

- [ ] **Caching & CDN**
  - Implement browser caching headers
  - Consider using a CDN for static assets
  - Enable gzip/brotli compression on server
  - Set proper cache-control headers
  - Implement service worker for offline capability

### ♿ Accessibility Enhancements

- [ ] **WCAG 2.1 AA Compliance**
  - Add ARIA labels to all interactive elements
  - Ensure all forms have proper labels
  - Add skip-to-content link
  - Ensure sufficient color contrast (4.5:1 for text)
  - Test with screen readers (NVDA, JAWS, VoiceOver)
  - Add focus indicators for keyboard navigation
  - Ensure tab order is logical
  - Add lang attribute to HTML tag
  - Caption/transcript for any video content (future)

- [ ] **Keyboard Navigation**
  - Test all functionality with keyboard only
  - Ensure hamburger menu works with Enter/Space
  - Add visible focus states for all interactive elements
  - Implement keyboard shortcuts for common actions
  - Ensure modals can be closed with Escape key

- [ ] **Form Accessibility**
  - Add proper labels to all form inputs
  - Implement error messages and validation
  - Add required/optional indicators
  - Group related form fields with fieldset/legend
  - Provide helpful placeholder text
  - Implement form validation with clear error messages

### 🔒 Security & Privacy

- [ ] **Security Headers**
  - Implement Content Security Policy (CSP)
  - Add X-Content-Type-Options header
  - Add X-Frame-Options header
  - Add Referrer-Policy header
  - Implement Strict-Transport-Security (HSTS) if on HTTPS

- [ ] **Form Security**
  - Implement CSRF tokens when backend is added
  - Add rate limiting to prevent spam
  - Implement reCAPTCHA or similar anti-spam measure
  - Sanitize all user inputs
  - Add honeypot fields for bot detection

- [ ] **Privacy Compliance**
  - Add Privacy Policy page
  - Add Terms of Service page
  - Implement cookie consent banner (if using analytics)
  - Add GDPR/CCPA compliance measures
  - Create data retention policy

### 📊 Analytics & Monitoring

- [ ] **Analytics Implementation**
  - Integrate Google Analytics 4 (GA4)
  - Set up conversion tracking for form submissions
  - Track button clicks and CTA engagement
  - Monitor scroll depth
  - Track outbound links (social media, external sites)
  - Set up Google Search Console
  - Implement event tracking for key interactions

- [ ] **Error Monitoring**
  - Implement JavaScript error tracking (Sentry, LogRocket)
  - Monitor 404 errors and broken links
  - Set up uptime monitoring (UptimeRobot, Pingdom)
  - Create error logging for form submissions
  - Monitor Core Web Vitals

### 💼 Content & Features

- [ ] **Missing Content**
  - Add Perch Security logo (resources/logos/tools/perch.svg)
  - Collect and add more client testimonials (aim for 5-10)
  - Add case studies or success stories
  - Create detailed service pages with pricing (if applicable)
  - Add team member photos and bios to About page
  - Write blog posts for the blog section

- [ ] **New Features**
  - Implement blog section with CMS integration
  - Add live chat widget (3CX, Intercom, or similar)
  - Implement newsletter signup
  - Add FAQ section
  - Create resources/downloads page
  - Add client login portal link
  - Implement dark mode toggle (optional)
  - Add print stylesheet

### 🔧 Code Quality & Maintenance

- [ ] **Code Validation**
  - Validate all HTML with W3C Validator
  - Validate CSS with W3C CSS Validator
  - Run JSHint or ESLint on JavaScript
  - Fix any accessibility issues found by WAVE tool
  - Run axe DevTools for accessibility audit

- [ ] **Documentation**
  - Document all JavaScript functions
  - Add comments for complex CSS selectors
  - Create deployment guide
  - Document environment variables (when backend added)
  - Create troubleshooting guide

- [ ] **Version Control**
  - Create feature branches for new work
  - Write meaningful commit messages
  - Tag releases (v1.0, v1.1, etc.)
  - Set up GitHub Pages for easy hosting
  - Consider automated deployment pipeline

### 🚀 Future Enhancements

- [ ] **Progressive Web App (PWA)**
  - Create manifest.json file
  - Implement service worker for offline functionality
  - Add install prompt for mobile users
  - Cache static assets for offline viewing
  - Add app icons for home screen

- [ ] **Advanced Features**
  - Implement multi-language support (if serving international clients)
  - Add search functionality
  - Create client testimonial submission form
  - Implement A/B testing for CTAs
  - Add interactive service selector/configurator
  - Integrate with CRM system
  - Implement chatbot for common questions

---

## 📄 License

Copyright © 2025 Network Concern. All rights reserved.

---

## 🤝 Contributing

This is a private client project. For questions or updates, contact the development team.

**Last Updated:** 2025-11-29
