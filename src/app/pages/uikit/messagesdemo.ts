import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-messages-demo',
  imports: [CardModule, ButtonModule, MessageModule, ToastModule],
  providers: [MessageService],
  template: `
    <p-toast></p-toast>
    <section class="page-shell">
      <div class="page-header">
        <div class="page-title-row">
          <div>
             <h1>Messages</h1>
            <p>PrimeNG Aura components with balanced spacing for Lumina NG.</p>
          </div>
        </div>
      </div>
      <p-card styleClass="layout-card">
        <ng-template #title>Messages</ng-template>
        <div class="message-stack">
          <p-message severity="success">Operación realizada correctamente.</p-message>
          <p-message severity="info">Información general del sistema.</p-message>
          <p-message severity="warn">Revise los datos antes de continuar.</p-message>
          <p-message severity="error">Ocurrió un error de validación.</p-message>
        </div>
        <div class="card-actions">
          <p-button label="Mostrar Toast" icon="pi pi-bell" (onClick)="showToast()"></p-button>
        </div>
      </p-card>
    </section>
  `
})
export class MessagesDemo {
  constructor(private messageService: MessageService) {}

  showToast(): void {
    this.messageService.add({ severity: 'success', summary: 'Guardado', detail: 'Registro procesado correctamente' });
  }
}
