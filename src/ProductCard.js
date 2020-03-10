import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { formatName } from './helpers';
import { addToCart, deleteFromCart } from './actions';


function ProductCard({ id }) {
  const { products, cart } = useSelector(s => ({ products: s.products, cart: s.cart }), shallowEqual);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(id));
  }

  const remove = () => {
    dispatch(deleteFromCart(id));
  }

  console.log(cart);

  let formattedName = formatName(products[id].name);

  return (
    <div>
      <p className='name'>{formattedName}</p>
      <p className='price'>{products[id].price}</p>
      <p className='description'>{products[id].description}</p>
      <img className='image' src={products[id].image_url} alt={products[id].name} />
      <button onClick={add}>Add Product</button>
      <button onClick={remove}>Remove Product</button>
    </div>
  );
}

export default ProductCard;