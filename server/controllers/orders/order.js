import { generateUrl } from "../../utils/firebase.js"
import Beat from "../../models/beat.js"
import User from "../../models/user.js"
import Order from "../../models/order.js"
import Distribution from "../../models/distribution.js"

export const getAllOrders = async (req, res) => {
    const uid = req.params.id
    try {
        const orders = await Order.find({ user: uid }).populate({
            path: 'order_items',
            populate: {
                path: 'beat',
                model: 'Beat'
            }
        }).exec()

        res.status(200).json({ orders })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const createOrder = async (req, res) => {
    const { payment, user, items } = req.body
    try {
        const distributions = await Promise.all(
            items.map(e => Distribution.find({ beat: e.beat._id }).select(`${linkSelector(e.purchaseType)} -_id`))
            )
        const order_items = distributions.map((e, i) => {
            return {
                ...items[i],
                link: e[0]
            } 
        })
        const order = await Order.create({
            payment, user, order_items
        })
        const foundUser = await User.findById(user)
        foundUser.orders.push(order)
        await foundUser.save()
        res.status(200).json(order)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
    //REWRITE THIS FUNCTION
}

const linkSelector = (pType) => {
    if (pType.includes("MP3")) {
        return "mp3"
    } else if (pType.includes("WAV")) {
        return "wav"
    }
    return "stem"
}