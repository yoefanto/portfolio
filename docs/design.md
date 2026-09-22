# Portfolio – Design Document

This document outlines the visual design system, color palette, typography, component guidelines, and interaction patterns for the portfolio.

---

## Design Philosophy

> **"Dark, professional, and technical — purposeful aesthetic precision that reflects senior engineering leadership."**

The portfolio is designed to communicate senior-level technical competency at a glance through:

1. **Dark Mode by Default** — Reflects modern engineering aesthetics, reduces eye strain, and provides high-contrast vibrancy for accent colors.
2. **Subtle Glassmorphism** — Translucent panels with background blur provide depth and layering without visual clutter.
3. **Cyan + Indigo Accents** — A clean, crisp, and high-tech palette balanced with warm and emerald semantic accents.
4. **Structured Typography Hierarchy** — Deliberate font-weight variations and monospace labels establishing clear information architecture.
5. **Purposeful Micro-interactions** — All animations serve functional purposes: feedback, direction, and spatial orientation.
6. **Bilingual Continuity** — Symmetrical layout stability across English and Indonesian text variations.

---

## Color System

### Base Palette

```css
/* Background layers */
--bg-base: #09090b;          /* zinc-950 — primary canvas */
--bg-surface: #18181b;       /* zinc-900 — cards, panels */
--bg-elevated: #27272a;      /* zinc-800 — hover states & borders */

/* Borders */
--border-subtle: #27272a;    /* zinc-800 */
--border-muted: #3f3f46;     /* zinc-700 */

/* Typography */
--text-primary: #f4f4f5;     /* zinc-100 */
--text-secondary: #a1a1aa;   /* zinc-400 */
--text-muted: #71717a;       /* zinc-500 */

/* Accents */
--accent-cyan: #22d3ee;      /* cyan-400 */
--accent-indigo: #818cf8;    /* indigo-400 */
--accent-emerald: #34d399;   /* emerald-400 */
--accent-rose: #fb7185;      /* rose-400 */
--accent-amber: #fbbf24;     /* amber-400 */
```

### Signature Gradients

| Gradient Name | CSS Formula | Usage |
|---|---|---|
| Primary Brand CTA | `from-cyan-400 to-indigo-400` | Main buttons, hero name text, active pill state |
| Ambient Hero Glow | `radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)` | Top hero background ambiance |
| Metrics Value | `from-cyan-300 to-indigo-400` | Numeric highlights in stats & project detail |
| Section Badge | `bg-cyan-950/40 border-cyan-800/40` | Section category pill badges |

---

## Typography

### Font Families
- **Primary Body & Display**: `Inter` via `next/font/google` (`--font-sans`)
- **Monospace**: System Monospace (`font-mono`) for metrics, timestamps, and tech badges

### Scale & Hierarchy

| Hierarchy Role | Tailwind Classes | Usage |
|---|---|---|
| Display H1 | `text-4xl sm:text-5xl lg:text-6xl font-extrabold` | Hero name headline |
| Section H2 | `text-3xl sm:text-4xl font-bold` | Primary section titles |
| Card H3 | `text-xl sm:text-2xl font-bold` | Project card titles |
| Detail Sub-H2 | `text-xl font-bold` | Case study subheadings |
| Body Text | `text-sm sm:text-base` | General paragraphs & narrative copy |
| Caption / Label | `text-xs font-medium` | Metadata badges, category labels |
| Monospace Label | `text-[10px] sm:text-xs font-mono` | Code tags, tech stack badges |

---

## Component Anatomy

### Glass Panel (`.glass-panel`)

```css
background: rgba(24, 24, 27, 0.6);   /* zinc-900/60 */
border: 1px solid #27272a;            /* zinc-800 */
backdrop-filter: blur(12px);
border-radius: 1.5rem;                /* rounded-3xl */
```

**Hover State** (`.glass-panel-hover`): Border brightens to `zinc-700`, subtle upward lighting shift.

### Language Switcher Pill

Compact segmented control located in the Navbar and Project Detail header:
```jsx
<div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-xs font-mono">
  <button className={lang === "en" ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold" : "text-zinc-400"}>
    EN
  </button>
  <button className={lang === "id" ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold" : "text-zinc-400"}>
    ID
  </button>
</div>
```

### Status Indicator (Pulsing Dot)

```jsx
<span className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
</span>
```

---

## Layout & Grid System

### Containers
- **Main Showcase**: `max-w-6xl mx-auto px-4 sm:px-6`
- **Case Study Detail Pages**: `max-w-5xl mx-auto px-4 sm:px-6`

### Grid Structure
- **Hero**: `grid-cols-1 lg:grid-cols-12` (7/5 split)
- **Projects**: `grid-cols-1 lg:grid-cols-2`
- **Skills Matrix**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Stats / Key Metrics**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
- **Project Case Study Meta**: `grid-cols-2 sm:grid-cols-3`
- **Key Modules**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`

---

## Project Detail Page (`/projects/[id]`)

Deep-dive technical case study design:

### Structural Sections
1. **Sticky Top Bar**: Back button, breadcrumb, and instant EN/ID language switcher.
2. **Hero Header**: Category badge, large title, overview summary, and meta grid (Role, Timeline, Organization).
3. **Tech Stack Tags**: Monospace badges with cyan highlights.
4. **Metrics Impact**: Multi-column cards with gradient numeric figures.
5. **Problem vs. Solution**: High-contrast side-by-side comparison (Rose for Problem, Emerald for Solution).
6. **Architecture Details**: Check-icon checklist of technical design choices.
7. **Key Modules**: Card grid detailing architecture, features, and sub-technologies.
8. **Challenges & Solutions**: Numbered accordion-style panels highlighting obstacle and resolution.
9. **Action Footer**: Dual CTAs to browse other projects or initiate an inquiry.

---

## Static Assets

| Asset | Location | Resolution / Spec |
|---|---|---|
| Profile Photo | `public/images/profile.jpg` | Rendered at `max-w-[260px]` to maintain crisp quality |
| Curriculum Vitae | `public/cv-yogi-febrianto.pdf` | Direct download PDF |
| Favicon | `src/app/favicon.ico` | 32x32 standard icon |
