import mongoose from 'mongoose'
const { Schema } = mongoose

const BeatSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Contact", BeatSchema);