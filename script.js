document.addEventListener("DOMContentLoaded", () => {
  const catalog = document.getElementById("catalog");
  const searchInput = document.getElementById("searchInput");
  let productsData = [];

  // Load products JSON
  fetch("products.json")
    .then(response => response.json())
    .then(products => {
      productsData = products;
      displayProducts(productsData);
    })
    .catch(err => {
      catalog.innerHTML = "<p>Failed to load products. Please try again later.</p>";
      console.error("Error loading products:", err);
    });

  // Display product cards
  function displayProducts(products) {
    if (products.length === 0) {
      catalog.innerHTML = "<p>No products found.</p>";
      return;
    }

    catalog.innerHTML = ""; // Clear current

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="product-title">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <a class="enquire-button" href="https://instagram.com/geh_noor" target="_blank" rel="noopener noreferrer">Enquire via DM</a>
      `;

      catalog.appendChild(card);
    });
  }

  // Search filter
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = productsData.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    displayProducts(filtered);
  });
});
