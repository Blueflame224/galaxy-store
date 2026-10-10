 import { products} from "../data/products.js";
 import { cart } from "../data/cart.js";

 products.forEach((cartItem) => {
  const productId = cartItem.productId
 
  let matching;
  
  products.forEach((product) => {
    if (product.id === productId) {
      matching = product
    }
  });

  payment += ` <div class="payment">
  <div class="summary-title">
   Order Summary 
  </div>
  <div class="prices"> 
  <div class="total-item">
    <div>items(2):</div>
  <div class="price">${matching.price}</div>
  </div>
  <div class="shipping-cost">
    <div>shipping:</div>
  <div>$10.00 </div>
  </div>
  <div class="total-tax">
   <div>total before tax:</div> 
   <div> $415.50 </div>
  </div>
  </div>
  
  <div class="total">
<div class="order-title">Order Total: <div>$415.50</div>
  </div>
  <center>
  <div>
    <a href="order.html">
    <button class="place-order">place order </button>
    </a>
  </div>
  </center>
  
</div>
</div>`;
});
document.querySelector('.price').innerHTML = payment

