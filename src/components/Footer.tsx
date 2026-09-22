"use client";

import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/90 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="#" className="flex items-center gap-2 mb-2">
              <span className="text-base font-bold text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-zinc-500 font-mono">/ Portfolio</span>
            </Link>
            <p className="text-xs text-zinc-400 max-w-sm">
              {lang === "en"
                ? "Senior Full-Stack Architect & Engineering Leader. Bridging modern innovation with enterprise-grade stability."
                : "Senior Full-Stack Architect & Engineering Leader. Menggabungkan inovasi modern dengan stabilitas skala enterprise."}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/yoefanto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:yoefanto@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-cyan-400 border border-zinc-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/+6281991000304"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-emerald-400 border border-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-400 hover:text-white border border-zinc-800 transition-all"
          >
            <span>{lang === "en" ? "Back to Top" : "Kembali ke Atas"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3 text-center sm:text-left">
          <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
