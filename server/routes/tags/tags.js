import express from "express";
import { getArtistByTags, getPlaylistByTags, createTag, getBeatByTags } from "../../controllers/tags/tags.js";
const router = express.Router()

router.get("/artist/:tag", getArtistByTags)
router.get("/playlist/:tag", getPlaylistByTags)
router.get("/beat/:tag", getBeatByTags)
router.post("/create/:id", createTag)

export default router