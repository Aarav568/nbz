import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    orders: [{
        type: Schema.Types.ObjectId, ref: 'Order'
    }]
})

export default mongoose.model("User", UserSchema);
