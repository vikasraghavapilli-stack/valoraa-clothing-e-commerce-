// =============================
// LOAD USERS
// =============================

function loadUsers(){

    fetch("http://localhost:8080/api/users")

    .then(response => response.json())

    .then(users => {

        let rows = "";

        users.forEach(user => {

            rows += `

            <div class="user-card">

                <div class="user-info">

                    <h3>${user.name}</h3>

                    <p>${user.email}</p>

                    <button onclick="deleteUser(${user.id})">
                        Delete
                    </button>

                </div>

            </div>

            `;

        });

        document.getElementById("usersContainer").innerHTML =
            rows;

    })

    .catch(error => {

        console.error("Error Loading Users:", error);

    });

}


// =============================
// DELETE USER
// =============================

function deleteUser(id){

    const confirmDelete =
        confirm("Delete this user?");

    if(confirmDelete){

        fetch(`http://localhost:8080/api/users/${id}`, {

            method:"DELETE"

        })

        .then(response => response.text())

        .then(data => {

            alert("User Deleted Successfully");

            loadUsers();

        })

        .catch(error => {

            console.error("Delete Error:", error);

        });

    }

}


// AUTO LOAD USERS

loadUsers();