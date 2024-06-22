import express from "express";
const router = express.Router();
import { getRandomQuote } from "../controllers/quoteController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

router.get("/quote", authenticateToken, getRandomQuote);

export default router;
