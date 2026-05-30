// admin.js


// ======================================
// LOAD PRODUCTS
// ======================================
// =============================
// ADMIN AUTH CHECK
// =============================

if(localStorage.getItem("admin") !== "true"){

    alert("Please Login As Admin");

    window.location.href =
    "admin-login.html";

}
function loadProducts() {

    fetch("http://localhost:8080/api/products")

    .then(response => response.json())

    .then(products => {

        // ======================================
        // DASHBOARD COUNTS
        // ======================================

        document.getElementById("productCount").innerText =
            products.length;

        document.getElementById("orderCount").innerText =
            25;

        document.getElementById("userCount").innerText =
            12;

        document.getElementById("revenueCount").innerText =
            "₹50,000";


        // ======================================
        // PRODUCT CARDS
        // ======================================

        let cards = "";

        products.forEach(product => {

            cards += `

            <div class="product-card">

                <img src="${product.imageUrl}"
                     alt="Product Image">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p>${product.category}</p>

                    <h2>₹${product.price}</h2>

                    <div class="actions">

                        <button onclick="editProduct(${product.id})">
                            Edit
                        </button>

                        <button onclick="deleteProduct(${product.id})">
                            Delete
                        </button>

                    </div>

                </div>

            </div>

            `;

        });

        document.getElementById("productTable").innerHTML =
            cards;

    })

    .catch(error => {

        console.error("Error Loading Products:", error);

    });

}



// ======================================
// LOAD PRODUCTS AUTOMATICALLY
// ======================================

loadProducts();




// ======================================
// ADD + UPDATE PRODUCT
// ======================================

document.getElementById("productForm")

.addEventListener("submit", function(e){

    e.preventDefault();

    const product = {

        name:
        document.getElementById("name").value,

        category:
        document.getElementById("category").value,

        price:
        parseFloat(
            document.getElementById("price").value
        ),

        imageUrl:
        document.getElementById("imageUrl").value

    };


    // ======================================
    // CHECK EDIT MODE
    // ======================================

    const productId =
        document.getElementById("productForm")
                .getAttribute("data-id");



    // ======================================
    // UPDATE PRODUCT
    // ======================================

    if(productId){

        fetch(`http://localhost:8080/api/products/${productId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)

        })

        .then(response => response.json())

        .then(data => {

            alert("Product Updated Successfully");

            document.getElementById("productForm").reset();

            document.getElementById("productForm")
                    .removeAttribute("data-id");

            loadProducts();

        })

        .catch(error => {

            console.error("Update Error:", error);

        });

    }



    // ======================================
    // ADD PRODUCT
    // ======================================

    else{

        fetch("http://localhost:8080/api/products", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(product)

        })

        .then(response => response.json())

        .then(data => {

            alert("Product Added Successfully");

            document.getElementById("productForm").reset();

            loadProducts();

        })

        .catch(error => {

            console.error("Add Error:", error);

        });

    }

});




// ======================================
// DELETE PRODUCT
// ======================================

function deleteProduct(id){

    const confirmDelete =
        confirm("Delete this product?");

    if(confirmDelete){

        fetch(`http://localhost:8080/api/products/${id}`, {

            method: "DELETE"

        })

        .then(response => response.text())

        .then(data => {

            alert("Product Deleted Successfully");

            loadProducts();

        })

        .catch(error => {

            console.error("Delete Error:", error);

        });

    }

}




// ======================================
// EDIT PRODUCT
// ======================================

function editProduct(id){

    fetch(`http://localhost:8080/api/products/${id}`)

    .then(response => response.json())

    .then(product => {

        document.getElementById("name").value =
            product.name;

        document.getElementById("category").value =
            product.category;

        document.getElementById("price").value =
            product.price;

        document.getElementById("imageUrl").value =
            product.imageUrl;


        // STORE PRODUCT ID

        document.getElementById("productForm")
                .setAttribute("data-id", id);

    })

    .catch(error => {

        console.error("Edit Error:", error);

    });

}




// ======================================
// LOGOUT
// ======================================

function logout(){

    localStorage.removeItem("admin");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

}
function logout(){

    localStorage.removeItem("admin");

    alert("Logged Out Successfully");

    window.location.href =
    "admin-login.html";

}