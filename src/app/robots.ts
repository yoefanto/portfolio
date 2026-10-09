import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://yoefanto.web.id";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/rate-card", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
