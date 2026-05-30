// VALORAA MAIN JS

console.log("VALORAA Home Page Loaded");

// SHOP NOW BUTTON
const shopBtn = document.querySelector(".hero-content button");

if (shopBtn) {

    shopBtn.addEventListener("click", () => {

        window.location.href = "products.html";

    });

}