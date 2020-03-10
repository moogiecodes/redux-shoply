import data from './data.json';
import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';
import { removeFromCart } from './helpers';
// console.log(data);

const INITIAL_STATE = {
  products: { ...data.products },
  cart: []
}


function rootReducer(state = INITIAL_STATE, action) {
  const id = action.payload;
  const cartCopy = [...state.cart];

  switch (action.type) {
    case ADD_TO_CART:

      // if item already in cart => find and increase quantity
      for (let obj of cartCopy) {
        if (obj.id === id) {
          obj.quantity++;
          return { ...state, cart: cartCopy }
        }
      }

      // if not in cart => add new item object with quantity: 1
      let addedItem = {
        id, // shorthand since id = action.payload
        quantity: 1
      };

      return { ...state, cart: [...state.cart, addedItem] }

    case DELETE_FROM_CART:

      // if item quantity > 1 => decrement quantity by 1
      for (let obj of cartCopy) {
        if (obj.id === id && obj.quantity > 1) {
          obj.quantity--;
          return { ...state, cart: cartCopy }
        }
      }

      // if item quantity === 1 => delete item object
      let updatedCart = state.cart.filter(obj => obj.id !== id);
      return { ...state, cart: updatedCart }

    default:
      return state;
  }
}

export default rootReducer;