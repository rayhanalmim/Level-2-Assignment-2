import Joi from "joi";

// Define Order schema
const orderValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  productId: Joi.string().length(24).required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().integer().min(1).required(),
});

export default orderValidationSchema;
