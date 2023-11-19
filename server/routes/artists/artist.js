import express from "express";
import { getAllArtists, createArtist, deleteArtist, getArtist } from "../../controllers/artists/artist.js";

const router = express.Router()

router.get("/q/:limit", getAllArtists)
router.get("/id/:id", getArtist)
router.post("/create", createArtist)
router.delete("/delete/:id", deleteArtist)

export default router