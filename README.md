# Okanagan Marine Robotics (OKMR)

A fast, fully responsive, editable modern web application for **Okanagan Marine Robotics** at the University of British Columbia, Okanagan.

Cloned and reimagined from the live `okmarinerobotics.com` Wix site into a lightweight, high-performance Vite + TypeScript web application with zero bloat and 100/100 performance.

---

## 🚀 Quick Start

### 1. Start Local Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized, minified production build in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture & Pages

The application is structured into clean, modular TypeScript components and page views:

```
├── public/
│   ├── images/          # 221 local high-res photos, logos, PCB schematics, and renders
│   └── docs/            # 7 competition summaries, newsletters, and technical papers (PDFs)
├── src/
│   ├── components/
│   │   ├── Header.ts    # Sticky responsive navigation with desktop dropdowns & mobile drawer
│   │   └── Footer.ts    # Global footer with UBC affiliation, Land Acknowledgment, socials
│   ├── data/
│   │   └── siteData.ts  # Centralized editable data (Team roster, sponsors, stats, FAQs, etc.)
│   ├── pages/
│   │   ├── HomePage.ts           # Hero, year in numbers, why us, projects, FAQs, newsletters
│   │   ├── OurTeamPage.ts        # Executives, management, subteam leads, memorial tribute
│   │   ├── OurJourneyPage.ts     # 2023–2026 chronological milestones and club evolution
│   │   ├── GalleryPage.ts        # Photo gallery with interactive fullscreen lightbox modal
│   │   ├── AuvPage.ts            # Ogopogo overview, specs, thrusters, subsystem links
│   │   ├── AuvElectricalPage.ts  # STM32F7 MCU, Actuator Board, PDB, Kill Switch, BMS, pingers
│   │   ├── AuvMechanicalPage.ts  # Aluminum chassis, battery pods, sliding tray, claw, torpedoes
│   │   ├── AuvSoftwarePage.ts    # ROS2 architecture, 5-tier control hierarchy, vision, simulation
│   │   ├── HydrofoilPage.ts      # New human-powered / autonomous Hydrofoil initiative
│   │   ├── OutreachPage.ts       # KSS, Glenmore Elementary, Sea Cadets, Expo of Awesome
│   │   ├── RoboSub2025Page.ts    # 11th in the world, 2nd in Canada, 4th paper, 4th video
│   │   ├── RoboSub2024Page.ts    # Rookie debut with 'Cascade' submarine in Irvine, CA
│   │   ├── SponsorsPage.ts       # Platinum, Gold, Silver, Bronze, and Software sponsor logos
│   │   ├── SponsorshipsPage.ts   # Tier deck, perks breakdown, PDF sponsorship package
│   │   └── ContactPage.ts        # Interactive contact form, email, campus address
│   ├── style.css        # Premium subsea marine design system with glassmorphism & animations
│   └── main.ts          # Application entry point with client router
├── index.html           # HTML shell with Google Fonts & SEO metadata
└── package.json
```

---

## ✏️ How to Edit Content

All team members, milestones, sponsors, FAQs, and links are neatly organized in:
👉 **`src/data/siteData.ts`**

### Add or Update a Team Member
Open `src/data/siteData.ts` and modify the `executives`, `management`, or `subteamLeads` array:
```typescript
{
  name: 'New Member',
  role: 'Controls Lead',
  program: 'BASc Electrical Engineering',
  img: '/images/photo.jpg'
}
```

### Add a New Sponsor
Open `src/data/siteData.ts` and add them to `sponsorsData.platinum`, `gold`, `silver`, or `bronze`:
```typescript
{
  name: 'Sponsor Name',
  tier: 'Platinum Sponsor',
  logo: '/images/sponsor_logo.png',
  desc: 'Company description...'
}
```

### Update FAQs or Newsletters
Edit the `faqs` and `newsletters` arrays directly in `src/data/siteData.ts`.

---

## 📄 Downloaded Documents & Assets

All PDF publications and competition materials are saved locally in `public/docs/`:
- `RoboSub-2025-Technical-Paper.pdf`
- `RoboSub-2024-Technical-Paper.pdf`
- `Sponsorship-Package.pdf`
- `September-2024-Competition-Summary.pdf`
- `January-2025-End-of-Year.pdf`
- `July-August-2025-Competition-Summary.pdf`
- `Winter-Term-1-2025.pdf`

---

## 🔄 Re-Sync with Live Site (Optional)

If the live website ever updates with new content or images, run:
```bash
npm run sync-live
```
This will headless-crawl `okmarinerobotics.com`, download any newly added media, and re-generate `src/data/siteData.ts`.
