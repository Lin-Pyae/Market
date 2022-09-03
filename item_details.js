let i = document.getElementById("quantity");
let thumbnail = document.querySelectorAll(".thumbnail");
let mainImg = document.getElementsByClassName("main-img")[0];
let cartItems = document.getElementById("cart_items");
let addtoCart = document.getElementById("addtoCart");
let cartBody = document.getElementById("cart-body");
let order_submit = document.getElementById("order-submit");

let product_name = document.getElementById("product-name").innerText;
let product_price = document.getElementById("product_price").innerText;

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

function increase(){
 i.innerHTML = parseInt (i.innerHTML)+1;
}

function decrease(){ 
 if(parseInt(i.innerHTML) <= 0){
   i.innerHTML = 0;
 }
 else{
   i.innerHTML = parseInt (i.innerHTML)-1;
 }

}


//add to cart 

addtoCart.addEventListener('click',(e)=>{
  // add to cart
  quantity_on_cart = parseInt(cartItems.innerText);
  let quantity = parseInt(i.innerHTML)
  
  if(quantity === 0){
    cartItems.innerText= 0;
  }

  else{
    cartItems.innerText= quantity_on_cart + quantity;
    
    //add to cart body
    let div = document.createElement("div");
    
   
  
    div.classList.add("d-flex","justify-content-around","my-3", "displayDel");
    div.innerHTML = `            
                                <div>
                                ${product_name}
                                <div class="delcontainer">
                                <button class=" btn btn-sm btn-danger" onclick="cancel(this)">Cancel</button>
                                </div>                               
                                </div> 
                                <div>${ parseInt(product_price)}</div>
                                <div> 
                                 
                                <input class="quan" type="number" min="0" value="${parseInt(i.innerText)}" onclick="quan(this)"/>
                                

                                </div>

                                <div class="total">${parseInt(product_price)*parseInt(i.innerText)}</div>
                            `;
                            order_submit.append(div); 
                            
  calTotal();
  }
  
  
})


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
  child.innerText =  parseInt(e.value) * parseInt(product_price);

  let allQ =   e.parentNode.parentNode.parentNode.querySelectorAll(".quan");
  
 let result =  [...allQ].reduce((pv,cv)=> pv+ parseInt(cv.value),0)
 cartItems.innerText = result;
 
   calTotal();
}



