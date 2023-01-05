import mongoose from 'mongoose'
const { Schema } = mongoose

const DistributionSchema = new mongoose.Schema({
    beat: { type: Schema.Types.ObjectId, ref: "Beat" },
    SAMPLE:  String,
    LEASE: String,
    BUY: String,
    STEM: String,
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model("Distribution", DistributionSchema);