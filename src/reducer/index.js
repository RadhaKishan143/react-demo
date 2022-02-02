import { combineReducers } from 'redux';
import cart from './cart';
import products from "./products";

const rootReducer = combineReducers({
    cartReducer: cart,
    productsReducer: products
});

export default rootReducer;