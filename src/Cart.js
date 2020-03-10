import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, shallowEqual} from 'react-redux'

function Cart() {
  const { products, cart } = useSelector(s => ({ products: s.products, cart: s.cart }), shallowEqual);
  
  const productCards = [];
  for (let id in products) {
    if(cart.find(obj => obj.id === id)) {
      productCards.push(<ProductCard key={id} id={id} />);
    }
  }

  return (
    <div>
      {productCards}
    </div>
  );
}

export default Cart;