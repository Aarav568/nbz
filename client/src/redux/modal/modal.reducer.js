import ModalTypes from "./modal.types"

const INITIAL_STATE = {
    hidden: true,
    beat: {}
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ModalTypes.TOGGLE_MODAL:
            return {
                ...state,
                hidden: false,
                beat: action.payload,
                price: 0
            }
        case ModalTypes.HIDE_MODAL:
            return {
                ...state,
                hidden: true,
                beat: {}
            }
        default:
            return state
    }
}

export default modalReducer