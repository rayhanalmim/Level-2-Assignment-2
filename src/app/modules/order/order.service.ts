import { Order } from "./order.interface";
import OrderDataModel from "./order.model";

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderDataModel.create(order);
  return result;
};

const getOrderFromDB = async () => {
  const result = await OrderDataModel.find();
  return result;
};

const getSingleOrderFromDB = async (email: string) => {
  const result = await OrderDataModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getOrderFromDB,
  getSingleOrderFromDB,
};
