import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../services/warehouse.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warehouse-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warehouse-home-page.component.html',
  styleUrls: ['./warehouse-home-page.component.css'],
})
export class WarehouseHomePageComponent implements OnInit {
  warehouses: any[] = [];

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.loadWarehouses();
  }

  loadWarehouses(): void {
    this.warehouseService.getUserWarehouses().subscribe((data: any[]) => {
      this.warehouses = data;
    });
  }

  getProgress(warehouse: any): number {
    return (warehouse.totalQuantity / warehouse.maxCapacity) * 100;
  }

  getProgressColor(warehouse: any): string {
    const progress = this.getProgress(warehouse);
    if (progress < 20) return 'green'; // Green
    if (progress < 80) return 'orange'; // Yellow
    return 'red'; // Red
  }
}
