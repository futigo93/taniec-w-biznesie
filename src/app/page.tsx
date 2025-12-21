import { HeroSection } from "@/components/sections/hero-section";
import { EbookSection } from "@/components/sections/ebook-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { CommunitySection } from "@/components/sections/community-section";
import { ProductsSection } from "@/components/sections/products-section";
import { FeedbackTeaser } from "@/components/sections/feedback-teaser";
import { CallToActionSection } from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-background to-amber-50/30 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
        <HeroSection />
        <EbookSection />
        <ArticlesSection />
        <CommunitySection />
        <ProductsSection />
        <FeedbackTeaser />
        <CallToActionSection />
      </div>
    </div>
  );
}
