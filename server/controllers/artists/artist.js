import Artist from '../../models/artist.js'
import Genre from '../../models/genre.js'
import { imagekit } from '../../utils/imagekit.js'

export const getAllArtists = async (req, res) => {
    const limit = req.params.limit
    try {
        const artists = limit ? await Artist.find({}, { beats: 0 }).limit(limit).exec() : await Artist.find({}, { beats: 0 })
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
        const image = await imagekit.upload({
            file: img,
            folder: "/nbz/artists/",
            fileName: `${name}`,
            transformation: [{
                height: 300,
                width: 300,
            }]
        })
        const createdArtist = await Artist.create({ name, genre, img: image.url + "?tr=h-300%2Cw-300" })
        res.status(200).json(createdArtist)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const setAsFeatured = async (req, res) => {
    const { id } = req.body
    try {
        const artist = await Artist.findById(id)
        artist.tags.push("featured")
        const featuredArtist = await artist.save()
        res.status(200).json(featuredArtist)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const removeAsFeatured = async (req, res) => {
    const { id } = req.body
    try {
        const artist = await Artist.findById(id)
        artist.tags.pop()
        const featuredArtist = await artist.save()
        res.status(200).json(featuredArtist)
    } catch (err) {
        res.status(500).json({ message: err.message })
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