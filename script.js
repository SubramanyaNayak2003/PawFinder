// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Favorite button functionality
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const svg = this.querySelector('svg');
            const path = svg.querySelector('path');

            if (svg.getAttribute('fill') === 'currentColor') {
                svg.setAttribute('fill', 'none');
                path.setAttribute('fill', 'none');
            } else {
                svg.setAttribute('fill', 'currentColor');
                path.setAttribute('fill', 'currentColor');
            }
        });
    });
});