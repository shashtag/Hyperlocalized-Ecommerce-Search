import express from "express";
import Product from "../Models/product.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  let store = [];
  console.log(req.body.store);
  req.body.store.forEach((e) => {
    store.push(e);
  });
  console.log(store);

  // const newProd = new Product({ name, store });
  console.log(newProd);
  // newProd
  //   .save()
  //   .then(() => res.json("user added"))
  //   .catch((err) => res.status(400).json("Error" + err));
});

export default router;
