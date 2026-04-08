# Translation Portfolio

A professional portfolio website.

## Overview

This project is a modern portfolio website built with React, TypeScript, Vite, and SCSS. It includes bilingual support (English and Ukrainian), SEO-friendly metadata, a contact form configured for Netlify, and a clean section-based layout for services, standards, sample work, and contact details.

## Features

- React 19 + TypeScript
- Vite build and development tooling
- Internationalization with `react-i18next`
- Language detection and local storage caching
- Responsive section-based landing page
- Netlify-compatible contact form
- SEO metadata and JSON-LD Person schema
- SCSS Modules for scoped styling

## Tech Stack

- `react`
- `typescript`
- `vite`
- `sass`
- `react-i18next`
- `i18next-browser-languagedetector`
- `react-photo-view`

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the portfolio.

## Build & Preview

Build the production bundle:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```

## Project Structure

- `src/` - React application source files
- `src/sections/` - page sections like Header, Landing, AboutMe, Samples, Contacts, Footer
- `src/components/` - reusable components such as navigation and language toggle
- `src/locales/` - English and Ukrainian translation resources
- `src/assets/` - images and SVG assets
- `index.html` - HTML entry point with metadata and schema markup

## Notes

- The form uses Netlify form handling with a hidden `contact` form definition in `index.html`.
- The project is currently configured for deployment to platforms like Netlify.
- Content and translations are managed through `src/locales/en.json` and `src/locales/uk.json`.
