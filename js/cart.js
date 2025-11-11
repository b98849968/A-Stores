
let cart = document.getElementById("icon-caet");
let borgr = document.getElementById("borgr-prodec-conecred");
let cartNone = document.getElementById("cart-none")

console.log(cart);  
cart.onclick = () => {
  
   borgr.classList.add("active");
   borgr.classList.add("actives");
};
cartNone.onclick = () => {
 
  borgr.classList.remove("active");
  borgr.classList.remove("actives");
};