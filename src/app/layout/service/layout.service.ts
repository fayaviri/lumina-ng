import { Injectable, signal } from '@angular/core';
import { LayoutMenuSection } from '../model/layout-menu.model';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  readonly sidebarVisible = signal(true);
  readonly mobileSidebarVisible = signal(false);
  readonly isMobile = signal(false);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMode = () => {
      const isMobile = mediaQuery.matches;

      this.isMobile.set(isMobile);

      if (!isMobile) {
        this.mobileSidebarVisible.set(false);
      }
    };

    updateMode();
    mediaQuery.addEventListener('change', updateMode);
  }

  readonly menu = signal<LayoutMenuSection[]>([
    {
      label: 'Home',
      expanded: true,
      items: [
        { label: 'Dashboard', icon: 'pi pi-chart-pie', route: '/dashboard', routerLinkExact: true },
        { label: 'CRUD', icon: 'pi pi-database', route: '/crud' },
        { label: 'Documentation', icon: 'pi pi-book', route: '/documentation' },
        { label: 'Empty', icon: 'pi pi-file', route: '/empty' }
      ]
    },
    {
      label: 'UI Kit',
      expanded: true,
      items: [
        { label: 'Form Layout', icon: 'pi pi-id-card', route: '/ui/form-layout', iconBox: 'violet' },
        { label: 'Inputs', icon: 'pi pi-pencil', route: '/ui/input', iconBox: 'amber' },
        { label: 'Buttons', icon: 'pi pi-stop', route: '/ui/button', iconBox: 'lime' },
        { label: 'Tables', icon: 'pi pi-table', route: '/ui/table', iconBox: 'blue' },
        { label: 'Lists', icon: 'pi pi-list', route: '/ui/list', iconBox: 'emerald' },
        { label: 'Panels', icon: 'pi pi-window-maximize', route: '/ui/panel', iconBox: 'cyan' },
        { label: 'Overlays', icon: 'pi pi-clone', route: '/ui/overlay', iconBox: 'emerald' },
        { label: 'Messages', icon: 'pi pi-comments', route: '/ui/message', badge: '2', badgeSeverity: 'secondary', iconBox: 'rose' },
        { label: 'Menus', icon: 'pi pi-bars', route: '/ui/menu', iconBox: 'violet' },
        { label: 'Trees', icon: 'pi pi-share-alt', route: '/ui/tree', iconBox: 'blue' },
        { label: 'Timeline', icon: 'pi pi-clock', route: '/ui/timeline', iconBox: 'rose' },
        { label: 'Charts', icon: 'pi pi-chart-bar', route: '/ui/chart', iconBox: 'cyan' },
        { label: 'File Upload', icon: 'pi pi-upload', route: '/ui/file', iconBox: 'lime' },
        { label: 'Misc', icon: 'pi pi-sparkles', route: '/ui/misc', iconBox: 'amber' }
      ]
    },
    {
      label: 'Auth',
      expanded: true,
      items: [
        { label: 'Login', icon: 'pi pi-sign-in', route: '/auth/login' },
        { label: 'Access', icon: 'pi pi-lock', route: '/auth/access' },
        { label: 'Error', icon: 'pi pi-times-circle', route: '/auth/error' }
      ]
    }
  ]);

  toggleSidebar(): void {
    if (this.isMobile()) {
      this.mobileSidebarVisible.update((value) => !value);
      return;
    }

    this.sidebarVisible.update((value) => !value);
  }

  closeMobileSidebar(): void {
    this.mobileSidebarVisible.set(false);
  }

  toggleSection(sectionLabel: string): void {
    this.menu.update((sections) =>
      sections.map((section) =>
        section.label === sectionLabel ? { ...section, expanded: !section.expanded } : section
      )
    );
  }
}
