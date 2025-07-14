document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstname = document.getElementById("name_1").value.trim();
    const secondname = document.getElementById("name_2").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-message");
    errorMsg.textContent = "";

    if (firstname === "" ||secondname === "" ||email === "" || password === "" ) {
      errorMsg.textContent = "All fields are required.";
      return;
    }

    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters.";
      return;
    }
    console.log("Redirecting to home...");

    window.location.href = "index.html";
    document.getElementById("signupForm").reset();
  });
    });