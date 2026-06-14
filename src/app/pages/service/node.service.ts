import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NodeService {
  getTreeNodes(): TreeNode[] {
    return [
      {
        label: 'Aplicación',
        expanded: true,
        children: [
          { label: 'Módulos', children: [{ label: 'Dashboard' }, { label: 'UI Kit' }] },
          { label: 'Servicios', children: [{ label: 'ProductService' }, { label: 'CustomerService' }] }
        ]
      }
    ];
  }
}
