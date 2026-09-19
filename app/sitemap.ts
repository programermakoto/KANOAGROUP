import type { MetadataRoute } from "next";
import { newsData } from "@/lib/news";

const baseUrl = "https://kanoa-group.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/service",
    "/news",
    "/recruitment",
    "/agency",
    "/contact",
    "/hp-create",
    "/optical-fiber",
    "/Privacy",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = newsData.map((item: { id: string; date: string }) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
