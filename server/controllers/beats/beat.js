import Artist from "../../models/artist.js"
import Beat from "../../models/beat.js"
import Distribution from "../../models/distribution.js"
import Genre from "../../models/genre.js"
import Playlist from "../../models/playlist.js"
import { generateUrl } from "../../utils/firebase.js"
import { firebaseUpload } from "../../utils/firebase.js"
import { imagekit } from "../../utils/imagekit.js"

export const getAllBeats = async (req, res) => {
    try {
        const beats = await Beat.find({})
        res.status(200).json(beats)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

export const getBeat = async (req, res) => {
    const { beatId } = req.params
    try {
        const beat = await Beat.findById(beatId)
        res.status(200).json(beat)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

export const getBeatsByArtist = async (req, res) => {
    const { artistId } = req.params
    try {
        const beats = await Beat.find({ artist: { _id: artistId } })
        res.status(200).json(beats)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
export const getBeatsByPlaylist = async (req, res) => {
    const { playlistId } = req.params
    try {
        const { beats } = await Playlist.findById(playlistId).populate("beats")
        res.status(200).json(beats)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
export const getBeatsByGenre = async (req, res) => {
    const { genreId } = req.params
    try {
        const beats = await Beat.find({ genre: { _id: genreId } })
        res.status(200).json(beats)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
export const getBeatsByTags = async (req, res) => {
    try {
        const beats = await Beat.find()
        res.status(200).json(beats)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

export const createBeat = async (req, res) => {
    // var tags = req.body.tags
    // tags = tags.split(" ")

    const { name, artistId, genreId, img } = req.body
    try {
        const existingBeat = await Beat.findOne({ name })
        if (existingBeat) return res.status(404).json({ message: "Beat already exists!" })

        const artist = await Artist.findById(artistId)
        const genre = await Genre.findById(genreId)
        const image = await imagekit.upload({
            file: img,
            folder: "/nbz/beats/",
            fileName: `${name}`,
            transformation: [{
                height: 300,
                width: 300,
            }]
        })
        const createdBeat = await Beat.create({
            artist, genre, name, img: image.url + "?tr=h-300%2Cw-300"
        })
        artist.beats.push(createdBeat)
        await artist.save()
        await firebaseUpload(req.files, name, createdBeat._id)
        res.status(200).json({ name: createdBeat.name })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

export const setAsFeatured = async (req, res) => {
    const { id } = req.body
    try {
        const beat = await Beat.findById(id)
        beat.tags.push("featured")
        const featuredBeat = await beat.save()
        res.status(200).json(featuredBeat)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const removeAsFeatured = async (req, res) => {
    const { id } = req.body
    try {
        const beat = await Beat.findById(id)
        beat.tags.pop()
        const featuredbeat = await beat.save()
        res.status(200).json(featuredbeat)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}



export const deleteBeat = async (req, res) => {
    try {
        // const user = await User.findById(req.userId)
        // const posts = await Post.find({ author: { $in: user.following } }).sort({'createdAt': -1}).populate('author comments.user', 'displayName avatar')
        // res.status(200).json(posts)

    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}
