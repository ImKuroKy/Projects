import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warehouse-page.component.html',
  styleUrls: ['./warehouse-page.component.css'],
})
export class WarehousePageComponent implements OnInit {
  products: Product[] = [];
  warehouseName: string = '';
  warehouseAddress: string = '';
  warehouseCapacity: number = 3000;  // Тестовая ёмкость склада
  totalQuantity: number = 0;

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    // Примерные данные для тестирования
    this.products = [
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
      {
        id: 1,
        name: 'Товар 1',
        quantity: 20,
        sku: 'SKU1',
        manufacturer: 'Производитель 1',
        supplier: 'Поставщик 1',
        description: 'Описание 1',
      },
      {
        id: 2,
        name: 'Товар 2',
        quantity: 30,
        sku: 'SKU2',
        manufacturer: 'Производитель 2',
        supplier: 'Поставщик 2',
        description: 'Описание 2',
      },
      {
        id: 3,
        name: 'Товар 3',
        quantity: 10,
        sku: 'SKU3',
        manufacturer: 'Производитель 3',
        supplier: 'Поставщик 3',
        description: 'Описание 3',
      },
    ];

    // Эти методы будут использоваться для получения реальных данных
    // this.warehouseService.getWarehouseDetails().subscribe((data) => {
    //   this.warehouseName = data.name;
    //   this.warehouseAddress = data.address;
    //   this.warehouseCapacity = data.capacity;
    // });
    // this.warehouseService.getProducts().subscribe((data) => {
    //   this.products = data;
    //   this.totalQuantity = this.products.reduce(
    //     (sum, product) => sum + product.quantity,
    //     0
    //   );
    // });

    this.totalQuantity = this.products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
  }

  getProgress(): number {
    return (this.totalQuantity / this.warehouseCapacity) * 100;
  }

  getProgressColor(): string {
    const progress = this.getProgress();
    if (progress < 20) {
      return '#4caf50'; // Green
    } else if (progress >= 20 && progress < 80) {
      return '#ffeb3b'; // Yellow
    } else {
      return '#f44336'; // Red
    }
  }
}
