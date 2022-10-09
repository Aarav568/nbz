import express from "express";
import { getAllGenres, createGenre, deleteGenre } from "../controllers/genre.js";

const router = express.Router()

router.get("/", getAllGenres)
router.post("/create", createGenre)
router.delete("/delete/:id", deleteGenre)

export default router