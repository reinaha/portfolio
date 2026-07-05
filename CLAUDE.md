# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Sumin Ha's product design portfolio — a Vite + React 17 + TypeScript SPA styled with MUI (`@mui/material`) and Emotion, deployed to GitHub Pages at a `/portfolio/` sub-path.

## Commands

- `yarn dev` — start the Vite dev server.
- `yarn build` — typecheck (`tsc`) then production build to `./build`.
- `yarn serve` — preview the production build.
- `yarn type-check` — `tsc` with no emit.
- `yarn lint` — runs `lint:format` (Prettier, writes) then `lint:fix` (ESLint `--fix` over `src`). Run `yarn lint:fix` alone to just lint one pass.
- `yarn deploy` — builds, copies `404.html` into `build/`, and publishes `build/` via `gh-pages`.
- No test framework is configured (no Jest/Vitest) — there are no automated tests to run.
- A git `pre-commit` hook (via the `pre-commit` npm package, see `"pre-commit": "lint"` in `package.json`) runs `yarn lint` automatically before every commit.

## Architecture

### Routing & layout

`src/routes/router.tsx` defines a single `BrowserRouter basename="/portfolio"` (must match Vite's `base: '/portfolio/'` in `vite.config.ts`, used only in the `build` command, not in `serve`/dev). Everything renders under `DefaultLayout` (`src/components/layout/DefaultLayout.tsx`), which:
- Picks `defaultTheme` (dark) or `lightTheme` (light) from `src/themes/default.ts` based on `prefers-color-scheme`, with a dev-only manual override wired through `TopNavBar`'s toggle (`import.meta.env.DEV` only).
- Skips the padded `Container` wrapper for `/work/*` routes, since portfolio case-study pages manage their own full-width layout via `PortfolioContainer`.

Case-study pages live under `/work/:slug` (e.g. `air-nz-web-check-in`, `propertimax-app`) and are registered individually in `router.tsx` — there's no dynamic/data-driven route, adding a case study means adding a `<Route>`.

### Portfolio case-study pattern

Each case study under `src/pages/portfolio/*.tsx` follows the same shape: wrap content in `PortfolioContainer` (`src/components/portfolio/PortfolioContainer.tsx`), which renders a `PortfolioHeader`, the page's children, and a shared `HomeBottomCover` footer CTA, and force-scrolls to top on mount.

Inside, content is organized as a sequence of "Major Sections" (e.g. `IntroductionMajorSection`, `ProjectContextMajorSection`, `ChallengesMajorSection`, `OutcomeMajorSection`, `SummaryMajorSection`), separated by MUI `Divider`s. Each `*MajorSection.tsx` is a thin composition file that feeds an array of `{ title, content }` pairs into the shared `PortfolioMajorSection` component (`src/components/portfolio/portfolioSections/PortfolioMajorSection.tsx`), which renders the section heading (with in-page jump-to-subsection navigation via `scrollIntoView`) and each `PortfolioSection`. The actual prose/imagery per sub-section lives in its own small `Content.tsx` component one directory level down (e.g. `AirNZWebCheckIn/ProjectContext/Problem.tsx`), imported and assembled by the `*MajorSection.tsx` file — the section title strings and the content components are decoupled, so renaming a section's display title never touches its content component.

Some sections are wrapped in `<PasswordGate>` (`src/components/passwordGate/PasswordGate.tsx`) to hide detailed process/research content behind an access code (`CASE_STUDY_PASSWORD` in `src/config/passwordGate.ts` — the only file to touch to change the password). Unlock state persists in `sessionStorage` per browser tab; unlocking scrolls the revealed section to the top of the viewport (only on the actual unlock action, not when already-unlocked state is restored from `sessionStorage` on load).

### Images

Each case study's images live under `resources/<ProjectName>/` (not `src/`) and are re-exported as named imports from a matching barrel file in `src/images/<ProjectName>.ts`, importable via the `@resources/*` alias configured in `vite.config.ts` + `tsconfig.json`. These barrel files are machine-generated (not authored by hand) — `generateImageImport.py <ProjectName>` scans `resources/<ProjectName>/`, converts each `kebab-case` or `snake_case` filename into a `camelCase`-suffixed `<ProjectName>ImageName` identifier, and rewrites `src/images/<ProjectName>.ts` from scratch. Re-run that script after adding/removing images in `resources/` rather than hand-editing the barrel file. (Note: a stray generated `OsstemDentalEshop.ts` currently sits in the repo root with duplicate export names — a leftover from running the script from the wrong cwd; the real one is `src/images/OsstemDentalEShop.ts`.)

### Data vs. content components

`src/data/*.tsx` holds structured, list-like content consumed by the home page (featured work cards, visual works, press/"Beyond the Portfolio" items, nav icons) — typed against `src/models/*.ts`. Case-study prose/imagery, by contrast, lives directly in per-project component files (see above), not in `src/data`.

### Barrel exports

Nearly every directory under `src/components` (and `src/pages`, `src/images`, `src/data`, `src/models`) has an `index.ts` re-exporting its contents, and `src/components/index.ts` re-exports all of those — so most cross-component imports go through `@/components` rather than deep paths. Keep new components wired into their local `index.ts` (and the parent barrel, if one exists) or they won't be importable via `@/components`.

### Theming

Two MUI themes (`defaultTheme` = dark, `lightTheme` = light) in `src/themes/default.ts` define the same custom typography variant set (`h1`–`h6`, `body1`–`body3`, custom `numberIcon` variant, plus dark-theme-only unused `subtitle1`/`subtitle2` leftovers) — when adding a new typography variant, update both themes and the `TypographyPropsVariantOverrides` module augmentation at the top of the file.

### Import aliases

- `@/*` → `src/*`
- `@resources/*` → `resources/*`

Both are declared in `vite.config.ts` (`resolve.alias`) and `tsconfig.json` (`compilerOptions.paths`) — keep them in sync if either changes.
