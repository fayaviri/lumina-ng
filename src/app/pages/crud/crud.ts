import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

interface DemoRecord {
  id: number;
  name: string;
  owner: string;
  category: string;
  status: 'Active' | 'Pending' | 'Disabled';
}

@Component({
  selector: 'app-crud',
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TableModule,
    TagModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [MessageService],
  templateUrl: './crud.html',
  styleUrl: './crud.scss'
})
export class Crud {
  crudDialog = false;

  records: DemoRecord[] = [
    { id: 1, name: 'Alpha Workspace', owner: 'Alex Rivera', category: 'Workspace', status: 'Active' },
    { id: 2, name: 'Beta Report', owner: 'Camila Torres', category: 'Report', status: 'Pending' }
  ];

  selectedRecord: DemoRecord = this.emptyRecord();

  constructor(private messageService: MessageService) {}

  statusSeverity(status: DemoRecord['status']): 'success' | 'warn' | 'danger' {
    if (status === 'Active') return 'success';
    if (status === 'Pending') return 'warn';
    return 'danger';
  }

  newRecord(): void {
    this.selectedRecord = this.emptyRecord();
    this.crudDialog = true;
  }

  editRecord(row: DemoRecord): void {
    this.selectedRecord = { ...row };
    this.crudDialog = true;
  }

  saveRecord(): void {
    if (!this.selectedRecord.id) {
      const nextId = Math.max(...this.records.map((x) => x.id), 0) + 1;
      this.records = [...this.records, { ...this.selectedRecord, id: nextId }];
    } else {
      this.records = this.records.map((x) => (x.id === this.selectedRecord.id ? { ...this.selectedRecord } : x));
    }

    this.crudDialog = false;
    this.messageService.add({ severity: 'success', summary: 'Saved', detail: 'Record processed successfully' });
  }

  deleteRecord(row: DemoRecord): void {
    this.records = this.records.filter((x) => x.id !== row.id);
    this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: row.name });
  }

  private emptyRecord(): DemoRecord {
    return { id: 0, name: '', owner: '', category: '', status: 'Pending' };
  }
}
