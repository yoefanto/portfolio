import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogi-febrianto.vercel.app"),
  title: "Yogi Febrianto | Senior Full-Stack Architect & Engineering Leader",
  description:
    "Professional portfolio of Yogi Febrianto. 13+ years of experience in full-stack architecture, enterprise system migration (PHP/Oracle to Next.js/PostgreSQL), DevOps (Docker, CI/CD), and high-traffic news portals.",
  keywords: [
    "Yogi Febrianto",
    "Full-Stack Architect",
    "Engineering Leader",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "PHP Developer",
    "MySQL",
    "MariaDB",
    "PostgreSQL",
    "DevOps Docker",
    "Bisnis Indonesia Group",
    "Enterprise HRIS ERP",
    "Jakarta",
    "Indonesia"
  ],
  authors: [{ name: "Yogi Febrianto", url: "https://linkedin.com/in/yoefanto" }],
  creator: "Yogi Febrianto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yogi-febrianto.vercel.app",
    title: "Yogi Febrianto | Senior Full-Stack Architect & Engineering Leader",
    description:
      "13+ years experience transforming monolithic legacy systems into high-performance modern architectures with Next.js, Express.js, PostgreSQL, and Docker.",
    siteName: "Yogi Febrianto Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Yogi Febrianto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogi Febrianto | Senior Full-Stack Architect & Engineering Leader",
    description:
      "13+ years leading modern web architectures, enterprise HRIS/ERP systems, and DevOps containerization.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
