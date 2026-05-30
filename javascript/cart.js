// LOAD CART ITEMS
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsContainer = document.querySelector(".cart-items");

cartItemsContainer.innerHTML = "";

cart.forEach((product, index) => {

    const item = document.createElement("div");

    item.classList.add("cart-item");

    item.innerHTML = `
        <div class="item-details">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
        </div>

        <div class="quantity">
            <button class="minus">-</button>
            <span>1</span>
            <button class="plus">+</button>
        </div>

        <button class="remove-btn">Remove</button>
    `;

    cartItemsContainer.appendChild(item);

});


// REMOVE ITEM
document.addEventListener("click", (e) => {

    if (e.target.classList.contains("remove-btn")) {

        const cartItem =
            e.target.closest(".cart-item");

        const productName =
            cartItem.querySelector("h3").innerText;

        cart = cart.filter(
            item => item.name !== productName
        );

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        cartItem.remove();

        alert("Item Removed From Cart");

    }

});


// QUANTITY BUTTONS
document.addEventListener("click", (e) => {

    if (
        e.target.classList.contains("plus") ||
        e.target.classList.contains("minus")
    ) {

        let quantityElement =
            e.target.parentElement.querySelector("span");

        let quantity =
            parseInt(quantityElement.innerText);

        if (e.target.classList.contains("plus")) {

            quantity++;

        } else {

            if (quantity > 1) {
                quantity--;
            }

        }

        quantityElement.innerText = quantity;

    }
    // RECOMMENDED PRODUCTS ADD TO CART

const recommendedButtons =
    document.querySelectorAll(".recommended-card button");

recommendedButtons.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".recommended-card");

        const productName =
            card.querySelector("h3").innerText;

        const productPrice =
            card.querySelector("p").innerText;

        let cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            name: productName,
            price: productPrice
        });

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert(productName + " Added To Cart!");

    });

});

});