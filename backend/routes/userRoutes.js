import express from "express";
import { signIn, signUp } from "../controllers/userController.js";
import { getRandomQuote } from "../controllers/quoteController.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/quote", getRandomQuote);

export default router;
