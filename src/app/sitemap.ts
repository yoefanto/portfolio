import { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yoefanto.web.id";

  // Project detail pages
  const projectEntries: MetadataRoute.Sitemap = portfolioData.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectEntries,
  ];
}
