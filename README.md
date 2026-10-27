# Enoms Creations — Event Portfolio Concept Preview

A premium, mobile-first single-page concept for **Enoms Creations**, a Lagos-based event planning brand. Built as a **free preview/mockup** with static data — deployable instantly on Vercel.

## ✨ Features

- **Hero section** — full-bleed event photo, headline: *"Unforgettable Events, Seamlessly Planned."*
- **Trust badge** — prominent *Allen Avenue, Ikeja, Lagos* location strip.
- **3 service packages** (Birthday Blast, Wedding Elegance, Corporate Gala) with inclusions, price ranges, and **Book via WhatsApp** buttons that open `wa.me/2348037164284` with a pre-filled message.
- **Horizontal snap-scroll gallery** of 6 event photos.
- **Preview Mode banner** — "Custom concept preview for Enoms Creations."
- **Footer** — copyright + "Concept by Vector Codes" watermark.

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v3
- Static data in `data/packages.json` (no backend)
- `next/image` with AVIF/WebP + remote Unsplash patterns for fast loads

## 🚀 Deploy to Vercel

1. Push this repo to GitHub (already done).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset auto-detects **Next.js** — no environment variables needed.
4. Click **Deploy**. Done in ~1 minute.

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

## 💻 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📝 Notes for Enoms Creations

- WhatsApp number is configured in `data/packages.json` (`whatsappNumber`) and `components/WhatsAppButton.tsx`.
- To swap in real photos, replace the Unsplash URLs in `data/packages.json`.
- The preview banner (`components/PreviewBanner.tsx`) can be deleted once the concept is approved.

---

Concept by **Vector Codes**.
