import mongoose from "mongoose";

const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    location: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

const Store = mongoose.model("Store", storeSchema);

export default Store;
