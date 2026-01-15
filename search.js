// Products array
const products = [
  { id: 1, name: "Rare Beauty by Selena Gomez", description: "Warm Wishes Effortless Cream Bronzer Stick", price: 28.00, image: "rare1.webp" },
  { id: 2, name: "L'Oreal Paris", description: "Telescopic Original Washable Intense Lengthening Mascara, Black", price: 14.99, image: "image1.jpg" },
  { id: 3, name: "NARS", description: "Radiant Creamy Concealer with Hydrating Medium Coverage", price: 36.00, image: "image4.jpg" },
  { id: 4, name: "HUDA BEAUTY", description: "Easy Bake Blurring Loose Baking & Setting Powder", price: 39.00, image: "image5.jpg" },
  { id: 5, name: "Charlotte Tilbury", description: "Airbrush Flawless Hydrating & Waterproof Setting Spray", price: 38.00, image: "image6.jpg" },
  { id: 6, name: "Benefit Cosmetics", description: "Cookie and Tickle Shimmer Finish Powder Highlighters", price: 37.05, image: "image7.jpg" },
  { id: 7, name: "Fit Me® Dewy + Smooth Foundation", description: "Hydrates and smoothes skin texture and protects with SPF 18", price: 11.99, image: "image8.jpg" }
];

const searchBox = document.getElementById('searchBox');
const results = document.getElementById('results');

// Display filtered products
function showResults(filtered) {
  results.innerHTML = "";
  if(filtered.length === 0 && searchBox.value.trim() !== "") {
    results.innerHTML = `<p>No products found</p>`;
    return;
  }
  filtered.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>$${product.price.toFixed(2)}</span>
    `;
    results.appendChild(div);
  });
}

// Live search event
searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  const filtered = products.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );
  showResults(filtered);
});

// Focus input on icon click
document.querySelector('.search-icon').addEventListener('click', () => {
  searchBox.focus();
});