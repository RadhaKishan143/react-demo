import * as ActionTypes from "../constants/actionConstants";

const initialState = {
    totalItems: 0,
    items: []
};

const cart = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_TO_CART: {
            return {
                totalItems: state.totalItems + action.cartItem?.quantity,
                items: [...state.items, action.cartItem]
            }
        }
        case ActionTypes.REMOVE_FROM_CART: {
            const itemToDelete = state.items.find((item) => item.id === action.cartItemId);
            return {
                totalItems: state.totalItems - itemToDelete.quantity,
                items: state.items.filter((item) => item.id !== action.cartItemId)
            }
        }
        default: {
            return state;
        }
    }
    
}

export default cart;