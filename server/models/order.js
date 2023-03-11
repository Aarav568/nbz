import mongoose from 'mongoose'
const { Schema } = mongoose

const OrderSchema = new mongoose.Schema({
    payment: {type: Object, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    order_items: {type: Array, required: true},
})

export default mongoose.model("Order", OrderSchema)