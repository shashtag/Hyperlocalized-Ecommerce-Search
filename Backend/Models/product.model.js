import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const schema = mongoose.Schema;

const productStoreSchema = new Schema(
  {
    storeid: ObjectId,
    price: Number,
    stock: Number,
  },
  { timestamps: true },
);

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    store: [productStoreSchema],
  },
  { timestamps: true },
);

const product = mongoose.model("Product", productSchema);

export default product;
