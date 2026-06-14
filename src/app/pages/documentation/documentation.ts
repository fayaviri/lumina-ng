import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-documentation',
  imports: [CardModule],
  template: `
    <section class="page-shell">
      <div class="page-header">
        <div class="page-title-row">
          <div>
            <h1>Documentation</h1>
            <p>Project goals, structure and conventions for Lumina NG.</p>
          </div>
        </div>
      </div>

      <p-card styleClass="layout-card">
        <ng-template #title>Template Purpose</ng-template>
        <p>
          Lumina NG is a free Angular + PrimeNG Aura admin template focused on balanced UI scale,
          responsive behavior and an AI-friendly code structure.
        </p>
      </p-card>

      <p-card styleClass="layout-card">
        <ng-template #title>Main Principles</ng-template>
        <div class="message-stack">
          <p><strong>Balanced scale:</strong> inputs, text, buttons and cards should not feel too large or too small.</p>
          <p><strong>AI-friendly:</strong> routes, layout, pages and shared styles should be easy to locate and modify.</p>
          <p><strong>Responsive:</strong> each page should work correctly on desktop, tablet and mobile.</p>
          <p><strong>Modern Angular:</strong> the template uses Angular 21, standalone components and lazy routes.</p>
        </div>
      </p-card>

      <p-card styleClass="layout-card">
        <ng-template #title>Folder Structure</ng-template>
        <p>
          The visual shell lives in <code>src/app/layout</code>, reusable pieces live in <code>src/app/shared</code>,
          global technical services live in <code>src/app/core</code>, and demo pages live in <code>src/app/pages</code>.
        </p>
      </p-card>
    </section>
  `
})
export class Documentation {}
