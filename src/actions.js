import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id
  }
}