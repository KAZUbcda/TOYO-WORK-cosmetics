document.getElementById("button_cart").onclick = function() {
  let get_product = document.getElementById("get_product").textContent;
  let get_price = document.getElementById("get_price").textContent;

	localStorage.setItem("product", get_product);
	localStorage.setItem("price", get_price);
};

document.getElementById("button_purchase").onclick = function() {
  let get_product = document.getElementById("get_product").textContent;
  let get_price = document.getElementById("get_price").textContent;

	localStorage.setItem("product", get_product);
	localStorage.setItem("price", get_price);
};

// データの読み込み
function product_load() {
  let save_productdata = "";
  let save_pricedata = "";

  if(!localStorage.getItem("product")) {
    save_productdata = "商品名";
    save_pricedata = "価格";
  } else {
    save_productdata = localStorage.getItem("product");
    save_pricedata = localStorage.getItem("price");
  }

  document.getElementById("set_product").innerHTML = save_productdata;
  document.getElementById("set_price").innerHTML = save_pricedata;
}


