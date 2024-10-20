document.addEventListener('DOMContentLoaded', function() {
    const lightboxLinks = document.querySelectorAll('.lightbox');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxImage = lightboxContent.querySelector('img');
    const lightboxClose = document.getElementById('lightbox-close');

    lightboxLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.getAttribute('href');
            lightboxImage.setAttribute('src', imageSrc);
            lightboxOverlay.style.display = 'flex';
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightboxOverlay.style.display = 'none';
        lightboxImage.setAttribute('src', '');
    });

    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.style.display = 'none';
            lightboxImage.setAttribute('src', '');
        }
    });
});
