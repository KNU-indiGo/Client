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

function putKind() {
  var bridge = new WebOSServiceBridge();
  var url = "luna://com.webos.service.db/putKind";

  var params = '{ "id":"com.sample.app:1", "owner":"com.sample.app", "indexes":[{"name":"id","props":[{"name":"id"}]},{"name":"passwd","props":[{"name":"passwd"}]},{"name":"avocado","props":[{"name":"avocado"}]},{"name":"berry_mix","props":[{"name":"berry_mix"}]},{"name":"dragonfruit","props":[{"name":"dragonfruit"}]},{"name":"grapefruit","props":[{"name":"grapefruit"}]},{"name":"kiwi","props":[{"name":"kiwi"}]},{"name":"lemon","props":[{"name":"lemon"}]},{"name":"lime","props":[{"name":"lime"}]},{"name":"orange","props":[{"name":"orange"}]},{"name":"papaya","props":[{"name":"papaya"}]},{"name":"passionfruit","props":[{"name":"passionfruit"}]},{"name":"pear","props":[{"name":"pear"}]},{"name":"raspberry","props":[{"name":"raspberry"}]},{"name":"strawberry","props":[{"name":"strawberry"}]},{"name":"tangerin","props":[{"name":"tangerin"},{"name":"tomato","props":[{"name":"tomato"}]}]}]}';

  bridge.call(url, params);
}

function check(id, pw) {
  putKind();
  var id = document.getElementById("username");
  var pass = document.getElementById("pass");

  var bridge = new WebOSServiceBridge();
  var url = "luna://com.webos.service.db/put";
  var params = JSON.stringify({
    "objects":[{"id":id.value,"passwd":pass.value, "avocado":0, "berry_mix":0,"dragonfruit":0,"grapefruit":0,"kiwi":0,"lemon":0,"lime":0,"orange":0,"papaya":0,"passionfruit":0,"pear":0,"raspberry":0,"strawberry":0,"tangerin":0,"tomato":0,"_kind":"com.sample.app:1"}]
  });

  bridge.call(url, params);
  
  if (id.value == "indigo" && pass.value == "password") {
    this.location.href = "mainpage.html";
  } else if (id.value == "indigo2" && pass.value == "password2") {
    this.location.href = "mainpage.html";
  } else {
    this.location.href = "index.html";
  }
}

function buyproduct(pname) {
  var x = document.getElementById("count");
  let num = x.innerText;
  num = parseInt(num) + 1;
  x.innerText = num;
}

function getItem(pname) {
  var bridge = new WebOSServiceBridge();
  var url = "luna://com.webos.service.db/mergePut";
  var result;
  bridge.onservicecallback = callback;

  function callback(msg){
    var response = JSON.parse(msg);
    result = response["results"][pname];
  }
 
  var params = JSON.stringify({
    "query":{"from":"com.sample.app:1",
    "where":[{"prop":"id","op":"=","val":"indigo"}]}
  });
  bridge.call(url, params);

  return parseInt(result);
}

function confirm(pname) {
  var p_count = document.getElementById("count");
  buy_count = parseInt(p_count.innerText);
  //var origin_count = getItem(pname);
  var bridge = new WebOSServiceBridge();
  var url = "luna://com.webos.service.db/mergePut";
 
  var params = JSON.stringify({
    "query":{"from":"com.sample.app:1",
    "where":[{"prop":"id","op":"=","val":"indigo"}]},
    "props":{"_kind":"com.sample.app:1", [pname]:buy_count},
  });
  
  bridge.call(url, params);
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
