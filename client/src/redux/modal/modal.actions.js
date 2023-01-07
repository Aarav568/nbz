import ModalTypes from "./modal.types"

export const toggleModal = (data) => ({
    type: ModalTypes.TOGGLE_MODAL,
    payload: data
})

export const hideModal = () => ({
    type: ModalTypes.HIDE_MODAL,
})