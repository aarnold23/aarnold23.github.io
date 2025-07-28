// JavaScript for navbar toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    // Traffic light animation in navbar
    const navbarBrand = document.querySelector('.navbar-brand');
    const light = document.createElement('span');
    light.className = 'traffic-light-animation';
    navbarBrand.appendChild(light);

    // Smooth scroll for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
