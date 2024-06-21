import express from "express";
import pool from "../backend/config/db.js";
const app = express();
const PORT = 3000;
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "../backend/routes/userRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS solution");
    res.json({
      message: "Database connection successful",
      result: rows[0].solution,
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ message: "Database connection failed", error });
  }
});

app.get("/", () => {
  console.log("hello world...");
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
