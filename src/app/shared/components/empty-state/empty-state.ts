import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div class="empty-state">
      <i [class]="icon" aria-hidden="true"></i>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  `,
  styles: [`
    .empty-state {
      display: grid;
      justify-items: center;
      gap: 0.75rem;
      padding: 2rem;
      text-align: center;
      color: var(--p-surface-500);
    }

    .empty-state i {
      font-size: 2rem;
      color: var(--p-primary-color);
    }

    .empty-state h3 {
      margin: 0;
      color: var(--p-surface-900);
      font-size: 1rem;
      font-weight: 600;
    }

    .empty-state p {
      margin: 0;
      max-width: 24rem;
    }
  `]
})
export class EmptyState {
  @Input() icon = 'pi pi-inbox';
  @Input() title = 'No data found';
  @Input() message = 'There are no records to display yet.';
}
