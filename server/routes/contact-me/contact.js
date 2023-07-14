import express from "express";
import { contactMe, sendQuery } from "../../controllers/contact-me/contact.js";
const router = express.Router()

router.post("/", contactMe)
router.post("/query", sendQuery)

export default router