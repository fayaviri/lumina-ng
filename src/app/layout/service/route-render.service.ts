import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RouteRenderService {
  private readonly renderingClass = 'app-route-rendering';
  private removeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private router: Router,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.beginRenderGuard();
    this.endRenderGuard();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.beginRenderGuard();
        return;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.endRenderGuard();
      }
    });
  }

  private beginRenderGuard(): void {
    if (this.removeTimer) {
      clearTimeout(this.removeTimer);
      this.removeTimer = null;
    }

    this.document.documentElement.classList.add(this.renderingClass);
  }

  private endRenderGuard(): void {
    this.zone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.removeTimer = setTimeout(() => {
            this.document.documentElement.classList.remove(this.renderingClass);
            this.removeTimer = null;
          }, 80);
        });
      });
    });
  }
}
