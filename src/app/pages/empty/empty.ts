import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-empty',
  imports: [CardModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Empty</ng-template>
        <p>Página base para crear nuevas vistas.</p>
      </p-card>
    </section>
  `
})
export class Empty {}
