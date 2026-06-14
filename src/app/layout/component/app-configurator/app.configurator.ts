import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { updatePrimaryPalette, updateSurfacePalette, usePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import { Popover, PopoverModule } from 'primeng/popover';
import { SelectButtonModule } from 'primeng/selectbutton';

type PresetName = 'Aura' | 'Lara' | 'Nora';
type PaletteName =
  | 'emerald'
  | 'green'
  | 'lime'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';
type SurfaceName = 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone';

interface ThemeColorOption<T extends string> {
  name: T;
  color: string;
}

@Component({
  selector: 'app-configurator',
  imports: [FormsModule, PopoverModule, SelectButtonModule],
  templateUrl: './app.configurator.html',
  styleUrl: './app.configurator.scss'
})
export class AppConfigurator {
  @ViewChild('themeSelector') themeSelector!: Popover;

  selectedPrimary: PaletteName = 'emerald';
  selectedSurface: SurfaceName = 'slate';
  selectedPreset: PresetName = 'Aura';

  readonly primaryOptions: ThemeColorOption<PaletteName>[] = [
    { name: 'emerald', color: '#10b981' },
    { name: 'green', color: '#22c55e' },
    { name: 'lime', color: '#84cc16' },
    { name: 'orange', color: '#f97316' },
    { name: 'amber', color: '#f59e0b' },
    { name: 'yellow', color: '#eab308' },
    { name: 'teal', color: '#14b8a6' },
    { name: 'cyan', color: '#06b6d4' },
    { name: 'sky', color: '#0ea5e9' },
    { name: 'blue', color: '#3b82f6' },
    { name: 'indigo', color: '#6366f1' },
    { name: 'violet', color: '#8b5cf6' },
    { name: 'purple', color: '#a855f7' },
    { name: 'fuchsia', color: '#d946ef' },
    { name: 'pink', color: '#ec4899' },
    { name: 'rose', color: '#f43f5e' }
  ];

  readonly surfaceOptions: ThemeColorOption<SurfaceName>[] = [
    { name: 'slate', color: '#64748b' },
    { name: 'gray', color: '#6b7280' },
    { name: 'zinc', color: '#71717a' },
    { name: 'neutral', color: '#737373' },
    { name: 'stone', color: '#78716c' }
  ];

  readonly presetOptions = [
    { label: 'Aura', value: 'Aura' },
    { label: 'Lara', value: 'Lara' },
    { label: 'Nora', value: 'Nora' }
  ];

  private readonly presets: Record<PresetName, any> = {
    Aura,
    Lara,
    Nora
  };

  toggle(event: Event): void {
    this.themeSelector.toggle(event);
  }

  changePrimary(name: PaletteName): void {
    this.selectedPrimary = name;
    updatePrimaryPalette(this.buildPalette(name));
  }

  changeSurface(name: SurfaceName): void {
    this.selectedSurface = name;
    updateSurfacePalette(this.buildSurfacePalette(name));
  }

  changePreset(name: PresetName): void {
    this.selectedPreset = name;
    usePreset(this.presets[name]);
    this.changePrimary(this.selectedPrimary);
    this.changeSurface(this.selectedSurface);
  }

  private buildPalette(name: string): Record<number, string> {
    return {
      50: `{${name}.50}`,
      100: `{${name}.100}`,
      200: `{${name}.200}`,
      300: `{${name}.300}`,
      400: `{${name}.400}`,
      500: `{${name}.500}`,
      600: `{${name}.600}`,
      700: `{${name}.700}`,
      800: `{${name}.800}`,
      900: `{${name}.900}`,
      950: `{${name}.950}`
    };
  }

  private buildSurfacePalette(name: string): Record<number, string> {
    return {
      0: '#ffffff',
      50: `{${name}.50}`,
      100: `{${name}.100}`,
      200: `{${name}.200}`,
      300: `{${name}.300}`,
      400: `{${name}.400}`,
      500: `{${name}.500}`,
      600: `{${name}.600}`,
      700: `{${name}.700}`,
      800: `{${name}.800}`,
      900: `{${name}.900}`,
      950: `{${name}.950}`
    };
  }
}
