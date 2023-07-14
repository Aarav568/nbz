import mongoose from 'mongoose'
const { Schema } = mongoose

const ArtistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    genre: [
        { type: Schema.Types.ObjectId, ref: "Genre", required: true }
    ],
    createdAt: { type: Date, default: Date.now },
    beats: [{
        type: Schema.Types.ObjectId, ref: 'Beat'
    }],
    tags: { type: Array, default: [] },
})

export default mongoose.model("Artist", ArtistSchema);