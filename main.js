// main.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            window.location.href = targetPage;
        });
    });
});


    // Smooth reveal for header text
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

    
});
