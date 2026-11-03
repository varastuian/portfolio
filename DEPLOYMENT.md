# Deployment Guide: Vercel & varistotle.ir

This guide walks you through deploying your portfolio to **Vercel** and linking your custom domain **`varistotle.ir`**.

---

## 1. Push to GitHub

Create a new repository on your GitHub account (`github.com/varastuian/portfolio` or `varistotle`):

```bash
# Add your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/varastuian/portfolio.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy on Vercel

1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your repository `varastuian/portfolio`.
4. Vercel will auto-detect the framework as **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Within ~30 seconds, your website will be live at a `*.vercel.app` URL.

---

## 3. Assign Custom Domain: `varistotle.ir`

1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Type `varistotle.ir` and click **Add**.
3. Also add `www.varistotle.ir` (Vercel will offer to automatically redirect `www` to the apex domain).
4. Go to your domain registrar (e.g., Nic.ir / Irnic / your DNS host) and configure the DNS records:

### Required DNS Records:
| Type | Host / Name | Target / Value | TTL |
|------|-------------|----------------|-----|
| **A** | `@` (or empty) | `76.76.21.21` | Auto / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Auto / 3600 |

> **Note on .ir Domains**: Once DNS records are updated in Nic.ir / your DNS panel, propagation typically takes between 15 minutes to 4 hours. Once verified, Vercel will automatically provision a free Let's Encrypt SSL/TLS certificate.

---

## 4. Local Development

To run the site locally:

```bash
npm run dev
```

To build and test production output locally:

```bash
npm run build
npm run preview
```
