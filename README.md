# Personal Portfolio & Architecture Showcase

A production-grade personal portfolio built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS**, highlighting the experience, engineering leadership, and architecture case studies of Senior Full-Stack Architect & Engineering Leader with 13+ years of experience.

## Key Highlights

- **Bilingual Support (EN / ID)**: Instant language toggle between English and Indonesian, with `localStorage` persistence and default English.
- **Deep Architecture Case Studies**: Dedicated project detail pages detailing real-world enterprise modernization, problem statements, architecture decisions, key modules, challenges & solutions, and tangible business impact.
- **Modern Responsive Design**: Dark-mode aesthetic featuring refined glassmorphism, subtle glowing ambient accents, micro-interactions, and accessible typography.
- **Production-Ready & High Performance**: Static Site Generation (SSG) with App Router, Turbopack compilation, zero external i18n bundle overhead, and 100% type safety.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router + Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State & i18n | React Context (`LanguageContext`) + `localStorage` |
| Icons | `lucide-react` |
| Typography | Inter (Google Fonts via `next/font`) |

## Sections

1. **Navbar** – Floating pill header with smooth scroll links, resume download, contact CTA, and EN/ID language switcher.
2. **Hero Section** – Role, value proposition, compact professional profile image, and quick contact channels.
3. **Metrics & Impact** – High-level career achievements (13+ years experience, 10M+ monthly scale, 100% modernized architecture).
4. **About & Leadership Pillars** – Core competencies in enterprise architecture, high-availability systems, and AI-accelerated DevOps.
5. **Career Journey / Experience** – Interactive timeline tracking 13+ years of leadership and engineering milestones.
6. **Featured Projects** – Category-filtered cards with navigation to comprehensive deep-dive case studies.
7. **Project Detail Pages (`/projects/[id]`)** – Full architectural case studies covering enterprise HRIS/ERP, media portal optimization, recruitment CMS modernization, and multi-repo Docker WSL environments.
8. **Skills Matrix** – Categorized competency grid across full-stack, APIs, databases, DevOps, and enterprise methodology.
9. **Education & Certifications** – Academic credentials and verified technical certifications.
10. **Contact & Inquiry** – Direct reach-out channels and pre-filled inquiry form.

## Getting Started Locally

```bash
# Clone the repository and install dependencies
npm install

# Run the development server
npm run dev

# Build for production with type-checking and SSG
npm run build

# Run linting check
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the portfolio.

## Project Structure

```
docs/
├── design.md                       # Visual design system & aesthetic guidelines
├── implementation_plan.md          # Architecture & feature rollout plan
└── walkthrough.md                  # Technical architecture & maintenance guide
src/
├── app/
│   ├── page.tsx                    # Main homepage (single-page showcase)
│   ├── layout.tsx                  # Root layout with LanguageProvider & SEO metadata
│   ├── globals.css                 # Global Tailwind styles & glassmorphism utilities
│   └── projects/
│       └── [id]/
│           ├── page.tsx            # SSG dynamic route handler & SEO metadata
│           └── ProjectDetailClient.tsx # Interactive bilingual case study viewer
├── components/
│   ├── Navbar.tsx                  # Floating navigation with language switcher
│   ├── Hero.tsx                    # Hero introduction & action buttons
│   ├── Stats.tsx                   # Key achievement metrics
│   ├── About.tsx                   # Professional summary & architectural pillars
│   ├── Experience.tsx              # Career timeline
│   ├── Projects.tsx                # Filterable project catalog
│   ├── Skills.tsx                  # Competency matrix
│   ├── EducationCertifications.tsx # Education & verified training
│   ├── Contact.tsx                 # Direct inquiry form & communication channels
│   ├── Footer.tsx                  # Footer links & copyright
│   └── Icons.tsx                   # Custom SVG brand icons (LinkedIn, etc.)
├── contexts/
│   └── LanguageContext.tsx         # Client-side EN/ID language state & persistence
├── data/
│   └── portfolioData.ts            # Single source of truth with dual EN/ID translations
└── types/
    └── index.ts                    # Translatable<T> and domain TypeScript interfaces
```

## Contact

- **Email**: yoefanto@gmail.com
- **WhatsApp**: [Click to start conversation](https://wa.me/+6281991000304)
- **LinkedIn**: [linkedin.com/in/yoefanto](https://linkedin.com/in/yoefanto)
