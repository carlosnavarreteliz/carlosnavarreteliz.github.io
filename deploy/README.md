# Deploy a GCP (e2-micro, free tier) — servidor Caddy en `atlas-vm`

Sitio estático (`public/` tras `pnpm build`) servido por **Caddy** en la VM
`atlas-vm` (`us-central1-a`, IP reservada `atlas-ip`: **35.254.142.75**).
Caddy emite y renueva el certificado HTTPS solo cuando el DNS ya apunta a la VM.

## Estado actual (2026-09-13)

- [x] Bloque `carlosnavarrete.cl, www.carlosnavarrete.cl` agregado a
      `/etc/caddy/Caddyfile` (ver `deploy/Caddyfile.carlosnavarrete`).
- [x] Sitio desplegado en `/var/www/carlosnavarrete.cl`.
- [x] DNS en nic.cl → apuntando (verificado 2026-09-13: A → 35.254.142.75, HTTPS OK).

## Pendiente: corregir el soft 404

El `try_files` en la VM todavía termina en `/index.html`, así que cualquier URL
inexistente devuelve la portada con HTTP 200 en vez de 404. `deploy/Caddyfile.carlosnavarrete`
ya tiene la línea corregida; falta aplicarla en la VM:

```shell
gcloud compute ssh atlas-vm --zone us-central1-a
sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak
sudo sed -i 's|try_files {path} {path}/ {path}.html /index.html|try_files {path} {path}/ {path}.html|' /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile && sudo systemctl reload caddy
# comprobar: debe dar 404, no 200
curl -s -o /dev/null -w '%{http_code}\n' https://carlosnavarrete.cl/ruta-que-no-existe/
```

Si `caddy validate` falla, restaurar con `sudo cp /etc/caddy/Caddyfile.bak /etc/caddy/Caddyfile && sudo systemctl reload caddy`.

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
