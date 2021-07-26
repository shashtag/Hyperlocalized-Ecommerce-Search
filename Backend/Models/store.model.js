import mongoose from "mongoose";

const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  location: { type: String, required: true, trim: true },
});

const store = mongoose.model("store", storeSchema);

export default store;
