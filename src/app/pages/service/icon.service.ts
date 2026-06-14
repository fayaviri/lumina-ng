import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IconService {
  getIcons(): string[] {
    return ['pi pi-home', 'pi pi-user', 'pi pi-cog', 'pi pi-table', 'pi pi-chart-line', 'pi pi-folder'];
  }
}
