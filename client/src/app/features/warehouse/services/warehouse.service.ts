import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, WarehouseDetails } from '../models/warehouse.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private baseUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) {}

  getProducts(warehouseID: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/warehouse/${warehouseID}/products`);
  }

  getWarehouseDetails(warehouseID: number): Observable<WarehouseDetails> {
    return this.http.get<{ name: string; address: string; capacity: number }>(`${this.baseUrl}/warehouse/${warehouseID}`);
  }

  getUserWarehouses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/warehouse`);
  }
}
