import mongoose from 'mongoose'
const { Schema } = mongoose

const OrderSchema = new mongoose.Schema({
    transactionId: { type: String, required: true },
    data: { type: Object},
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Order", OrderSchema)