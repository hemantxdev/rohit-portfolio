# Rohit Kumar — Premium Portfolio

A fresh React + Vite + TypeScript portfolio frontend with a minimalist luxury-dark visual system, electric-blue accents, GSAP scroll reveals, Framer Motion interactions, Lenis smooth scrolling and a React Three Fiber hero object.

## Requirements
- Node.js 20.19+ (or a current supported Node.js LTS)
- npm

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to a new GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Customize content
Edit `src/lib/data.ts`. All profile details, metrics, capabilities, skills, education, credentials and experience are centralized there.

## Important content notes
- The portfolio uses the facts currently published on the existing website as its starting point. Please verify every academic date, metric, credential and result before publishing.
- The existing website shows `5872rohityadav@gmail.com`, while the supplied creative brief specifies `rohityadav58720@gmail.com`. This build uses the email from the latest brief. Confirm which address is correct.
- The existing website lists a phone number. It is included in the contact section; verify that it is current and intended for public display.
- The existing site lists a 15% consistency improvement. This is described as a reported result, not independently verified.
- No resume PDF was supplied. The Resume section currently opens an email request instead of linking to a nonexistent file. Add a verified resume PDF to `public/` and update the button if direct download is desired.
- No project/research details were available. The section is intentionally marked as awaiting confirmed content rather than inventing projects.
- The website's current source code was not supplied; this is a new frontend project and does not reuse the original site's private source or backend.

## Performance and accessibility
- The 3D canvas uses capped device pixel ratio and a CSS fallback background.
- The custom cursor is disabled on coarse-pointer devices.
- Reduced-motion preferences are respected in CSS. Consider disabling Lenis and the hero animation as an additional accessibility enhancement if the target audience requires strict reduced-motion behavior.
