import { model, Schema } from "mongoose";

const OrderSchema = new Schema({
    transactionId: { type: String, required: true },
    status: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

export default model("Order", OrderSchema)