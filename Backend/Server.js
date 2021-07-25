import express from "express";
import cors from "cors";
import search from "./Api/search.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/search", search);
app.use("*", (req, res) => res.status(404).json({ error: "Route not found" }));

export default app;
