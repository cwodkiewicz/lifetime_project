const addToCartButtons = document.querySelectorAll(".add-to-cart");

let cartCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    cartCount++; // increment cart count
    alert(`Added to cart! Cart total: ${cartCount}`); // display alert with cart count

    const productName = event.target.parentNode.querySelector("h2").innerText;
    const productPrice = event.target.parentNode.querySelector("p").innerText;
    const productImage = event.target.parentNode.querySelector("img").src;

    // Convert productPrice to a number
    const price = parseFloat(productPrice.replace("$", ""));

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let itemAlreadyInCart = false;

    cartItems.forEach((item) => {
      if (item.name === productName) {
        item.quantity++;
        itemAlreadyInCart = true;
      }
    });

    if (!itemAlreadyInCart) {
      cartItems.push({
        name: productName,
        price: price,
        image: productImage,
        quantity: 1,
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });
});
