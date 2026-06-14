import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="page-header">
      <div class="page-title-row">
        <div>
          <h1>{{ title }}</h1>
          @if (subtitle) {
            <p>{{ subtitle }}</p>
          }
        </div>
      </div>
    </div>
  `
})
export class PageHeader {
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
}
