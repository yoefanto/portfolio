export type Lang = "en" | "id";

export interface Translatable<T = string> {
  en: T;
  id: T;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label?: string;
}

export interface MetricItem {
  value: string;
  label: Translatable<string>;
  description: Translatable<string>;
}

export interface ExperienceItem {
  id: string;
  role: Translatable<string>;
  company: string;
  division?: string;
  period: Translatable<string>;
  location: string;
  description: Translatable<string[]>;
  skills: string[];
}

export interface ProjectDetail {
  slug: string;
  role: Translatable<string>;
  timeline: Translatable<string>;
  organization: string;
  overview: Translatable<string>;
  problemStatement: Translatable<string>;
  solutionArchitecture: Translatable<string>;
  architecturePoints: Translatable<string[]>;
  keyModules: {
    title: Translatable<string>;
    description: Translatable<string>;
    tech?: string[];
  }[];
  challengesAndSolutions: {
    challenge: Translatable<string>;
    solution: Translatable<string>;
  }[];
  metricsImpact: {
    value: string;
    label: Translatable<string>;
    description: Translatable<string>;
  }[];
  liveUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Enterprise System" | "Web & CMS Modernization" | "High-Traffic Media" | "DevOps & Architecture";
  description: Translatable<string>;
  highlights: Translatable<string[]>;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  details?: ProjectDetail;
}

export interface SkillCategory {
  category: string;
  description: Translatable<string>;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: Translatable<string>;
  period: string;
  gpa?: string;
  description?: Translatable<string>;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: Translatable<string>;
    headline: Translatable<string>;
    summary: Translatable<string>;
    location: string;
    email: string;
    phone: string;
    whatsappUrl: string;
    avatarUrl: string;
    resumeUrl: string;
    portfolioUrl: string;
    status: Translatable<string>;
  };
  socials: SocialLink[];
  metrics: MetricItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  education: EducationItem[];
  certifications: CertificationItem[];
  rateCard?: RateCardData;
}

export interface RateCardPackage {
  title: Translatable<string>;
  duration: Translatable<string>;
  price: Translatable<string>;
  scope: Translatable<string>;
  popular?: boolean;
}

export interface RetainerRate {
  title: Translatable<string>;
  rate: Translatable<string>;
  details: Translatable<string>;
}

export interface TermSection {
  title: Translatable<string>;
  items: Translatable<string>[];
}

export interface RateCardData {
  title: Translatable<string>;
  subtitle: Translatable<string>;
  packages: RateCardPackage[];
  retainers: RetainerRate[];
  terms: TermSection[];
}
