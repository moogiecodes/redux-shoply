import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    payload: data
  }
}

export function deleteFromCart(data) {
  return {
    type: DELETE_FROM_CART,
    payload: data
  }
}