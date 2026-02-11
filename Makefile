SITE_DIR := site

.PHONY: help install install-python install-node sync dev build preview check fetch clean

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  %-18s %s\n", $$1, $$2}'

install: install-node install-python ## Install all dependencies

install-node: ## Install Node.js dependencies
	cd $(SITE_DIR) && npm install

install-python: ## Install Python dependencies
	pip install -r requirements.txt

sync: ## Sync Medium posts into the Astro site
	cd $(SITE_DIR) && npm run sync:posts

dev: ## Start local dev server (syncs posts first)
	cd $(SITE_DIR) && npm run dev

build: ## Production build (syncs posts automatically)
	cd $(SITE_DIR) && npm run build

preview: ## Serve the production build locally
	cd $(SITE_DIR) && npm run preview

check: ## Run astro check (types + content schema)
	cd $(SITE_DIR) && npm run check

fetch: ## Fetch posts from Medium (requires RAPIDAPI_KEY)
	python fetch_medium_posts.py --download-images --prepend-order

clean: ## Remove build artifacts
	rm -rf $(SITE_DIR)/dist $(SITE_DIR)/.astro
