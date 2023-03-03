import { NotificationTypes } from "./notification.types.js"

export const setNotification = (data) => ({
    type: NotificationTypes.SET_NOTIFICATION,
    payload: data
})
export const clearNotification = () => ({
    type: NotificationTypes.CLEAR_NOTIFICATION,
})