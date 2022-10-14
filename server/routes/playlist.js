import express from "express";
import { getAllPlaylists, createPlaylist, deletePlaylist, addBeatToPlaylist } from "../controllers/playlist.js";

const router = express.Router()

router.get("/", getAllPlaylists)
router.post("/create", createPlaylist)
router.delete("/:id", deletePlaylist) //pending
router.post('/:playlistId/addToPlaylist', addBeatToPlaylist)

export default router