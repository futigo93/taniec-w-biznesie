import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = ["", "/artykuly", "/spolecznosc", "/uslugi", "/feedback", "/consulting"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    priority: path === "" ? 1 : 0.6,
    changeFrequency: "weekly",
  }));
}
