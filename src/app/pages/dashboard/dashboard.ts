import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { SummaryCard, SummaryCardData } from './components/summary-card';

interface ProjectUpdate {
  title: string;
  description: string;
  date: string;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  status: string;
  online?: boolean;
}

interface ActivityLogItem {
  title: string;
  time: string;
  description: string;
  initials?: string;
  icon?: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    AvatarModule,
    SummaryCard
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  readonly metrics: SummaryCardData[] = [
    {
      label: 'Active Sessions',
      value: '24',
      icon: 'pi pi-bolt',
      note: '12 new since last review',
      tone: 'danger'
    },
    {
      label: 'New Records',
      value: '48',
      icon: 'pi pi-plus-circle',
      note: '25 created this week',
      tone: 'success'
    },
    {
      label: 'Completed Tasks',
      value: '15,320',
      icon: 'pi pi-check-circle',
      note: '2,985 updated records',
      tone: 'info'
    },
    {
      label: 'Team Members',
      value: '2,566',
      icon: 'pi pi-users',
      note: '320 active today',
      tone: 'primary'
    }
  ];

  readonly projectUpdates: ProjectUpdate[] = [
    {
      title: 'Responsive layout improvements',
      description: 'Sidebar, cards and grids are prepared to adapt cleanly on desktop, tablet and mobile.',
      date: 'Template update'
    },
    {
      title: 'AI-friendly structure',
      description: 'Pages, layout, routing and shared styles are organized to make future edits easier for humans and AI tools.',
      date: 'Architecture note'
    },
    {
      title: 'Balanced visual scale',
      description: 'Inputs, labels, cards and typography keep a moderate size for administrative interfaces.',
      date: 'Design guideline'
    }
  ];

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

  readonly activityLog: ActivityLogItem[] = [
    {
      title: 'Routing updated',
      time: '1 minute ago',
      description: 'Auth and UI Kit sections now use loadChildren for cleaner lazy route organization.',
      initials: 'NG'
    },
    {
      title: 'Theme scale reviewed',
      time: '4 minutes ago',
      description: 'The base font size and PrimeNG component spacing were kept balanced for reusable admin screens.',
      icon: 'pi pi-sparkles'
    }
  ];
}
