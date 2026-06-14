import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, CardModule, ButtonModule, InputTextModule, PasswordModule],
  template: `
    <main class="auth-page">
      <p-card styleClass="auth-card">
        <ng-template #title>Iniciar sesión</ng-template>
        <div class="form-grid one-column">
          <div class="field">
            <label>Usuario</label>
            <input pInputText [(ngModel)]="username" placeholder="usuario" />
          </div>
          <div class="field">
            <label>Contraseña</label>
            <p-password [(ngModel)]="password" [feedback]="false" placeholder="contraseña"></p-password>
          </div>
        </div>
        <div class="card-actions">
          <p-button label="Ingresar" routerLink="/dashboard" icon="pi pi-sign-in"></p-button>
        </div>
      </p-card>
    </main>
  `,
  styles: [`
    .auth-page { min-height: 100dvh; display: grid; place-items: center; padding: 2rem; background: var(--p-surface-50); }
    :host ::ng-deep .auth-card { width: min(100%, 28rem); }
  `]
})
export class Login {
  username = '';
  password = '';
}
