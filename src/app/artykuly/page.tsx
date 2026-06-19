import type { Metadata } from "next";
import { ArticlesLibraryPage } from "@/components/sections/articles-library-page";

export const metadata: Metadata = {
  title: "Artykuły",
  description:
    "Case study, teksty strategiczne i szersza biblioteka treści dla właścicieli szkół tańca, instruktorów i ludzi tańca.",
};

type ArticlesPageProps = {
  searchParams?: Promise<{
    filter?: string;
  }>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  return <ArticlesLibraryPage initialFilterSlug={resolvedSearchParams?.filter} />;
}
