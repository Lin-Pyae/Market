let addtoCart = document.getElementById("addtoCart");
let quantity_on_cart = document.getElementById("cart_items");

addtoCart.addEventListener('click', ()=>{
   console.log(typeof(quantity_on_cart));
    quantity_on_cart.innerText = parseInt(quantity_on_cart.innerText) + 1;
})