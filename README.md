# Vika Piratova — Portfolio

A portfolio for visual artist, photographer and content creator Vika Piratova, with dedicated project pages, galleries and a Visual feed. I designed and built the website myself with Codex in ChatGPT.

## Features

- Individual project pages with descriptions, cover images and photographs shown in their original proportions.
- Sections for selected work, photography projects, video, the Visual feed and contact details.
- A monochrome editorial interface that gives images centre stage.
- Russian and English versions, with the language preference saved in the browser.
- Responsive navigation and galleries for desktop and mobile.
- A static single-page application with no backend, published through GitHub Pages.

## Technology

React 19, TypeScript, Vite, Tailwind CSS and React Router.

## Live website

[View the portfolio](https://pxl-head.github.io/vika_piratova/).

## Local development

```bash
npm install
npm run dev
```

Create the production build or the GitHub Pages build:

```bash
npm run build
npm run build:pages
```

Run the quality check:

```bash
npm run lint
```

## Deployment

GitHub Actions publishes the site to GitHub Pages. Routing uses `BrowserRouter` with `BASE_URL` and a `404.html` fallback for the single-page application.

## Authorship

I designed and built this website myself with Codex in ChatGPT.

## Tools used

- **Codebase Memory MCP** — architecture analysis, symbol lookup and assessment of how changes affect the project.
- **GitHub MCP Server** — file synchronisation, commit verification and GitHub Actions checks.
- **Sites** — creation and publication of the initial website.
- **codebase-memory**, **sites-building** and **sites-hosting** — project audits, builds and deployment.

## Rights and materials

Images, videos, texts and other original materials belong to their respective creators and are presented as part of this portfolio.
