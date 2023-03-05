import express from "express";
import { getAllPlaylists, createPlaylist, deletePlaylist, addBeatToPlaylist, getPlaylist, setAsFeatured } from "../../controllers/playlists/playlist.js";

const router = express.Router()

router.get("/q/:limit", getAllPlaylists)
router.get("/:id", getPlaylist)
router.post("/create", createPlaylist)
router.post("/featured", setAsFeatured)
router.post('/:playlistId/addToPlaylist', addBeatToPlaylist)
router.delete("/:id", deletePlaylist) //pending

export default router