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
  email: z
    .string()
    .email("Podaj poprawny adres.")
    .optional()
    .or(z.literal("")),
  takeaway: z
    .string()
    .min(20, "Napisz kilka zdań, co zadziałało / co zabolało."),
  quote: z.string().max(280).optional().or(z.literal("")),
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
    <form
      className={className}
      onSubmit={handleSubmit(onSubmit)}
      aria-live="polite"
    >
      <div className="grid gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-name">
            Imię lub pseudonim
          </label>
          <Input id="feedback-name" {...register("name")} />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-email">
            E-mail (opcjonalnie)
          </label>
          <Input
            id="feedback-email"
            type="email"
            placeholder="kontakt@twojaszkola.pl"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-takeaway">
            Co z Tobą zostało po lekturze?
          </label>
          <Textarea
            id="feedback-takeaway"
            rows={5}
            placeholder="Najmocniejszy fragment / decyzja, którą podejmujesz dzięki ebookowi…"
            {...register("takeaway")}
          />
          {errors.takeaway && (
            <p className="text-sm text-destructive">{errors.takeaway.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="feedback-quote">
            Cytat, który mogę opublikować (opcjonalnie)
          </label>
          <Textarea
            id="feedback-quote"
            rows={3}
            maxLength={280}
            placeholder="Jedno, dwa zdania – mogę podpisać imieniem i nazwą szkoły."
            {...register("quote")}
          />
          {errors.quote && (
            <p className="text-sm text-destructive">{errors.quote.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Wyślij feedback"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-primary">
            Dzięki! Odpowiem, gdy tylko przeczytam Twoją wiadomość.
          </p>
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
