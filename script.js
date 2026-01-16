document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.getElementById("shopBtn");
  const productsSection = document.getElementById("products");

  shopBtn.addEventListener("click", () => {
    productsSection.scrollIntoView({ behavior: "smooth" });
  });
});

const productPopup = document.getElementById("productPopup");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".product").forEach((product) => {
  const btn = product.querySelector(".buy-btn");

  btn.addEventListener("click", () => {
    document.getElementById("popupImage").src =
      product.querySelector("img").src;
    document.getElementById("popupName").textContent =
      product.querySelector("h3").textContent;
    document.getElementById("popupPrice").textContent =
      product.querySelector("p").textContent;

    document.getElementById("popupDescription").textContent =
      product.dataset.description;

    document.getElementById("popupIngredients").textContent =
      "Ingredients: " + product.dataset.ingredients;

    document.getElementById("popupBenefits").textContent =
      "Benefits: " + product.dataset.benefits;

    productPopup.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  productPopup.style.display = "none";
});
