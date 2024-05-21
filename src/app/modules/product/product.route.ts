import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

//validate data using joi before insert it on DB
router.post("/products", ProductController.createProduct);

//get all product and with default peramiter, and get sepecific product by sending name as a query
router.get("/products", ProductController.getProduct);

//get a specific product using _id
router.get("/products/:productId", ProductController.getSingleProduct);

//update product using _id
router.put("/products/:productId", ProductController.updateSingleProduct);

//delete product from DB
router.delete("/products/:productId", ProductController.deleteSingleProduct);

export const ProductRoute = router;
