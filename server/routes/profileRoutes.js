import express from "express";
import {
  getUserProfile,
} from "../controllers/profileController.js";
import authenticateJWT from "../middleware/authenticateJWT.js";

const router = express.Router();

router.get("/", authenticateJWT, getUserProfile);

export default router;
