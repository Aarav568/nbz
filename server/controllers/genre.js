import Genre from '../models/genre.js'

export const getAllGenres = async (req, res) => {
    try {
        const genre = await Genre.find({})
        res.status(200).json(genre)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createGenre = async (req, res) => {
    const { genre } = req.body
    try {
        const createdGenre = await Genre.create({ genre })
        res.status(200).json(createdGenre)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const deleteGenre = async (req, res) => {
    try {
        const removedGenre = await Genre.findByIdAndDelete(req.params.id)
        res.status(200).json(removedGenre)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
