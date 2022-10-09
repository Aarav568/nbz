import express from 'express'
import {
    getBeatsByArtist,
    getBeatsByPlaylist,
    getBeatsByGenre,
    getBeatsByTags,
    getBeat,
    createBeat,
    deleteBeat
} from '../controllers/beat.js'

const router = express.Router()

router.get('/:artist', getBeatsByArtist) //find beats by filtering the artist 
router.get('/:playlist', getBeatsByPlaylist) //find the playlist populate the beats
router.get('/:genre', getBeatsByGenre) //find and match genre of beats
router.get('/:genre', getBeatsByTags) //find and match tags of beats

router.get('/:id', getBeat)
router.post('/', createBeat)
router.delete('/:id', deleteBeat)


export default router