// ===== PRODUCTS DATA =====
const products = [
  { id: 1, name: "Rare Beauty by Selena Gomez", description: "Warm Wishes Effortless Cream Bronzer Stick", price: 28.00, image: "rare1.webp" },
  { id: 2, name: "L'Oreal Paris", description: "Telescopic Original Washable Intense Lengthening Mascara, Black", price: 14.99, image: "image1.jpg" },
  { id: 3, name: "NARS", description: "Radiant Creamy Concealer with Hydrating Medium Coverage", price: 36.00, image: "image4.jpg" },
  { id: 4, name: "HUDA BEAUTY", description: "Easy Bake Blurring Loose Baking & Setting Powder", price: 39.00, image: "image5.jpg" },
  { id: 5, name: "Charlotte Tilbury", description: "Airbrush Flawless Hydrating & Waterproof Setting Spray", price: 38.00, image: "image6.jpg" },
  { id: 6, name: "Benefit Cosmetics", description: "Cookie and Tickle Shimmer Finish Powder Highlighters", price: 37.05, image: "image7.jpg" },
  { id: 7, name: "Fit Me® Dewy + Smooth Foundation", description: "Hydrates and smoothes skin texture and protects with SPF 18", price: 11.99, image: "image8.jpg" }
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsEl = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartContainerEl = document.getElementById("cart-container");
const emptyCartEl = document.getElementById("empty-cart");
const cartCountEl = document.getElementById("cart-count");

// ===== RENDER CART =====
function renderCart() {
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartContainerEl.style.display = "none";
    emptyCartEl.style.display = "block";
    cartCountEl.textContent = 0;
    return;
  }

  cartContainerEl.style.display = "block";
  emptyCartEl.style.display = "none";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <span class="price">$${item.price.toFixed(2)}</span>
        </div>
      </div>
      <div class="cart-controls">
        <button class="minus" data-index="${index}">−</button>
        <span>${item.qty}</span>
        <button class="plus" data-index="${index}">+</button>
        <button class="remove" data-index="${index}">✕</button>
      </div>
    `;
    cartItemsEl.appendChild(row);
  });

  totalPriceEl.textContent = `$${total.toFixed(2)}`;
  cartCountEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}

// ===== CART CONTROLS =====
cartItemsEl.addEventListener("click", (e) => {
  const index = e.target.dataset.index;
  if (index === undefined) return;

  const idx = Number(index); // convert string to number

  if (e.target.classList.contains("plus")) cart[idx].qty++;
  if (e.target.classList.contains("minus")) cart[idx].qty = Math.max(1, cart[idx].qty - 1);
  if (e.target.classList.contains("remove")) cart.splice(idx, 1);

  saveCart();
});

// ===== SAVE CART =====
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", renderCart);
