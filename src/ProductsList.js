import React from 'react';
import Product from './Product';
import { useSelector, shallowEqual } from 'react-redux'

function ProductsList() {
  const { products } = useSelector(s => ({ products: s.products }), shallowEqual);

  console.log("in ProductsList, products is...", products);

  const productCards = []
  for (let id in products) {
    productCards.push(<Product key={id} id={id} />);
  }

  return (
    <div>
      {productCards}
    </div>
  );
}

export default ProductsList;