import { Component, Input } from '@angular/core';
import { TagModule } from 'primeng/tag';

type StatusSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

@Component({
  selector: 'app-status-tag',
  standalone: true,
  imports: [TagModule],
  template: `
    <p-tag [value]="value" [severity]="severity"></p-tag>
  `
})
export class StatusTag {
  @Input() value = 'Active';
  @Input() severity: StatusSeverity = 'success';
}
