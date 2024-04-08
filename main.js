document.addEventListener("DOMContentLoaded", function() {
    // Smooth reveal for header text using ScrollReveal
    ScrollReveal().reveal(".header-text h1", {
        distance: "200px",
        origin: "right",
        duration: 1000,
    });

    ScrollReveal().reveal(".header-text h2", {
        distance: "200px",
        origin: "right",
        duration: 1000,
        delay: 500, // Delay the animation for 500ms
    });

    // Add more ScrollReveal animations as needed for other elements
});
