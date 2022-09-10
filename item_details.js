let i = document.getElementById("quantity");
let thumbnail = document.querySelectorAll(".thumbnail");
let mainImg = document.getElementsByClassName("main-img")[0];
let cartItems = document.getElementById("cart_items");
// let addtoCart = document.getElementById("addtoCart");
let cartBody = document.getElementById("cart-body");
let order_submit = document.getElementById("order-submit");

// let product_name = document.getElementById("product-name").innerText;
// let product_price;

let finalTotal = document.getElementById("finalTotal");


let quantity_on_cart=0 ;











//image change

thumbnail.forEach(function(x){
  x.addEventListener('click',function(e){
  if(e.target.classList.contains("t-1")) {
  mainImg.src = e.target.src;}

  else if(e.target.classList.contains("t-2")){
  mainImg.src = e.target.src;}


  })
   })



//quantity change

function increase(e){
  e.parentNode.querySelector(".quantity").innerText = parseInt (e.parentNode.querySelector(".quantity").innerText)+1;
 console.log(e.parentNode.querySelector(".quantity").innerText);
}

function decrease(e){ 
 if(parseInt(e.parentNode.querySelector(".quantity").innerText) <= 0){
  e.parentNode.querySelector(".quantity").innerText = 0;
 }
 else{
  e.parentNode.querySelector(".quantity").innerText = parseInt (e.parentNode.querySelector(".quantity").innerText)-1;
 }

}


//add to cart 

function addtoCart(e){
  // add to cart
  quantity_on_cart = parseInt(cartItems.innerText);
  let product_name = e.parentNode.parentNode.parentNode.querySelector(".product-name").innerText;
  let product_price = e.parentNode.parentNode.parentNode.querySelector(".product_price").innerText;
  let quantity = parseInt(e.parentNode.parentNode.parentNode.querySelector(".quantity").innerText);
  console.log(e.parentNode.parentNode.parentNode.querySelector(".quantity").innerText);
  

  if(quantity === 0){
    cartItems.innerText= quantity_on_cart + quantity;
  }

  else{
    cartItems.innerText= quantity_on_cart + quantity;
    
    //add to cart body
    let div = document.createElement("div");
    let product_nameIn_cart = document.getElementsByClassName("product_nameIn_cart");


    for (const x of product_nameIn_cart) {
      if(product_name === x.innerHTML){
        x.parentNode.parentNode.querySelector(".quan").value = parseInt(x.parentNode.parentNode.querySelector(".quan").value) + parseInt(quantity);
        x.parentNode.parentNode.querySelector(".total").innerHTML = parseInt(x.parentNode.parentNode.querySelector(".quan").value) * parseInt(product_price);
        calTotal();
        return;
      }
    }

   
    
    div.classList.add("d-flex","justify-content-around","my-3", "displayDel");
    div.innerHTML = `            
                                <div>
                               <div class="product_nameIn_cart">${product_name}</div>
                                <div class="delcontainer">
                                <button class=" btn btn-sm btn-danger" onclick="cancel(this)">Cancel</button>
                                </div>                               
                                </div> 

                                <div class="priceIncart">${ parseInt(product_price)}</div>

                                <div>                        
                                <input class="quan" type="number" min="0" value="${parseInt(quantity)}" onclick="quan(this)"/>
                                </div>

                                <div class="total">${parseInt(product_price)*parseInt(quantity)}</div>
                            `;
                            order_submit.append(div); 
                            
  calTotal();
  
  
  
  }
  
  
}

//get items in the cart from local storage
// window.onload = ()=>{
  // let product =  localStorage.getItem("product");
  // product.forEach((x)=>{
  //   let div = document.createElement("div");
  //   div.classList.add("d-flex","justify-content-around","my-3", "displayDel");
  //   div.innerHTML = `            
  //                               <div>
  //                              <div class="product_nameIn_cart">${x}</div>
  //                               <div class="delcontainer">
  //                               <button class=" btn btn-sm btn-danger" onclick="cancel(this)">Cancel</button>
  //                               </div>                               
  //                               </div> 
  
  //                               <div class="priceIncart">test</div>
  
  //                               <div>                        
  //                               <input class="quan" type="number" min="0" value="2" onclick="quan(this)"/>
  //                               </div>
  
  //                               <div class="total">10</div>
  //                           `;
  //                           order_submit.append(div); 
  // })
  // console.log("hello from cupcake");
// }






















//order cancel

function cancel(elem){
  let parent = elem.parentNode.parentNode.parentNode;
  let child= parent.querySelector(".quan");
  elem.parentNode.parentNode.parentNode.remove();
  cartItems.innerText = parseInt(cartItems.innerText) - parseInt (child.value);
  
  
   calTotal();
}


//calculate total
function calTotal(){
  let total = document.getElementsByClassName('total');
  let final = [...total].reduce((pv,cv)=> pv+ Number(cv.innerHTML),0);
  finalTotal.innerText = final;
}

//quantity change in cart
function quan(e){
  let parent = e.parentNode.parentNode;
  let child = parent.querySelector(".total");
  
  let price = parent.querySelector(".priceIncart").innerText;
  console.log(price);
  child.innerText =  parseInt(e.value) * parseInt(price);

  let allQ =   e.parentNode.parentNode.parentNode.querySelectorAll(".quan");
  
 let result =  [...allQ].reduce((pv,cv)=> pv+ parseInt(cv.value),0)
 cartItems.innerText = result;
 
   calTotal();
}






