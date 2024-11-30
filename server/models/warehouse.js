import pool from "../config/exports.js";

// Получение информации о товарах на складе
export const fetchWarehouseProducts = async (warehouseId) => {
  const query = `
    SELECT 
        w.name AS warehouse_name,
        wp.quantity,
        p.vendor_code,
        p.name AS product_name,
        p.description,
        p.price,
        p.picture,
        p.manufacturer,
        s.name AS supplier_name,
        sa.street AS supplier_street,
        sa.city AS supplier_city,
        sa.state AS supplier_state,
        sa.postal_code AS supplier_postal_code,
        sa.country AS supplier_country,
        w.max_capacity
    FROM 
        "warehouse-management".warehouse w
    JOIN 
        "warehouse-management".warehouse_product wp ON w.warehouse_id = wp.warehouse_id
    JOIN 
        "warehouse-management".product p ON wp.product_id = p.product_id
    LEFT JOIN 
        "warehouse-management".supplier s ON p.supplier_id = s.supplier_id
    LEFT JOIN 
        "warehouse-management".supplier_address sa ON s.address_id = sa.address_id
    WHERE 
        w.warehouse_id = $1;
  `;

  try {
    const result = await pool.query(query, [warehouseId]);
    return result.rows;
  } catch (err) {
    console.error("Error fetching warehouse products:", err);
    throw err;
  }
};
