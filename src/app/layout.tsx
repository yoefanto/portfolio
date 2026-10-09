import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://yoefanto.web.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yogi Febrianto | Senior Full-Stack Architect & Engineering Leader",
    template: "%s | Yogi Febrianto",
  },
  description:
    "Professional portfolio of Yogi Febrianto. 13+ years of experience in full-stack web architecture, legacy system migration (PHP/Oracle to Next.js/PostgreSQL), DevOps (Docker, CI/CD), and high-traffic systems.",
  keywords: [
    "Yogi Febrianto",
    "yoefanto",
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
    "Senior Web Developer Jakarta",
    "Next.js Architect",
    "Enterprise HRIS ERP",
    "DevOps Docker",
    "PostgreSQL",
    "Oracle Migration",
    "Bisnis Indonesia Group",
    "Web Developer Indonesia",
    "Enterprise HRIS ERP",
    "Jakarta",
    "Indonesia"
  ],
  authors: [{ name: "Yogi Febrianto", url: "https://linkedin.com/in/yoefanto" }],
  creator: "Yogi Febrianto",
  publisher: "Yogi Febrianto",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: SITE_URL,
    title: "Yogi Febrianto | Senior Full-Stack Architect & Engineering Leader",
    description:
      "13+ years experience transforming monolithic legacy systems into high-performance modern architectures with Next.js, PostgreSQL, and Docker.",
    siteName: "Yogi Febrianto Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 1000,
        alt: "Yogi Febrianto - Senior Full-Stack Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogi Febrianto | Senior Full-Stack Architect & Engineering Leader",
    description:
      "13+ years leading modern web architectures, enterprise systems, and DevOps containerization.",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Yogi Febrianto",
      alternateName: "yoefanto",
      jobTitle: "Senior Full-Stack Architect & Engineering Leader",
      description:
        "Senior Full-Stack Architect & Engineering Leader with over 13 years of experience in enterprise systems, modern web architectures, and DevOps automation.",
      url: SITE_URL,
      image: `${SITE_URL}/images/profile.jpg`,
      sameAs: [
        "https://linkedin.com/in/yoefanto",
        "https://github.com/yoefanto"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "SMKN 1 Cibinong",
        },
      ],
      knowsAbout: [
        "Full-Stack Web Development",
        "Enterprise System Architecture",
        "DevOps & Containerization",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "PHP / CodeIgniter / Laravel",
        "Oracle Database",
        "Database Administration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Yogi Febrianto - Senior Full-Stack Architect",
      description: "Portfolio and deep architecture case studies of Yogi Febrianto.",
      publisher: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: ["en", "id"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090b] text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
