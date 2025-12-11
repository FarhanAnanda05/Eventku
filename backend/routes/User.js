import express from "express";
import { registerUser, loginUser , getUserProfile } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getUserProfile);

export default router;
