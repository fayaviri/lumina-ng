# Lumina NG

Lumina NG is a free Angular + PrimeNG Aura admin template focused on clean structure, balanced visual scale, responsive behavior and AI-friendly maintainability.

The goal is not to build a specific business system. Lumina NG is a reusable starting point for many kinds of administrative applications such as dashboards, internal tools, CRUD systems, reporting portals, municipal systems, academic systems, inventory systems or any other web platform that needs a professional layout.

## Main Goals

1. **Balanced visual scale**
   Inputs, labels, buttons, text and cards should not feel too large or too small. The template keeps a moderate visual size for comfortable administrative interfaces.

2. **AI-friendly structure**
   The project avoids hidden layout logic, large monolithic showcase files and duplicated styles. Pages, routes, layout and shared utilities are organized so a developer or an AI assistant can identify what to modify without breaking the rest of the UI.

3. **Responsive by default**
   The layout, sidebar, tables, forms and cards should work correctly on desktop, tablet and mobile.

4. **Modern Angular**
   Lumina NG uses Angular 21 with standalone components, lazy routes, functional guards/interceptors and the modern application builder. Do not introduce classic NgModule-based architecture unless there is a clear technical reason.

## Tech Stack

- Angular CLI: 21.2.7
- Angular: 21.2.9
- Node.js: 24.15.0
- npm: 11.12.1
- PrimeNG: 21.1.6
- PrimeIcons: 7.0.0
- PrimeUIX Themes: 2.0.3
- TypeScript: 5.9.3
- RxJS: 7.8.2
- Vitest: 4.1.5
- SCSS

## Features

- Angular standalone components
- Lazy route loading with `loadComponent` and `loadChildren`
- PrimeNG Aura theme
- Responsive layout with sidebar and topbar
- Dashboard demo
- Generic CRUD demo
- Auth pages demo
- UI Kit pages separated by component type
- Environment files for local and production API URLs
- `provideHttpClient()` ready for API integration
- Route render service to reduce PrimeNG visual flicker during navigation
- Generic `core` and `shared` folders prepared for real projects
- GitHub-ready documentation files

## Folder Structure

```txt
src/app
├── core
│   ├── guards
│   ├── interceptors
│   ├── models
│   └── services
│
├── layout
│   ├── component
│   ├── model
│   └── service
│
├── pages
│   ├── auth
│   ├── crud
│   ├── dashboard
│   ├── documentation
│   ├── empty
│   ├── landing
│   ├── notfound
│   ├── service
│   └── uikit
│
└── shared
    ├── components
    ├── directives
    ├── pipes
    └── utils
```

## Install

```bash
npm install
```

## Run Development Server

```bash
npm run start
```

Or:

```bash
ng serve -o
```

## Build

```bash
npm run build
```

`ng serve` is for development and live reload. `npm run build` compiles the final application output in `dist/` and should be used before publishing or deploying.

## Environment Files

Local development:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

Production:

```ts
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com'
};
```

The production build replaces `environment.ts` with `environment.prod.ts` through `fileReplacements` in `angular.json`.

## Design Rules

- Keep `html { font-size: 14px; }` unless the full UI scale is reviewed.
- Avoid oversized inputs, labels, cards and dialogs.
- Prefer reusable global helpers in `src/styles.scss`.
- Keep page-specific styles inside the page component when needed.
- Check every new page in desktop, tablet and mobile widths.

## AI-Friendly Rules

- Avoid huge components when the page has a lot of template or style code.
- Prefer separating large pages into `.ts`, `.html` and `.scss` files.
- Keep routes clean. Move educational notes to `docs/` instead of leaving old commented code in production files.
- Avoid duplicated CSS.
- Use clear folder names and explicit component responsibilities.

## Contributing

Before contributing, read:

- `CONTRIBUTING.md`
- `docs/goals.md`
- `docs/ai-guidelines.md`
- `docs/responsive-guidelines.md`

## License

MIT License.
