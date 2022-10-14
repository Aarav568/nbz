import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PlaylistSchema = new mongoose.Schema({
    beats: [{
        type: Schema.Types.ObjectId,
        ref: "Beat"
    }],
    name: { type: String, required: true },
    genre: {
        type: Schema.Types.ObjectId,
        ref: "Genre", required: true
    },
    img: { type: String, required: true },
    tags: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
})

export default model("Playlist", PlaylistSchema);