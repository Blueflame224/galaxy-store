 export let cart = JSON.parse(localStorage.getItem('cart'));
 
 if (!cart) {
  cart =
 
 [{
  productId: '758-eieg7-383u3i-',
  quantity: 1
 },{
  productId: 'ba56-836giu-7763-3i',
  quantity: 1
 } ];
 }
 
 
 export function save () {
  
  localStorage.setItem ('cart', JSON.stringify(cart));
 }
 
 export function addToCart (productId) {
  let matching;

  cart.forEach((item) => {
   if (productId === item.productId) {
    matching = item
   }
  })
  
  if (matching) {
   matching.quantity += 1
  } else {
   
   cart.push({
    productId: productId,
    quantity: 1
 })
}

save();
 }
 
export function removeToCart (productId) {
 const newCart = [];

 cart.forEach((cartItem) => {
  if (productId !== cartItem.productId) {
   newCart.push(cartItem)
  }
 });
  cart = newCart;
  
  save();
}