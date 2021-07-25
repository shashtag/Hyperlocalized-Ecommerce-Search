import express from "express";
import Store from "../Models/store.model.js";

const router = express.Router();

router.route("/").get((req, res) => {
  Store.find()
    .then((store) => res.json(store))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const location = req.body.location;

  const newStore = new Store({ name, location });
  console.log(newStore);

  newStore
    .save()
    .then(() => res.json("user added"))
    .catch((err) => res.status(400).json("Error" + err));
});

export default router;
