import express from "express";
import Store from "../Models/store.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const store = await Store.find();
    res.json(store);
  } catch (e) {
    res.status(400).json("Error" + e);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newStore = new Store({
      name: req.body.name,
      location: req.body.location,
    });
    await newStore.save();
    res.json("Store added");
  } catch (e) {
    res.status(400).json("Error" + e);
  }
});

export default router;
