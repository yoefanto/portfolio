"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Layers,
  CheckCircle2,
  FolderGit2,
  Globe,
  Database,
  Terminal,
  Cpu,
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function ProjectsBentoPreview() {
  const { projects } = portfolioData;
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Enterprise System",
    "High-Traffic Media",
    "Web & CMS Modernization",
    "DevOps & Architecture",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Enterprise System": return Database;
      case "High-Traffic Media": return Globe;
      case "Web & CMS Modernization": return Layers;
      case "DevOps & Architecture": return Terminal;
      default: return Cpu;
    }
  };

  // Metric highlights per project ID for modern bento badges
  const getProjectMetricBadge = (id: string) => {
    switch (id) {
      case "enterprise-hris-erp":
        return { label: "Multi-Entity Group HRIS & ERP", icon: ShieldCheck, color: "text-cyan-400 border-cyan-800/50 bg-cyan-950/40" };
      case "media-portal-modernization":
        return { label: "10M+ Monthly Readers Scale", icon: TrendingUp, color: "text-amber-400 border-amber-800/50 bg-amber-950/40" };
      case "recruitment-cms-system":
        return { label: "End-to-End Enterprise ATS", icon: Zap, color: "text-emerald-400 border-emerald-800/50 bg-emerald-950/40" };
      case "multi-repo-docker-wsl":
      case "devops-docker-hub":
        return { label: "99.9% Reliable CI/CD & Docker", icon: Terminal, color: "text-purple-400 border-purple-800/50 bg-purple-950/40" };
      default:
        return { label: "High-Performance Architecture", icon: Sparkles, color: "text-cyan-400 border-cyan-800/50 bg-cyan-950/40" };
    }
  };

  return (
    <section id="projects-bento" className="py-12 sm:py-16 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Concept Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-zinc-900 to-indigo-950/60 border border-cyan-500/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  {lang === "en" ? "Interactive Bento Grid Preview" : "Pratinjau Interaktif Bento Grid"}
                </h4>
                <p className="text-xs text-zinc-400">
                  {lang === "en"
                    ? "Asymmetric layout preview with refined glassmorphism, impact badges, and compact mobile spacing."
                    : "Konsep tata letak asimetris dengan glassmorphism halus, badge metrik dampak, dan spacing responsif yang lebih ringkas."}
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors whitespace-nowrap"
            >
              {lang === "en" ? "← Back to Main Portfolio" : "← Kembali ke Portofolio Utama"}
            </Link>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "Architectural Portfolio Redesign" : "Redesain Portofolio Arsitektur"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {lang === "en" ? "Enterprise Case Studies & System Architecture" : "Studi Kasus Sistem Enterprise & Rekayasa Arsitektur"}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              {lang === "en"
                ? "Modernized bento layout providing immediate visibility into engineering impact, scalability metrics, and core technologies."
                : "Tata letak bento modern yang langsung menonjolkan dampak teknis, skala performa, dan teknologi inti secara intuitif."}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800/80"
              }`}
            >
              {cat === "All" ? (lang === "en" ? "All Systems" : "Semua Sistem") : cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => {
            const Icon = getCategoryIcon(project.category);
            const badge = getProjectMetricBadge(project.id);
            const BadgeIcon = badge.icon;
            
            // Bento logic: first and fourth items span 2 columns on medium+ screens if showing All
            const isSpanTwo = activeCategory === "All" && (index === 0 || index === 3);

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-cyan-500/40 backdrop-blur-md shadow-lg shadow-black/20 ${
                  isSpanTwo ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div>
                  {/* Top Badges: Category & Metric Impact */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-zinc-950/80 border border-zinc-800 text-cyan-400">
                      <Icon className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${badge.color}`}>
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {badge.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5 line-clamp-3">
                    {t(project.description)}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6 p-3.5 sm:p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50">
                    <p className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-wider mb-2">
                      {lang === "en" ? "Key Architectural Highlights:" : "Sorotan Arsitektur Kunci:"}
                    </p>
                    {t<string[]>(project.highlights).slice(0, isSpanTwo ? 3 : 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Action Footer */}
                <div className="pt-4 border-t border-zinc-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, isSpanTwo ? 5 : 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > (isSpanTwo ? 5 : 3) && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-500">
                        +{project.techStack.length - (isSpanTwo ? 5 : 3)}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap"
                  >
                    <span>{lang === "en" ? "Read Case Study" : "Lihat Studi Kasus"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
