
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelectorAll('.gallery a');
    let currentIndex = 0;

    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    document.body.appendChild(lightboxOverlay);

    const lightboxImg = document.createElement('img');
    lightboxImg.className = 'lightbox-img';
    lightboxOverlay.appendChild(lightboxImg);

    const prevButton = document.createElement('button');
    prevButton.innerText = '<';
    prevButton.className = 'lightbox-nav prev';
    lightboxOverlay.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.innerText = '>';
    nextButton.className = 'lightbox-nav next';
    lightboxOverlay.appendChild(nextButton);

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = gallery[currentIndex].getAttribute('href');
        lightboxOverlay.style.display = 'flex';
    }

    function navigatePrev() {
        if (currentIndex > 0) {
            openLightbox(currentIndex - 1);
        } else {
            openLightbox(gallery.length - 1);
        }
    }

    function navigateNext() {
        if (currentIndex < gallery.length - 1) {
            openLightbox(currentIndex + 1);
        } else {
            openLightbox(0); 
        }
    }

    gallery.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            openLightbox(index); 
        });
    });

    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.style.display = 'none';
        }
    });

    prevButton.addEventListener('click', navigatePrev);
    nextButton.addEventListener('click', navigateNext);
    document.addEventListener('keydown', function(e) {
        if (lightboxOverlay.style.display === 'flex') { 
            if (e.key === 'ArrowLeft') {
                navigatePrev();
            } else if (e.key === 'ArrowRight') {
                navigateNext();
            } else if (e.key === 'Escape') {
                lightboxOverlay.style.display = 'none';
            }
        }
    });
});