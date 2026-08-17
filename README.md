# Asif Kalam — Developer Portfolio

A premium, single-page portfolio for a cloud engineer and software developer. It is designed to give recruiters a fast overview while making cloud architecture and project decisions easy to explore.

## Features

- Responsive, accessible dark engineering aesthetic
- Sticky active navigation, mobile menu, scroll progress, and reduced-motion support
- Interactive AWS service diagram and detailed project case-study modals
- Centralized profile, skills, projects, and architecture data
- Configuration-aware social, GitHub, and contact actions
- SEO metadata, canonical URL, `robots.txt`, sitemap, and SVG favicon
- Resume download and new-tab view support

## Stack

React, TypeScript, Vite, Framer Motion, Lucide React, and CSS.

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Set the following public configuration values in `.env`:

```env
VITE_GITHUB_USERNAME=YOUR_GITHUB_USERNAME
VITE_LINKEDIN_URL=YOUR_LINKEDIN_URL
VITE_CONTACT_EMAIL=YOUR_EMAIL
```

No AWS credentials, API keys, or tokens belong in this frontend application.

## Resume and personal links

`public/resume.pdf` contains Asif Kalam's supplied resume. Update GitHub through `.env`; application content lives in `src/data/portfolio.ts`. Add verified repository and live-demo URLs to the project records when those are available.

The form deliberately does not claim to send mail. It validates inputs and explains that an email service must be connected. Configure a serverless endpoint or service such as Resend before enabling delivery.

## Production build

```bash
npm run build
npm run preview
```

## Deployment

Deploy on Vercel by importing the repository. Vercel detects Vite automatically; use `npm run build` as the build command and `dist` as the output directory. Add the same `VITE_*` variables in Vercel Project Settings, then replace the canonical and sitemap URL with the final production domain (for example `https://asifkalam.dev`).

## Folder structure

```text
src/
  App.tsx                 application sections and interactions
  data/portfolio.ts       editable portfolio content and config mapping
  styles.css              responsive design system
public/
  resume.pdf              supplied resume available for download
  robots.txt, sitemap.xml SEO crawl configuration
```

## Future improvements

- Fetch public repository cards from GitHub's API after username configuration
- Add a serverless contact endpoint with rate limiting and bot protection
- Add verified project URLs, certificate verification URLs, and an Open Graph image
- Add screenshot assets to this README after the first production deployment
