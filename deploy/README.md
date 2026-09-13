# Deploy a GCP (e2-micro, free tier) — servidor Caddy en `atlas-vm`

Sitio estático (`public/` tras `pnpm build`) servido por **Caddy** en la VM
`atlas-vm` (`us-central1-a`, IP reservada `atlas-ip`: **35.254.142.75**).
Caddy emite y renueva el certificado HTTPS solo cuando el DNS ya apunta a la VM.

## Estado actual (2026-09-13)

- [x] Bloque `carlosnavarrete.cl, www.carlosnavarrete.cl` agregado a
      `/etc/caddy/Caddyfile` (ver `deploy/Caddyfile.carlosnavarrete`).
- [x] Sitio desplegado en `/var/www/carlosnavarrete.cl`.
- [ ] DNS en nic.cl → falta (ver abajo). Sin esto no hay HTTPS ni sitio visible.

## Desplegar cada cambio

```shell
GCP_VM=atlas-vm GCP_ZONE=us-central1-a pnpm deploy:gcp
```

(Compila, sube `public/` a `/tmp/site`, respalda a
`/var/www/carlosnavarrete.cl.bak` y recarga Caddy.)

## Si la VM fuera nueva (referencia)

```shell
# 1. IP reservada + VM + firewall
gcloud compute addresses create carlosnavarrete-ip --region=us-central1
gcloud compute instances create carlosnavarrete-web \
  --zone=us-central1-a --machine-type=e2-micro \
  --image-family=debian-12 --image-project=debian-cloud \
  --boot-disk-size=30GB --boot-disk-type=pd-standard \
  --address=$(gcloud compute addresses describe carlosnavarrete-ip --region=us-central1 --format='value(address)') \
  --tags=http-server,https-server
gcloud compute firewall-rules create allow-http-https \
  --allow=tcp:80,tcp:443 --target-tags=http-server,https-server 2>/dev/null || true

# 2. Caddy + bloque del sitio
sudo apt-get install -y caddy
# agregar deploy/Caddyfile.carlosnavarrete a /etc/caddy/Caddyfile y:
sudo caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
sudo systemctl reload caddy
```

## Notas

- Ya no se usa GitHub Pages (eliminado `static/CNAME` y el script `gh-pages`).
- La IP reservada no cambia con reboots: el DNS queda estable.
- Ver tu IP: `gcloud compute addresses describe atlas-ip --region=us-central1 --format='value(address)'`
