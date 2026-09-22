"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export default function Contact() {
  const { personal } = portfolioData;
  const { lang } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from Portfolio: ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `${lang === "en" ? "Name" : "Nama"}: ${formData.name}\nEmail: ${formData.email}\n\n${lang === "en" ? "Message" : "Pesan"}:\n${formData.message}`
    );
    window.open(`mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Connection & Collaboration" : "Koneksi & Kolaborasi"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {lang === "en" ? "Let's Connect & Collaborate" : "Mari Berdiskusi & Terhubung"}
          </h2>
          <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
            {lang === "en"
              ? "Open for enterprise architecture consulting, technical engineering leadership, legacy system modernizations, or strategic advisory."
              : "Terbuka untuk diskusi konsultasi arsitektur enterprise, kepemimpinan tim teknologi, modernisasi sistem, atau peluang kolaborasi strategis."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${personal.email}`}
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">
                    {lang === "en" ? "Direct Email" : "Kirim Email Langsung"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                    {personal.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">
                    {lang === "en" ? "WhatsApp / Phone" : "WhatsApp / Telepon"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {/* {personal.phone} */}
                    Click to start conversation
                  </p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/yoefanto"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-5 rounded-2xl flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 group-hover:scale-110 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">
                    {lang === "en" ? "LinkedIn Profile" : "Profil LinkedIn"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-100 group-hover:text-sky-400 transition-colors">
                    linkedin.com/in/yoefanto
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass-panel p-5 rounded-2xl flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">
                    {lang === "en" ? "Base Location" : "Lokasi Kerja"}
                  </p>
                  <p className="text-sm font-semibold text-zinc-100">
                    {personal.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CV Download Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {lang === "en" ? "Need Full Resume?" : "Butuh Resume Lengkap?"}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {lang === "en" ? "Download CV in PDF format." : "Unduh file CV berformat PDF."}
                  </p>
                </div>
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>{lang === "en" ? "Download CV" : "Unduh CV"}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === "en" ? "Send a Direct Message" : "Kirimkan Pesan Anda"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                {lang === "en"
                  ? "Fill out the form below; your message will be forwarded directly to my inbox."
                  : "Silakan isi formulir di bawah ini, pesan Anda akan langsung diteruskan ke inbox saya."}
              </p>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {lang === "en" ? "Thank You for Reaching Out!" : "Terima Kasih Telah Menghubungi!"}
                  </h4>
                  <p className="text-sm text-zinc-400 max-w-sm mb-6">
                    {lang === "en"
                      ? "Your email client was opened with the message draft. I will respond to your message promptly."
                      : "Aplikasi email Anda telah dibuka dengan template pesan ini. Saya akan merespons pesan Anda secepatnya."}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
                  >
                    {lang === "en" ? "Send Another Message" : "Kirim Pesan Lain"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        {lang === "en" ? "Full Name *" : "Nama Lengkap *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={lang === "en" ? "Your Name" : "Nama Anda"}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        {lang === "en" ? "Email Address *" : "Alamat Email *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      {lang === "en" ? "Subject / Topic" : "Subjek / Topik Diskusi"}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder={lang === "en" ? "System Architecture / Engineering Advisory" : "Diskusi Arsitektur Sistem / Peluang Kerjasama"}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      {lang === "en" ? "Message *" : "Pesan *"}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={lang === "en" ? "Write your project requirements, questions, or inquiry here..." : "Tuliskan pesan, pertanyaan, atau detail proyek Anda di sini..."}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-zinc-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === "en" ? "Send Message" : "Kirim Pesan Langsung"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
