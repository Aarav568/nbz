import mongoose from 'mongoose'
const { Schema } = mongoose

const DistributionSchema = new mongoose.Schema({
    beat: { type: Schema.Types.ObjectId, ref: "Beat" },
    sample: {type: String, required: true},
    mp3: {type: String, required: true},
    wav: {type: String, required: true},
    stem: {type: String, required: true},
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Distribution", DistributionSchema);