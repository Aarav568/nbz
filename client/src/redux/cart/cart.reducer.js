import CartTypes from "./cart.types";
import { useSelector } from "react-redux";

const INITIAL_STATE = {
    user: null,
    items: [],
    total: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CartTypes.ADD_TO_CART:
            const current = (purchaseType = action.payload.purchaseType) => {
                if (purchaseType === "LEASE")
                    return 15
                else if (purchaseType === "BUY")
                    return 20
                else if (purchaseType === "STEM")
                    return 35
                else
                    return 0
            }
            action.payload.price = current()
            return {
                ...state,
                items: [...state.items, action.payload],
                total: state.total + current()
            }
        case CartTypes.EMPTY_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.id
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            };
        case CartTypes.EMPTY_CART:
            return {
                ...state,
                products: state.products.map(product =>
                    product.selected
                        ? { ...product, selected: false, quantity: 1 }
                        : product,
                ),
            };
        default:
            return state
    }
}

export default cartReducer