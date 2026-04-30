import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const staticRoutes = [
  "",
  "/artykuly",
  "/spolecznosc",
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
];

const articleRoutes = [
  "/artykuly/15-lat-doswiadczenia-instruktora-w-200-zdaniach",
  "/artykuly/instruktor-tanca-czlowiek-z-misja",
  "/artykuly/instruktor-tanca-z-wielka-moca-wiaze-sie-wielka-odpowiedzialnosc",
  "/artykuly/instruktor-tanca-tego-nie-zrozumiesz",
  "/artykuly/instruktor-tanca-twardy-zad-swiezaka",
  "/artykuly/instruktor-trener-nauczyciel",
  "/artykuly/po-co-tancerzowi-cele",
  "/artykuly/tam-gdzie-nam-zalezy",
  "/artykuly/tancerz-instruktor-wlasciciel",
  "/artykuly/wartosci-w-tancu",
  "/artykuly/wizerunek-instruktora-tanca-na-co-to-komu",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...articleRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    priority: path === "" ? 1 : path.startsWith("/artykuly/") ? 0.8 : 0.6,
    changeFrequency: path === "" ? "weekly" : path.startsWith("/artykuly/") ? "monthly" : "monthly",
  }));
}
