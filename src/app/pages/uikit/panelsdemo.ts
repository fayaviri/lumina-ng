import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-panels-demo',
  imports: [CardModule, PanelModule, AccordionModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Panels</ng-template>
        <p-panel header="Panel informativo">
          <p>Contenido dentro de un panel PrimeNG.</p>
        </p-panel>
      </p-card>
    </section>
  `
})
export class PanelsDemo {}
