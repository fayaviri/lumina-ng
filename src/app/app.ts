import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteRenderService } from './layout/service/route-render.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(private routeRenderService: RouteRenderService) {}
  //  private readonly routeRenderService = inject(RouteRenderService);
}
