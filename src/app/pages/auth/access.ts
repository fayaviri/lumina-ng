import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-access',
  imports: [RouterLink, CardModule, ButtonModule],
  template: `
    <main class="auth-page">
      <p-card styleClass="auth-card">
        <ng-template #title>Acceso denegado</ng-template>
        <p>No tienes permisos para acceder a esta página.</p>
        <p-button label="Volver" routerLink="/dashboard"></p-button>
      </p-card>
    </main>
  `,
  styles: [`.auth-page { min-height: 100dvh; display: grid; place-items: center; padding: 2rem; background: var(--p-surface-50); }`]
})
export class Access {}
