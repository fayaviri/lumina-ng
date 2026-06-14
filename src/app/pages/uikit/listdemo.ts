import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  status: string;
  online?: boolean;
}

@Component({
  selector: 'app-list-demo',
  imports: [CommonModule, CardModule, AvatarModule, TagModule],
  template: `
    <section class="page-shell">
      <p-card styleClass="layout-card">
        <ng-template #title>Team List</ng-template>
        <div class="team-list">
          @for (member of team; track member.name) {
            <article class="team-row">
              <div class="member-info">
                <p-avatar [label]="member.initials" shape="circle"></p-avatar>
                <div>
                  <h3>{{ member.name }}</h3>
                  <p>{{ member.role }}</p>
                </div>
              </div>
              <p-tag [value]="member.status" [severity]="member.online ? 'success' : 'secondary'"></p-tag>
            </article>
          }
        </div>
      </p-card>
    </section>
  `
})
export class ListDemo {
  readonly team: TeamMember[] = [
    {
      name: 'Alex Rivera',
      role: 'Frontend Developer',
      initials: 'AR',
      status: 'Online',
      online: true
    },
    {
      name: 'Camila Torres',
      role: 'UI Designer',
      initials: 'CT',
      status: 'Online',
      online: true
    },
    {
      name: 'Diego Flores',
      role: 'Contributor',
      initials: 'DF',
      status: '2 hours ago'
    },
    {
      name: 'Nora Vega',
      role: 'Maintainer',
      initials: 'NV',
      status: '1 day ago'
    }
  ];
}
