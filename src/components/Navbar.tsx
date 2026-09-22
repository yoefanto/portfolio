"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: { en: "About", id: "Tentang" }, href: "#about" },
    { label: { en: "Experience", id: "Pengalaman" }, href: "#experience" },
    { label: { en: "Projects", id: "Proyek" }, href: "#projects" },
    { label: { en: "Skills", id: "Keahlian" }, href: "#skills" },
    { label: { en: "Certifications", id: "Sertifikasi" }, href: "#education" },
    { label: { en: "Contact", id: "Kontak" }, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300">
      <div
        className={`w-full max-w-6xl rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between border ${scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border-zinc-800/90 shadow-2xl shadow-cyan-950/10"
            : "bg-zinc-950/50 backdrop-blur-md border-zinc-800/50"
          }`}
      >
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
              <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                YF
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-cyan-400 transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] text-zinc-400 tracking-wide font-mono hidden sm:inline-block">
              Architect & Leader
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-zinc-300 hover:text-cyan-400 rounded-full hover:bg-zinc-900/60 transition-all duration-200"
            >
              {link.label[lang]}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Toggle Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-xs font-mono">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${lang === "en"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
                }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${lang === "id"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
                }`}
              title="Bahasa Indonesia"
            >
              ID
            </button>
          </div>

          <a
            href={portfolioData.personal.resumeUrl}
            download
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-200 hover:text-white rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-zinc-600 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>CV PDF</span>
          </a>

          <Link
            href="#contact"
            className="relative group flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-zinc-950 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full hover:opacity-90 transition-all duration-200 shadow-sm shadow-cyan-500/20"
          >
            <span>{lang === "en" ? "Contact" : "Hubungi"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Language Pill */}
          <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-[11px] font-mono">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full ${lang === "en"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold"
                  : "text-zinc-400"
                }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 rounded-full ${lang === "id"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-500 text-zinc-950 font-bold"
                  : "text-zinc-400"
                }`}
            >
              ID
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-zinc-900/80 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 max-w-md mx-auto md:hidden rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800 p-5 shadow-2xl shadow-black/80 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-cyan-400 hover:bg-zinc-900/70 rounded-xl transition-colors"
              >
                {link.label[lang]}
              </Link>
            ))}
          </div>

          <div className="h-[1px] bg-zinc-800/80 my-1" />

          <div className="flex flex-col gap-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-zinc-200 bg-zinc-900 rounded-xl border border-zinc-700/60"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>{lang === "en" ? "Download CV (PDF)" : "Unduh CV (PDF)"}</span>
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-xl"
            >
              <span>{lang === "en" ? "Contact Me" : "Hubungi Saya"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
