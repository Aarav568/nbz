import mongoose from 'mongoose'
const { Schema } = mongoose

const DistributionSchema = new mongoose.Schema({
    beat: { type: Schema.Types.ObjectId, ref: "Beat" },
    sample: {type: String, require: true},
    mp3: {type: String, require: true},
    wav: {type: String, require: true},
    stem: {type: String, require: true},
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Distribution", DistributionSchema);