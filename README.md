# Okanagan Marine Robotics (OKMR)

Website **Okanagan Marine Robotics** at the University of British Columbia, Okanagan.

---

## Quick Start

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

## Project Architecture & Pages

```
├── public/
│   ├── images/          # 221 local high-res photos, logos, PCB schematics, and renders
│   └── docs/            # 7 competition summaries, newsletters, and technical papers (PDFs)
├── src/
│   ├── components/
│   │   ├── Header.ts    
│   │   └── Footer.ts    
│   ├── data/
│   │   └── siteData.ts  # Centralized editable data (Team roster, sponsors, stats, FAQs, etc.)
│   ├── pages/
│   ├── style.css        
│   └── main.ts          # Application entry point with client router
├── index.html           # HTML shell with Google Fonts & SEO metadata
└── package.json
```

---

## How to Edit Content

All team members, milestones, sponsors, FAQs, and links are neatly organized in:
**`src/data/siteData.ts`**

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