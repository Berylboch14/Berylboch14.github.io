// main.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);
            const yOffset = -70;
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        });
    });

    // Smooth reveal for header text
    ScrollReveal().reveal(".header-text", {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    });
});
