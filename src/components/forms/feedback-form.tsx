"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { LoaderCircle } from "lucide-react";

const marketingLabel =
  "Wyrażam zgodę na otrzymywanie informacji marketingowych drogą elektroniczną, dotyczących produktów i usług Jakuba Nowaka, w tym ofert komercyjnych oraz informacji o rozwiązaniach wspierających prowadzenie szkół tańca.";

const feedbackSchema = z.object({
  name: z.string().min(2, "Podpisz się (imię lub pseudonim).").max(80),
  school: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("Podaj poprawny adres."),
  role: z.string().min(1, "Wybierz rolę."),
  feedback: z.string().min(10, "Napisz kilka zdań."),
  marketing: z.boolean().optional(),
  regulationsAccepted: z.boolean().refine((value) => value === true, {
    message: "Zaakceptuj regulamin.",
  }),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

type FeedbackFormProps = {
  className?: string;
};

export function FeedbackForm({ className }: FeedbackFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      marketing: false,
      regulationsAccepted: false,
    },
  });

  const onSubmit = async (values: FeedbackFormValues) => {
    try {
      setStatus("idle");
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Feedback submission error", error);
      setStatus("error");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} aria-live="polite">
      <div className="grid gap-4 text-body">
        <div className="space-y-2">
          <label className="text-body-strong text-sm font-medium" htmlFor="feedback-name">
            Imię i nazwisko lub pseudonim*
          </label>
          <Input id="feedback-name" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-body-strong text-sm font-medium" htmlFor="feedback-school">
            Szkoła
          </label>
          <Input id="feedback-school" {...register("school")} />
        </div>
        <div className="space-y-2">
          <label className="text-body-strong text-sm font-medium" htmlFor="feedback-email">
            Adres e-mail*
          </label>
          <Input id="feedback-email" type="email" placeholder="kontakt@twojaszkola.pl" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-body-strong text-sm font-medium" htmlFor="feedback-role">
            Twoja rola*
          </label>
          <select
            id="feedback-role"
            className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20"
            {...register("role")}
          >
            <option value="">-</option>
            <option value="Właściciel">Właściciel</option>
            <option value="Menedżer">Menedżer</option>
            <option value="Myślę o założeniu szkoły">Myślę o założeniu szkoły</option>
            <option value="Żadne z powyższych, ale interesują mnie treści">
              Żadne z powyższych, ale interesują mnie treści
            </option>
          </select>
          {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-body-strong text-sm font-medium" htmlFor="feedback-message">
            Feedback
          </label>
          <Textarea
            id="feedback-message"
            rows={5}
            placeholder="Podziel się opinią lub historią z Twojej szkoły."
            {...register("feedback")}
          />
          {errors.feedback && <p className="text-sm text-destructive">{errors.feedback.message}</p>}
        </div>
        <div className="surface-card-inset space-y-3 rounded-2xl border border-border/70 p-4 text-sm">
          <p>
            Zapisuję Twój adres zgodnie z{" "}
            <a href="/polityka-prywatnosci" className="link-accent" target="_blank" rel="noreferrer">
              Polityką Prywatności
            </a>{" "}
            oraz{" "}
            <a href="/polityka-cookies" className="link-accent" target="_blank" rel="noreferrer">
              Polityką Cookies
            </a>
            , aby odpowiedzieć na Twój feedback.
          </p>
          <label className="text-body-strong flex items-start gap-2 text-sm font-medium">
            <input
              type="checkbox"
              className="mt-1 accent-[hsl(var(--cta-bg))]"
              {...register("regulationsAccepted", { setValueAs: (v) => v === true || v === "on" })}
            />
            <span>
              Potwierdzam, że zapoznałem się z{" "}
              <a href="/regulamin" className="link-accent" target="_blank" rel="noreferrer">
                Regulaminem Serwisu
              </a>{" "}
              i akceptuję jego treść.
            </span>
          </label>
          {errors.regulationsAccepted && (
            <p className="text-sm text-destructive">{errors.regulationsAccepted.message}</p>
          )}
          <label className="flex items-start gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              className="mt-1 accent-[hsl(var(--cta-bg))]"
              {...register("marketing", { setValueAs: (v) => v === true || v === "on" })}
            />
            <span>{marketingLabel}</span>
          </label>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Wyślij wiadomość"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-primary">Dziękuję. Twoja wiadomość dotarła.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive">
            Formularz nie zadziałał. Spróbuj ponownie lub napisz na{" "}
            <a className="link-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
