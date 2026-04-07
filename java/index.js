

// =========================
// script.js
// =========================

function toggleCart() {
  document.getElementById('cart').classList.toggle('active');
}

function addToCart(product) {
  const li = document.createElement('li');
  li.textContent = product;
  document.getElementById('cart-items').appendChild(li);
}
