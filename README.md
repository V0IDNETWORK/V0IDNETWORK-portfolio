# ILYA — Cyber Intelligence Division

A Next.js (App Router) rebuild of the original single-file cyberpunk portfolio. Real routing, a
markdown-backed blog, a working contact form with email delivery, SEO metadata, accessibility
passes, and deployment configuration for Vercel or any Docker host.

## Stack

- Next.js 14 (App Router, TypeScript, `output: 'standalone'`)
- Markdown blog via `gray-matter` + `remark`
- Contact form: API route, `zod` validation, `nodemailer` delivery, in-memory rate limiting
- No external CSS framework — hand-rolled CSS ported from the original design system

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in SMTP credentials to enable contact emails
npm run dev
```

Visit `http://localhost:3000`.

If `SMTP_HOST` / `SMTP_USER` / `SMTP_PASS` are not set, the contact API route logs submissions to
the server console instead of sending email, so the form still works end-to-end in local dev.

## Project structure

```
app/                 Routes (App Router) — one folder per page, plus app/api/contact
components/          Client and server components shared across pages
content/blog/        Markdown blog posts (frontmatter: title, date, excerpt, tags)
data/site-data.ts    All structured content (skills, projects, services, etc.)
lib/blog.ts          Markdown loading / parsing for the blog system
```

## Adding a blog post

Create a new file in `content/blog/your-slug.md`:

```markdown
---
title: "Post title"
date: "2026-06-01"
excerpt: "One or two sentence summary."
tags: ["Tag One", "Tag Two"]
---

Post body in markdown.
```

It will automatically appear on `/blog` and be statically generated at `/blog/your-slug`.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint

## Deployment

### Vercel

Push to a Git repo and import into Vercel, or run `vercel`. `vercel.json` is pre-configured.
Set the environment variables from `.env.example` in the Vercel project settings.

### Docker / self-hosted

```bash
docker compose up --build
```

or directly:

```bash
docker build -t ilya-portfolio .
docker run -p 3000:3000 --env-file .env.local ilya-portfolio
```

### CI

`.github/workflows/ci.yml` runs lint, type-check, and a production build on every push and PR to
`main`.

## SEO & accessibility

- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` dynamically.
- Per-page `metadata` exports cover titles, descriptions, and Open Graph data.
- Skip-to-content link, visible focus states, `aria-live` status regions on the contact form,
  `aria-pressed`/`aria-current` on interactive nav, and `prefers-reduced-motion` handling for all
  canvas/animation effects.
