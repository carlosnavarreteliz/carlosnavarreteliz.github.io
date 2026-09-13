#!/usr/bin/env bash
# Deploy del build estático (public/) a la VM GCP (Caddy).
# Uso: GCP_VM=atlas-vm GCP_ZONE=us-central1-a pnpm deploy:gcp
set -euo pipefail
: "${GCP_VM:?set GCP_VM}"; : "${GCP_ZONE:?set GCP_ZONE}"

# A plain `gatsby build` keeps orphaned JS chunks from pages that no longer
# exist, and the copy below ships all of public/ — so deleted content would
# still reach production. Always deploy from a clean build.
pnpm build:clean
gcloud compute scp --recurse --zone "$GCP_ZONE" public/* "${GCP_VM}:/tmp/site/"
gcloud compute ssh "$GCP_VM" --zone "$GCP_ZONE" --command \
  "sudo rm -rf /var/www/carlosnavarrete.cl.bak && sudo cp -a /var/www/carlosnavarrete.cl /var/www/carlosnavarrete.cl.bak 2>/dev/null || true; sudo rm -rf /var/www/carlosnavarrete.cl && sudo mkdir -p /var/www/carlosnavarrete.cl && sudo cp -a /tmp/site/. /var/www/carlosnavarrete.cl/ && sudo systemctl reload caddy && echo DEPLOY_OK"
