import express from "express";
import { getAllOrders, createOrder, getOrder } from "../../controllers/orders/order.js";

const router = express.Router()

router.get("/:id", getAllOrders)
router.post("/", createOrder)

export default router