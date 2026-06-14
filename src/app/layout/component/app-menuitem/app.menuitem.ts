import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { LayoutMenuItem } from '../../model/layout-menu.model';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-menuitem',
  imports: [CommonModule, RouterLink, RouterLinkActive, BadgeModule],
  templateUrl: './app.menuitem.html',
  styleUrl: './app.menuitem.scss'
})
export class AppMenuItem {
  @Input({ required: true }) item!: LayoutMenuItem;

  constructor(public layoutService: LayoutService) {}
}
