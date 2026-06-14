# Contributing to Lumina NG

Thank you for your interest in contributing to Lumina NG.

Lumina NG is a free Angular + PrimeNG Aura admin template. Contributions should keep the project generic, reusable, responsive and easy to modify by humans and AI assistants.

## Technical Baseline

Use the current project stack as reference:

- Angular CLI 21.2.x
- Angular 21.2.x
- Node.js 24.x
- npm 11.x
- PrimeNG 21.x
- TypeScript 5.9.x
- Vitest 4.x

## Do

- Use standalone components.
- Use `loadComponent` for individual page routes.
- Use `loadChildren` for route groups.
- Use `provideHttpClient()` and functional interceptors when adding HTTP behavior.
- Keep the UI responsive.
- Keep input and text sizes visually balanced.
- Keep examples generic and not tied to a specific business domain.
- Add documentation when adding new conventions.

## Do Not

- Do not introduce classic `AppModule`, `CoreModule` or `SharedModule` architecture.
- Do not add project-specific business logic to the base template.
- Do not add internal URLs, private IPs, credentials or personal data.
- Do not duplicate global CSS in multiple pages.
- Do not leave old commented code in production files; put explanations in `docs/`.

## Before Submitting

Run:

```bash
npm run build
```

Also review the layout on desktop, tablet and mobile widths.
