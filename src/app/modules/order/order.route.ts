import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

router.post("/orders", OrderController.createOrder);
router.get("/orders", OrderController.getOrder);

export const OrderRoute = router;
