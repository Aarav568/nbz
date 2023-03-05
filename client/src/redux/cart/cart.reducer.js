import CartTypes from "./cart.types";
import { PurchasePrice } from "./purchase.types";
import { useSelector } from "react-redux";
import { PurchaseTypes } from "./purchase.types";

const INITIAL_STATE = {
    items: [],
    total: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CartTypes.ADD_TO_CART:
            const current = (purchaseType = action.payload.purchaseType) => {
                if (purchaseType === PurchaseTypes.MP3LEASE)
                    return Number(PurchasePrice.MP3LEASE)
                else if (purchaseType === PurchaseTypes.WAVLEASE)
                    return Number(PurchasePrice.WAVLEASE)
                else if (purchaseType === PurchaseTypes.MP3BUY)
                    return Number(PurchasePrice.MP3BUY)
                else if (purchaseType === PurchaseTypes.WAVBUY)
                    return Number(PurchasePrice.WAVBUY)
                else if (purchaseType === PurchaseTypes.STEM)
                    return Number(PurchasePrice.STEM)
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