// main.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevent default anchor behavior
            event.preventDefault();

            // Get the target page from the href attribute
            const targetPage = this.getAttribute("href");

            // Smooth scroll to the top of the target page
            scrollToPage(targetPage);
        });
    });

    // Function to smooth scroll to the top of the target page
    function scrollToPage(targetPage) {
        const yOffset = -70; // Adjust this value if needed
        const targetSection = document.querySelector(targetPage);

        if (targetSection) {
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        } else {
            console.error("Target section not found:", targetPage);
        }
    }
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
