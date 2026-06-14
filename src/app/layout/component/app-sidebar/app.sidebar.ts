import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppFooter } from '../app-footer/app.footer';
import { AppMenu } from '../app-menu/app.menu';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, AppMenu, AppFooter],
  templateUrl: './app.sidebar.html',
  styleUrl: './app.sidebar.scss',
  host: {
    '[class.layout-sidebar-hidden]': 'collapsed'
  }
})
export class AppSidebar {
  @Input() collapsed = false;
}
