# Hotel Rewa In

Hotel Rewa In is a JavaScript React app built with Vite. The app keeps the original hotel imagery, updates the brand, and provides React-rendered pages for home, rooms, about, contact, and reservation flows.

## Project Structure

```text
src/
  components/   Reusable UI pieces
  assets/       Images used by the app
  data/         Room, staff, and navigation content
  pages/        Main website pages
  utils/        Small shared helpers
  App.js        App shell and simple routing
  main.js       React entry point
  styles.css    Main app styles
```

## Run Locally

```bash
npm install
npm run dev
```

The dev server is configured for:

```text
http://127.0.0.1:5173/
```

If that port is already busy, Vite will choose the next available port.

## Environment

No environment variables are required right now. Keep real `.env` files local and use `.env.example` as the public template if values are added later.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Preview Production Build

```bash
npm run build
npm run preview
```

The preview server runs at:

```text
http://127.0.0.1:4173/
```

Old static-template files are preserved locally in `legacy-template/` for reference and are ignored by Git.

## Deploy To Vercel

Use these settings when importing the GitHub repo into Vercel:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

This app includes `vercel.json` so direct visits and refreshes on pages like `/rooms`, `/about`, `/contact`, and `/book` load correctly.
