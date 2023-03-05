import express from "express";
import { removeAsFeatured } from "../../controllers/artists/artist.js";
import { getAllArtists, createArtist, deleteArtist, getArtist, setAsFeatured } from "../../controllers/artists/artist.js";

const router = express.Router()

router.get("/q/:limit", getAllArtists)
router.get("/id/:id", getArtist)
router.post("/create", createArtist)
router.post("/featured", setAsFeatured)
router.post("/featured/remove", removeAsFeatured)
router.delete("/delete/:id", deleteArtist)

export default router