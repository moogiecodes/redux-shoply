import data from './data.json';
import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';
import { removeFromCart } from './helpers';
// console.log(data);

const INITIAL_STATE = {
  products: { ...data.products },
  cart: {}
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // action.payload is in the form id: {}
      let newCartItem = action.payload;
      return { ...state, cart: { ...state.cart, newCartItem } };
    case DELETE_FROM_CART:
      let id = action.payload;
      let updatedCart = removeFromCart(...state.cart);
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
}

export default rootReducer;