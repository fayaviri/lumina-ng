export type BadgeSeverity = 'contrast' | 'secondary' | 'success' | 'info' | 'warn' | 'danger';
export type IconTone = 'violet' | 'amber' | 'lime' | 'blue' | 'emerald' | 'rose' | 'cyan';

export interface LayoutMenuItem {
  label: string;
  icon: string;
  route?: string;
  badge?: string;
  badgeSeverity?: BadgeSeverity;
  iconBox?: IconTone;
  routerLinkExact?: boolean;
  items?: LayoutMenuItem[];
}

export interface LayoutMenuSection {
  label: string;
  expanded: boolean;
  items: LayoutMenuItem[];
}
