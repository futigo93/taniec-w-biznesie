import type { Metadata } from "next";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Kontakt zwrotny",
  description:
    "Podziel się opinią o ebooku, tekstach i materiałach Taniec w Biznesie albo opisz temat, który dziś najbardziej waży w Twojej szkole.",
};

export default function FeedbackPage() {
  return (
    <div className="bg-[linear-gradient(180deg,#faf5ee_0%,#f7efe6_35%,#fbf8f4_100%)] py-12">
      <div className="mx-auto max-w-4xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Kontakt zwrotny"
          title="Jeśli chcesz odpowiedzieć na tekst, opisać swój dylemat albo podsunąć ważny temat, możesz zrobić to tutaj"
          description="Możesz napisać po przeczytaniu ebooka, konkretnego artykułu albo wtedy, gdy chcesz opisać to, z czym dziś mierzy się Twoja szkoła."
        />
        <FeedbackForm className="rounded-[2rem] border border-border/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(49,34,24,0.08)]" />
      </div>
    </div>
  );
}
