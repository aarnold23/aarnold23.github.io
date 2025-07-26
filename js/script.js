// Simple animation for traffic light effect
document.addEventListener('DOMContentLoaded', () => {
    // Add traffic light animation to navbar brand (optional)
    const navbarBrand = document.querySelector('.navbar-brand');
    const light = document.createElement('span');
    light.className = 'traffic-light-animation ms-2';
    navbarBrand.appendChild(light);
});
