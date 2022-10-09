import express from "express";
import { getAllPlaylists, createPlaylist, deletePlaylist } from "../controllers/playlist.js";

const router = express.Router()

router.get("/", getAllPlaylists)
router.post("/create", createPlaylist)
router.delete("/:id", deletePlaylist)

export default router