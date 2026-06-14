import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-timeline-demo',
  imports: [CardModule, TimelineModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Timeline</ng-template>
        <p-timeline [value]="events">
          <ng-template #content let-event>
            <strong>{{ event.status }}</strong>
            <p>{{ event.date }}</p>
          </ng-template>
        </p-timeline>
      </p-card>
    </section>
  `
})
export class TimelineDemo {
  events = [
    { status: 'Creado', date: '01/05/2026' },
    { status: 'Revisado', date: '03/05/2026' },
    { status: 'Aprobado', date: '07/05/2026' }
  ];
}
