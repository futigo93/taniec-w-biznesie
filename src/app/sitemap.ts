import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllArticles } from "@/lib/articles";

const staticRoutes = [
  "",
  "/artykuly",
  "/uslugi",
  "/feedback",
  "/consulting",
  "/ebook",
  "/ebook1",
  "/ebook2",
  "/ebook3",
  "/o-mnie",
  "/regulamin",
  "/polityka-prywatnosci",
  "/polityka-cookies",
  "/lista-podmiotow-przetwarzajacych",
  "/ankiety",
  "/twoja-strona",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const articleRoutes = articles.filter((article) => !article.external).map((article) => `/artykuly/${article.slug}`);

  return [...staticRoutes, ...articleRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    priority: path === "" ? 1 : path.startsWith("/artykuly/") ? 0.8 : 0.6,
    changeFrequency: path === "" ? "weekly" : path.startsWith("/artykuly/") ? "monthly" : "monthly",
  }));
}
