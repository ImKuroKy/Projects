export interface Product {
  warehouse_name: string;
  quantity: number;
  sku: string;
  product_name: string;
  description: string;
  price: string;
  picture: string | null;
  manufacturer: string;
  supplier_name: string;
  supplier_street: string;
  supplier_city: string;
  supplier_state: string;
  supplier_postal_code: string;
  supplier_country: string;
}

export interface WarehouseDetails {
  name: string;
  address: string;
  capacity: number;
}
