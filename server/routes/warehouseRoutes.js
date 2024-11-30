import express from "express";
import { getWarehouseProducts } from "../controllers/warehouseController.js";
import authenticateJWT from "../middleware/authenticateJWT.js";

const router = express.Router();

router.get("/:id/products", authenticateJWT, getWarehouseProducts);
export default router;