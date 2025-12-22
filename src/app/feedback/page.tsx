import type { Metadata } from "next";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Feedback",
  description:
    "Podziel się opinią o ebooku i treściach Taniec w Biznesie – to dzięki niej rozwijam kolejne wydania i społeczność.",
};

export default function FeedbackPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Feedback"
          title="Feedback napędza rozwój ebooka i społeczności"
          description="Będę wdzięczny za Twój feedback na temat ebooka oraz innych treści na stronie. Dzięki niemu dopasuję content do Twoich potrzeb albo po prostu będę miał motywację, by robić to dalej."
        />
        <FeedbackForm className="rounded-3xl border border-border/70 bg-card p-6" />
      </div>
    </div>
  );
}
