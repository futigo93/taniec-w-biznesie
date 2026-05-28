import { HeroSection } from "@/components/sections/hero-section";
import { EbookSection } from "@/components/sections/ebook-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProductsSection } from "@/components/sections/products-section";
import { CallToActionSection } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <div className="page-wash py-8 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:gap-10 md:px-6">
        <HeroSection />
        <EbookSection />
        <ArticlesSection />
        <AboutSection />
        <ProductsSection />
        <CallToActionSection />
      </div>
    </div>
  );
}
