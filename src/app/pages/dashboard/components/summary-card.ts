import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

export interface SummaryCardData {
  label: string;
  value: string;
  icon: string;
  note?: string;
  noteStrong?: string;
  noteText?: string;
  tone: 'danger' | 'success' | 'info' | 'primary';
}

@Component({
  selector: 'app-summary-card',
  imports: [CommonModule, CardModule],
  template: `
    <p-card styleClass="metric-card">
      <div class="metric-content">
        <div>
          <span class="metric-label">{{ data.label }}</span>
          <strong>{{ data.value }}</strong>
        </div>

        <div class="metric-icon" [ngClass]="'metric-' + data.tone">
          <i [ngClass]="data.icon"></i>
        </div>
      </div>

      <p class="metric-note">
        @if (data.noteStrong) {
          <b>{{ data.noteStrong }}</b>
          <span> {{ data.noteText || data.note }}</span>
        } @else {
          <span>{{ data.noteText || data.note }}</span>
        }
      </p>
    </p-card>
  `
})
export class SummaryCard {
  @Input({ required: true }) data!: SummaryCardData;
}
