import { generateUrl } from "../../firebase/firebase.js"
import Beat from "../../models/beat.js"
import Order from "../../models/order.js"

export const getAllOrders = async (req, res) => {
    const uid = req.params.id
    try {
        const orders = await Order.find({ user: uid })
        res.status(200).json({ orders })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createOrder = async (req, res) => {
    const { cart, user, transactionId } = req.body
    try {
        const beat = await Beat.findById(cart.items[0].beat._id).populate("distribution")
        const downloadRef = beat.distribution[cart.items[0].purchaseType]
        const downloadUrl = await generateUrl(downloadRef)
        const order = await Order.create({
            user,
            data: { cart, downloadUrl},
            transactionId
        })
        console.log(order)
        res.status(200)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}