import mongoose from 'mongoose'
const { Schema } = mongoose

const BeatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: {
        type: Schema.Types.ObjectId, ref: 'Artist'
    },
    genre: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    tags: { type: Array, default: [] },
    distribution: { type: Schema.Types.ObjectId, ref: "Distribution" },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Beat", BeatSchema);