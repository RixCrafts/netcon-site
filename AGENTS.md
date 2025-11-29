# AI Agent Context & Project Guide

**Last Updated:** 2025-01-28
**Project:** Network Concern Website
**Type:** Static Marketing Website

---

## Quick Start for AI Agents

This document provides essential context for any AI coding assistant (Claude Code, GitHub Copilot, Gemini, Cursor, etc.) working on this project.

### Project Overview

Network Concern is a business technology partner providing IT managed services and low voltage solutions. This is a **static website** built with vanilla HTML, CSS, and JavaScript—no frameworks or build tools.

**Live Structure:**
- `index.html` - Main landing page
- `pages/our-services.html` - Services catalog
- `pages/about-us.html` - Company information & team
- `pages/tech-stack.html` - Technology partners showcase
- `styles.css` - Global stylesheet
- `logic.js` - Core JavaScript functionality

---

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with glassmorphism effects
- **Vanilla JavaScript** - No frameworks
- **Git** - Version control (GitHub)

**No build process required** - Open `index.html` in a browser to run.

---

## Design System

### Colors
- **Primary:** `#00a8ff` (Blue)
- **Secondary:** `#9c27b0` (Purple)
- **Background:** Gradient from `#0a1628` → `#1e3a5f` → `#2d1b69`
- **Text:** White primary, `#b0c4de` secondary

### Key Features
- Animated network background (nodes & lines)
- Glassmorphism cards (`backdrop-filter: blur()`)
- Scroll-triggered animations (Intersection Observer)
- Responsive design (mobile-first approach)
- SVG icons for social media links

---

## File Structure

```
netcon-site/
├── index.html              # Landing page
├── styles.css              # Global styles
├── logic.js                # Main JavaScript
├── pages/
│   ├── our-services.html   # Services page
│   ├── our-services.js     # Services-specific JS
│   ├── about-us.html       # About page
│   ├── about-us.css        # About page styles
│   ├── tech-stack.html     # Tech stack page
│   └── tech-stack.css      # Tech stack styles
├── resources/
│   ├── logos/
│   │   ├── NCLogo-512x512.png
│   │   ├── clients/        # Client logo carousel
│   │   └── tools/          # Tech stack logos
│   └── images/
└── README.md               # Project documentation
```

---

## Key Patterns & Conventions

### CSS Architecture
- **Global styles** in `styles.css`
- **Page-specific styles** in `pages/[page-name].css`
- **Class naming:** Descriptive kebab-case (e.g., `.contact-details`, `.hero-logo`)
- **Responsive breakpoints:**
  - Mobile: `max-width: 576px`
  - Tablet: `max-width: 768px`
  - Desktop: `max-width: 992px`
  - Large Desktop: `max-width: 1200px`

### JavaScript Patterns
- **No global pollution** - Code wrapped in event listeners or functions
- **Intersection Observer** for scroll animations
- **Event delegation** where possible
- **Strict mode** enabled

### HTML Standards
- **Semantic tags** (`<section>`, `<nav>`, `<footer>`, etc.)
- **Accessibility:** ARIA labels, `alt` text on images
- **Interactive elements:** Use `mailto:`, `tel:`, proper anchor links

---

## Common Tasks

### Adding a New Service
1. Edit `pages/our-services.html`
2. Add service card with unique `id` attribute
3. Update footer links in all pages to match
4. Follow existing card structure

### Updating Contact Information
- **Email:** `info@networkconcern.com`
- **Phone:** `+1 (813) 282-7117`
- **Google Maps:** Already embedded (Network Concern location)
- **Social Media:** Links in all pages' contact sections

### Adding Client Logos
1. Place logo in `resources/logos/clients/`
2. Add to carousel in `about-us.html`
3. Logos are grayscaled by CSS (`.client-logo { filter: grayscale(); }`)

---

## Important Guidelines

### DO ✅
- Keep code modular and commented
- Use semantic HTML5 tags
- Follow mobile-first responsive design
- Maintain consistent spacing (2rem grid system)
- Test on multiple screen sizes
- Add `target="_blank" rel="noopener noreferrer"` to external links

### DON'T ❌
- Add frameworks (React, Vue, etc.) - keep it vanilla
- Use inline styles (except for one-off overrides)
- Remove TODO comments without completing tasks
- Change the color scheme without approval
- Add dependencies or build tools
- Use emojis in code unless explicitly requested

---

## Completed Recent Work

✅ Responsive design across all pages
✅ Interactive contact details (mailto:, tel: links)
✅ Social media icons with proper SVG graphics
✅ Scroll-triggered animations for forms and maps
✅ Full-width carousel on about-us.html
✅ Unified footer across all pages
✅ Service cards with hover effects

---

## Solo Developer Quick Reference

### "I Haven't Touched This in Weeks" Guide

**What is this project?**
A marketing website for Network Concern, an IT services company. It's a pure HTML/CSS/JS static site—no frameworks, no build process.

**How do I run it?**
Just open `index.html` in a browser. That's it.

**What's the structure?**

- Homepage (`index.html`) showcases services and clients
- Three subpages in `/pages` folder (services, about, tech stack)
- All styles in `styles.css` + page-specific CSS files
- JavaScript in `logic.js` handles animations and interactions

**What's left to do?**
Check `CHANGELOG.md` for recent changes and `README.md` TODO section for pending tasks.

**Design philosophy?**
Dark theme with blue/purple accents, animated network background, glassmorphism cards, smooth scroll animations. Think "tech company meets modern web design."

**Key files to know:**

- `styles.css` - All the visual magic
- `logic.js` - Network animation, scroll effects, sliders
- `pages/our-services.html` - Main services showcase
- `index.html` - Landing page with hero section

**Common changes:**

- Update services → `pages/our-services.html`
- Change contact info → Search/replace across all HTML files
- Tweak colors → `styles.css` lines 10-13 (CSS variables section)
- Add client logo → `resources/logos/clients/` + update carousel

**Git workflow:**

```bash
git status                    # Check what changed
git add .                     # Stage changes
git commit -m "description"   # Commit with message
git push                      # Push to GitHub
```

**Architecture decisions:**

- No frameworks = easier to maintain, faster load times
- Single CSS file = easier to find and change styles
- Vanilla JS = no dependency hell
- GitHub Pages ready = just push to deploy

**If something breaks:**

1. Check browser console for errors
2. Validate HTML at validator.w3.org
3. Check CSS syntax
4. Test in different browsers
5. Check git history: `git log` to see what changed

---

## Need Help?

- **Documentation:** See `README.md` for service list and attributions
- **Changes:** See `CHANGELOG.md` for recent updates
- **Code issues:** Check browser console and validate HTML/CSS
- **Git history:** `git log --oneline` to see recent commits

---

**Note for AI Agents:**
This project values simplicity and maintainability. Before suggesting frameworks or complex solutions, consider if it can be done with vanilla HTML/CSS/JS. The goal is a fast, accessible, easy-to-maintain static site.
