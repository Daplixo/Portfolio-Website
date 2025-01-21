document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitBtn");
  const passwordInput = document.getElementById("passwordInput");
  const togglePassword = document.getElementById("togglePassword");
  const errorMessage = document.getElementById("errorMessage");
  const homepageContent = document.getElementById("homepageBox");
  const blurArea = document.getElementById("blurArea");
  const navigationBar = document.querySelector("nav");
  const footer = document.querySelector("footer");
  const searchContainer = document.querySelector(".search-container");
  const verificationBox = document.getElementById("verifyBox");
  const correctPassword = "@21Sep2005"; // Replace with your password

  // Ensure the elements are present before continuing
  if (!submitButton || !passwordInput || !verificationBox) {
    console.error("Required elements missing on this page.");
    return; // Stop execution if elements aren't present
  }

  // Check if the user has already verified and stored it in sessionStorage or localStorage
  if (sessionStorage.getItem("verified") === "true") {
    // If verified, immediately hide the verification box and unblur the background
    homepageContent.classList.add("visible");
    blurArea.classList.add("unblurred");
    verificationBox.style.display = "none";  // Hide verification box
    enableBackground();
  } else {
    // Otherwise, show the verification box and apply the blur effect
    verificationBox.style.display = "block";  // Show the verification box
    blurArea.classList.remove("unblurred");   // Apply the blur effect
    disableBackground();
  }

  // Disable interaction with the background elements initially
  function disableBackground() {
    navigationBar.style.pointerEvents = "none";
    footer.style.pointerEvents = "none";
    searchContainer.style.pointerEvents = "none";
  }

  // Function to enable interaction with background elements
  function enableBackground() {
    navigationBar.style.pointerEvents = "auto";
    footer.style.pointerEvents = "auto";
    searchContainer.style.pointerEvents = "auto";
  }

  // Password verification logic
  submitButton.addEventListener("click", function () {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
      errorMessage.textContent = ""; // Clear any error messages
      homepageContent.classList.add("visible"); // Fade in homepage content
      blurArea.classList.add("unblurred"); // Remove blur from the background
      verificationBox.style.display = "none"; // Hide the verification box
      enableBackground(); // Enable interaction with background elements
      sessionStorage.setItem("verified", "true"); // Store the verified state in sessionStorage
    } else {
      errorMessage.textContent = "Incorrect password. Please try again."; // Display error message
    }
  });

  // Toggle password visibility
  togglePassword.addEventListener("click", function () {
    const inputType = passwordInput.getAttribute("type");

    if (inputType === "password") {
      passwordInput.setAttribute("type", "text");
      togglePassword.textContent = "🙈"; // Change icon to "eye off"
    } else {
      passwordInput.setAttribute("type", "password");
      togglePassword.textContent = "👁️"; // Change icon to "eye"
    }
  });
});
