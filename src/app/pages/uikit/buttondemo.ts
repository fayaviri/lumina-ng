import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-button-demo',
  imports: [CardModule, ButtonModule],
  template: `
    <section class="page-shell">
      <div class="page-header">
        
        <div class="page-title-row">
          <div>
            <!-- <h1>{{ title }}</h1> -->
             <h1>Buttons</h1>
            <p>PrimeNG Aura components with balanced spacing for Lumina NG.</p>
          </div>
        </div>
      </div>

      <p-card styleClass="layout-card">
        <ng-template #title>Button</ng-template>
        <div class="button-row">
          <p-button label="Primary" icon="pi pi-check"></p-button>
          <p-button label="Secondary" icon="pi pi-cog" severity="secondary"></p-button>
          <p-button label="Success" icon="pi pi-save" severity="success"></p-button>
          <p-button label="Warning" icon="pi pi-exclamation-triangle" severity="warn"></p-button>
          <p-button label="Danger" icon="pi pi-trash" severity="danger"></p-button>
          <p-button label="Outlined" icon="pi pi-star" outlined></p-button>
          <p-button label="Text" icon="pi pi-user" text></p-button>
          <p-button label="Rounded" icon="pi pi-heart" rounded></p-button>
        </div>
      </p-card>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ButtonDemo {}
