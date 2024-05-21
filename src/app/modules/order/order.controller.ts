import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import orderValidationSchema from "./orderValidatorJoi";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const { error, value } = orderValidationSchema.validate(order);
    console.log({ value });
    console.log({ error });

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong!",
        Error: error,
      });
    }

    const result = await OrderServices.createOrderIntoDB(order);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    if (!email) {
      const result = await OrderServices.getOrderFromDB();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    } else {
      const result = await OrderServices.getSingleOrderFromDB(email as string);
      if (result) {
        res.status(200).json({
          success: true,
          message: `Orders fetched successfully for user email!`,
          data: result,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Order not found",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

export const OrderController = {
  createOrder,
  getOrder,
};
