import { Product } from "./product.interface";
import ProductModel from "./product.model";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

const UpdateSingleProductIntoDB = async (
  productId: string,
  product: Product
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, product);
  return result;
};

const getSearchedProductFromDB = async (searchTerm: string) => {
  const regexSearchText = { $regex: new RegExp(searchTerm, "i") };
  console.log(regexSearchText);
  const result = await ProductModel.find({ name: regexSearchText }).sort({
    name: 1,
  });
  console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB,
  UpdateSingleProductIntoDB,
  getSearchedProductFromDB,
};
