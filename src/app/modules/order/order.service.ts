import ProductModel from "../product/product.model";
import { Order } from "./order.interface";
import OrderDataModel from "./order.model";

const createOrderIntoDB = async (order: Order) => {
  const { quantity, productId } = order;
  const product: any = await ProductModel.findById(productId);
  console.log(product, quantity);
  if (product.inventory.quantity > quantity) {
    const result = await OrderDataModel.create(order);
    const updateProduct = await ProductModel.findByIdAndUpdate(productId, {
      $set: { "inventory.quantity": product.inventory.quantity - quantity },
    });
    return result;
  } else {
    return false;
  }
};

const getOrderFromDB = async () => {
  const result = await OrderDataModel.find();
  return result;
};

const getSingleOrderFromDB = async (email: string) => {
  const result = await OrderDataModel.find({ email });
  if (result.length) {
    return result;
  } else {
    return false;
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getOrderFromDB,
  getSingleOrderFromDB,
};
