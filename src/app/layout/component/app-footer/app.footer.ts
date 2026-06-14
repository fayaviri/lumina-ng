import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink, AvatarModule],
  templateUrl: './app.footer.html',
  styleUrl: './app.footer.scss'
})
export class AppFooter {
  userExpanded = false;

  readonly userItems = [
    { label: 'Profile', icon: 'pi pi-user', route: '/profile' },
    { label: 'Settings', icon: 'pi pi-cog', route: '/settings' },
    { label: 'Sign Out', icon: 'pi pi-sign-out', route: '/auth/login' }
  ];

  constructor(public layoutService: LayoutService) {}
}
