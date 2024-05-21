import Joi from "joi";

const variantSchema = Joi.object({
  type: Joi.string().max(100).required(),
  value: Joi.string().max(100).required(),
});

const inventorySchema = Joi.object({
  quantity: Joi.number().integer().required(),
  inStock: Joi.boolean().required(),
});

// Define Product schema
const joiValidationSchema = Joi.object({
  name: Joi.string().max(50).required(),
  description: Joi.string().max(500).required(),
  price: Joi.number().required(),
  category: Joi.string().max(50).required(),
  tags: Joi.array().items(Joi.string().max(50)).required(),
  variants: Joi.array().items(variantSchema).required(),
  inventory: inventorySchema.required(),
});

export default joiValidationSchema;
