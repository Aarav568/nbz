import express from "express";
import { getAllArtists, createArtist, deleteArtist } from "../controllers/artist.js";

const router = express.Router()

router.get("/", getAllArtists)
router.post("/create", createArtist)
router.delete("/delete/:id", deleteArtist)

export default router