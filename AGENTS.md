# AGENTS.md

## Project Scope

This repository is the production portfolio for Carlos Escorcia at `https://www.cmescorcia.com`.

It is a Next.js 14 App Router project using React 18, JavaScript/JSX, Tailwind CSS, Radix/shadcn-style primitives, `framer-motion`, `react-icons`, and Vercel Analytics.

Treat this file as the working agreement for coding agents in this repo. Keep changes practical, scoped, and verified.

## Repository Map

- `app/layout.jsx`: root layout, global metadata, shared shell, analytics, global JSON-LD.
- `app/seo.js`: canonical SEO constants, page metadata helper, shared structured data.
- `app/page.jsx`: server entry for the home page.
- `app/HomeClient.jsx`: interactive home page UI.
- `app/services/page.jsx`, `app/work/page.jsx`, `app/resume/page.jsx`, `app/contact/page.jsx`: server route entries with route metadata and JSON-LD.
- `app/*/*Client.jsx`: client-side page UI, state, effects, motion, and browser-only behavior.
- `components/`: shared UI and layout components.
- `components/ui/`: Radix/shadcn-style primitives.
- `components/JsonLd.jsx`: shared JSON-LD renderer.
- `app/globals.css`: global Tailwind and visual system styles.
- `public/assets/`: portfolio images and visual assets.
- `public/pdf/01_CARLOS_ESCORCIA_CV.pdf`: downloadable CV.
- `public/og-image.jpg`: canonical Open Graph image.
- `public/robots.txt` and `public/sitemap.xml`: generated/served search discovery files.
- `next-sitemap.config.js`: sitemap and robots generation config.

The root `README.md` is still mostly the default Next.js template. Do not treat it as the source of truth.

## Commands

Use these commands from the repository root:

```bash
npm run dev
npm run lint
npm run build
npm run sitemap
```

Notes:

- `npm run build` also runs `postbuild`, which regenerates `public/sitemap.xml` and `public/robots.txt`.
- A `yarn.lock` exists. Do not add `package-lock.json` or change package-manager strategy unless the user explicitly asks.
- If dependencies must be installed or updated, prefer preserving the existing lockfile strategy and explain the lockfile impact.

## Coding Rules

- Keep route `page.jsx` files as server components when they only export `metadata`, render JSON-LD, and mount a client component.
- Use `"use client"` only in components that need state, effects, event handlers, `window`, forms, `framer-motion`, or browser-only APIs.
- Prefer the `@/*` import alias defined in `jsconfig.json`.
- Use existing component patterns before introducing new abstractions.
- Keep edits narrowly scoped. Do not refactor unrelated files while fixing SEO, UI, or content.
- Do not edit `.DS_Store` files or generated artifacts unless the task explicitly involves cleanup or generation.
- Do not remove Vercel Analytics from `app/layout.jsx` unless explicitly requested.

## SEO Rules

SEO is a first-class concern for this project.

- Keep the canonical domain as `https://www.cmescorcia.com`, matching the production host that returns `200`.
- Keep domain references synchronized across `app/seo.js`, `next-sitemap.config.js`, `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` when they are changed intentionally.
- Every indexable route must export `metadata` from its server `page.jsx` using `createPageMetadata()` from `app/seo.js`.
- Do not put page metadata in client components or `next/head`.
- Every indexable route must have a unique, accurate title, description, canonical path, Open Graph metadata, and Twitter metadata.
- Use `components/JsonLd.jsx` for structured data.
- Keep JSON-LD values consistent with `app/seo.js`, especially `url`, `image`, `email`, `telephone`, `sameAs`, and `name`.
- The canonical Open Graph image is `/og-image.jpg`. Do not rename or move it without updating metadata.
- When adding a route, update `next-sitemap.config.js` `additionalPaths`, route priority, and `changefreq`.
- Prefer regenerating sitemap files with `npm run sitemap` or `npm run build` instead of manual edits.

Current indexable routes:

- `/`
- `/services`
- `/resume`
- `/work`
- `/contact`

## UI And Accessibility Rules

- Keep the app as a usable portfolio, not a marketing placeholder.
- Maintain the existing dark technical visual direction, but avoid making new sections visually one-note.
- Use `next/image` for meaningful images and provide descriptive `alt` text.
- Decorative SVGs or visual-only elements should use `aria-hidden="true"`.
- Icon-only links and buttons must have an `aria-label`.
- Form labels should be programmatically associated with inputs using `htmlFor` and matching `id`.
- Avoid `outline-none` unless a visible `focus-visible:*` replacement exists.
- Prefer `transition-colors`, `transition-opacity`, or `transition-transform` over `transition-all`.
- Motion and animation changes should account for `prefers-reduced-motion`.
- Check mobile and desktop layouts for overlap, clipped text, broken navigation, and unusable forms.

Known areas worth improving in future UI/accessibility work:

- `app/contact/ContactClient.jsx`: associate labels with inputs and review focus states.
- `components/Social.jsx` and icon-only footer links: ensure accessible labels.
- `components/PageTransition.jsx`, `components/StairTransition.jsx`, and `app/globals.css`: review reduced-motion behavior.

## Verification

Run verification appropriate to the change:

- Normal code/content changes: `npm run lint`.
- Route, metadata, SEO, sitemap, asset, or deployment-sensitive changes: `npm run build`.
- Sitemap-only changes: `npm run sitemap`.
- Visual or interaction changes: run `npm run dev` and inspect `http://localhost:3000`.

Before considering SEO work complete, verify:

- `<title>` is present and unique.
- `<meta name="description">` is present and accurate.
- `<link rel="canonical">` points to `https://www.cmescorcia.com`.
- `og:image` points to an existing image.
- JSON-LD renders valid page-appropriate schema.
- `robots.txt` allows public pages and references `https://www.cmescorcia.com/sitemap.xml`.
- `sitemap.xml` includes every intended indexable route.

Before considering UI work complete, verify:

- Desktop and mobile navigation still work.
- The contact form still opens a `mailto:` draft.
- No visible console errors are introduced.
- The UI remains readable and usable on mobile and desktop widths.

## Deployment Checklist

Before publishing to `www.cmescorcia.com`:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Confirm `public/sitemap.xml` and `public/robots.txt` contain the production domain.
4. Verify `/`, `/services`, `/resume`, `/work`, and `/contact` render locally.
5. After deploy, inspect:
   - `https://www.cmescorcia.com`
   - `https://www.cmescorcia.com/robots.txt`
   - `https://www.cmescorcia.com/sitemap.xml`

After SEO deployments, submit or recheck `https://www.cmescorcia.com/sitemap.xml` in Google Search Console and inspect the changed URLs.

## Subagent Use

Use subagents when the work splits cleanly into independent streams. Keep delegated tasks bounded and avoid overlapping write scopes.

Recommended subagent roles:

- `frontend-ui`: responsive layout, accessibility, focus states, forms, visual regressions.
- `seo-indexing`: metadata, canonical URLs, JSON-LD, sitemap, robots, social previews.
- `release-deploy`: build, lint, generated files, production-domain checks, deployment readiness.

Do not use subagents for tiny single-file edits unless the user explicitly asks.

## Change Discipline

- Read relevant files before editing.
- Preserve user changes already present in the worktree.
- Do not revert unrelated changes.
- Prefer small patches over broad rewrites.
- If a command fails because of sandboxing or network restrictions, report the actual failure and retry with proper approval only when needed.
- In final responses, summarize changed files, verification performed, and any remaining risk.
