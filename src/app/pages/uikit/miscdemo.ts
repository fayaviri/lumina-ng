import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-misc-demo',
  imports: [CardModule, AvatarModule, BadgeModule, DividerModule, TagModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Misc</ng-template>
        <div class="button-row">
          <p-avatar label="U" shape="circle"></p-avatar>
          <p-badge value="8"></p-badge>
          <p-tag value="Activo" severity="success"></p-tag>
        </div>
        <p-divider></p-divider>
        <p>Componentes pequeños para complementar pantallas.</p>
      </p-card>
    </section>
  `
})
export class MiscDemo {}
