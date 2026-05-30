// SHOP NOW BUTTON

const shopNowBtn =
    document.getElementById("shopNowBtn");

shopNowBtn.addEventListener("click", () => {

    const categoriesSection =
        document.getElementById("categories");

    categoriesSection.scrollIntoView({

        behavior: "smooth"

    });

});


// CATEGORY REDIRECT

function goToCategory(category){

    // SAVE CATEGORY
    localStorage.setItem(
        "selectedCategory",
        category
    );

    // REDIRECT
    window.location.href = "product.html";

}