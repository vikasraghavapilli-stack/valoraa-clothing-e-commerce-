// REGISTER PAGE JS
document.getElementById("registerBtn").addEventListener("click", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/auth/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            name: name,
            email: email,
            password: password

        })

    })

    .then(response => response.json())

    .then(data => {

        alert("Registration Successful");

        console.log(data);

    })

    .catch(error => {

        console.log(error);

    });

});