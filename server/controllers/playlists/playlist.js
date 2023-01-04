import Playlist from "../../models/playlist.js"
import Beats from "../../models/beat.js"
import Genre from "../../models/genre.js"

export const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({})
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
    var tags = req.body.tags
    tags = tags.split(" ")
    const { name, img, genreId } = req.body

    try {
        const existingPlaylist = await Playlist.findOne({ name })
        if (existingPlaylist) return res.status(404).json({ message: "Genre already exists!" })

        const genre = await Genre.findById(genreId)
        const newPlaylist = {
            genre, tags, name, img
        }
        const createdPlaylist = await Playlist.create(newPlaylist)
        res.redirect(`/${createdPlaylist.id}/addToPlaylist/${createdPlaylist.name}`)
        // .json(createdPlaylist)
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
        
        await playlist.beats.push(beat)
        const savedPlaylist = await playlist.save()
        res.status(200).redirect(`/${playlistId}/addToPlaylist/${playlist.name}`)
        // .json(savedPlaylist)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deletePlaylist = async (req, res) => {
    return
}
