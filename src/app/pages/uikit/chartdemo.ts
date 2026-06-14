import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-chart-demo',
  imports: [CardModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Chart</ng-template>
        <p>Instala y configura Chart.js cuando necesites usar p-chart en producción.</p>
      </p-card>
    </section>
  `
})
export class ChartDemo {}
