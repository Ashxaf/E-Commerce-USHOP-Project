let iconCart = document.querySelector('.icon-cart');
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");
let homeProductHTML = document.querySelector(".home-product");
let listCartHTML=document.querySelector('.listCart');
let iconCartSpan=document.querySelector('.nav-options span')

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart' )
})

let homeProduct = [];
let carts=[];




const addDataToHTML = () => {
  
  homeProductHTML.innerHTML = "";
  if (homeProduct.length > 0) {
    homeProduct.forEach(product => { 
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id=product.id;
      newProduct.innerHTML = `<img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">₹ ${product.price}</div>
        <button class="addCart">Add to Cart</button>`;
        homeProductHTML.appendChild(newProduct)
    });
  }
};

homeProductHTML.addEventListener('click',(event)=>{
  let positionClick=event.target;
  if(positionClick.classList.contains('addCart')){
    let product_id=positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
})

const addToCart=(product_id )=>{
  let positionThisProductInCart=carts.findIndex((value)=>value.product_id== product_id);
  if(carts.length<=0){
    carts=[{
      product_id:product_id,
      quantity:1
    }]
  }else if(positionThisProductInCart<0){
    carts.push({
      product_id:product_id,
      quantity:1
    });
  }else{
    carts[positionThisProductInCart].quantity=carts[positionThisProductInCart].quantity+1
  }
  addCartToHTML();
}

const addCartToHTML=()=>{
  listCartHTML.innerHTML='';
  if(carts.length>0){
    carts.forEach(cart=>{
      let newCart=document.createElement('div');
      let positionProduct=homeProduct.findIndex((value)=>value.id==cart.product_id);
      let info=homeProduct[positionProduct]
      newCart.classList.add('item');
      newCart.innerHTML=`
      <div class="image">
        <img src="${info.image}" alt="">
      </div>
      <div class="name">${info.name}</div>
      <div class="totalprice">₹ ${info.price * cart.quantity}</div>
      <div class="quantity">
       
        <span>Quantity:${cart.quantity}</span>
        
      </div>`;
      listCartHTML.appendChild(newCart);
    })
  }
}
const initApp = () => {
  fetch("music.json")
  .then(response => response.json())
  .then(data => {
    homeProduct = data;
    addDataToHTML();
  });
}
initApp()


burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar')
navLogo=document.querySelector('.nav-logo');
navOpt=document.querySelector('.nav-options');
navSearch=document.querySelector('.search-bar');


burger.addEventListener('click',()=>{
  navLogo.classList.toggle('v-class-resp');
  navSearch.classList.toggle('v-class-resp');
  navOpt.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

})

iconCart.addEventListener('click',()=>{
  navLogo.classList.toggle('v-class-resp');
  navSearch.classList.toggle('v-class-resp');
  navOpt.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})