document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-button");
    const inputFields = document.querySelector(".input-fields");

    loginButton.addEventListener("click", function() {
      inputFields.style.display = "block";
    });
  });