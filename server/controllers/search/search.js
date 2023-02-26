import Artist from "../../models/artist.js";
import Beat from "../../models/beat.js";
import Genre from "../../models/genre.js";

export const searchGenre = async (req, res) => {
    const q = req.params.query
    try {
        const results = await Genre.find({ $text: { $search: `"\"${q}\""` } });
        res.status(200).json(results)
    } catch (err) {
        console.log(err)
    }
}
export const searchArtist = async (req, res) => {
    const q = req.params.query
    try {
        const results = await Artist.find({ $text: { $search: `"\"${q}\""` } });
        res.status(200).json(results)
    } catch (err) {
        console.log(err)
    }
}
export const searchBeat = async (req, res) => {
    const q = req.params.query
    try {
        const results = await Beat.find({ $text: { $search: `"\"${q}\""` } });
        res.status(200).json(results)
    } catch (err) {
        console.log(err)
    }
}