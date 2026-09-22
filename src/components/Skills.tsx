"use client";

import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Sparkles,
  Check,
  type LucideIcon,
} from "lucide-react";

export default function Skills() {
  const { skills } = portfolioData;
  const { t, lang } = useLanguage();

  const categoryIcons: Record<string, LucideIcon> = {
    "Full-Stack & Frontend": Code2,
    "Backend & API Architecture": Server,
    "Databases & Storage": Database,
    "DevOps & Infrastructure": Terminal,
    "Enterprise & Methodology": Cpu,
  };

  return (
    <section id="skills" className="py-20 relative z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Competency Matrix" : "Matriks Kompetensi"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {lang === "en" ? "Technical Skills & System Engineering Tools" : "Keahlian Teknis & Alat Rekayasa Sistem"}
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
            {lang === "en"
              ? "A combination of deep expertise in traditional enterprise database architecture and proficiency in the modern cloud-native decoupled stack."
              : "Kombinasi pengalaman mendalam pada arsitektur database tradisional enterprise dan kepiawaian dalam stack modern cloud-native decoupled."}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat) => {
            const Icon = categoryIcons[cat.category] || Cpu;
            return (
              <div
                key={cat.category}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {t(cat.description)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-5">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                          skill.highlight
                            ? "bg-zinc-900/90 border border-cyan-500/20 text-zinc-200 hover:border-cyan-500/40"
                            : "bg-zinc-950/50 border border-zinc-800/60 text-zinc-400"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Check
                            className={`w-3.5 h-3.5 ${
                              skill.highlight ? "text-cyan-400" : "text-zinc-500"
                            }`}
                          />
                          <span className="font-medium">{skill.name}</span>
                        </div>

                        {skill.level && (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                              skill.level === "Expert"
                                ? "bg-cyan-950/80 text-cyan-300 border border-cyan-800/60"
                                : "bg-zinc-800 text-zinc-400"
                            }`}
                          >
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
