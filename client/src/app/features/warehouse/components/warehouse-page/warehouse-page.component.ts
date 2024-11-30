import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseService } from '../../services/warehouse.service';
import { ActivatedRoute } from '@angular/router';
import { Product, WarehouseDetails } from '../../models/warehouse.model';

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
  warehouseCapacity: number = 0;
  totalQuantity: number = 0;
  warehouseId: number = 0;

  constructor(
    private warehouseService: WarehouseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.warehouseId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadWarehouseDetails();
    this.loadProducts();
  }

  loadWarehouseDetails(): void {
    this.warehouseService.getWarehouseDetails(this.warehouseId).subscribe({
      next: (data) => {
        this.warehouseName = data.name;
        this.warehouseAddress = data.address;
        this.warehouseCapacity = data.capacity;
      },
      error: (error) => {
        console.error('Error fetching warehouse details:', error);
      }
    });
  }

  loadProducts(): void {
    this.warehouseService.getProducts(this.warehouseId).subscribe({
      next: (data) => {
        this.products = data;
        this.totalQuantity = this.products.reduce(
          (sum, product) => sum + product.quantity,
          0
        );
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
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