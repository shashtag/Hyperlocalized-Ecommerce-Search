import express from "express";
import cors from "cors";
import product from "./Routes/product.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/product", product);
app.use("*", (req, res) => res.status(404).json({ error: "Route not found" }));

export default app;
