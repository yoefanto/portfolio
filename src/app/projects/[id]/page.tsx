import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found – Yogi Febrianto" };

  const pageUrl = `https://yoefanto.web.id/projects/${project.id}`;
  const title = `${project.title} | Case Study by Yogi Febrianto`;
  const description = project.description.id || project.description.en;

  return {
    title,
    description,
    keywords: [
      project.title,
      ...project.techStack,
      "Yogi Febrianto",
      "System Architecture",
      "Case Study",
      "Enterprise Modernization"
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      locale: "id_ID",
      alternateLocale: "en_US",
      url: pageUrl,
      title,
      description,
      siteName: "Yogi Febrianto Portfolio",
      images: [
        {
          url: "/images/profile.jpg",
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/profile.jpg"],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project || !project.details) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
