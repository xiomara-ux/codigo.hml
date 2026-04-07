document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".add-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const card = button.closest(".card");

      const name = card.querySelector("h3").textContent;
      const priceText = card.querySelector(".precio").textContent;
      const image = card.querySelector("img").src;

      const price = parseInt(priceText.replace(/[^0-9]/g, ""));

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find(p => p.name === name);

      if (existing) {
        existing.quantity++;
      } else {
        cart.push({
          name,
          price,
          image,
          quantity: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Producto agregado al carrito 💖");
    });
  });

});