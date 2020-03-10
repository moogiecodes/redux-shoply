import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, shallowEqual } from 'react-redux'

function ProductsList() {
  const { products } = useSelector(s => ({ products: s.products }), shallowEqual);

  const productCards = []
  for (let id in products) {
    productCards.push(<ProductCard key={id} id={id} />);
  }

  return (
    <div>
      {productCards}
    </div>
  );
}

export default ProductsList;