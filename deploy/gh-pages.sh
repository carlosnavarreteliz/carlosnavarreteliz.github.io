#!/usr/bin/env bash
# Publica el build estático (public/) en la rama gh-pages, que GitHub Pages
# sirve en https://carlosnavarrete.cl (CNAME y .nojekyll vienen de static/).
# Uso: pnpm deploy:pages      (SKIP_BUILD=1 reutiliza un public/ ya compilado)
set -euo pipefail

# Un `gatsby build` sin limpiar deja chunks huérfanos de páginas borradas, y
# todo public/ se publica: siempre desde un build limpio.
if [ -z "${SKIP_BUILD:-}" ]; then
  pnpm build:clean
fi
test -f public/index.html || { echo "public/ is empty — build first" >&2; exit 1; }
test -f public/CNAME || { echo "public/CNAME missing — check static/CNAME" >&2; exit 1; }

REMOTE="$(git remote get-url origin)"
SRC="$(git rev-parse --short HEAD)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# La rama gh-pages no guarda historia: cada deploy es un único commit nuevo.
cp -a public/. "$TMP/"
git -C "$TMP" init -q -b gh-pages
git -C "$TMP" add -A
git -C "$TMP" -c user.name="$(git config user.name)" -c user.email="$(git config user.email)" \
  commit -q -m "deploy: ${SRC}"
git -C "$TMP" push -q -f "$REMOTE" gh-pages
echo "DEPLOY_OK (${SRC})"
