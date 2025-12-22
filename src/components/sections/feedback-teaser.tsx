import Link from "next/link";
import { MessageSquareQuote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function FeedbackTeaser() {
  return (
    <section className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-10 md:p-10">
      <div className="space-y-4">
        <SectionHeading
          title="Feedback napędza rozwój ebooka i społeczności"
          description="Będę wdzięczny za Twój feedback na temat ebooka oraz innych treści na stronie. Dzięki niemu dopasuję content do Twoich potrzeb albo po prostu będę miał motywację, by robić to dalej :) ."
        />
      </div>
      <Button asChild className="mt-6 md:mt-0">
        <Link href="/feedback" className="inline-flex items-center gap-2">
          <MessageSquareQuote className="h-4 w-4" />
          Podziel się opinią
        </Link>
      </Button>
    </section>
  );
}
