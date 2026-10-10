 import {cart, save} from '../data/cart.js';
 import {products} from '../data/products.js';
 
 let html = '';
 
 cart.forEach((item) => {
   const productId = item.productId
  
  let matching;
  
  products.forEach((product) => {
    if (product.id === productId) {
      matching = product
    }
  });
  console.log(matching);
   
   html +=
     `
    <div class="product-container">
      <div class="grid">
      <div class="image">
      <img class="pic" src="${matching.image}">
      </div>
      
      <div class="info">
        <div class="name">
          ${matching.name}
        </div>
        <div class="time">
          Arrives on: Thursday 18
        </div>
        <div class="quantity">
          quantity: ${item.quantity}
        </div>
        <div>
          <button class="but">
            Buy again 
          </button>
        </div>
        <div>
         <center>
          <button class="track">Track order </button>
        </center>
        </div>
        </div>
      </div>
      
     </div
     `
 });
 
  document.querySelector('.products').innerHTML = html;
 