import Artist from "../../models/artist.js"
import Beat from "../../models/beat.js"
import Distribution from "../../models/distribution.js"
import Genre from "../../models/genre.js"
import Playlist from "../../models/playlist.js"
import { generateUrl } from "../../firebase/firebase.js"

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
    var tags = req.body.tags
    tags = tags.split(" ")
    const { name, artistId, genreId } = req.body

    try {
        const existingBeat = await Beat.findOne({ name })
        if (existingBeat) return res.status(404).json({ message: "Beat already exists!" })

        const artist = await Artist.findById(artistId)
        const genre = await Genre.findById(genreId)
        const newBeat = {
            artist, genre, tags, name
        }
        const createdBeat = await Beat.create(newBeat)
        await artist.beats.push(createdBeat)
        await artist.save()
        res.status(200).redirect("/beat")
        // .json(createdBeat)
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

// export const saveSample = async (req, res) => {
//     const data = req.body.data
//     try {
//         const beat = await Beat.findOne({ "name": "Controlla" })
//         beat.distribution = await Distribution.create(
//             {
//                 sample: data,
//                 ref: `/BEATS/${beat.name.split(" ").join("")}/`,
//                 beat
//             }
//         )
//         await beat.save()
//         res.status(200).redirect("/beat")
//         // .json(createdBeat)
//     } catch (err) {
//         res.status(500).json({ message: err })
//     }
// }

export const getBeatSample = async (req, res) => {
    const { id } = req.params
    try{
        const beat = await Beat.findById(id).populate("distribution")
        const url = await generateUrl(beat.distribution.sampleRef)
        res.status(200).json({audioUrl: url})
    } catch (err) {
        console.log(err)
    }
}

export const createDistribution = async (req, res) => {
    const { id } = req.params
    try{
        const beat = await Beat.findById(id)
        const distribution = await Distribution.create({
            sampleRef: `/BEATS/${beat.name.split(" ").join("")}/Sample/${beat.name.split(" ").join("")}.mp3`,
            leaseRef: `/BEATS/${beat.name.split(" ").join("")}/LEASE/${beat.name.split(" ").join("")}.zip`,
            buyRef : `/BEATS/${beat.name.split(" ").join("")}/BUY/${beat.name.split(" ").join("")}.zip`,
            stemRef: `/BEATS/${beat.name.split(" ").join("")}/STEM/${beat.name.split(" ").join("")}.zip`
        })
        beat.distribution = distribution
        await beat.save()
        res.send("YOSH")
    } catch (err) {
        console.log(err)
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

//GET TRENDING TAGS
//SORT POSTS BY MOST LIKED SLICE TO 10 POSTS
//EXTRACT TAGS AND RENDER