# Cart Genie

🚀 **Project Completed: Genie** — a modern, responsive shopping web app built with **React** + **Vite** and deployed to **GitHub Pages**.

---

## Demo

* Live demo: *(Add your GitHub Pages URL here — e.g. `https://<username>.github.io/<repo-name>/`)*

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Prerequisites](#prerequisites)
5. [Getting Started (Step-by-step)](#getting-started-step-by-step)

   * [Clone repo](#clone-repo)
   * [Install dependencies](#install-dependencies)
   * [Run in development](#run-in-development)
   * [Build for production](#build-for-production)
   * [Preview production build](#preview-production-build)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)

   * [Option A — `gh-pages` package (quick)](#option-a---gh-pages-package-quick)
   * [Option B — GitHub Actions (recommended)](#option-b---github-actions-recommended)
7. [Vite configuration & public assets](#vite-configuration--public-assets)
8. [Common issues & fixes](#common-issues--fixes)
9. [Project structure (example)](#project-structure-example)
10. [Contributing](#contributing)
11. [License](#license)
12. [Contact](#contact)

---

## Project Overview

SmartShop is a simple yet elegant e-commerce front-end that lets users explore products, view product details, and simulate cart interactions. Built with a component-based architecture, it focuses on clarity, performance, and smooth UI animations.

---

## Features

* Browse product listings
* Product detail view
* Add / remove items from a simulated cart
* Responsive layout (mobile-first)
* Smooth transitions using Framer Motion
* Clean custom styling and background assets
* Deployed to GitHub Pages with correct asset and route handling

---

## Tech Stack

* React (functional components, hooks)
* Vite (dev server & build)
* Framer Motion (animations)
* CSS / Tailwind / SCSS (your choice — update accordingly)
* GitHub Pages (hosting)

---

## Prerequisites

* Node.js (v16+ recommended)
* npm or yarn
* Git
* A GitHub account and a repository for deployment

---

## Getting Started (Step-by-step)

Follow these steps to run and build SmartShop locally.

### Clone repo

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### Install dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn
```

### Run in development

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:5173` (port shown in terminal).

### Build for production

```bash
npm run build
# or
yarn build
```

This generates an optimized `dist/` folder.

### Preview production build (locally)

```bash
npm run preview
# or
yarn preview
```

This spins up a local static server so you can verify the production build.

---

## Deploying to GitHub Pages

Below are two common options. Pick one that fits your workflow.

### Option A — `gh-pages` package (quick)

1. Install `gh-pages` as a dev dependency:

```bash
npm install --save-dev gh-pages
# or
yarn add -D gh-pages
```

2. Update `package.json` scripts and homepage:

```json
{
  "homepage": "https://<your-username>.github.io/<repo-name>/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configure Vite base (see next section).
4. Deploy:

```bash
npm run deploy
# or
yarn deploy
```

This will push the `dist/` contents to the `gh-pages` branch and enable Pages.

### Option B — GitHub Actions (recommended for CI)

1. Create `.github/workflows/deploy.yml` with a workflow that runs `npm ci`, `npm run build` and then deploys the `dist/` to `gh-pages` or uses the `peaceiris/actions-gh-pages` or `JamesIves/github-pages-deploy-action` action.

A minimal example using `peaceiris/actions-gh-pages`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          publish_dir: ./dist
          publish_branch: gh-pages
```

2. Commit and push to `main` (or set your branch). GitHub Actions will build and deploy.

---

## Vite configuration & public assets

When hosting on GitHub Pages (non-root), you must set Vite's `base` option to your repo path. Example `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<repo-name>/',
  plugins: [react()]
})
```

**Notes on public assets**:

* Files placed in the `public/` folder are copied to the root of `dist/` and should be referenced with absolute paths that consider `base`.
* For images imported in components (`import logo from './assets/logo.png'`) Vite handles them correctly at build time. Use `new URL('./assets/bg.jpg', import.meta.url).href` if you need runtime URLs.

**React Router users**: If you're using client-side routing (react-router), consider using `HashRouter` for GitHub Pages or configure your Pages to serve `index.html` for all 404s.

---

## Common issues & fixes

* **Missing images after deploy**: Ensure `base` is set in `vite.config.js`, and static files are in `public/` when referenced as `/image.png`.
* **404 on GitHub Pages refresh (SPA routing)**: Use `HashRouter` or add a redirect rule in Pages settings (if available) or use a custom 404 page that redirects to `index.html`.
* **Broken asset paths**: Use `import` for images where possible or prefix paths correctly with `process.env.BASE_URL` / `import.meta.env.BASE_URL`.
* **CSS not loading**: Confirm CSS files are imported in your entry file (e.g., `main.jsx`) and that build includes them.

---

## Project structure (example)

```
smartshop/
├─ public/
│  ├─ favicon.ico
│  └─ bg.jpg
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## Contributing

Contributions are welcome. If you want to improve SmartShop:

1. Fork the repo
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit changes (`git commit -m "feat: add ..."`)
4. Push and open a PR

Please follow a consistent commit style and include a brief description.

---

## License

This project is released under the MIT License. See `LICENSE` for details.

---

## Contact

Created by **<Your Name>** — update this with your GitHub profile or email.

If you'd like, I can also:

* Create a shorter README tailored for the GitHub repo front page
* Generate a `vite.config.js` or GitHub Actions YAML prefilled with your repo name
* Suggest a concise project tagline and description for LinkedIn/GitHub

Happy to help — tell me which of the above you'd like next!


