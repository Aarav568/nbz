import CartTypes from "./cart.types"

export const addToCart = (data) =>  ({
    type: CartTypes.ADD_TO_CART,
    payload : data
})
export const removeFromCart = (data) =>  ({
    type: CartTypes.REMOVE_FROM_CART,
    payload : data
})
export const emptyCart= () =>  ({
    type: CartTypes.EMPTY_CART,
})