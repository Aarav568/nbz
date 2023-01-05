import ModalTypes from "./modal.types"

export const toggleModal = (data) => ({
    type: ModalTypes.TOGGLE_MODAL,
    payload: data
})