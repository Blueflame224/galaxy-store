import {cart, removeToCart} from '../data/cart.js';
import {products} from '../data/products.js';

export  function ordersummary() {
 let cartSummary = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId
  
  let matching;
  
  products.forEach((product) => {
    if (product.id === productId) {
      matching = product
    }
  });
  
  cartSummary += 
  `
  <div class="products js-product-id-${matching.id}">
    <div class="time">Delivery date: 12/12/25</div>
    <div class="grid">
    <div class="pic">
      <img class="image"src="${matching.image}">
    </div>
    <div class="info">
      <div class="name">
       ${matching.name} 
      </div>
      <div class="price">${(matching.price / 100).toFixed(2)}</div>
      <div class="quantity-div">
        quantity: <span>${cartItem.quantity}</span>
        <span class="update">
          update
        </span>
        <span class="delete js-delete" data-product-id="${matching.id}">
          delete
        </span> 
      </div>
    </div>
    </div>
    <div class="options">
      <div class="op">
      <input type="radio" name="${matching.id}" checked>
      4/64GB
      <div class="quantity-price">$${(matching.price / 100).toFixed(2)}</div>
      </div>
      
      <div class="op">
       <input type="radio" name="${matching.id}" >
      4/128GB
      <div class=quantity-price>$${(matching.price / 100 + 45).toFixed(2) }</div>
      </div>
    </div>
  </div>
  `;
  
});

document.querySelector('.order').innerHTML = cartSummary;

document.querySelectorAll('.js-delete').forEach((link) => {
  link.addEventListener('click', () => {
    const productId  = link.dataset.productId;
    removeToCart(productId);
    
    const container = document.querySelector(  `.js-product-id-${productId}`)
    
      container.remove();
  })
})

}
