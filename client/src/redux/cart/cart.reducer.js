import CartTypes from "./cart.types";
import { useSelector } from "react-redux";

const INITIAL_STATE = {
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

            const alreadyExists = state.items.find(beat =>
                beat.beat._id === action.payload.beat._id
            )

            return {
                ...state,
                items: alreadyExists ? [...state.items] : [...state.items, action.payload],
                total: alreadyExists ? state.total : state.total + current()
            }
        case CartTypes.EMPTY_CART:
            return {
                ...state,
                items: [],
                total: 0
            };
        case CartTypes.REMOVE_FROM_CART:
            console.log(action.payload)
            return {
                ...state,
                items: state.items.filter(beat => beat.beat._id !== action.payload.id),
                total: state.total - action.payload.price
            };
        default:
            return state
    }
}

export default cartReducer