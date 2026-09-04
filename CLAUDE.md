# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (also regenerates the `@AGENTS.md` block above; commit that regenerated file rather than reverting it)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`)

There is no test runner configured in this repo.

## Big picture

This is a learning project working through Next.js App Router concepts lesson by lesson ("Bài N" in comments, in Vietnamese). Many files carry comments explaining *why* something is written a certain way for the lesson at hand (e.g. deliberate fake `setTimeout` delays to demonstrate `loading.tsx` streaming, or `generateStaticParams` used to show prefetch behavior) — read those comments before "fixing" what looks like odd or unfinished code, since it's often intentionally incomplete pending a later lesson.

**Critical constraint from AGENTS.md**: the `next` package here is a customized fork with breaking changes vs. the Next.js you were trained on. Before writing any App Router code, check `node_modules/next/dist/docs/` for the relevant guide.

### Route structure (`app/`)

- Route groups split the app by access: `(auth)` (public, e.g. `/login`) and `(protected)` (wrapped in `ProtectedLayout`). Groups don't affect the URL.
- `app/(protected)/layout.tsx` wraps children in `ThemeProvider` — intentionally placed as deep as possible in the tree (not around `<html>/<body>` in the root layout) so Next.js can keep more of the app statically optimized.
- Dynamic segments follow the `params`/`searchParams`-as-Promise convention (`await params`, `await searchParams`) used throughout, e.g. `app/(protected)/dashboard/[section]/page.tsx`, `app/users/[id]/page.tsx`, `app/(auth)/login/page.tsx`.
- Feature-local, non-routable components live in colocated `_components/` folders next to the page that uses them (e.g. `app/(auth)/login/_components/`, `app/(protected)/dashboard/_components/`) rather than in a shared top-level components directory.

### Server/Client component boundary

The codebase is deliberately careful about the client/server split (this is a running theme in the lesson comments):

- Components default to Server Components; `"use client"` is added only to the specific leaf that needs interactivity/state (e.g. `LoginForm.tsx`, `ThemeToggle.tsx`, `DebugCounter.tsx`), never to a whole layout or page, because everything a `"use client"` file imports and renders is pulled into the client bundle regardless of whether that other code needs interactivity.
- Data/props flow from Server Components down into Client Components via props (see `LoginPage` → `LoginForm`'s `redirectTo` prop).

### Data layer (`lib/`)

- `lib/api.ts` is a thin `fetch` wrapper around an external Laravel API, guarded with `import "server-only"` so Next.js fails the build if it's ever imported into a Client Component (preventing the API URL/secrets from reaching the browser). It's meant to be called only from Server Components / Route Handlers.
- `LARAVEL_API_URL` env var configures the API base URL (defaults to `http://localhost:8000/api`).
- Most pages currently render static/mock data with a comment noting they'll be wired to `lib/api.ts` in a later lesson — don't assume the two are already connected.

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss` (see `postcss.config.mjs`), configured through `@theme` in `app/globals.css` (no `tailwind.config.*` file). Note: components widely use utility classes like `text-ink` / `bg-accent` / `border-ink` that are not yet defined as theme tokens in `globals.css` — check there before assuming they're styled.
