import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  code: string;
  name: string;
  category: string;
  quantity: number;
  status: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Product[] {
    return [
      { id: 1, code: 'P-1001', name: 'Monitor institucional', category: 'Hardware', quantity: 24, status: 'INSTOCK' },
      { id: 2, code: 'P-1002', name: 'Licencia de software', category: 'Software', quantity: 8, status: 'LOWSTOCK' },
      { id: 3, code: 'P-1003', name: 'Servidor virtual', category: 'Infraestructura', quantity: 0, status: 'OUTOFSTOCK' },
      { id: 4, code: 'P-1004', name: 'Equipo de red', category: 'Networking', quantity: 16, status: 'INSTOCK' }
    ];
  }
}
