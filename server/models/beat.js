import mongoose from 'mongoose'
const { Schema } = mongoose

const BeatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    artist: [{
        type: Schema.Types.ObjectId, ref: 'Artist',
        required: true
    }],
    genre: [{
        type: Schema.Types.ObjectId, ref: 'Genre', required: true
    }],
    img: { type: String, required: true },
    tags: { type: Array, default: [] },
    distribution: { type: Schema.Types.ObjectId, ref: "Distribution"},
    sample: String,
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Beat", BeatSchema);