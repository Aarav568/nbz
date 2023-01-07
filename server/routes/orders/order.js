import express from "express";
import { getAllOrders, createOrder } from "../../controllers/orders/order.js";

const router = express.Router()

router.get("/:id", getAllOrders)
router.post("/checkout", createOrder)

export default router