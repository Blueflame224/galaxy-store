import {products} from '../../data/../../data/products.js';
import {cart, addToCart} from '../../data/../../data/cart.js';

console.log(products)
let productHTML =  '';

products.forEach((product) => {
  productHTML += 
  `
<div class = "product-container js-product-container" >
<img class="phone-pic" src="${product.image}">
  <div class="product-name">
      ${product.name}
    </div>
  <div class="price">
  $${(product.price / 100).toFixed(2)}
  </div>
  <span class="Add"></span>
  <divclass="button-container">
      <button class="cart-button js-cart-button" data-product-id="${product.id}">Add To Cart</button>
    </div>
</div>
  `
})

 document.querySelector('.container').innerHTML = productHTML;

 document.querySelectorAll('.js-cart-button').forEach((button) => {
   button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    addToCart(productId)
    added(productId)
    
   let cartQuantity = 0;
    
    cart.forEach((item) => {
      cartQuantity +=  item.quantity
    })
  document.querySelector('.count').innerHTML =   `
     ${cartQuantity}
  `
   })
 });
function added(productId) {
 document.querySelector('.js-cart-button').addEventListener('click', () => {   let div = document.querySelector('.Add');

  let html = '<p>added</p>';
 
  setTimeout(() => {
         div.innerHTML  = '';
  }, 3000);
  div.innerHTML = html

   console.log(typeof(html))
 });
}
