// main.js

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const headerText = document.querySelector(".header-text h1 span");

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

    if (headerText) {
        headerText.addEventListener("click", function() {
            const yOffset = -70;
            const targetSection = document.getElementById("about");
            const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        });
    }
});
