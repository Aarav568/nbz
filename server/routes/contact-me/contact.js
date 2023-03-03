import express from "express";
import { contactMe } from "../../controllers/contact-me/contact.js";
const router = express.Router()

router.post("/", contactMe)

export default router