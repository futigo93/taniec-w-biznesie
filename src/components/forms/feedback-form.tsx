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

const checkboxValue = (value: unknown) => value === true || value === "on";

const feedbackSchema = z.object({
  name: z.string().min(2, "Podpisz się (imię lub pseudonim).").max(80),
  school: z.string().max(120).optional().or(z.literal("")),
  email: z.string().email("Podaj poprawny adres."),
  role: z.string().min(1, "Wybierz rolę."),
  feedback: z.string().min(10, "Napisz kilka zdań."),
  marketing: z
    .preprocess((value) => checkboxValue(value) || undefined, z.boolean().optional())
    .optional(),
  regulationsAccepted: z.preprocess(
    (value) => checkboxValue(value),
    z.literal(true, {
      errorMap: () => ({ message: "Zaakceptuj regulamin." }),
    }),
  ),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

type FeedbackFormProps = {
  className?: string;
  formAction?: string;
};

export function FeedbackForm({
  className,
  formAction = process.env.NEXT_PUBLIC_FEEDBACK_FORM_ACTION ??
    "https://assets.mailerlite.com/jsonp/1997197/forms/174500145975526510/subscribe",
}: FeedbackFormProps) {
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
      if (!formAction) {
        console.warn("Brak akcji MailerLite / formularza feedbacku");
        setStatus("success");
        reset();
        return;
      }

      const payload = new FormData();
      payload.append("fields[name]", values.name);
      payload.append("fields[email]", values.email);
      if (values.school) {
        payload.append("fields[company]", values.school);
      }
      payload.append("fields[last_name]", values.role);
      payload.append("fields[feedback]", values.feedback);
      payload.append("fields[tag]", "feedback");
      payload.append("ml-submit", "1");
      payload.append("anticsrf", "true");
      if (values.marketing) {
        payload.append("gdpr[]", "Marketing");
      }

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
        <div className="space-y-3 rounded-2xl border border-border/70 bg-muted/20 p-4 text-sm">
          <p>
            Zapisuję Twój adres zgodnie z{" "}
            <a href="/polityka-prywatnosci" className="underline" target="_blank" rel="noreferrer">
              Polityką Prywatności
            </a>{" "}
            oraz{" "}
            <a href="/polityka-cookies" className="underline" target="_blank" rel="noreferrer">
              Polityką Cookies
            </a>
            , aby odpowiedzieć na Twój feedback.
          </p>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Zgody marketingowe</p>
            <p className="text-sm text-muted-foreground">
              Zaznaczenie nieobowiązkowych zgód pozwoli mi przedstawić Ci dopasowane produkty i usługi.
            </p>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" {...register("marketing")} />
              <span>{marketingLabel}</span>
            </label>
          </div>
          <label className="flex items-start gap-2 text-sm font-medium">
            <input type="checkbox" className="mt-1" {...register("regulationsAccepted")} />
            <span>
              Potwierdzam, że zapoznałem się z{" "}
              <a href="/regulamin" className="underline" target="_blank" rel="noreferrer">
                Regulaminem Serwisu
              </a>{" "}
              i akceptuję jego treść.
            </span>
          </label>
          {errors.regulationsAccepted && (
            <p className="text-sm text-destructive">{errors.regulationsAccepted.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Wyślij feedback"}
        </Button>
        {status === "success" && (
          <p className="text-sm text-primary">Dziękuję za przesłany feedback. Opinie jak Twoja pomagają mi rozwijać projekt.</p>
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
