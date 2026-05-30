// ======================
// LOAD PRODUCTS
// ======================

fetch("http://localhost:8080/api/products")
.then(response => response.json())
.then(products => {

    const container =
        document.getElementById("productsContainer");

    let html = "";

    products.forEach(product => {

        html += `
        <div class="product-card"
             data-category="${product.category.toLowerCase()}">

            <img src="../images/${product.imageUrl}"
                 alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="category">
                    ${product.category}
                </p>

                <p class="price">
                    ₹${product.price}
                </p>

                <button class="shop-now-btn">
                    Shop Now
                </button>

                <button class="add-cart-btn">
                    Add To Cart
                </button>

            </div>

        </div>
        `;

    });

    container.innerHTML = html;

    attachButtonEvents();

})
.catch(error => {

    console.error(
        "Error Fetching Products:",
        error
    );

});


// ======================
// BUTTON EVENTS
// ======================

function attachButtonEvents() {

    // ADD TO CART

    const addCartButtons =
        document.querySelectorAll(".add-cart-btn");

    addCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productCard =
                button.closest(".product-card");

            const productName =
                productCard.querySelector("h3").innerText;

            const productPrice =
                productCard.querySelector(".price").innerText;

            const product = {
                name: productName,
                price: productPrice
            };

            let cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            cart.push(product);

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            alert(
                productName +
                " Added To Cart!"
            );

        });

    });


    // SHOP NOW

    const shopNowButtons =
        document.querySelectorAll(".shop-now-btn");

    shopNowButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productCard =
                button.closest(".product-card");

            const productName =
                productCard.querySelector("h3").innerText;

            const productPrice =
                productCard.querySelector(".price").innerText;

            const productImage =
                productCard.querySelector("img").src;

            localStorage.setItem(
                "selectedProduct",
                productName
            );

            localStorage.setItem(
                "selectedPrice",
                productPrice
            );

            localStorage.setItem(
                "selectedImage",
                productImage
            );

            window.location.href =
                "product details.html";

        });

    });

}


// ======================
// SEARCH
// ======================

const searchInput =
    document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        const products =
            document.querySelectorAll(".product-card");

        products.forEach(product => {

            const name =
                product.querySelector("h3")
                .innerText
                .toLowerCase();

            if(name.includes(value)){

                product.style.display = "block";

            }else{

                product.style.display = "none";

            }

        });

    });

}


// ======================
// FILTER
// ======================

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category =
            button.innerText.toLowerCase();

        const products =
            document.querySelectorAll(".product-card");

        products.forEach(product => {

            const productCategory =
                product.dataset.category.toLowerCase();

            if (
                category === "all" ||
                productCategory === category
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

});