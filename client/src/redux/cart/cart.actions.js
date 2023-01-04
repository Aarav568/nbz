import CartTypes from "./cart.types"

export const setNotifications = (data) =>  ({
    type: CartTypes.SET_NOTIFICATION,
    payload : data
})