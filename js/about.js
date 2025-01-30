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

//overlay 
//function of pricing overlay 
function showOverlay() {
            document.getElementById('overlay').style.display = 'flex';
        }

        function hideOverlay() {
            document.getElementById('overlay').style.display = 'none';
        }
        
        //counter up 
      document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.number');
  const speed = 1000; // Adjust speed of counting

  // Function to start counting
  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
      const increment = Math.ceil(target / speed);

      if (count < target) {
        count += increment;
        counter.innerText = count > target ? target : count;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    counter.innerText = "0"; // Reset counter before starting
    updateCount();
  };

  // Intersection Observer to detect visibility
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry.target);
          observer.unobserve(entry.target); // Stop observing once counted
        }
      });
    },
    { threshold: 0.5 } // 50% visibility required to trigger
  );

  // Observe all counters
  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

//kurukshetra 
// Select all images with the 'cs-fade' class
const images = document.querySelectorAll('.cs-fade');

// Function to handle scroll-triggered fade-in animations
const handleScroll = () => {
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            image.classList.add('cs-visible'); // Add visible class when in view
        } else {
            image.classList.remove('cs-visible'); // Remove to reset animation
        }
    });
};

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Trigger the function once on load
handleScroll();


//for group team photos animation 
document.addEventListener("DOMContentLoaded", () => {
  const teamPhoto = document.querySelector(".team-photo");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when the image enters the viewport
          teamPhoto.classList.add("animate");
        } else {
          // Remove animation class when the image leaves the viewport
          teamPhoto.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the image is visible
    }
  );

  // Start observing the image
  observer.observe(teamPhoto);
});

//team photo
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when the card enters the viewport
          entry.target.classList.add("animate");
        } else {
          // Remove animation class when the card leaves the viewport
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the card is visible
    }
  );

  // Start observing each card
  cards.forEach((card) => observer.observe(card));
});