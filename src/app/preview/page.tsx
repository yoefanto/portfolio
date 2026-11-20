import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsBentoPreview from "@/components/ProjectsBentoPreview";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bento Grid Redesign Preview | Yogi Febrianto",
  description: "Live interactive preview of the modernized Bento Grid portfolio architecture layout.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sleek Floating Navbar */}
      <Navbar />

      {/* Main Content Padding for Floating Navbar */}
      <div className="pt-24 sm:pt-28">
        <ProjectsBentoPreview />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
