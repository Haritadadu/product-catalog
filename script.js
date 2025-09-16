document.addEventListener("DOMContentLoaded", function () {
  fetch("products.json")
    .then(response => response.json())
    .then(products => {
      const catalog = document.getElementById("catalog");

      products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-title">${product.name}</div>
          <div class="product-price">${product.price}</div>
        `;

        catalog.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading products:", error);
    });
});
