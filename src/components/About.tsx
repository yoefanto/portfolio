"use client";

import { portfolioData } from "@/data/portfolioData";
import {
  Compass,
  Server,
  Workflow,
  CheckCircle2,
  MapPin,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { personal } = portfolioData;
  const { lang } = useLanguage();

  const pillars = [
    {
      icon: Compass,
      title: {
        en: "Enterprise Architecture & Modernization",
        id: "Arsitektur Enterprise & Modernisasi",
      },
      description: {
        en:
          "Specialist in transforming legacy applications (PHP/Laravel/CodeIgniter, Oracle) into modern decoupled architectures with Next.js, Express.js, and PostgreSQL for optimal performance.",
        id:
          "Ahli dalam mentransformasi aplikasi legacy (PHP/Laravel/CodeIgniter, Oracle) menjadi arsitektur decoupled modern berbasis Next.js, Express.js, dan PostgreSQL dengan performa optimal.",
      },
    },
    {
      icon: Server,
      title: {
        en: "System Reliability & High Scalability",
        id: "Keandalan Sistem & Skalabilitas Tinggi",
      },
      description: {
        en:
          "Hands-on experience maintaining national-scale media portals (Bisnisindonesia.id, Hypeabis.id, Dataindonesia.id), diagnosing CPU bottlenecks, and mitigating production server outages.",
        id:
          "Pengalaman menangani portal berita nasional berbeban tinggi (Bisnisindonesia.id, Hypeabis.id, Dataindonesia.id), mendiagnosis CPU bottlenecks, dan mitigasi downtime server produksi.",
      },
    },
    {
      icon: Workflow,
      title: {
        en: "DevOps & AI-Accelerated Engineering",
        id: "DevOps & Efisiensi Tim Berbasis AI",
      },
      description: {
        en:
          "Architecting multi-repo environments with Docker containers on WSL Ubuntu, automated CI/CD pipelines, and integrating AI coding assistants to increase team delivery velocity.",
        id:
          "Membangun lingkungan multi-repo dengan Docker container pada WSL Ubuntu, otomasi CI/CD, serta mengintegrasikan AI coding assistants untuk meningkatkan kecepatan delivery tim pengembang.",
      },
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "About Me" : "Tentang Saya"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {lang === "en"
              ? "Bridging Technical Leadership & Modern Architecture"
              : "Menggabungkan Kepemimpinan Teknis & Arsitektur Modern"}
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
            {lang === "en"
              ? "Over a decade dedicated to designing reliable, modular, large-scale software ecosystems built to sustain long-term business growth."
              : "Berdedikasi lebih dari satu dekade dalam merancang ekosistem software berskala besar yang reliabel, modular, dan siap mendukung pertumbuhan bisnis berkelanjutan."}
          </p>
        </div>

        {/* 2-Column Story & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Narrative */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-4">
                {lang === "en"
                  ? "13+ Years of Dedication in Software Engineering"
                  : "Dedikasi Lebih dari 13 Tahun di Dunia Rekayasa Perangkat Lunak"}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4">
                {lang === "en"
                  ? "Starting my engineering career managing laboratory systems and database replication at Gunadarma University, I have dedicated my career to PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group), where I currently serve as Assistant Manager of the Management Information System (MIS) Division."
                  : "Mengawali karir dari pengelolaan sistem laboratorium dan replikasi basis data di Universitas Gunadarma, saya mendedikasikan perjalanan profesional saya di PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group) hingga kini dipercaya sebagai Assistant Manager Divisi Management Information System (MIS)."}
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6">
                {lang === "en"
                  ? "My primary focus is balancing corporate-grade operational reliability with modern tech adoption: leading engineering teams, architecting decoupled HRIS & ERP systems with Next.js & PostgreSQL, mitigating surge traffic server bottlenecks, and adopting AI workflows to accelerate developer throughput."
                  : "Fokus utama saya adalah menyeimbangkan keandalan operasional tingkat korporat dengan adopsi teknologi terkini: memimpin tim engineering, merancang sistem HRIS & ERP decoupled dengan Next.js & PostgreSQL, memecahkan masalah beban lonjakan lalu lintas server media, serta mengevaluasi tools berbasis AI untuk mengakselerasi produktivitas programmer."}
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-zinc-800/80">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Pragmatic Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Cross-functional Leadership</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Modern Stack Modernization</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>DevOps & Containerization</span>
              </div>
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="lg:col-span-5 glass-panel p-8 rounded-3xl flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-zinc-100 mb-6">
              {lang === "en" ? "Executive Summary" : "Ringkasan Profil Singkat"}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/60">
                <div className="p-2 rounded-xl bg-zinc-800 text-cyan-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">
                    {lang === "en" ? "Current Role" : "Posisi Saat Ini"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-200">
                    Assistant Manager - MIS Division
                  </p>
                  <p className="text-xs text-zinc-400">
                    PT. Jurnalindo Aksara Grafika (Bisnis Indonesia Group)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/60">
                <div className="p-2 rounded-xl bg-zinc-800 text-indigo-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">
                    {lang === "en" ? "Education" : "Pendidikan"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-200">
                    {lang === "en"
                      ? "B.Eng. in Informatics Engineering (GPA 3.30)"
                      : "S1 Teknik Informatika (IPK 3.30)"}
                  </p>
                  <p className="text-xs text-zinc-400">Gunadarma University (2007 – 2011)</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/60">
                <div className="p-2 rounded-xl bg-zinc-800 text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">
                    {lang === "en" ? "Location" : "Lokasi & Domisili"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-200">{personal.location}</p>
                  <p className="text-xs text-zinc-400">
                    {lang === "en"
                      ? "Open for hybrid & strategic consulting"
                      : "Terbuka untuk hybrid & konsultasi"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80">
              <a
                href="#projects"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold text-cyan-300 border border-cyan-800/40 hover:border-cyan-700 transition-all group"
              >
                <span>
                  {lang === "en"
                    ? "Explore Projects & Case Studies"
                    : "Jelajahi Proyek & Studi Kasus"}
                </span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-start"
              >
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">
                  {pillar.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
