import express from "express";
import { getAllGenres, createGenre, deleteGenre } from "../../controllers/genres/genre.js";

const router = express.Router()

router.get("/q/:limit", getAllGenres)
router.post("/create", createGenre)
router.delete("/delete/:id", deleteGenre)

export default router