# Parva Shah — Personal Portfolio

Personal website for Parva Shah, Software Engineer. Built with React, Three.js, Framer Motion, and Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Deploy. Vercel detects Vite and runs `vite build`; the `vercel.json` rewrites handle SPA routing.

Vercel Analytics is included via `@vercel/analytics` and will track page views when deployed on Vercel.

## Stack

- **React** + **Vite**
- **Three.js** + **@react-three/fiber** — 3D particle hero
- **Framer Motion** — animations
- **Vercel Analytics** — analytics on Vercel

## Notes

- Responsive layout; works on mobile, tablet, and desktop.
- Respects `prefers-reduced-motion`: 3D hero is disabled when reduced motion is preferred.
- All content is sourced from Parva’s resume.
