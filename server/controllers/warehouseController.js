import { fetchWarehouseProducts } from "../models/warehouse.js";

// Получение информации о товарах на складе
export const getWarehouseProducts = async (req, res) => {
  const warehouseId = req.params.id;

  try {
    const products = await fetchWarehouseProducts(warehouseId);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
