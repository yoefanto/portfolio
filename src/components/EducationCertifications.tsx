"use client";

import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";
import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export default function EducationCertifications() {
  const { education, certifications } = portfolioData;
  const { t, lang } = useLanguage();

  return (
    <section id="education" className="py-20 relative z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-xs font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Credentials & Learning" : "Kredensial & Pembelajaran"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {lang === "en" ? "Formal Education & Professional Certifications" : "Pendidikan Formal & Sertifikasi Profesional"}
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
            {lang === "en"
              ? "Continuous commitment to upgrading engineering competencies, keeping pace with software architecture and AI evolution."
              : "Komitmen berkelanjutan dalam memperbarui keahlian mengikuti dinamika perkembangan rekayasa perangkat lunak dan kecerdasan buatan."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>{lang === "en" ? "Formal Education" : "Pendidikan Formal"}</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-3xl relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-medium text-cyan-400 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800">
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="text-xs font-mono font-semibold text-emerald-400">
                        {edu.gpa}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-zinc-100">
                    {t(edu.degree)}
                  </h4>
                  <p className="text-sm font-medium text-zinc-300 mt-1">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                      {t(edu.description)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>{lang === "en" ? "Certifications & Verified Training" : "Sertifikasi & Pelatihan Terverifikasi"}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {cert.year}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>

                    <h4 className="text-sm font-semibold text-zinc-200 leading-snug">
                      {cert.title}
                    </h4>
                  </div>

                  <p className="text-xs text-zinc-400 font-medium mt-4 pt-3 border-t border-zinc-800/80">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
