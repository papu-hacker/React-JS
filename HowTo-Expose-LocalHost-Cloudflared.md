## Installing Cloudflared

### Ubuntu
```bash
# Add cloudflare gpg key
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

# Add this repo to your apt repositories
# Stable
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared noble main' | sudo tee /etc/apt/sources.list.d/cloudflared.list
# Nightly
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://next.pkg.cloudflare.com/cloudflared noble main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# install cloudflared
sudo apt-get update && sudo apt-get install cloudflared
```

### RHEL Generic
```bash
# Add cloudflared.repo to /etc/yum.repos.d/
# Stable
curl -fsSl https://pkg.cloudflare.com/cloudflared.repo | sudo tee /etc/yum.repos.d/cloudflared.repo
# Nightly
curl -fsSl https://next.pkg.cloudflare.com/cloudflared.repo | sudo tee /etc/yum.repos.d/cloudflared.repo

#update repo
sudo yum update

# install cloudflared
sudo yum install cloudflared
```

If ur using react + vite add this config `vite.config.js`

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allow external hosts
    origin: 'https://trails-ambien-killing-brochure.trycloudflare.com', // e.g. https://abc-123.trycloudflare.com
    hmr: {
      protocol: 'wss',
      host: 'https://trails-ambien-killing-brochure.trycloudflare.com',
      clientPort: 443
    }
  }
})
```
