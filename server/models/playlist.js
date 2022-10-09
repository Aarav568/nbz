import mongoose from 'mongoose'
const { Schema, model } = mongoose

const PlaylistSchema = new mongoose.Schema({
    beats: [{
        type: Schema.Types.ObjectId,
        ref: "Beat"
    }],
    name: String,
    genre: String,
    img: String,
    createdAt: { type: Date, default: Date.now }
})

export default model("Playlist", PlaylistSchema);