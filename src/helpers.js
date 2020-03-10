// With shallow copy of products object, remove product from cart

// function removeFromCart(products, id) {
//   for (let key in products) {
//     if (id === key) {
//       delete products[key];
//       return products;
//     }
//   }
// }

function formatName(name) {
  let words = name.split(" ");
  let newName = [];
  for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.slice(1)
    newName.push(word);
  }
  return newName.join(" ");
}

export { formatName };