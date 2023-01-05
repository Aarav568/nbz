import { generateUrl } from "../../firebase/firebase.js"
import Beat from "../../models/beat.js"
import Order from "../../models/order.js"
import User from "../../models/user.js"

export const getAllOrders = (req, res) => {
    return
}

export const createOrder =  async (req, res) => {
    const { cart, user, transactionId } = req.body
    try{
        const order = await Order.create({
            data: cart, user, transactionId
        })
        const beat =  await Beat.findById(cart.items[0].beat._id).populate("distribution")
        const downloadRef = beat.distribution[cart.items[0].purchaseType]
        const downloadUrl = await generateUrl(downloadRef)

        res.status(200).json({downloadUrl: downloadUrl})
    } catch (err) {
        res.status(500).json({message: err.message}) 
    }
}

export const getOrder = (req, res) => {
    return
}
