import mongoose from 'mongoose'
const { Schema } = mongoose

const ArtistSchema = new mongoose.Schema({
    name: { type: String },
    genre: { type: Schema.Types.ObjectId, ref: "Genre" },
    img: { type: String },
    createdAt: { type: Date, default: Date.now },
    beats: [{
        type: Schema.Types.ObjectId, ref: 'Beat'
    }]
})

export default mongoose.model("Artist", ArtistSchema);
