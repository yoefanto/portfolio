"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Package,
  Clock,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  ShieldCheck,
  Server,
  Sparkles,
  ArrowLeft,
  MessageSquare,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function RateCard() {
  const { lang, setLang } = useLanguage();
  const rateCard = portfolioData.rateCard;

  if (!rateCard) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Floating Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{lang === "en" ? "Back to Portfolio" : "Kembali ke Portofolio"}</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Direct Contact Button */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === "en" ? "Contact Me" : "Hubungi Saya"}</span>
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-700/60 rounded-full p-0.5 text-xs">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all font-semibold ${lang === "en"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                  }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-full transition-all font-semibold ${lang === "id"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                  }`}
                aria-label="Ganti ke Bahasa Indonesia"
              >
                ID
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Header Section */}
      <section className="relative pt-12 pb-8 px-4 sm:px-6 overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-72 bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {lang === "en" ? "Confidential & Direct Services" : "Layanan Langsung & Terkurasi"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {rateCard.title[lang]}
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {rateCard.subtitle[lang]}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {lang === "en" ? "Custom Clean Code" : "Kode Kustom Bersih"}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {lang === "en" ? "SEO & Performance Built-in" : "Optimasi SEO & Performa"}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {lang === "en" ? "Enterprise Grade Architecture" : "Standar Arsitektur Enterprise"}
            </span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
        {/* Section 1: Project-Based Packages */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Package className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === "en" ? "Project-Based Packages" : "Paket Berbasis Proyek"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rateCard.packages.map((pkg, idx) => {
              const isPopular = pkg.popular;
              return (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-200 ${isPopular
                      ? "bg-slate-900/80 border-cyan-500/50 shadow-xl shadow-cyan-500/5 ring-1 ring-cyan-500/30"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/60"
                    }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md">
                      {lang === "en" ? "Most Popular" : "Paling Diminati"}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pkg.title[lang]}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{lang === "en" ? "Est. Timeline:" : "Estimasi Waktu:"} {pkg.duration[lang]}</span>
                      </div>
                    </div>

                    <div className="pt-2 pb-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-200">
                        {pkg.price[lang]}
                      </div>
                    </div>

                    <div className="border-t border-slate-800/70 pt-4 text-sm text-slate-300 leading-relaxed">
                      {pkg.scope[lang]}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-800/50">
                    <Link
                      href="/#contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${isPopular
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20"
                          : "bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700/70"
                        }`}
                    >
                      <span>{lang === "en" ? "Discuss This Package" : "Diskusikan Paket Ini"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 2: Retainer & Flexible Rates */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === "en" ? "Flexible & Retainer Rates" : "Tarif Fleksibel & Retainer"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rateCard.retainers.map((ret, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-7 bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700/80 transition-all"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white">{ret.title[lang]}</h3>
                  <div className="text-2xl font-extrabold text-cyan-400">
                    {ret.rate[lang]}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {ret.details[lang]}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/50">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group"
                  >
                    <span>{lang === "en" ? "Inquire about retainer availability" : "Tanyakan ketersediaan slot retainer"}</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Terms & Conditions */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {lang === "en" ? "Terms & Conditions" : "Syarat & Ketentuan"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rateCard.terms.map((term, idx) => {
              // Select appropriate icon
              let Icon = AlertCircle;
              if (idx === 1) Icon = CreditCard;
              if (idx === 2) Icon = Server;
              if (idx === 3) Icon = ShieldCheck;

              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-slate-900/30 border border-slate-800/70 space-y-3"
                >
                  <div className="flex items-center gap-2.5 text-slate-200">
                    <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <h3 className="font-semibold text-sm sm:text-base text-white">
                      {term.title[lang]}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {term.items.map((it, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <span className="text-cyan-500 font-bold mt-0.5">•</span>
                        <span>{it[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Bottom Call To Action */}
        <section className="relative rounded-3xl p-8 sm:p-10 border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 overflow-hidden text-center space-y-6 shadow-2xl">
          <div className="absolute inset-0 bg-radial-gradient from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {lang === "en" ? "Ready to Build or Consult?" : "Siap Memulai Proyek atau Diskusi?"}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {lang === "en"
                ? "If you have specific enterprise requirements or need a custom quotation, direct your message through the contact section."
                : "Jika Anda memiliki kebutuhan kustom atau spesifikasi teknis khusus, hubungi saya langsung untuk sesi konsultasi dan penawaran khusus."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === "en" ? "Go to Contact Form" : "Buka Bagian Kontak"}</span>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/60 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === "en" ? "View Full Portfolio" : "Lihat Seluruh Portofolio"}</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
