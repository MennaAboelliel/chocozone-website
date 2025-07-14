document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  window.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html"; // redirect لو مش مسجل دخول
    }
  });
  



  