// With shallow copy of products object, remove product from cart

function removeFromCart(products, id) {
  for (let key in products) {
    if (id === key) {
      // console.log(key);
      delete products[key];
    }
  }
  return products;
}


export default removeFromCart;