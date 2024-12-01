export interface Product {
  product_name: string;
  sku: string;
  description: string;
  picture: string | null;
  manufacturer: string;
  supplier_name: string;
  quantity: number;
  price: string;
}

export interface WarehouseDetails {
  name: string;
  address: string;
  capacity: number;
}
