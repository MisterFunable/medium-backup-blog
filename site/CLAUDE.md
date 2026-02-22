# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static Astro + Tailwind CSS site that mirrors Medium posts (markdown + images) and deploys to GitHub Pages. Content lives in `../exports/medium_posts/` (read-only source) and gets synced into the Astro project via a build-time pipeline.

**Live site**: `https://misterfunable.github.io/medium-backup-blog/`

## Commands

All commands run from the `site/` directory (this directory). A root-level `Makefile` wraps these with `make <target>`.

| Command | Purpose |
|---|---|
| `npm run dev` | Sync posts + start dev server (localhost:4321) |
| `npm run build` | Production build (auto-runs sync:posts via prebuild) |
| `npm run preview` | Serve built `dist/` locally |
| `npm run check` | Astro type + content schema validation |
| `npm run sync:posts` | Run the sync pipeline alone |

To fetch new posts from Medium (requires `RAPIDAPI_KEY` env var):
```
python ../fetch_medium_posts.py --download-images --prepend-order
```

## Architecture

### Data Pipeline

```
exports/medium_posts/*.md  →  scripts/syncPosts.mjs  →  src/content/posts/*.md
                                                     →  src/data/posts.ts (manifest)
exports/medium_posts/images/NN/  →  (copied to)  →  public/medium-assets/NN/
```

The sync script (`scripts/syncPosts.mjs`) is the core pipeline:
1. Parses `NN - slug.md` filenames to extract order and slug
2. Extracts metadata from HTML comments (`<!-- Source: -->`, `<!-- Published: -->`, `<!-- Tags: -->`)
3. Injects YAML frontmatter into markdown copies
4. Rewrites image paths from `images/NN/` to `${BASE_PATH}medium-assets/NN/`
5. Generates `src/data/posts.ts` manifest with typed `PostSummary[]` for the landing page
6. Copies image folders to `public/medium-assets/`

**Never edit files under `exports/medium_posts/`** — they are read-only source material.

### Content Collections

Posts use Astro Content Collections with a Zod schema (`src/content/config.ts`). Required frontmatter fields: `title`, `description` (max 320 chars), `permalink`, `order`, `publishedAt`, `readingTime`, `heroImage` (nullable), `sourceUrl`, `tags`.

### Routing

- `/` — Landing page with hero + responsive post grid (`src/pages/index.astro`)
- `/posts/[slug]` — Individual post pages via `getStaticPaths()` (`src/pages/posts/[slug].astro`)

### Key Configuration

- `astro.config.mjs`: Sets `site: 'https://misterfunable.github.io'` and `base: '/medium-backup-blog/'`. Tailwind runs via `@tailwindcss/vite` plugin.
- Node.js 20.10.0 pinned in `.tool-versions`

## Styling

Dark theme by default. Design tokens defined in `src/styles/global.css` via `@theme`:
- `--color-ink: #030712` (background), `--color-lime: #05ff85` (accent)
- Font: Space Grotesk
- Custom utility classes: `.glass-card`, `.post-card`, `.medium-link`, `.gradient-text`, `.nav-link`
- Markdown content styled via `.richtext` in `@layer base`

Use Tailwind 4 syntax (`@theme`, `@layer`). No separate `tailwind.config.mjs` — configuration is CSS-native.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. The workflow runs `npm install && npm run build` in the `site/` directory, then uploads `site/dist/` as a Pages artifact.
