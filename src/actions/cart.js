import * as ActionType from "../constants/actionConstants";

export const addItem = (item) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.ADD_TO_CART,
            cartItem: item
        })
    }
};

export const deleteItem = (id) => {
    return (dispatch) => {
        dispatch({
            type: ActionType.REMOVE_FROM_CART,
            cartItemId: id
        })
    }
}