import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { formatName } from './helpers';
import { addToCart, deleteFromCart } from './actions';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import "./ProductCard.css";

function ProductCard({ id }) {
  const { products, cart } = useSelector(s => ({ products: s.products, cart: s.cart }), shallowEqual);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(id));
  }

  const remove = () => {
    dispatch(deleteFromCart(id));
  }

  let formattedName = formatName(products[id].name);

  return (
    <div className="ProductCard">
      <Card>
        <CardImg top className="img" src={products[id].image_url} alt={products[id].name} />
        <CardBody>
          <CardTitle>{formattedName}</CardTitle>
          <CardText>{products[id].description}</CardText>
          <CardText>${products[id].price}</CardText>
          <Button onClick={add}>Add to cart</Button>
          <Button color="danger" onClick={remove}>Remove from cart</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;