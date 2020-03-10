import { ADD_TO_CART, DELETE_FROM_CART } from './actionTypes';
import { addToCart, deleteFromCart } from './actions';
import rootReducer from './rootReducer';
import data from './data.json';

const INITIAL_STATE = {
  products: { ...data.products },
  cart: []
}
describe("#addToCart", function () {
  it("returns action object", function () {
    expect(addToCart("testID")).toEqual({
      type: ADD_TO_CART,
      payload: "testID"
    });
  });
});

describe("#deleteFromCart", function () {
  it("returns action object", function () {
    expect(deleteFromCart("testID")).toEqual({
      type: DELETE_FROM_CART,
      payload: "testID"
    });
  });
});

describe("#rootReducer", function () {
  it("handles ADD_TO_CART case", function () {
    expect(rootReducer(INITIAL_STATE, {
      type: ADD_TO_CART,
      payload: "testID"
    })).toEqual({
      products: { ...data.products },
      cart: [{ id: "testID", quantity: 1 }]
    });
  });

  it("handles DELETE_FROM_CART case", function () {

    let store;

    // removes item object, since quantity === 1
    store = { products: { ...data.products }, cart: [{ id: "testID", quantity: 1 }] };

    expect(rootReducer(store, {
      type: DELETE_FROM_CART,
      payload: "testID"
    })).toEqual({
      products: { ...data.products },
      cart: []
    });

    // decrement quantity, since quantity > 1
    store = { products: { ...data.products }, cart: [{ id: "testID", quantity: 2 }] };

    expect(rootReducer(store, {
      type: DELETE_FROM_CART,
      payload: "testID"
    })).toEqual({
      products: { ...data.products },
      cart: [{ id: "testID", quantity: 1 }]
    });
  });
});