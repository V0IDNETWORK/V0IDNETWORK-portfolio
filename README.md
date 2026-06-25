# ⚡ ILiYA — Cyber Intelligence Division

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0f0f,100:00ff88&height=200&section=header&text=ILiYA%20Portfolio&fontSize=40&fontColor=ffffff" />
</p>

<p align="center">
  <b>Cyberpunk-inspired developer portfolio built with Next.js 14</b><br/>
  Full-stack portfolio with blog, contact system, SEO, and deployment support.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailored-CSS-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge" />
</p>

---

## 🚀 Overview

This is a **fully modern rebuild** of a cyberpunk-themed portfolio, upgraded into a scalable production-grade web application.

It includes:
- Dynamic App Router architecture
- Markdown-powered blog system
- Working contact form with email delivery
- SEO optimization (sitemap + metadata)
- Docker + Vercel deployment support

---

## 🖼️ Preview

<p align="center">
  <img src="https://via.placeholder.com/1000x500.png?text=Portfolio+Home+Page" />
</p>

<p align="center">
  <img src="https://via.placeholder.com/1000x500.png?text=Blog+System+Preview" />
</p>

---

## ⚙️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Custom CSS (no UI frameworks)
- **Blog:** Markdown (`gray-matter`, `remark`)
- **Email:** Nodemailer (SMTP)
- **Validation:** Zod
- **Deploy:** Vercel + Docker
- **CI/CD:** GitHub Actions

---

## 📁 Architecture

```
app/                 Routes (App Router)
components/          UI components
content/blog/        Markdown blog posts
data/site-data.ts    Site content config
lib/blog.ts         Blog utilities
```

---

## ⚡ Features

- 🎨 Cyberpunk UI design
- 📱 Fully responsive layout
- 📝 Markdown blog system
- 📧 Working contact form
- 🔒 Input validation (Zod)
- 🚀 SEO optimized
- 🐳 Docker support
- ⚡ Fast performance

---

## 🧠 Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: http://localhost:3000

---

## 📜 Scripts

| Command | Description |
|--------|-------------|
| npm run dev | Start dev server |
| npm run build | Build production |
| npm run start | Run production build |
| npm run lint | Run lint checks |

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import into Vercel
3. Add environment variables
4. Deploy

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
- Open Graph / Twitter cards
- Keyboard navigation
- ARIA labels
- Reduced motion support

---

## 📸 Screenshots

> Replace these with real screenshots later

- Home page
- Blog system
- Contact form
- Projects page

---

## 🏆 Highlights

- Production-ready architecture
- Clean modular codebase
- Scalable blog system
- Secure API routes
- Modern UI/UX design

---

## 📄 License

MIT License — free for personal and educational use.
