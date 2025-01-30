import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
        import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyBYC8x00dxfcVhaoCJtHWrjMYXP_SoIPSg",
            authDomain: "accounts-952cf.firebaseapp.com",
            projectId: "accounts-952cf",
            storageBucket: "accounts-952cf.appspot.com",
            messagingSenderId: "560264426847",
            appId: "1:560264426847:web:6a14ef1a4fd05848df72ea"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

   document.getElementById("bookingForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const businessDetails = document.getElementById("business-details").value.trim();
  const preferredTime = document.getElementById("preferred-time").value;

  // Regular Expressions for validation
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Name validation
  if (!name || !nameRegex.test(name) || name.length < 2) {
    alert("Please enter a valid name (only letters and minimum 2 characters).");
    return;
  }

  // Email validation
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone validation
  if (!phone || !phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // Business Details validation
  if (!businessDetails || businessDetails.length < 10) {
    alert("Please provide business details with at least 10 characters.");
    return;
  }

  // Preferred Time validation
  const validTimes = [
        "early-morning",
        "morning",
        "afternoon",
        "evening",
        "night",
        "late-night"
    ];

  if (!validTimes.includes(preferredTime)) {
    alert("Please select a valid time from the dropdown.");
    return;
  }

  // Show spinner
  document.getElementById("spinner").style.display = "block";

  try {
    await addDoc(collection(db, "queries"), {
      name,
      email,
      phone,
      businessDetails,
      preferredTime,
      createdAt: new Date().toISOString(),
    });

    // Hide spinner and show success modal
    document.getElementById("spinner").style.display = "none";
    document.getElementById("successModal").style.display = "flex";
    document.getElementById("bookingForm").reset();
  } catch (error) {
    // Hide spinner and alert error
    document.getElementById("spinner").style.display = "none";
    alert("Error submitting your query: " + error.message);
  }
});

// Attach event listener to the "closeModal" button
document.getElementById("closeModal").addEventListener("click", closeAndRedirect);

function closeAndRedirect() {
  document.getElementById('successModal').style.display = 'none';
  window.location.href = 'index.html';
}