import express from "express";
import { getArtistByTags, getPlaylistByTags, createTag } from "../../controllers/tags/tags.js";
const router = express.Router()

router.get("/artist/:tag", getArtistByTags)
router.get("/playlist/:tag", getPlaylistByTags)
router.post("/create/:id", createTag)

export default router