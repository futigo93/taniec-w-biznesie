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

const feedbackSchema = z.object({
  name: z.string().min(2, "Podpisz się (imię lub pseudonim).").max(80),
  school: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("Podaj poprawny adres."),
  role: z.string().min(1, "Wybierz rolę."),
  feedback: z.string().min(10, "Napisz kilka zdań."),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

type FeedbackFormProps = {
  className?: string;
  formAction?: string;
};

export function FeedbackForm({
  className,
  formAction = process.env.NEXT_PUBLIC_FEEDBACK_FORM_ACTION,
}: FeedbackFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (values: FeedbackFormValues) => {
    try {
      if (!formAction) {
        console.warn("Brak akcji MailerLite / formularza feedbacku");
        setStatus("success");
        reset();
        return;
      }

      const payload = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          payload.append(`fields[${key}]`, value);
        }
      });
      payload.append("fields[tag]", "feedback");

      await fetch(formAction, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setStatus("success");
      reset();
    } catch (error) {
      console.error("Feedback submission error", error);
      setStatus("error");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} aria-live="polite">
      <div className="grid gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-name">
            Imię i nazwisko lub pseudonim*
          </label>
          <Input id="feedback-name" {...register("name")} />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-school">
            Szkoła
          </label>
          <Input id="feedback-school" {...register("school")} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-email">
            Adres e-mail*
          </label>
          <Input id="feedback-email" type="email" placeholder="kontakt@twojaszkola.pl" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-role">
            Twoja rola*
          </label>
          <select
            id="feedback-role"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            {...register("role")}
          >
            <option value="">Wybierz opcję</option>
            <option value="owner">Właściciel/menedżer szkoły</option>
            <option value="planning">Planuję założyć szkołę</option>
            <option value="interested">Żadne z powyższych, ale treści mnie interesują</option>
          </select>
          {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-message">
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
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Wyślij feedback"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-primary">Dzięki! Odpowiem, gdy tylko przeczytam Twoją wiadomość.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive">
            Formularz nie zadziałał. Spróbuj ponownie lub napisz na{" "}
            <a className="underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
