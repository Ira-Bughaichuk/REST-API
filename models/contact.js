const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `"name" must be exist`,
    "string.base": `"name" must be string`,
    "string.empty": `"name" cannot be empty`,
  }),
  email: Joi.string().required().messages({
    "any.required": `"email" must be exist`,
    "string.base": `"email" must be string`,
    "string.empty": `"email" cannot be empty`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `"phone" must be exist`,
    "string.base": `"phone" must be string`,
    "string.empty": `"phone" cannot be empty`,
  }),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    message: "missing field favorite",
  }),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactSchema);
module.exports = {
  Contact,
  schemas,
};
