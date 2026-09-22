# Portfolio – Technical Walkthrough & Maintenance Guide

This document explains the architecture, file organization, bilingual internationalization system, dynamic routing, and maintenance workflows for the portfolio.

---

## Application Overview

The portfolio is built on Next.js 16 (App Router) with full Static Site Generation (SSG). It functions as a high-performance single-page showcase coupled with deep-dive technical case study pages (`/projects/[id]`).

```
Homepage URL     : http://localhost:3000/
Case Studies     : http://localhost:3000/projects/[id]
SSG Output       : Static HTML + JSON payloads (Prerendered via Turbopack)
Default Language : English (instant toggle to Bahasa Indonesia)
```

---

## Quick Start & Build Commands

```bash
# Start development server
npm run dev

# Run TypeScript checks & compile production build
npm run build

# Run ESLint validation
npm run lint
```

---

## Architecture & Bilingual System

### Core Principles
1. **Zero Runtime Bundle Bloat**: No bulky external i18n libraries. Custom lightweight React Context (`LanguageContext.tsx`) manages language state.
2. **Instant Switching**: Switching between EN and ID is instant with zero page reload.
3. **Persistent Preference**: Stored in `localStorage` under `yf_portfolio_lang`, automatically synchronizing with `document.documentElement.lang`.
4. **Type-Safe Data Schema**: Uses `Translatable<T>` (`{ en: T; id: T }`) enforcing complete coverage across both languages at compile time.

```
LanguageProvider (layout.tsx)
      │
      ├──> Navbar.tsx                  (EN/ID toggle pill)
      ├──> Hero.tsx                    (useLanguage -> personal.title[lang])
      ├──> Stats.tsx                   (useLanguage -> metric.label[lang])
      ├──> About.tsx                   (useLanguage -> pillars[].title[lang])
      ├──> Experience.tsx              (useLanguage -> exp.role[lang])
      ├──> Projects.tsx                (useLanguage -> project.description[lang])
      ├──> Skills.tsx                  (useLanguage -> cat.description[lang])
      ├──> EducationCertifications.tsx (useLanguage -> edu.degree[lang])
      ├──> Contact.tsx                 (useLanguage -> labels, inputs, mailto)
      ├──> Footer.tsx                  (useLanguage -> tagline, copyright)
      └──> ProjectDetailClient.tsx     (Sticky header EN/ID toggle + case study details)
```

---

## File Inventory

### `src/app/`
| File | Role |
|---|---|
| `layout.tsx` | Root layout with Inter font, SEO OpenGraph metadata, and `<LanguageProvider>` wrapper |
| `page.tsx` | Main showcase page assembling all homepage sections |
| `globals.css` | Design system tokens, glassmorphism utilities, and ambient glow styles |
| `projects/[id]/page.tsx` | SSG dynamic route handler with `generateStaticParams` and dynamic SEO metadata |
| `projects/[id]/ProjectDetailClient.tsx` | Interactive client case study view with dedicated language switcher |

### `src/components/`
| Component | Responsibility |
|---|---|
| `Navbar.tsx` | Floating glassmorphism pill navigation with smooth-scroll anchors and EN/ID switcher |
| `Hero.tsx` | Introduction headline, profile image, status pill, CV download, and quick contact |
| `Stats.tsx` | Key achievement metrics (13+ years, 10M+ readers, 100% modernization) |
| `About.tsx` | Professional summary and 3 core architectural pillars |
| `Experience.tsx` | Vertical career journey timeline spanning 13+ years at Bisnis Indonesia Group |
| `Projects.tsx` | Filterable project catalog with deep links to comprehensive case studies |
| `Skills.tsx` | Categorized technical competency matrix across 5 engineering domains |
| `EducationCertifications.tsx` | Academic history and 6 verified professional certifications |
| `Contact.tsx` | Direct reach-out options and pre-filled email client form |
| `Footer.tsx` | Brand summary, social links, back-to-top button, and copyright |
| `Icons.tsx` | Clean SVG brand icons (e.g., LinkedIn) |

### `src/contexts/`
- `LanguageContext.tsx`: Manages language state (`"en" | "id"`), lazy-loads from `localStorage`, and provides helper `t()` function.

### `src/data/`
- `portfolioData.ts`: **Single Source of Truth** for all portfolio content, structured with bilingual `{ en, id }` records.

### `src/types/`
- `index.ts`: TypeScript contracts for `Lang`, `Translatable<T>`, `ProjectItem`, `ExperienceItem`, `MetricItem`, etc.

---

## Adding a New Project Case Study

To add a new project:

1. Open `src/data/portfolioData.ts`.
2. Add a new object to the `projects` array:

```typescript
{
  id: "my-new-system",                 // URL slug for /projects/my-new-system
  title: "My New System",
  category: "Enterprise System",
  description: {
    en: "English description...",
    id: "Deskripsi bahasa Indonesia...",
  },
  highlights: {
    en: ["Highlight 1", "Highlight 2"],
    id: ["Sorotan 1", "Sorotan 2"],
  },
  techStack: ["Next.js", "PostgreSQL", "Docker"],
  featured: true,
  details: {
    slug: "my-new-system",
    role: { en: "Lead Architect", id: "Lead Architect" },
    timeline: { en: "2023 – 2024", id: "2023 – 2024" },
    organization: "Bisnis Indonesia Group",
    overview: { en: "English overview...", id: "Ringkasan proyek..." },
    problemStatement: { en: "Problem...", id: "Permasalahan..." },
    solutionArchitecture: { en: "Solution...", id: "Solusi..." },
    architecturePoints: {
      en: ["Architecture point 1", "Architecture point 2"],
      id: ["Poin arsitektur 1", "Poin arsitektur 2"],
    },
    keyModules: [
      {
        title: { en: "Module Name", id: "Nama Modul" },
        description: { en: "Details...", id: "Detail..." },
        tech: ["Docker", "Node.js"],
      },
    ],
    challengesAndSolutions: [
      {
        challenge: { en: "Challenge...", id: "Tantangan..." },
        solution: { en: "Solution...", id: "Solusi..." },
      },
    ],
    metricsImpact: [
      {
        value: "99.99%",
        label: { en: "Uptime", id: "Uptime" },
        description: { en: "Impact description...", id: "Deskripsi dampak..." },
      },
    ],
  },
}
```

3. Run `npm run build`. Next.js `generateStaticParams` automatically detects the new project and renders the static page at `/projects/my-new-system`.

---

## Maintenance Guide

### Update Personal Information
Edit `portfolioData.personal` in `src/data/portfolioData.ts`.

### Update Profile Photo
Replace `public/images/profile.jpg`.
- Rendered size: `max-w-[260px]` to ensure optimal sharpness.
- Recommended resolution: at least 600x750px for crisp high-DPI displays.

### Update Resume (CV)
Replace `public/cv-yogi-febrianto.pdf`.

### Verify Production Readiness
Execute:
```bash
npm run lint
npm run build
```
Verify 0 errors, 0 warnings, and static generation of all project routes.
