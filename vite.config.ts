import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path is configurable: set VITE_BASE (e.g. "/voiceledger-web/") for a
// GitHub Pages project site, or leave unset for "/" (user site / custom domain).
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let base = process.env.VITE_BASE ?? env.VITE_BASE ?? '/'
  if (!base.startsWith('/')) base = `/${base}`
  if (!base.endsWith('/')) base = `${base}/`
  // Optional absolute site URL (e.g. https://user.github.io/voiceledger-web/) so
  // Open Graph tags resolve to absolute links. Falls back to the base path.
  const siteUrl = (process.env.VITE_SITE_URL ?? env.VITE_SITE_URL ?? '').replace(/\/?$/, '/')
  const prefix = siteUrl.length > 1 ? siteUrl : base
  const absoluteUrls = {
    name: 'absolute-site-url',
    transformIndexHtml: (html: string) => html.replaceAll('__SITE__', prefix),
  }
  return { base, plugins: [react(), tailwindcss(), absoluteUrls] }
})
