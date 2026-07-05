# Sumin Portfolio

Sumin Ha's product design portfolio site — a Vite + React + TypeScript single-page app styled with MUI, deployed to GitHub Pages.

Live at [reinaha.github.io/portfolio](https://reinaha.github.io/portfolio).

## Tech stack

- [Vite](https://vitejs.dev/) + [React 17](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [MUI](https://mui.com/) (`@mui/material`) + [Emotion](https://emotion.sh/) for styling/theming
- [React Router](https://reactrouter.com/) for client-side routing
- ESLint + Prettier for linting/formatting, enforced via a git pre-commit hook

## Getting started

Install dependencies and start the dev server:

```
yarn install
yarn dev
```

## Available scripts

| Command | Description |
| --- | --- |
| `yarn dev` | Start the Vite dev server |
| `yarn build` | Typecheck and build for production into `./build` |
| `yarn serve` | Preview the production build locally |
| `yarn type-check` | Run `tsc` with no emit |
| `yarn lint` | Format with Prettier, then lint/fix with ESLint |
| `yarn deploy` | Build and publish `./build` to GitHub Pages via `gh-pages` |

Linting also runs automatically before each commit via a git pre-commit hook.

## Project structure

```
src/
  components/   Shared UI components, including the portfolio case-study
                section framework (components/portfolio) and per-project
                case-study content (components/portfolio/<ProjectName>)
  pages/        Route-level pages (home, each portfolio case study, error page)
  data/         Structured content for the home page (cards, press mentions, etc.)
  images/       Generated barrel files re-exporting images from resources/<ProjectName>
  routes/       React Router route definitions
  themes/       MUI theme definitions (dark/light)
  models/       Shared TypeScript types
resources/      Source images for each case study, organized by project name
```

Adding a new case study means: dropping its images in `resources/<ProjectName>/`, running `python generateImageImport.py <ProjectName>` to generate `src/images/<ProjectName>.ts`, building the section content components under `src/components/portfolio/<ProjectName>/`, and registering the new page in `src/routes/router.tsx`.

See [`CLAUDE.md`](./CLAUDE.md) for a deeper walkthrough of the case-study architecture, password-gating, theming, and import aliases.

## License

See [`LICENSE`](./LICENSE).
