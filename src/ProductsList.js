import React from 'react';
import ProductCard from './ProductCard';
import { useSelector, shallowEqual } from 'react-redux'

function ProductsList() {
  const { products } = useSelector(s => ({ products: s.products }), shallowEqual);

  return (
    <div>
      {Object.keys(products).map(id => <ProductCard key={id} id={id} />)}
    </div>
  );
}

export default ProductsList;