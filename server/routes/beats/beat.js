import express from 'express'
import {
    getBeatsByArtist,
    getBeatsByPlaylist,
    getBeatsByGenre,
    getBeatsByTags,
    getBeat,
    createBeat,
    deleteBeat,
    getAllBeats,
} from '../../controllers/beats/beat.js'

import { upload } from '../../utils/multer.js'

const router = express.Router()

router.get('/artist/:artistId', getBeatsByArtist)
router.get('/playlist/:playlistId', getBeatsByPlaylist)
router.get('/genre/:genreId', getBeatsByGenre) //fix beats genre all are same tf
router.get('/tag/:tag', getBeatsByTags) //find and match tags of beats

router.get('/', getAllBeats)
router.get('/:beatId', getBeat)

router.post('/create', upload.fields([{name: "wav"}, {name: "mp3"}, {name: "stem"}, {name: "sample"}]) ,createBeat)

router.delete('/:id', deleteBeat) //pending

export default router