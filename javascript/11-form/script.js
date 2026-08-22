const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  // Clear errors
  document.querySelectorAll("small").forEach(error => {
    error.textContent = "";
  });

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  }

  // Password validation
  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters";
    valid = false;
  }

  // Confirm password
  if (password !== confirmPassword) {
    document.getElementById("confirmError").textContent =
      "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Registration successful!");
    form.reset();
  }
});