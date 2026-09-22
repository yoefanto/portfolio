"use client";

import Link from "next/link";
import { ProjectItem } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowLeft,
  CheckCircle2,
  Layers,
  Cpu,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Code2,
  Calendar,
  Building2,
  User2,
} from "lucide-react";

export default function ProjectDetailClient({ project }: { project: ProjectItem }) {
  const { lang, setLang } = useLanguage();
  const d = project.details;

  if (!d) return null;

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top nav bar */}
      <div className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors group flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>{lang === "en" ? "Back to Portfolio" : "Kembali ke Portofolio"}</span>
            </Link>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span className="text-xs text-zinc-500 font-mono truncate hidden sm:inline">
              {project.category}
            </span>
          </div>

          {/* Language Switcher Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-xs font-mono flex-shrink-0">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "id"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Hero Header */}
        <header className="mb-14">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-5">
            <Layers className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl mb-8">
            {d.overview[lang]}
          </p>

          {/* Meta info grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <User2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {lang === "en" ? "Role" : "Peran"}
                </p>
                <p className="text-xs font-semibold text-zinc-200">{d.role[lang]}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-800">
              <Calendar className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  Timeline
                </p>
                <p className="text-xs font-semibold text-zinc-200">{d.timeline[lang]}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 col-span-2 sm:col-span-1">
              <Building2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  {lang === "en" ? "Organization" : "Organisasi"}
                </p>
                <p className="text-xs font-semibold text-zinc-200 leading-snug">
                  {d.organization}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Tech Stack */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-zinc-900 text-cyan-300 border border-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Metrics Impact */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            {lang === "en" ? "Impact & Tangible Results" : "Dampak & Hasil Nyata"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {d.metricsImpact.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 text-center"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-400 mb-1">
                  {m.value}
                </p>
                <p className="text-xs font-semibold text-zinc-300 mb-2">{m.label[lang]}</p>
                <p className="text-[11px] text-zinc-500 leading-snug">
                  {m.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Problem Statement */}
          <section className="p-6 rounded-3xl bg-rose-950/10 border border-rose-900/30">
            <h2 className="text-base font-bold text-rose-300 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {lang === "en" ? "Problem Statement" : "Permasalahan"}
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">{d.problemStatement[lang]}</p>
          </section>

          {/* Solution Architecture Overview */}
          <section className="p-6 rounded-3xl bg-emerald-950/10 border border-emerald-900/30">
            <h2 className="text-base font-bold text-emerald-300 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              {lang === "en" ? "Solution & Architecture" : "Solusi & Arsitektur"}
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">{d.solutionArchitecture[lang]}</p>
          </section>
        </div>

        {/* Architecture Points */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-indigo-400" />
            {lang === "en" ? "Architecture Details" : "Detail Arsitektur"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {d.architecturePoints[lang].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/60"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-zinc-300 leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Modules */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-purple-400" />
            {lang === "en" ? "Key Modules & Features" : "Modul & Fitur Utama"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.keyModules.map((mod, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <h3 className="text-sm font-bold text-white mb-2">{mod.title[lang]}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {mod.description[lang]}
                </p>
                {mod.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {mod.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-white mb-5">
            {lang === "en" ? "Challenges & Engineering Solutions" : "Tantangan & Solusi"}
          </h2>
          <div className="space-y-5">
            {d.challengesAndSolutions.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-zinc-800"
              >
                <div className="p-4 sm:p-5 bg-zinc-900/80 border-b border-zinc-800">
                  <p className="text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    {lang === "en" ? `Challenge #${i + 1}` : `Tantangan #${i + 1}`}
                  </p>
                  <p className="text-sm text-zinc-200 font-medium">{item.challenge[lang]}</p>
                </div>
                <div className="p-4 sm:p-5 bg-zinc-950/60">
                  <p className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    {lang === "en" ? "Solution" : "Solusi"}
                  </p>
                  <p className="text-sm text-zinc-300 leading-relaxed">{item.solution[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Back CTA */}
        <footer className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-sm font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            {lang === "en" ? "View Other Projects" : "Lihat Proyek Lainnya"}
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-lg shadow-cyan-500/20"
          >
            {lang === "en" ? "Discuss Similar Project" : "Diskusikan Proyek Serupa"}
          </Link>
        </footer>
      </div>
    </main>
  );
}
