import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productStoreSchema = new Schema(
  {
    storeId: { type: mongoose.Types.ObjectId, ref: "store" },
    price: Number,
    stock: Number,
  },
  { timestamps: true },
);

const productSchema = new Schema(
  {
    name: { type: String },
    stores: [productStoreSchema],
  },
  { timestamps: true },
);

const product = mongoose.model("Product", productSchema);

export default product;
