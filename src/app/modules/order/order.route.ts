import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

//validate data using joi before insert it on DB, also implement stock out functionality
router.post("/orders", OrderController.createOrder);

//get All data by when no query, and get specific user data by sending email as a query peramiter
router.get("/orders", OrderController.getOrder);

export const OrderRoute = router;
