import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "GPTBot", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "Claude-Web", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "CCBot", allow: "/", disallow: ["/admin", "/sign-in"] },
      { userAgent: "Bytespider", allow: "/", disallow: ["/admin", "/sign-in"] },
    ],
    sitemap: "https://kanoa-group.com/sitemap.xml",
  };
}
