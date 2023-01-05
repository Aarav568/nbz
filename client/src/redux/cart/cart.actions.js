import CartTypes from "./cart.types"

export const addToCart = (data) =>  ({
    type: CartTypes.ADD_TO_CART,
    payload : data
})