import { NotificationTypes } from "./notification.types";
const INITIAL_STATE = {
    hidden: true,
    notification: ""
}

const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NotificationTypes.SET_NOTIFICATION: {
            return {
                ...state,
                notification: action.payload,
                hidden: false
            }
        }
        case NotificationTypes.TOGGLE_NOTIFICATION:
            return {
                ...state,
                notification: "",
                hidden: true
            }
        default:
            return state
    }
}

export default notificationReducer