import { NotificationTypes } from "./notification.types"

export const setNotification = (data) => ({
    type: NotificationTypes.SET_NOTIFICATION,
    payload: data
})
export const toggleNotification = () => ({
    type: NotificationTypes.TOGGLE_NOTIFICATION,
})