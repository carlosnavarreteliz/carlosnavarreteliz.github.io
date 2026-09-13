#!/usr/bin/env bash
# Deploy del build estático (public/) a la VM GCP (Caddy).
# Uso: GCP_VM=atlas-vm GCP_ZONE=us-central1-a pnpm deploy:gcp
set -euo pipefail
: "${GCP_VM:?set GCP_VM}"; : "${GCP_ZONE:?set GCP_ZONE}"

pnpm build
gcloud compute scp --recurse --zone "$GCP_ZONE" public/* "${GCP_VM}:/tmp/site/"
gcloud compute ssh "$GCP_VM" --zone "$GCP_ZONE" --command \
  "sudo rm -rf /var/www/carlosnavarrete.cl.bak && sudo cp -a /var/www/carlosnavarrete.cl /var/www/carlosnavarrete.cl.bak 2>/dev/null || true; sudo rm -rf /var/www/carlosnavarrete.cl && sudo mkdir -p /var/www/carlosnavarrete.cl && sudo cp -a /tmp/site/. /var/www/carlosnavarrete.cl/ && sudo systemctl reload caddy && echo DEPLOY_OK"
