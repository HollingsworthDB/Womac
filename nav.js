document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
});
