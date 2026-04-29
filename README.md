<<<<<<< HEAD
# Legal Pages App

Production-ready React app for Dr. VJ's Cardiology Clinic SMS Program legal documentation.

## Pages

- `/privacy-policy`
- `/terms-and-conditions`

The app redirects `/` and unknown routes to `/privacy-policy`.

## Tech Stack

- React 19
- React Router 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Vite 8
- ESLint 10

## Project Structure

```text
src/
  app/
    App.jsx
  components/
    LegalDocument.jsx
    LegalLayout.jsx
  content/
    legalContent.js
  pages/
    PrivacyPolicyPage.jsx
    TermsAndConditionsPage.jsx
  index.css
  main.jsx
```

## Setup

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # local development server
npm run lint     # lint checks
npm run build    # production build
npm run preview  # preview production build locally
```

## Content Updates

Update legal content in:

- `src/pages/PrivacyPolicyPage.jsx`
- `src/pages/TermsAndConditionsPage.jsx`
- `src/content/legalContent.js`

Important placeholders to replace before go-live:

- `supportContactPlaceholder` in `src/content/legalContent.js`

## Deployment Notes

This is a client-side routed SPA. Configure your host to serve `index.html` for app routes:

- `/privacy-policy`
- `/terms-and-conditions`

Build output is generated in `dist/`.
=======
# policy-engine
>>>>>>> upstream/dev
