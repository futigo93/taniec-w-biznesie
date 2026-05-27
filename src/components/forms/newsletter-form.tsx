"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

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
        trackEvent("newsletter_submit", { source: "spolecznosc" });
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
      trackEvent("newsletter_submit", { source: "spolecznosc" });
      reset();
    } catch (error) {
      console.error("Newsletter submission error", error);
      setStatus("error");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} aria-live="polite">
      <div className="surface-card form-neutral-surface focus-ring-accent space-y-4 rounded-[1.8rem] p-5 text-[var(--heading)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] [&_input]:text-[var(--foreground)] [&_label]:text-[var(--body-strong)] [&_p]:text-[var(--body)] [&_select]:text-[var(--foreground)] md:p-8">
        <div className="space-y-2">
          <p className="eyebrow-accent tracking-[0.22em]">Szybki zapis</p>
          <p className="text-body text-sm leading-6 md:leading-7">
            Po zapisie od razu dostaniesz pełny ebook na maila. Dodatkowe pola pomagają mi lepiej dopasowywać kolejne
            treści.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-body-strong text-sm font-medium" htmlFor="cta-name">
              Jak się do Ciebie zwracać?*
            </label>
            <Input id="cta-name" {...register("name")} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-body-strong text-sm font-medium" htmlFor="cta-email">
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
            <label className="text-body-strong text-sm font-medium" htmlFor="cta-school">
              Nazwa szkoły <span className="text-body">(opcjonalnie)</span>
            </label>
            <Input id="cta-school" placeholder="Nazwa szkoły lub projektu" {...register("school")} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-body-strong text-sm font-medium" htmlFor="cta-role">
              Twoja rola dzisiaj*
            </label>
            <select
              id="cta-role"
              className="text-foreground w-full rounded-xl border border-border/70 bg-[var(--surface-inset)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
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
        <div className="surface-card-inset text-body space-y-3 rounded-[1.4rem] p-4 text-sm">
          <p>
            Zapisuję Twój adres zgodnie z{" "}
            <a href="/polityka-prywatnosci" className="link-accent" target="_blank" rel="noreferrer">
              Polityką Prywatności
            </a>{" "}
            oraz{" "}
            <a href="/polityka-cookies" className="link-accent" target="_blank" rel="noreferrer">
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
              <a href="/regulamin" className="link-accent" target="_blank" rel="noreferrer">
                Regulaminem Serwisu
              </a>{" "}
              i akceptuję jego treść.
            </span>
          </label>
          {errors.regulationsAccepted && (
            <p className="text-sm text-destructive">{errors.regulationsAccepted.message}</p>
          )}
          <label className="text-body flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              {...register("marketing", { setValueAs: (v) => v === true || v === "on" })}
            />
            <span>{marketingLabel}</span>
          </label>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 w-full rounded-full px-6 md:w-auto">
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
