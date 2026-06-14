# AI-Friendly Guidelines

Lumina NG is designed to be easy for AI assistants and developers to understand.

## Rules

- Keep layout code inside `src/app/layout`.
- Keep demo pages inside `src/app/pages`.
- Keep reusable visual pieces inside `src/app/shared`.
- Keep global technical helpers inside `src/app/core`.
- Avoid duplicated CSS.
- Avoid large inline templates when a page grows too much.
- Prefer clear file names and explicit responsibilities.

## Large Pages

When a page grows beyond a simple example, prefer:

```txt
page.ts
page.html
page.scss
```

This helps AI tools edit markup, style and logic separately.
