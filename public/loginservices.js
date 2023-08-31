document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".login-button");
  const signupButton = document.querySelector(".signup-button");
  const loginFields = document.querySelector(".login-input-fields");
  const signupFields = document.querySelector(".signup-input-fields");

  loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    loginFields.style.display = "block";
    signupFields.style.display = "none";
  });

  signupButton.addEventListener("click", function(event) {
    event.preventDefault();
    signupFields.style.display = "block";
    loginFields.style.display = "none";
  });
});

