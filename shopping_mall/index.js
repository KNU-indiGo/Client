function movetopage(pname) {
  this.location.href = pname + ".html";
  // alert(pname);

  var description = "no description for this product";

  if (pname == "avocado") {
    description = "Delicious avocado.";
  } else if (pname == "berry_mix") {
    description = "Delicious berry mix.";
    document.getElementById("description").innerText = description;
  }

  // document.getElementById("description").innerHTML = description;
  // document.getElementById("title").innerHTML = pname;
  // document.getElementById("pname").innerHTML = pname;
}

function check(id, pw) {
  var id = document.getElementById("username");
  var pass = document.getElementById("pass");

  if (id.value == "indigo" && pass.value == "password") {
    this.location.href = "mainpage.html";
  } else if (id.value == "indigo2" && pass.value == "password2") {
    this.location.href = "mainpage.html";
  } else {
    this.location.href = "login.html";
  }
}

function buyproduct(pname) {
  var x = document.getElementById("count");
  let num = x.innerText;
  num = parseInt(num) + 1;
  x.innerText = num;
}

function confirm(pname) {
  var p_count = document.getElementById("count");
  buy_count = parseInt(p_count.innerText);
  // alert(buy_count);
  // alert(pname);
  location.href = "mainpage.html";
}

function shoppinglist() {
  this.location.href = "shoppingbag.html";
}

function logout() {
  this.location.href = "login.html";
}

function getImage(img_name) {
  if (image_name == "avocado") {
    return "media/avocado.jpg";
  } else if (image_name == "berry_mix") {
    return "media/berry_mix.jpg";
  } else if (image_name == "dragonfruit") {
    return "media/dragonfruit.jpg";
  } else if (image_name == "grapefruit") {
    return "media/grapefruit.jpg";
  } else if (image_name == "kiwi") {
    return "media/kiwi.png";
  } else if (image_name == "lemon") {
    return "media/lemon.jpg";
  } else if (image_name == "lime") {
    return "media/lime.jpg";
  } else if (image_name == "orange") {
    return "media/orange.jpg";
  } else if (image_name == "papaya") {
    return "media/papaya.png";
  } else if (image_name == "passionfruit") {
    return "media/passionfruit.png";
  } else if (image_name == "pear") {
    return "media/pear.jpg";
  } else if (image_name == "raspberry") {
    return "media/raspberry.jpg";
  } else if (image_name == "strawberry") {
    return "media/strawberry.png";
  } else if (image_name == "tangerin") {
    return "media/tangerin.jpg";
  } else if (image_name == "tomato") {
    return "media/tomato.jpg";
  }
}

function removeItem(pname) {
  const item = document.getElementById(pname);
  item.remove();
}