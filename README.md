# carlosnavarrete.cl

Personal academic site of **Dr. Eng. Carlos Navarrete** — Faculty of Engineering,
Universidad de Concepción · Board Member, CDIA.
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

## Deploy (GCP, e2-micro free tier)

The site is a static build (`public/`). Production serves it with Nginx + HTTPS
on a single `e2-micro` VM. Full guide: [`deploy/README.md`](deploy/README.md).

```shell
pnpm deploy:gcp   # build + rsync public/ to the VM (see deploy/deploy.sh)
```

DNS (`nic.cl`): two `A` records → the VM's reserved external IP (see deploy guide).

## Notas

- El lint real es `pnpm lint` (ESLint 9, `eslint.config.js`). El archivo
  `.eslintrc.json` (vacío) existe solo como marcador: Gatsby 5 no reconoce el
  flat config y sin él inyecta `eslint-config-react-app` en `gatsby develop`,
  que es incompatible con ESLint 9. No borrar.
