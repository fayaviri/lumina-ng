import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-demo',
  imports: [CardModule, MenuModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Menu</ng-template>
        <p-menu [model]="items"></p-menu>
      </p-card>
    </section>
  `
})
export class MenuDemo {
  items: MenuItem[] = [
    { label: 'Nuevo', icon: 'pi pi-plus' },
    { label: 'Buscar', icon: 'pi pi-search' },
    { label: 'Eliminar', icon: 'pi pi-trash' }
  ];
}
