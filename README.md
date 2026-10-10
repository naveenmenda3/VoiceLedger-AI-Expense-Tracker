# VoiceLedger — landing page

Single-page marketing site for **VoiceLedger AI Expense Tracker** (Android).
Vite + React + TypeScript + Tailwind CSS v4. No backend, analytics or API keys.

Primary goal: send visitors to
<https://play.google.com/store/apps/details?id=com.voiceledger.app2>
(the URL lives in one place: `src/constants.ts`).

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run lint
npm run typecheck
npm run build      # outputs dist/
npm run preview    # serve the production build
```

## Configuration

| Variable         | Purpose                                                              | Default |
| ---------------- | -------------------------------------------------------------------- | ------- |
| `VITE_BASE`      | Base path, e.g. `/voiceledger-web/` for a GitHub Pages project site   | `/`     |
| `VITE_SITE_URL`  | Absolute site URL, used so Open Graph image links are absolute       | base    |

Test a subpath build locally:

```bash
VITE_BASE=/voiceledger-web/ npm run build && npm run preview
```

## Deploy to GitHub Pages

1. Create an empty GitHub repository (e.g. `voiceledger-web`).
2. From this folder:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds on every push to `main`
   and deploys `dist`. The base path and site URL are derived from the repository
   name automatically.

Live URL: `https://<your-username>.github.io/<repo>/`
(or `https://<your-username>.github.io/` if the repo is named `<your-username>.github.io`
— then set `VITE_BASE=/` in the workflow).

## Notes

- Logo assets come from the app's `assets/icon/voiceledger_logo.png`.
- The phone mockup is a custom illustration with sample data, not real user data.
- Contact: contact.voiceledger@gmail.com
