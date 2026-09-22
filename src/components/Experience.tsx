"use client";

import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Experience() {
  const { experiences } = portfolioData;
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="py-20 relative z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Career Journey" : "Perjalanan Karir"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {lang === "en" ? "Professional Track Record & Work Experience" : "Rekam Jejak Profesional & Pengalaman Kerja"}
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
            {lang === "en"
              ? "A gradual journey from specific technical roles to leading the information systems division and enterprise-scale application architecture."
              : "Perjalanan bertahap dari peran teknis spesifik hingga memimpin divisi sistem informasi dan arsitektur aplikasi enterprise berskala nasional."}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                {/* Header Information */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-4 border-b border-zinc-800/80">
                  <div>
                    <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                      {exp.division || exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {t(exp.role)}
                    </h3>
                    <p className="text-sm font-medium text-zinc-300">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {t(exp.period)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements list */}
                <ul className="space-y-3 mb-6">
                  {t<string[]>(exp.description).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400/90 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-zinc-800/60">
                  <span className="text-xs text-zinc-500 font-mono mr-1">Stack:</span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/80 text-zinc-300 border border-zinc-800/80 hover:border-cyan-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
