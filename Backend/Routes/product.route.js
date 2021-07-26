import express from "express";
import Product from "../Models/product.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (e) {
    res.status(400).json("Error" + e);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newProd = new Product({
      name: req.body.name,
      stores: req.body.store,
    });
    await newProd.save();
    res.json("Product added");
  } catch (e) {
    res.status(400).json("Error" + e);
  }
});
router.post("/search", async (req, res) => {
  try {
    let p = await Product.find({
      name: { $regex: "^" + req.body.search, $options: "i" },
    }).limit(5);

    res.json(p);
  } catch (e) {
    res.status(400).json("Error" + e);
  }
});

export default router;
