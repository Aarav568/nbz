import mongoose from "mongoose"
const {Schema, model} = mongoose

const GenreSchema = new Schema({
    genre: String
})

export default model("Genre", GenreSchema)