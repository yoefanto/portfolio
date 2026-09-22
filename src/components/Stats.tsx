"use client";

import { portfolioData } from "@/data/portfolioData";
import { Award, Users, RefreshCw, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Stats() {
  const { metrics } = portfolioData;
  const { lang } = useLanguage();

  const icons = [Award, Users, RefreshCw, Layers];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl relative overflow-hidden group"
              >
                {/* Background Accent glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                    {metric.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-base font-semibold text-zinc-100 mb-1.5">
                  {metric.label[lang]}
                </h2>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {metric.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
