import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import Joi from "joi";
import joiValidationSchema from "./productValidatorUsingJoi";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const { error, value } = joiValidationSchema.validate(product);
    console.log({ value });
    console.log({ error });

    if (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong!",
        Error: error,
      });
    }

    const result = await ProductServices.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (!searchTerm) {
      const result = await ProductServices.getProductFromDB();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } else {
      const result = await ProductServices.getSearchedProductFromDB(
        searchTerm as string
      );
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const result = await ProductServices.UpdateSingleProductIntoDB(
      productId,
      product
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      Error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateSingleProduct,
};
