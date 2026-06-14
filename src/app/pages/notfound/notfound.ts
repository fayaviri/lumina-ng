import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-notfound',
  imports: [RouterLink, CardModule, ButtonModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>404</ng-template>
        <p>La página solicitada no existe.</p>
        <p-button label="Volver al dashboard" routerLink="/dashboard"></p-button>
      </p-card>
    </section>
  `
})
export class NotFound {}
