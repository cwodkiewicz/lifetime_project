const cartItems = JSON.parse(localStorage.getItem("cartItems"));

if (cartItems && cartItems.length > 0) {
  const cartItemsDiv = document.getElementById("cart-items");
  let cartItemsHTML = "";
  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    const itemPrice = parseFloat(cartItem.price) * cartItem.quantity;
    totalPrice += itemPrice;

    cartItemsHTML += `
      <div class="product">
        <img src="${cartItem.image}" alt="${cartItem.name}" />
        <h2>${cartItem.name}</h2>
        <p>Price: ${cartItem.price}</p>
        <p>Quantity: ${cartItem.quantity}</p>
        <p>Item Total: ${itemPrice.toFixed(2)}</p>
        <button class="remove-from-cart" data-index="${i}">Remove</button>
      </div>
    `;
  }

  cartItemsHTML += `
    <div class="total-price">
      <p>Total Price: $${totalPrice.toFixed(2)}</p>
    </div>
  `;

  cartItemsDiv.innerHTML = cartItemsHTML;
}

const removeButtons = document.querySelectorAll(".remove-from-cart");

removeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const indexToRemove = parseInt(event.target.dataset.index);
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    cartItems.splice(indexToRemove, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    location.reload();
  });
});

const resetButton = document.getElementById("reset-cart");

resetButton.addEventListener("click", () => {
  localStorage.removeItem("cartItems");
  location.reload();
});
