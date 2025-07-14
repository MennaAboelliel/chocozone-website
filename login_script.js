
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var errorMsg = document.getElementById("error-message");
    var spinner = document.getElementById("loading-spinner");

    errorMsg.textContent = "";
    spinner.style.display = "block";
  

    setTimeout(function () {
      if (email === "" || password === "") {
        errorMsg.textContent = "Please fill all fields.";
        spinner.style.display = "none";
      } else if (email === "ChocoZone@gmail.com" && password === "123456789") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        errorMsg.textContent = "Incorrect login data.";
        spinner.style.display = "none";
      }
    }, 1700); 
  });