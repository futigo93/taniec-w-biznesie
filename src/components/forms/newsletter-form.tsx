"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";

const marketingLabel =
  "Wyrażam zgodę na otrzymywanie informacji marketingowych drogą elektroniczną, dotyczących produktów i usług Jakuba Nowaka, w tym ofert komercyjnych oraz informacji o rozwiązaniach wspierających prowadzenie szkół tańca.";

const newsletterSchema = z.object({
  name: z.string().min(2, "Podaj imię i nazwisko.").max(80),
  email: z.string().email("Podaj poprawny adres."),
  school: z.string().max(120).optional().or(z.literal("")),
  role: z.string().min(1, "Wybierz rolę."),
  marketing: z.boolean().optional(),
  regulationsAccepted: z.boolean().refine((value) => value === true, {
    message: "Zaakceptuj regulamin.",
  }),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

type NewsletterFormProps = {
  formAction?: string;
  className?: string;
};

export function NewsletterForm({
  className,
  formAction = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION ??
    "https://assets.mailerlite.com/jsonp/1997197/forms/174512645645272394/subscribe",
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      marketing: false,
      regulationsAccepted: false,
    },
  });

  const onSubmit = async (values: NewsletterValues) => {
    try {
      if (!formAction) {
        console.warn("Brak akcji MailerLite / formularza społeczności");
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
      payload.append("fields[tag]", "spolecznosc");
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
      console.error("Newsletter submission error", error);
      setStatus("error");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} aria-live="polite">
      <div className="space-y-4 rounded-3xl border border-border/70 bg-card/60 p-6 shadow-inner md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="cta-name">
              Imię i nazwisko*
            </label>
            <Input id="cta-name" {...register("name")} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="cta-email">
              Adres e-mail*
            </label>
            <Input
              id="cta-email"
              type="email"
              placeholder="twojemail@szkolatanca.pl"
              {...register("email")}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium" htmlFor="cta-school">
              Nazwa szkoły
            </label>
            <Input id="cta-school" placeholder="Nazwa szkoły lub projektu" {...register("school")} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium" htmlFor="cta-role">
              Twoja rola*
            </label>
            <select
              id="cta-role"
              className="w-full rounded-xl border border-border/70 bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
        </div>
        <div className="space-y-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/90">
          <p>
            Zapisuję Twój adres zgodnie z{" "}
            <a href="/polityka-prywatnosci" className="underline" target="_blank" rel="noreferrer">
              Polityką Prywatności
            </a>{" "}
            oraz{" "}
            <a href="/polityka-cookies" className="underline" target="_blank" rel="noreferrer">
              Polityką Cookies
            </a>
            , aby dostarczać materiały społeczności.
          </p>
          <label className="flex items-start gap-2 text-sm font-medium">
            <input
              type="checkbox"
              className="mt-1"
              {...register("regulationsAccepted", { setValueAs: (v) => v === true || v === "on" })}
            />
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
          <label className="flex items-start gap-2 text-sm text-white/90">
            <input
              type="checkbox"
              className="mt-1"
              {...register("marketing", { setValueAs: (v) => v === true || v === "on" })}
            />
            <span>{marketingLabel}</span>
          </label>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : "Zapisz się"}
          </Button>
          {status === "success" && (
            <p className="text-sm text-primary">
              Cieszę się, że dołączasz! Pełny ebook powinien być już w Twojej skrzynce.
            </p>
          )}
          {status === "error" && <p className="text-sm text-destructive">Formularz nie zadziałał. Spróbuj ponownie.</p>}
        </div>
      </div>
    </form>
  );
}
