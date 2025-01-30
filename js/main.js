function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');

  // Toggle the 'open' class for both menu and hamburger
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');

  // If the menu is open, add a click listener to close it on outside click
  if (mobileMenu.classList.contains('open')) {
    document.addEventListener('click', closeMenuOnOutsideClick);
  } else {
    document.removeEventListener('click', closeMenuOnOutsideClick);
  }
}

function closeMenuOnOutsideClick(event) {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');

  // Check if the click is outside the menu and hamburger
  if (
    !mobileMenu.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    mobileMenu.classList.remove('open'); // Close the menu
    hamburger.classList.remove('open'); // Reset hamburger animation

    // Remove the event listener to prevent multiple listeners
    document.removeEventListener('click', closeMenuOnOutsideClick);
  }
} 
    
    
    // Select the hero image container
const heroImage = document.querySelector('.hero-image');

// Observer options
const observerOptions = {
    root: null, // Observe relative to the viewport
    threshold: 0.1 // Trigger when 10% of the element is visible
};

// Intersection Observer callback
const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add the animation class when in view
            heroImage.style.animation = 'none'; // Reset the animation
            setTimeout(() => {
                heroImage.style.animation = ''; // Reapply the animation
            }, 0);
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe the hero image
observer.observe(heroImage);
    
    
    
    
    // Select the logo slider container
const slider = document.querySelector('.logo-slider');

// Add mouseover event to pause animation
slider.addEventListener('mouseover', () => {
  slider.style.animationPlayState = 'paused';
});

// Add mouseout event to resume animation
slider.addEventListener('mouseout', () => {
  slider.style.animationPlayState = 'running';
});







document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Remove the class when out of view
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the card is visible
    }
  );

  const serviceCards = document.querySelectorAll('.unique-service-card');
  serviceCards.forEach((card) => observer.observe(card));
});








//why us animation 
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reason-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.index * 120; // Delay based on index
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
        } else {
          // Remove the class when the element exits the viewport
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
});








//For whom we are
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class and start animation
          entry.target.classList.add("visible");
          entry.target.style.animation = "jump-in 0.8s ease-out forwards";

          // Reset animation when leaving viewport
          setTimeout(() => {
            entry.target.style.animation = "none";
          }, 800); // Reset after animation finishes
        } else {
          // Remove visible class when scrolling out
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  categories.forEach((category) => observer.observe(category));
});


//message 
document.addEventListener("scroll", function () {
  const section = document.querySelector(".founder-message-section");
  const position = section.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    section.querySelector(".message-container").style.animation = "slideIn 1s ease-out forwards";
  }
});


//
  (function () {
      const Gallery = {
        lightbox: document.getElementById('lightbox'),
        lightboxImages: document.getElementById('lightbox-images'),

        openGallery(images) {
          this.lightboxImages.innerHTML = images.map(img => `<img src="${img.trim()}" alt="Gallery Image">`).join('');
          this.lightbox.style.display = 'flex';
        },

        closeGallery() {
          this.lightbox.style.display = 'none';
        },

        init() {
          document.querySelectorAll('#portfolio-section .portfolio-item img').forEach((img) => {
            img.addEventListener('click', (e) => {
              const images = e.target.dataset.galleryImages.split(',');
              this.openGallery(images);
            });
          });

          this.lightbox.querySelector('.close').addEventListener('click', () => {
            this.closeGallery();
          });
        },
      };

      Gallery.init();
    })();
    
    
    // Function to detect if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

// Function to handle animation
function handleScrollAnimation() {
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach((item, index) => {
    if (isInViewport(item)) {
      // Add animation class with delay
      setTimeout(() => {
        item.classList.add('animate');
      }, index * 200); // Delay based on the index (200ms interval)
    } else {
      // Remove the animation class to reset when out of view
      item.classList.remove('animate');
    }
  });
}

// Event listener for scroll
window.addEventListener('scroll', handleScrollAnimation);

// Initial check for elements already in view
handleScrollAnimation();
    
    
    
    
    
//function of pricing overlay 
function showOverlay() {
            document.getElementById('overlay').style.display = 'flex';
        }

        function hideOverlay() {
            document.getElementById('overlay').style.display = 'none';
        }