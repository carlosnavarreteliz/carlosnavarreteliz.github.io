# carlosnavarrete.cl

Personal academic site of **Dr. Eng. Carlos Navarrete** — Faculty of Engineering,
Universidad de Concepción · Deputy Director, CDIA.
Computational social science · generative AI · complex systems.

Built with [Gatsby 5](https://www.gatsbyjs.com), React, Tailwind CSS v4, Sass.
Package manager: **pnpm** (enforced via `packageManager` + `.npmrc`).

## Requirements

- Node.js 22 (`nvm use` reads `.nvmrc` / `.node-version`)
- pnpm 10 (`corepack enable` or `npm i -g pnpm`)

## Quick start

```shell
pnpm install
pnpm dev        # http://localhost:8000
pnpm build      # static output in public/
pnpm build:clean # same, but wipes public/ first — use before deploying removals
pnpm serve      # preview the production build
pnpm lint       # eslint (flat config)
pnpm clean      # gatsby clean
```

## Deploy (GitHub Pages)

The site is a static build (`public/`) served by GitHub Pages from the
`gh-pages` branch at https://carlosnavarrete.cl. The site is no longer
deployed to GCP.

```shell
pnpm deploy:pages   # clean build + force-push public/ to gh-pages (deploy/gh-pages.sh)
```

`static/CNAME` sets the custom domain; `static/.nojekyll` stops Jekyll from
dropping `_gatsby/`. DNS: apex `A` records → GitHub Pages
(185.199.108.153, .109.153, .110.153, .111.153) and `www` `CNAME` →
`carlosnavarreteliz.github.io`.

## Notas

- El lint real es `pnpm lint` (ESLint 9, `eslint.config.js`). El archivo
  `.eslintrc.json` (vacío) existe solo como marcador: Gatsby 5 no reconoce el
  flat config y sin él inyecta `eslint-config-react-app` en `gatsby develop`,
  que es incompatible con ESLint 9. No borrar.
