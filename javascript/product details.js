
// PRODUCT DETAILS PAGE JS

// Display selected product
const productName = localStorage.getItem("selectedProduct");
const productPrice = localStorage.getItem("selectedPrice");
const productImage = localStorage.getItem("selectedImage");

if(productName){
    document.getElementById("productName").innerText = productName;
}

if(productPrice){
    document.getElementById("productPrice").innerText = productPrice;
}

if(productImage){
    document.getElementById("productImage").src = productImage;
}
// ======================
// SIZE SELECTION
// ======================

const sizeButtons =
    document.querySelectorAll(".sizes button");

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});

// ======================
// QUANTITY
// ======================

const quantityButtons =
    document.querySelectorAll(".quantity-box button");

const quantityText =
    document.querySelector(".quantity-box span");

let quantity = 1;

quantityButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.innerText === "+") {

            quantity++;

        } else if (button.innerText === "-" && quantity > 1) {

            quantity--;

        }

        quantityText.innerText = quantity;

    });

});

// ======================
// ADD TO CART
// ======================

const addCartBtn =
    document.querySelector(".add-cart-btn");

if(addCartBtn){

    addCartBtn.addEventListener("click", () => {

        alert("Product Added To Cart!");

    });

}

// ======================
// BUY NOW
// ======================

const buyNowBtn =
    document.querySelector(".buy-now-btn");

if(buyNowBtn){

    buyNowBtn.addEventListener("click", () => {

        alert("Proceeding to Checkout");

        window.location.href = "cart.html";

    });

}