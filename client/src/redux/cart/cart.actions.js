import CartTypes from "./cart.types"

export const addToCart = (data) =>  ({
    type: CartTypes.ADD_TO_CART,
    payload : data
})
export const removeFromCart = (id, price) =>  ({
    type: CartTypes.REMOVE_FROM_CART,
    payload : {id, price}
})
export const emptyCart= () =>  ({
    type: CartTypes.EMPTY_CART,
})