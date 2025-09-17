
//  Part 1: Event Handling


// Toggle message visibility
document.getElementById("toggleMessageBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.toggle("hidden");
});

// =======================
//  Part 2: Interactive Elements
// =======================

// Click counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterDisplay").textContent = `Clicked ${count} times`;
});

// Light/Dark mode toggle
document.getElementById("themeToggleBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Collapsible FAQ section
document.querySelector(".faq-question").addEventListener("click", () => {
  document.querySelector(".faq-answer").classList.toggle("hidden");
});

// =======================
//  Part 3: Form Validation
// =======================

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let valid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
    document.getElementById("signupForm").reset();
  }
});
