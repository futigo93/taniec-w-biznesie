"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Check, LoaderCircle } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Podaj poprawny adres e-mail."),
  role: z.string().min(1, "Wybierz rolę"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const roles = [
  { value: "instruktor", label: "Instruktor / instruktorka" },
  { value: "wlasciciel", label: "Właściciel / współwłaściciel szkoły" },
  { value: "planowanie", label: "Planowanie otwarcia szkoły" },
  { value: "inne", label: "Inna rola w branży" },
];

type NewsletterFormProps = {
  className?: string;
  formAction?: string;
  successMessage?: string;
};

export function NewsletterForm({
  className,
  formAction = process.env.NEXT_PUBLIC_MAILERLITE_FORM_ACTION,
  successMessage = "Dziękuję! Pierwszy rozdział jest już w drodze.",
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { role: roles[0]?.value },
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    try {
      if (!formAction) {
        console.warn("Brak adresu MailerLite – dodaj NEXT_PUBLIC_MAILERLITE_FORM_ACTION");
        setStatus("success");
        reset();
        return;
      }

      const payload = new FormData();
      payload.append("fields[email]", values.email);
      payload.append("fields[rola]", values.role);
      payload.append("fields[tag]", "newsletter");

      await fetch(formAction, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setStatus("success");
      reset({ email: "", role: values.role });
    } catch (error) {
      console.error("Newsletter submission error", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border/80 bg-card p-4 md:flex-row md:items-end md:p-6",
        className,
      )}
    >
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium" htmlFor="newsletter-email">
          Adres e-mail
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="twojemail@szkolatanca.pl"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="flex-1 space-y-2">
        <label className="text-sm font-medium" htmlFor="newsletter-role">
          Twoja rola
        </label>
        <input type="hidden" {...register("role")} />
        <Select
          defaultValue={roles[0]?.value}
          onValueChange={(value) => setValue("role", value, { shouldValidate: true })}
        >
          <SelectTrigger id="newsletter-role">
            <SelectValue placeholder="Wybierz rolę" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role.value} value={role.value}>
                {role.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.role && (
          <p className="text-sm text-destructive">{errors.role.message}</p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting} className="h-12 shrink-0">
        {isSubmitting ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          "Wyślij"
        )}
      </Button>
      <p
        className={cn(
          "text-sm text-muted-foreground md:ml-4 md:w-48",
          status === "success" && "text-primary",
          status === "error" && "text-destructive",
        )}
        aria-live="polite"
      >
        {status === "success" && (
          <span className="inline-flex items-center gap-1">
            <Check className="h-4 w-4" />
            {successMessage}
          </span>
        )}
        {status === "error" && "Ups, spróbuj ponownie lub napisz do mnie bezpośrednio."}
      </p>
    </form>
  );
}
