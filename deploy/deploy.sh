#!/usr/bin/env bash
# Deploy del build estático (public/) a la VM GCP (Caddy).
# Uso: GCP_VM=atlas-vm GCP_ZONE=us-central1-a pnpm deploy:gcp
#      SKIP_BUILD=1 ... para subir un public/ ya compilado.
set -euo pipefail
: "${GCP_VM:?set GCP_VM}"; : "${GCP_ZONE:?set GCP_ZONE}"

# A plain `gatsby build` keeps orphaned JS chunks from pages that no longer
# exist, and the upload below ships all of public/ — so deleted content would
# still reach production. Always deploy from a clean build.
if [ -z "${SKIP_BUILD:-}" ]; then
  pnpm build:clean
fi
test -f public/index.html || { echo "public/ is empty — build first" >&2; exit 1; }

# One tarball instead of a recursive scp: scp opens a transfer per file and
# took over ten minutes for a few hundred small files.
TARBALL="$(mktemp -t site).tar.gz"
trap 'rm -f "$TARBALL"' EXIT
COPYFILE_DISABLE=1 tar --no-xattrs -czf "$TARBALL" -C public .
gcloud compute scp --zone "$GCP_ZONE" "$TARBALL" "${GCP_VM}:/tmp/site.tar.gz"
gcloud compute ssh "$GCP_VM" --zone "$GCP_ZONE" --command \
  "set -e; rm -rf /tmp/site && mkdir -p /tmp/site && tar -xzf /tmp/site.tar.gz -C /tmp/site && rm /tmp/site.tar.gz; sudo rm -rf /var/www/carlosnavarrete.cl.bak && sudo cp -a /var/www/carlosnavarrete.cl /var/www/carlosnavarrete.cl.bak 2>/dev/null || true; sudo rm -rf /var/www/carlosnavarrete.cl && sudo mkdir -p /var/www/carlosnavarrete.cl && sudo cp -a /tmp/site/. /var/www/carlosnavarrete.cl/ && sudo systemctl reload caddy && echo DEPLOY_OK"
