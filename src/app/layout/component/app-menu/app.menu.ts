import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout.service';
import { AppMenuItem } from '../app-menuitem/app.menuitem';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, AppMenuItem],
  templateUrl: './app.menu.html',
  styleUrl: './app.menu.scss'
})
export class AppMenu {
  constructor(public layoutService: LayoutService) {}
}
