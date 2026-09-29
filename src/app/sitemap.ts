import type { MetadataRoute } from "next";
import { agents } from "@/data/agents";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { products } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/browse",
    "/guides",
    "/agents",
    "/how-to-buy",
    "/about",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/browse" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${site.url}/c/${category.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const productRoutes = products.map((product) => ({
    url: `${site.url}/p/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const guideRoutes = guides.map((guide) => ({
    url: `${site.url}/guides/${guide.slug}`,
    lastModified: guide.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const agentRoutes = agents.map((agent) => ({
    url: `${site.url}/agents/${agent.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...guideRoutes, ...agentRoutes];
}
