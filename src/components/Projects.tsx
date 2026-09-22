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
} from "lucide-react";

export default function Projects() {
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

  return (
    <section id="projects" className="py-20 relative z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "Featured Projects & Solutions" : "Proyek & Solusi Unggulan"}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              {lang === "en" ? "Enterprise Systems & Architecture Case Studies" : "Studi Kasus Arsitektur Sistem Enterprise"}
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
              {lang === "en"
                ? "A collection of software architectures and system transformations proven to support business operations and hundreds of active users."
                : "Kumpulan arsitektur software dan transformasi sistem yang terbukti menopang kegiatan operasional bisnis dan ratusan pengguna aktif."}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800"
                }`}
            >
              {cat === "All" ? (lang === "en" ? "All" : "Semua") : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-cyan-400">
                      <Icon className="w-3.5 h-3.5" />
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {t(project.description)}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/60">
                    <p className="text-[11px] font-mono font-medium text-zinc-500 uppercase tracking-wider mb-2">
                      {lang === "en" ? "Key Highlights & Impact:" : "Sorotan & Dampak Utama:"}
                    </p>
                    {t<string[]>(project.highlights).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span>{lang === "en" ? "View Project Details" : "Lihat Detail Proyek"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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
