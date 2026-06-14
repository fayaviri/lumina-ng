import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-input-demo',
  imports: [FormsModule, CardModule, InputTextModule, SelectModule, DatePickerModule, IconFieldModule, InputIconModule],
  template: `
    <section class="page-shell">
      <div class="page-header">
        <div class="page-title-row">
          <div>
             <h1>Input</h1>
            <p>PrimeNG Aura components with balanced spacing for Lumina NG.</p>
          </div>
        </div>
      </div>
      <p-card styleClass="layout-card">
        <ng-template #title>Input</ng-template>
        <div class="form-grid">
          <div class="field">
            <label>InputText</label>
            <input pInputText [(ngModel)]="form.fullName" placeholder="Nombre completo" />
          </div>
          <div class="field">
            <label>IconField</label>
            <p-iconfield iconPosition="left">
              <p-inputicon styleClass="pi pi-search"></p-inputicon>
              <input pInputText [(ngModel)]="search" placeholder="Buscar" />
            </p-iconfield>
          </div>
          <div class="field">
            <label>Select</label>
            <p-select [options]="genders" [(ngModel)]="selectedGender" optionLabel="label" placeholder="Seleccione género"></p-select>
          </div>
          <div class="field">
            <label>DatePicker</label>
            <p-datepicker [(ngModel)]="date" [showIcon]="true"></p-datepicker>
          </div>
        </div>
      </p-card>
    </section>
  `
})
export class InputDemo {
  text = '';
  search = '';
  date: Date | null = new Date();
  genders = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' }
  ];
  selectedGender = this.genders[0];
  form = {
    fullName: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+591 70000000',
    address: 'Santa Cruz, Bolivia'
  };
}
