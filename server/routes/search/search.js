import express from 'express'
import { searchArtist, searchBeat, searchGenre } from '../../controllers/search/search.js'
import { upload } from '../../utils/multer.js'

const router = express.Router()

router.get("/genre/:query", searchGenre)
router.get("/artist/:query", searchArtist)
router.get("/beat/:query", searchBeat)

export default router