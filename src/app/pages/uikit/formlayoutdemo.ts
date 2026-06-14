import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-form-layout-demo',
  imports: [FormsModule, CardModule, ButtonModule, InputTextModule, SelectModule, DatePickerModule,ToastModule,],
  providers: [MessageService],
  template: `
    <p-toast></p-toast>
    <section class="page-shell">
      <div class="page-header">
        <div class="page-title-row">
          <div>
             <h1>Form Layout</h1>
            <p>PrimeNG Aura components with balanced spacing for Lumina NG.</p>
          </div>
        </div>
      </div>

      <p-card styleClass="layout-card">
        <ng-template #title>Form Layout</ng-template>
        <!--  -->
        <div class="form-grid">
          <div class="field">
            <label>Nombre completo</label>
            <input pInputText [(ngModel)]="form.fullName" />
          </div>

          <div class="field">
            <label>Email</label>
            <input pInputText [(ngModel)]="form.email" />
          </div>

          <div class="field">
            <label>Teléfono</label>
            <input pInputText [(ngModel)]="form.phone" />
          </div>

          <div class="field">
            <label>Género</label>
            <p-select [options]="genders" [(ngModel)]="selectedGender" optionLabel="label"></p-select>
          </div>

          <div class="field">
            <label>Fecha</label>
            <p-datepicker [(ngModel)]="date" [showIcon]="true"></p-datepicker>
          </div>

          <div class="field">
            <label>Grupo sanguíneo</label>
            <p-select [options]="bloodGroups" [(ngModel)]="selectedBloodGroup" optionLabel="label"></p-select>
          </div>

          <div class="field full">
            <label>Dirección</label>
            <input pInputText [(ngModel)]="form.address" />
          </div>
        </div>

        <div class="button-row mt">
          <p-button label="Guardar" icon="pi pi-check" (onClick)="showToast()"></p-button>
          <p-button label="Limpiar" icon="pi pi-refresh" severity="secondary"></p-button>
        </div>
        <!--  -->

      </p-card>
    </section>
  `
})
export class FormLayoutDemo {
  date: Date | null = new Date();
  form = {
    fullName: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '+591 70000000',
    address: 'Santa Cruz, Bolivia'
  };
  bloodGroups = [
    { label: 'O+', value: 'O+' },
    { label: 'A+', value: 'A+' },
    { label: 'B+', value: 'B+' },
    { label: 'AB+', value: 'AB+' }
  ];
  selectedBloodGroup = this.bloodGroups[0];
  genders = [{ label: 'Femenino', value: 'F' }, { label: 'Masculino', value: 'M' }];
  selectedGender = this.genders[0];

  constructor(private messageService: MessageService) {
  }

  showToast(): void {
    this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Registro procesado correctamente' });
  }

}
