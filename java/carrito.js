let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cart-items");
const totalText = document.getElementById("cart-total");

function renderCart() {
  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p class='empty'>Tu carrito está vacío 💔</p>";
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        
        <div class="item-info">
          <h3>${item.name}</h3>
          <p class="price">$${item.price.toLocaleString()}</p>

          <div class="qty-controls">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
          </div>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>`;
  });

  totalText.textContent = "$" + total.toLocaleString();
}

function changeQty(index, amount) {
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();