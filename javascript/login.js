// LOGIN PAGE JS

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login Successful!");

    window.location.href = "index.html";

});