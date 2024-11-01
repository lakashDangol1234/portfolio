const carouselReview = document.getElementById('carouselReviewDark');

const carouselInstance = new bootstrap.Carousel(carouselReview
  , {
  interval: false, // Disable built-in auto-slide
  wrap: true,      // Allow cycling back to the beginning
});

function autoSlide() {
  carouselInstance.next(); // Move to the next slide
}

setInterval(autoSlide, 5000); // Change slide every 3 seconds