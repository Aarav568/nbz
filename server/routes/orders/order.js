import express from "express";
import { getAllOrders, createOrder, getOrder } from "../../controllers/orders/order.js";

const router = express.Router()

router.get("/", getAllOrders)
router.post("/create", createOrder)
router.post("/:id", getOrder)

export default router