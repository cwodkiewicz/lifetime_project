function subscribe() {
  var email = document.getElementById("email").value;
  if (email == "") {
    alert("Please enter your email address.");
  } else {
    alert("Thank you for subscribing!");
    document.getElementById("email").value = "";
  }
}
