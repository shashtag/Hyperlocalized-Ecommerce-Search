import express from "express";
import Product from "../Models/product.model.js";
import Store from "../Models/store.model.js";

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
  const search = [];
  try {
    let products = await Product.find({
      name: { $regex: "^" + req.body.search, $options: "i" },
    });
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      try {
        let storeNos = 0;
        let price = 0;
        for (let j = 0; j < product.stores.length; j++) {
          const pStore = product.stores[j];
          try {
            let store = await Store.findById(pStore.storeId);
            if (
              store.location.toLowerCase() == req.body.location.toLowerCase()
            ) {
              storeNos++;
              price += pStore.price;
            }
          } catch (e) {
            throw e;
          }
        }
        if (storeNos !== 0) {
          search.push({
            name: product.name,
            storeNos,
            avgPrice: price / storeNos,
          });
        }
      } catch (e) {
        res.status(400).json("Error" + e);
      }
      if (search.length === 5) {
        break;
      }
    }

    res.json(search);
  } catch (e) {
    res.status(400).json("Error" + e);
  }
});

export default router;
