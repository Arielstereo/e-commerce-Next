import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  amount: {
    type: Number,
    default: 0
  }
});

export default models.Product || model("Product", ProductSchema);
