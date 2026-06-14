import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-overlay-demo',
  imports: [CardModule, ButtonModule, DialogModule],
  template: `
    <section class="page-shell">
      <div class="page-header">
        <div class="page-title-row">
          <div>
             <h1>Overlay</h1>
            <p>PrimeNG Aura components with balanced spacing for Lumina NG.</p>
          </div>
        </div>
      </div>
      <p-card styleClass="layout-card">
        <ng-template #title>Overlay</ng-template>
        <p-button label="Abrir diálogo" icon="pi pi-external-link" (onClick)="displayDialog = true"></p-button>

        <p-dialog header="PrimeNG Dialog" [(visible)]="displayDialog" [modal]="true" [style]="{ width: '30rem' }">
          <p>Este es un diálogo usando el componente p-dialog de PrimeNG.</p>
          <ng-template #footer>
            <p-button label="Cerrar" icon="pi pi-times" severity="secondary" (onClick)="displayDialog = false"></p-button>
            <p-button label="Aceptar" icon="pi pi-check" (onClick)="displayDialog = false"></p-button>
          </ng-template>
        </p-dialog>
      </p-card>
    </section>
  `
})
export class OverlayDemo {
  displayDialog = false;
}
