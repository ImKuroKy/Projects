import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private baseUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getWarehouseDetails(): Observable<{ name: string; address: string; capacity: number }> {
    return this.http.get<{ name: string; address: string; capacity: number }>(`${this.baseUrl}/warehouse`);
  }
}
