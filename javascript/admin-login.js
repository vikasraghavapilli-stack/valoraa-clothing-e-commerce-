document.getElementById("adminLoginForm")

.addEventListener("submit", function(e){

    e.preventDefault();



    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;



    // =============================
    // ADMIN LOGIN
    // =============================

    if(email === "admin@valoraa.com"
    && password === "admin123"){

        localStorage.setItem("admin", "true");

        alert("Admin Login Successful");

        window.location.href =
        "admin.html";

    }

    else{

        alert("Invalid Admin Credentials");

    }

});