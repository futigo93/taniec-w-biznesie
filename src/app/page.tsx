import { HeroSection } from "@/components/sections/hero-section";
import { ValuePropositionSection } from "@/components/sections/value-proposition-section";
import { EbookSection } from "@/components/sections/ebook-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProductsSection } from "@/components/sections/products-section";
import { CallToActionSection } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <div className="page-wash py-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10 md:px-6">
        <HeroSection />
        <ValuePropositionSection />
        <EbookSection />
        <ArticlesSection />
        <AboutSection />
        <ProductsSection />
        <CallToActionSection />
      </div>
    </div>
  );
}
