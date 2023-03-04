const form = document.querySelector("#contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields");
    return;
  }

  const confirmationMessage = `Thank you for your message, ${name}! We will get back to you at ${email} shortly.`;
  alert(confirmationMessage);

  // Reset form
  form.reset();
});
