# Mister Funable Field Notes

Static Astro + Tailwind site that mirrors Mister Funable’s Medium exports (markdown + images) into `site/`, then deploys to GitHub Pages. The sync pipeline guarantees local copies of every post, predictable URLs, and a posts manifest for the landing page hero/feed.

## Repository Layout

```
.
├── AGENTS.md                  # Engineering playbook for GPT collaborators
├── exports/medium_posts/      # Source markdown + images (read-only inputs)
├── fetch_medium_posts.py      # Medium API exporter that populates exports/
├── site/                      # Astro project (actual website)
│   ├── scripts/syncPosts.mjs  # Copies markdown/images into src/
│   ├── src/content/posts/     # Generated copies with frontmatter
│   ├── src/data/posts.ts      # Generated post manifest (landing page data)
│   ├── public/medium-assets/  # Copied image folders
│   └── README.md              # Site-specific notes
└── .tool-versions             # Node 20.10.0 pin
```

> Never edit files under `exports/medium_posts/` manually. Re-run the exporter (`fetch_medium_posts.py`) if you need new content.

## Prerequisites

- Node.js 20.10.0 (install via `asdf install` to honor `.tool-versions`)
- Medium exports already generated into `exports/medium_posts`
- GitHub repository (e.g., `github.com/MisterFunable/blog`)

## Workflow

1. **Install dependencies**
   ```bash
   cd site
   npm install
   ```

2. **Sync Medium posts**
   ```bash
   npm run sync:posts
   ```
   This script:
   - Copies every `NN - title.md` file into `site/src/content/posts`
   - Injects frontmatter (title, description/excerpt, order, reading time, hero image, source URL)
   - Copies `images/NN/` folders into `site/public/medium-assets/NN`
   - Builds `site/src/data/posts.ts` so the landing page can list hero/latest/archive cards

3. **Develop locally**
   ```bash
   npm run dev
   ```
   Starts Astro on `http://localhost:4321`. Tailwind hot reload is already configured.

4. **Build + preview**
   ```bash
   npm run build
   npm run preview
   ```
   `build` automatically re-runs `sync:posts`. The static output lands in `site/dist`.

## Deploying to GitHub Pages

1. **Commit & push**  
   - Commit the entire repo (including `site/` and top-level configs).  
   - Push to `main` on GitHub (`https://github.com/MisterFunable/blog`).

2. **Add the workflow**  
   Create `site/.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy Astro site to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build:
       runs-on: ubuntu-latest
       defaults:
         run:
           working-directory: site
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - run: npm install
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: site/dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       permissions:
         pages: write
         id-token: write
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

3. **Enable Pages**  
   - In the GitHub repo: **Settings → Pages → Build and deployment → GitHub Actions**.
   - After the first successful workflow run, GitHub provides the Pages URL.

4. **Custom domains / subpaths**  
   - If hosting at `https://<user>.github.io/blog`, set `site` and `base` inside `site/astro.config.mjs`.

## Updating Content

1. Run the Medium exporter if needed:
   ```bash
   RAPIDAPI_KEY=xxx python fetch_medium_posts.py --download-images --prepend-order
   ```
2. `cd site && npm run sync:posts`
3. Commit the regenerated files in `site/`.
4. Push to `main` → GitHub Actions redeploys automatically.

## Useful Commands

| Command                 | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| `npm run sync:posts`    | Rebuilds markdown copies, images, and manifest.           |
| `npm run dev`           | Local dev server with live refresh.                       |
| `npm run build`         | Production build (includes sync step).                    |
| `npm run preview`       | Serves `dist/` locally.                                   |
| `npm run check`         | Runs `astro check` to validate types + content schema.    |

Need more details? See `site/README.md` for additional context, or update `AGENTS.md` whenever the stack/process changes so future collaborators stay aligned. Happy publishing! 🎉

