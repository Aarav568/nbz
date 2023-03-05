import Playlist from "../../models/playlist.js"
import Beats from "../../models/beat.js"
import Genre from "../../models/genre.js"
import { imagekit } from "../../utils/imagekit.js"

export const getAllPlaylists = async (req, res) => {
    const limit = req.params.limit
    try {
        const playlists = limit ? await Playlist.find({}, { beats: 0 }).limit(limit).exec() : await Playlist.find({}, { beats: 0 })
        res.status(200).json(playlists)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getPlaylist = async (req, res) => {
    try {
        const playlists = await Playlist.findById(req.params.id).populate("beats")
        res.status(200).json(playlists)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createPlaylist = async (req, res) => {
    // var tags = req.body.tags
    // tags = tags.split(" ")
    const { name, img, genreId } = req.body
    try {
        const existingPlaylist = await Playlist.findOne({ name })
        if (existingPlaylist) return res.status(404).json({ message: "Genre already exists!" })

        const genre = await Genre.findById(genreId)
        const image = await imagekit.upload({
            file: img,
            folder: "/nbz/playlists/",
            fileName: `${name}`,
            transformation: [{
                height: 300,
                width: 300,
            }]
        })
        const createdPlaylist = await Playlist.create({
            genre, name, img: image.url + "?tr=h-300%2Cw-300"
        })
        res.status(200).json(createdPlaylist)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export const addBeatToPlaylist = async (req, res) => {
    const { beatId } = req.body
    const { playlistId } = req.params
    try {
        const playlist = await Playlist.findById(playlistId)
        const existingBeat = playlist.beats.includes(beatId)
        if (existingBeat) return res.status(404).json({ message: "Beat already exists!" })
        const beat = await Beats.findById(beatId)

        playlist.beats.push(beat)
        const savedPlaylist = await playlist.save()
        res.status(200).json(savedPlaylist)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const setAsFeatured = async (req, res) => {
    const { id } = req.body
    try {
        const playlist = await Playlist.findById(id)
        playlist.tags.push("featured")
        const featuredPlaylist = await playlist.save()
        res.status(200).json(featuredPlaylist)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const deletePlaylist = async (req, res) => {
    return
}