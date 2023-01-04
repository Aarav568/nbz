import CartTypes from "./cart.types";

const cartReducer = (state = [] , action ) => {
    switch (action.type) {
        case CartTypes.SET_NOTIFICATION:
            return (
                [...state, action.payload]
            )
        default:
            return state
    }
}

export default cartReducer