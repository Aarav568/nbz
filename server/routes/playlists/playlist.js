import express from "express";
import { getAllPlaylists, createPlaylist, deletePlaylist, addBeatToPlaylist, getPlaylist } from "../../controllers/playlists/playlist.js";

const router = express.Router()

router.get("/q/:limit", getAllPlaylists)
router.get("/:id", getPlaylist)
router.post("/create", createPlaylist)
router.delete("/:id", deletePlaylist) //pending
router.post('/:playlistId/addToPlaylist', addBeatToPlaylist)

export default router