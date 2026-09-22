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
  return {
    title: `${project.title} – Yogi Febrianto`,
    description: project.description.en,
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
