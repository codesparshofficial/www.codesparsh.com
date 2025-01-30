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


///services 
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


///Frequently asked questions 
        document.addEventListener("DOMContentLoaded", function () {
            const faqs = document.querySelectorAll(".faq-item");

            faqs.forEach((faq) => {
                faq.addEventListener("click", () => {
                    const answer = faq.querySelector(".faq-answer");
                    const icon = faq.querySelector(".faq-icon");

                    if (answer.classList.contains("show")) {
                        answer.classList.remove("show");
                        icon.textContent = "+";
                    } else {
                        document.querySelectorAll(".faq-answer").forEach((ans) => ans.classList.remove("show"));
                        document.querySelectorAll(".faq-icon").forEach((ic) => ic.textContent = "+");
                        answer.classList.add("show");
                        icon.textContent = "−";
                    }
                });
            });
        });
        
        //function of pricing overlay 
function showOverlay() {
  document.getElementById('overlay').style.display = 'flex';
}

function hideOverlay() {
  document.getElementById('overlay').style.display = 'none';
}