import type { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news";

const baseUrl = "https://kanoa-group.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const allNews = await getAllNews();
  const newsRoutes: MetadataRoute.Sitemap = allNews.map((item) => ({
    url: `${baseUrl}/news/${item.id}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
