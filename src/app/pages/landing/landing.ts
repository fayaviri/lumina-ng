import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, ButtonModule],
  template: `
    <main class="landing-page">
      <section>
        <p class="eyebrow">Angular + PrimeNG Aura</p>
        <h1>Lumina NG</h1>
        <p>Free, responsive and AI-friendly admin template with a balanced visual scale.</p>
        <p-button label="Open Dashboard" routerLink="/dashboard"></p-button>
      </section>
    </main>
  `,
  styles: [`
    .landing-page {
      min-height: 100dvh;
      display: grid;
      place-items: center;
      padding: 2rem;
      background: var(--p-surface-50);
      color: var(--p-surface-900);
      text-align: center;
    }

    section {
      max-width: 42rem;
    }

    .eyebrow {
      margin: 0 0 0.75rem;
      color: var(--p-primary-color);
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0 0 1rem;
      font-size: clamp(2.25rem, 7vw, 4.5rem);
      line-height: 1;
    }

    p {
      margin: 0 0 1.5rem;
      color: var(--p-surface-500);
    }
  `]
})
export class Landing {}
