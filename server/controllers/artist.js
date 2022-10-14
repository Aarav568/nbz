import Artist from '../models/artist.js'
import Genre from '../models/genre.js'

export const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find({}).populate("beats")
        res.status(200).json(artists)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getArtist = async (req, res) => {
    const { id } = req.params
    try {
        const artist = await Artist.findById(id).populate("beats")
        res.status(200).json(artist)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createArtist = async (req, res) => {
    const { name, genreId, img } = req.body
    try {
        const existingArtist = await Artist.findOne({ name })
        if (existingArtist) return res.status(404).json({ message: "Artist already exists!" })

        const genre = await Genre.findById(genreId)
        const createdArtist = await Artist.create({ name, genre, img })
        res.status(200).redirect("/artist")
        // .json(createdArtist)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteArtist = async (req, res) => {
    try {
        const removedArtist = await Artist.findByIdAndDelete(req.params.id)
        res.status(200).json(removedArtist)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
} 