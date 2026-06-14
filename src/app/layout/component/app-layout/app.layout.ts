import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebar } from '../app-sidebar/app.sidebar';
import { AppTopbar } from '../app-topbar/app.topbar';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, AppSidebar, AppTopbar],
  templateUrl: './app.layout.html',
  styleUrl: './app.layout.scss'
})
export class AppLayout {
  constructor(public layoutService: LayoutService) {}
}
