import Playlist from "../models/playlist"

export const getAllPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({})
        res.status(200).json(playlists)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createPlaylist = async (req, res) => {

}

export const deletePlaylist = async (req, res) => {
    return
}
