import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productStoreSchema = new Schema({
  storeId: {
    type: mongoose.Types.ObjectId,
    ref: "store",
    required: true,
  },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const productSchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
  stores: [productStoreSchema],
});

const product = mongoose.model("Product", productSchema);

export default product;
