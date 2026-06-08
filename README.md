# Elevion AI Onboarding

Client discovery onboarding form for ABC Bookkeeping WA, built with Vite, React and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Configuration

- Submission endpoint: set `SUBMIT_ENDPOINT` near the top of `src/App.jsx` when the backend or webhook is ready.
- Logo: replace `public/elevion-logo.svg` with the final Elevion AI logo asset. If the filename changes, update `LOGO_SRC` near the top of `src/App.jsx`.

When `SUBMIT_ENDPOINT` is empty, the form logs the structured payload to the browser console and shows a **Download responses (JSON)** button on the success screen.
