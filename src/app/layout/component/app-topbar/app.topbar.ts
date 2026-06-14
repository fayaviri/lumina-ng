import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { LayoutService } from '../../service/layout.service';
import { AppConfigurator } from '../app-configurator/app.configurator';

@Component({
  selector: 'app-topbar',
  imports: [ToolbarModule, ButtonModule, AvatarModule, AppConfigurator],
  templateUrl: './app.topbar.html',
  styleUrl: './app.topbar.scss'
})
export class AppTopbar {
  constructor(public layoutService: LayoutService) {}
}
