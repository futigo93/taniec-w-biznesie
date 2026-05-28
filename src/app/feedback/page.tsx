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
    <div className="page-wash py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-7 px-4 md:space-y-10 md:px-6">
        <SectionHeading
          eyebrow="Kontakt zwrotny"
          title="Jeśli chcesz odpowiedzieć na tekst albo opisać temat, który dziś waży w Twojej szkole, możesz napisać tutaj"
          description="Możesz odnieść się do ebooka, konkretnego artykułu albo opisać dylemat, z którym dziś się mierzysz."
        />
        <FeedbackForm className="surface-section rounded-[1.75rem] p-5 shadow-[0_20px_60px_rgba(49,34,24,0.08)] md:rounded-[2rem] md:p-6" />
      </div>
    </div>
  );
}
