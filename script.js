const products = [
  {
    id: 1,
    name: "Classic Kundan Necklace",
    category: "necklaces",
    price: "₹1,499",
    image: "https://via.placeholder.com/300x300.png?text=Kundan+Necklace"
  },
  {
    id: 2,
    name: "Gold-Plated Jhumkas",
    category: "earrings",
    price: "₹799",
    image: "https://via.placeholder.com/300x300.png?text=Gold+Jhumkas"
  },
  {
    id: 3,
    name: "Pearl Statement Ring",
    category: "rings",
    price: "₹399",
    image: "https://via.placeholder.com/300x300.png?text=Pearl+Ring"
  },
  {
    id: 4,
    name: "Elegant Hoop Earrings",
    category: "earrings",
    price: "₹699",
    image: "https://via.placeholder.com/300x300.png?text=Hoop+Earrings"
  },
  {
    id: 5,
    name: "Silver Tone Bracelet",
    category: "bracelets",
    price: "₹499",
    image: "https://via.placeholder.com/300x300.png?text=Silver+Bracelet"
  },
  {
    id: 6,
    name: "Layered Pearl Necklace",
    category: "necklaces",
    price: "₹1,999",
    image: "https://via.placeholder.com/300x300.png?text=Pearl+Necklace"
  }
];

const productGrid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

function displayProducts(productsToDisplay) {
  productGrid.innerHTML = '';

  if (productsToDisplay.length === 0) {
    productGrid.innerHTML = '<p>No products found.</p>';
    return;
  }

  productsToDisplay.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-content">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <a class="enquire-btn" href="https://instagram.com/geh_noor" target="_blank" rel="noopener noreferrer">Enquire via DM</a>
      </div>
    `;

    productGrid.appendChild(productCard);
  });
}

function filterProducts(category, searchTerm = '') {
  let filtered = products;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchTerm) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  displayProducts(filtered);
}

// Initial display of all products
displayProducts(products);

// Filter button click handling
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active to clicked
    button.classList.add('active');

    const category = button.getAttribute('data-category');
    const searchTerm = searchInput.value.trim();

    filterProducts(category, searchTerm);
  });
});

// Search input handling
searchInput.addEventListener('input', () => {
  const activeCategoryBtn = document.querySelector('.filter-btn.active');
  const category = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'all';
  const searchTerm = searchInput.value.trim();

  filterProducts(category, searchTerm);
});
