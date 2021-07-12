function movetopage(pname) {
  this.location.href = "product.html";

  var description = "no description for this product";

  if (pname == "avocado") {
    description = "Delicious avocado.";
  } else if (pname == "berry_mix") {
    description = "Delicious berry mix.";
  }

  document.getElementById("description").textContent = description;
  document.getElementById("title").textContent = pname;
  document.getElementById("pname").textContent = pname;
}

function check(id, pw) {
  var id = document.getElementById("username");
  var pass = document.getElementById("pass");

  if (id.value == "indigo" && pass.value == "password") {
    this.location.href = "index.html";
  } else if (id.value == "indigo2" && pass.value == "password2") {
    this.location.href = "index.html";
  } else {
    this.location.href = "index.html";
  }
}
