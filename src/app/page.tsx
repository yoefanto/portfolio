import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import EducationCertifications from "@/components/EducationCertifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 relative selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sleek Floating Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Metrics / Key Stats */}
      <Stats />

      {/* About Section */}
      <About />

      {/* Experience & Career Timeline */}
      <Experience />

      {/* Featured Projects & Systems */}
      <Projects />

      {/* Technical Skills Matrix */}
      <Skills />

      {/* Education & Certifications */}
      <EducationCertifications />

      {/* Contact & Inquiry */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
