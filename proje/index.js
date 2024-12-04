// navbar da java script


document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelector(".nav-links");

    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
