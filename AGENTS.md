# AGENTS.md

## Cursor Cloud specific instructions

### Product

Single-page React onboarding form (Vite + Tailwind CSS) for ABC Bookkeeping WA / Elevion AI. No backend in-repo; offline submit logs JSON to the console and offers a download button when `SUBMIT_ENDPOINT` in `src/App.jsx` is empty.

### Services

| Service | Required | Command |
|---------|----------|---------|
| Vite dev server | Yes (local dev) | `npm run dev` → http://localhost:5173 |
| Static preview | Optional (prod check) | `npm run build` then `npm run preview` |
| Backend / webhook | Optional | Set `SUBMIT_ENDPOINT` in `src/App.jsx` |

### Standard commands

See `README.md` and `package.json` scripts:

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

### Lint and tests

Not configured in this repo (no ESLint, Prettier, or test runner scripts).

### Dev server notes

- Run the dev server in a persistent tmux session if you need it in the background; Vite binds to port 5173 by default.
- Google Fonts load from CDN in `index.html`; the form still works with system font fallbacks if the CDN is unreachable.
