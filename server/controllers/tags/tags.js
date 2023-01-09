import Artist from "../../models/artist.js";
import Playlist from "../../models/playlist.js";

export const getArtistByTags = async (req, res) => {
    try {
        const artist = await Artist.find({ tags: { "$in": [req.params.tag] } }).populate('beats')
        res.status(200).json(artist)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}
export const getPlaylistByTags = async (req, res) => {
    try {
        const playlist = await Playlist.find({ tags: { "$in": [req.params.tag] } }).populate('beats')
        res.status(200).json(playlist)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}
export const createTag = async (req, res) => {
    try {
        res.status(200).json()

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}