"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  Cpu,
  Database,
  Layers,
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { personal } = portfolioData;
  const { lang } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-glow-cyan pointer-events-none rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] ambient-glow-indigo pointer-events-none rounded-full blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/60 shadow-inner mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-300 tracking-wide">
                {personal.status[lang]}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              {lang === "en" ? "Hello, I'm" : "Halo, Saya"} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                {personal.name}
              </span>
            </h1>

            {/* Subheading / Role */}
            <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-5 leading-relaxed">
              {personal.title[lang]} {lang === "en" ? "at" : "di"} Bisnis Indonesia Group
            </p>

            {/* Elevator Pitch */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
              {lang === "en" ? (
                <>
                  Bringing <span className="text-zinc-200 font-semibold">13+ years of experience</span> in architecting modern web ecosystems, leading engineering teams, migrating legacy enterprise systems (PHP/Oracle to Next.js/PostgreSQL), DevOps automation with Docker, and maintaining high-performance national news portals serving millions of daily readers.
                </>
              ) : (
                <>
                  Memiliki <span className="text-zinc-200 font-semibold">pengalaman lebih dari 13 tahun</span> dalam merancang arsitektur web modern, memimpin tim engineering, migrasi sistem legacy (PHP/Oracle ke Next.js/PostgreSQL), otomasi DevOps dengan Docker, serta menjaga performa portal berita nasional dengan skala jutaan pembaca.
                </>
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <Link
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                <span>{lang === "en" ? "View Featured Projects" : "Lihat Proyek Unggulan"}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <a
                href={personal.resumeUrl}
                download
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 hover:border-zinc-600 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === "en" ? "Download CV (PDF)" : "Unduh CV (PDF)"}</span>
              </a>

              <Link
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <span>{lang === "en" ? "Contact Me" : "Hubungi Saya"}</span>
              </Link>
            </div>

            {/* Quick Social & Contact Chips */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80 w-full">
              <span className="text-xs text-zinc-500 font-medium">
                {lang === "en" ? "Quick Links:" : "Tautan Cepat:"}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/yoefanto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                <a
                  href="mailto:yoefanto@gmail.com"
                  aria-label="Email Yogi Febrianto"
                  className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/+6281991000304"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Contact"
                  className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Photo & Interactive Visual Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[260px] sm:max-w-xs">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-indigo-500/20 to-purple-500/40 blur-xl opacity-75" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-zinc-900/90 border border-zinc-700/60 p-4 shadow-2xl backdrop-blur-xl">
                {/* Profile Photo */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800">
                  <Image
                    src={personal.avatarUrl}
                    alt={personal.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    priority
                    className="object-cover object-top filter contrast-[1.03] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                  {/* Badges on Top of Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">
                          {personal.name}
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          {personal.title[lang]}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50">
                        {lang === "en" ? "13+ Yrs Exp" : "13+ Thn Pengalaman"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro Highlights Underneath Photo */}
                <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-zinc-800/80 text-center">
                  <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/40">
                    <Layers className="w-4 h-4 mx-auto text-cyan-400 mb-1" />
                    <p className="text-[10px] text-zinc-400">Next.js & React</p>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/40">
                    <Database className="w-4 h-4 mx-auto text-indigo-400 mb-1" />
                    <p className="text-[10px] text-zinc-400">PostgreSQL / Oracle</p>
                  </div>
                  <div className="p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/40">
                    <Cpu className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                    <p className="text-[10px] text-zinc-400">Docker & DevOps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
