import { Schema, model, connect } from "mongoose";
import { Order } from "./order.interface";

// Define the schema
const orderDataSchema = new Schema<Order>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// Create and export the model
const OrderDataModel = model<Order>("OrderData", orderDataSchema);

export default OrderDataModel;
