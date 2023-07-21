import Artist from "../../models/artist.js";
import Playlist from "../../models/playlist.js";
import Beat from "../../models/beat.js";
import Genre from "../../models/genre.js";

export const getGenreByTags = async (req, res) => {
    console.log(req.params.tag)
    try {
        const genre = await Genre.find({ tags: { "$in": [req.params.tag] } })
        res.status(200).json(genre)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

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

export const getBeatByTags = async (req, res) => {
    try {
        const beat = await Beat.find({ tags: { "$in": [req.params.tag] } })
        res.status(200).json(beat)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}