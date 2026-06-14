import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

type DemoStatus = 'Active' | 'Pending' | 'Disabled';

interface DemoTableRow {
  id: number;
  name: string;
  owner: string;
  date: string;
  time: string;
  category: string;
  status: DemoStatus;
}

@Component({
  selector: 'app-table-demo',
  imports: [
    FormsModule,
    CardModule,
    TableModule,
    TagModule,
    ButtonModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule
  ],
  template: `
    <section class="page-shell">
      <div class="page-header">
        <div class="page-title-row">
          <div>
            <h1>Table</h1>
            <p>Responsive PrimeNG table demo with neutral reusable data.</p>
          </div>

          <p-iconfield iconPosition="left" class="search-field">
            <p-inputicon styleClass="pi pi-search"></p-inputicon>
            <input
              pInputText
              type="text"
              [(ngModel)]="search"
              placeholder="Search name, owner, date, category..."
            />
          </p-iconfield>
        </div>
      </div>

      <p-card styleClass="layout-card">
        <ng-template #title>Table</ng-template>

        <p-table
          [value]="filteredRows"
          [paginator]="true"
          [rows]="4"
          dataKey="id"
          responsiveLayout="scroll"
        >
          <ng-template #header>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Date</th>
              <th>Time</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </ng-template>

          <ng-template #body let-row>
            <tr>
              <td>{{ row.name }}</td>
              <td>{{ row.owner }}</td>
              <td>{{ row.date }}</td>
              <td>{{ row.time }}</td>
              <td>{{ row.category }}</td>
              <td>
                <p-tag
                  [value]="row.status"
                  [severity]="statusSeverity(row.status)"
                ></p-tag>
              </td>
              <td>
                <p-button
                  label="View"
                  icon="pi pi-search"
                  outlined
                ></p-button>
              </td>
            </tr>
          </ng-template>

          <ng-template #emptymessage>
            <tr>
              <td colspan="7">
                No records found.
              </td>
            </tr>
          </ng-template>
        </p-table>
      </p-card>
    </section>
  `
})
export class TableDemo {
  search = '';

  rows: DemoTableRow[] = [
    {
      id: 1,
      name: 'Alpha Workspace',
      owner: 'Alex Rivera',
      date: '18/05/2025',
      time: '09:30',
      category: 'Workspace',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Beta Report',
      owner: 'Camila Torres',
      date: '18/05/2025',
      time: '11:00',
      category: 'Report',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Gamma Board',
      owner: 'Diego Flores',
      date: '19/05/2025',
      time: '14:00',
      category: 'Dashboard',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Delta Archive',
      owner: 'Nora Vega',
      date: '19/05/2025',
      time: '15:30',
      category: 'Archive',
      status: 'Disabled'
    }
  ];

  get filteredRows(): DemoTableRow[] {
    const value = this.normalize(this.search);

    if (!value) {
      return this.rows;
    }

    return this.rows.filter((row) => {
      return [
        row.name,
        row.owner,
        row.date,
        row.time,
        row.category,
        row.status
      ]
        .some((field) => this.normalize(field).includes(value));
    });
  }

  statusSeverity(status: DemoStatus): 'success' | 'warn' | 'danger' {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warn';
    return 'danger';
  }

  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
