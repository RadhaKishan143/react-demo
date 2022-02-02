import React from "react";
import { useSelector,  useDispatch } from "react-redux";
import { deleteItem } from "../actions/cart";

const Cart = () => {
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    const onDeleteClick = (item) => {
        dispatch(deleteItem(item.id));
    }

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.items.map((item) => (
                    <li>
                        {item.title}
                        <button onClick={() => onDeleteClick(item)}>delete</button>
                    </li>
                ))
            }
        </div>
    )
}

export default Cart;