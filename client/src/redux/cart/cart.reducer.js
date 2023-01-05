import CartTypes from "./cart.types";

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
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    total: state.total + current()
                }
        default:
            return state
    }
}

export default cartReducer