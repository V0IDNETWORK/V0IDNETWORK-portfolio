# ILiYA — Cyber Intelligence Division

A modern cyberpunk-themed portfolio built with **Next.js 14 (App Router)**.  
This project is a full rewrite of a previous single-file version, now upgraded into a production-ready web application with real routing, a markdown-driven blog, SEO optimization, and deployment support for Vercel and Docker.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Rendering:** Hybrid SSR / SSG
- **Blog Engine:** Markdown (`gray-matter`, `remark`)
- **Styling:** Custom CSS (no external UI frameworks)
- **Email Service:** Nodemailer (SMTP-based contact system)
- **Validation:** Zod
- **Deployment:** Vercel + Docker support
- **CI/CD:** GitHub Actions (lint, type-check, build)

---

## 📁 Project Structure

```
app/                 Application routes (App Router)
components/          Reusable UI components (client + server)
content/blog/        Markdown-based blog posts
data/site-data.ts    Centralized site content (projects, skills, services)
lib/blog.ts         Blog utilities (parser, loader, helpers)
```

---

## ⚙️ Getting Started

### Install dependencies
```bash
npm install
```

### Setup environment variables
```bash
cp .env.example .env.local
```

Fill SMTP credentials if needed.

### Run dev server
```bash
npm run dev
```

Open: http://localhost:3000

---

## 📜 Scripts

- npm run dev
- npm run build
- npm run start
- npm run lint

---

## 🚀 Deployment

### Vercel
Push to GitHub → Import in Vercel → Add env vars → Deploy

### Docker
```bash
docker compose up --build
```

or

```bash
docker build -t V0IDNETWORK-portfolio .
docker run -p 3000:3000 --env-file .env.local ilya-portfolio
```

---

## 🔍 SEO & Accessibility

- Sitemap + robots.txt
- Open Graph metadata
- Keyboard navigation
- ARIA support
- Reduced motion support

---


