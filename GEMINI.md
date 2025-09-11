# Project Overview

This project is a static website for a business technology partner called "Network Concern". The website is built with HTML, CSS, and vanilla JavaScript. It showcases the company's services, clients, and tech stack. The design is modern and responsive, with a dark theme and animated elements.

## Key Technologies

*   **HTML:** The website is structured using semantic HTML5.
*   **CSS:** The styling is done with a single CSS file, `styles.css`. It includes a dark theme, a network background animation, and responsive design for mobile devices.
*   **JavaScript:** The file `logic.js` adds interactivity to the website, including:
    *   A dynamic network background with animated nodes and lines.
    *   Smooth scrolling for anchor links.
    *   A parallax effect on the hero section.
    *   Scroll-triggered animations for a more engaging user experience.
    *   A simple image slider for client logos.

## Project Structure

The project is organized into the following files and directories:

*   `index.html`: The main landing page of the website.
*   `styles.css`: The main stylesheet for the website.
*   `logic.js`: The main JavaScript file for the website.
*   `README.md`: Contains a brief overview of the company's services.
*   `pages/`: This directory contains additional pages for the website, such as "About Us", "Our Services", and "Tech Stack".
*   `resources/`: This directory contains all the assets for the website, including logos, images, and other UI elements.

## Building and Running

This is a static website, so there is no build process. To run the website, simply open the `index.html` file in a web browser.

## Development Guidelines

Please follow these best practices when writing code for this project.

### HTML
*   Use semantic HTML5 tags (`<header>`, `<footer>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`) to structure the content.
*   Ensure all images have descriptive `alt` attributes for accessibility.
*   Use ARIA roles and attributes where necessary to improve accessibility.
*   Validate HTML to ensure it's well-formed.

### CSS
*   Follow a consistent naming convention for CSS classes (e.g., BEM).
*   Keep the CSS modular and organized.
*   Use comments to explain complex or non-obvious styles.
*   Ensure styles are responsive and work well on different screen sizes.
*   Prefix vendor-specific properties if needed for broader browser support.

### JavaScript
*   Write clean, readable, and well-commented code.
*   Use "strict" mode to catch common coding errors.
*   Avoid polluting the global namespace. Encapsulate code in modules or IIFEs.
*   Handle events efficiently and avoid memory leaks (e.g., by removing event listeners when elements are destroyed).
*   Optimize for performance, especially with animations and DOM manipulations.

## TODOs

The `index.html` file contains several `TODO` comments, which indicate that the project is still under development. These `TODO`s include:

*   Adding responsiveness to the website.
*   Creating a carousel effect for the client logos.
*   Adding real reviews to the client reviews slider.
*   Making the contact information interactive.
*   Replacing the social media names with icons and adding links.
*   Replacing the map with an icon that opens the map in a popup.
*   Making the contact form slide down when scrolling to match the map.
*   Replacing the red border on the contact form with blue.
*   Creating IDs on each service and linking them properly in the footer.