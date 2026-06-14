import { Injectable } from '@angular/core';

export interface Customer {
  id: number;
  name: string;
  country: string;
  representative: string;
  status: 'qualified' | 'new' | 'negotiation' | 'renewal';
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  getCustomers(): Customer[] {
    return [
      { id: 1, name: 'Juan Pérez', country: 'Bolivia', representative: 'Ana Salazar', status: 'qualified' },
      { id: 2, name: 'María Rojas', country: 'Chile', representative: 'Luis Vargas', status: 'new' },
      { id: 3, name: 'Carlos Méndez', country: 'Perú', representative: 'Elena Ruiz', status: 'negotiation' }
    ];
  }
}
