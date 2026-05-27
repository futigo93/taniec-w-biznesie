"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BetaModalTriggerProps = {
  buttonLabel: string;
  variant?: "default" | "outline";
};

type FormState = {
  name: string;
  email: string;
  message: string;
  regulationsAccepted: boolean;
};

export function BetaModalTrigger({ buttonLabel, variant = "default" }: BetaModalTriggerProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [consentError, setConsentError] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    regulationsAccepted: false,
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setStatus("idle");
    setConsentError(false);
    setFormData({ name: "", email: "", message: "", regulationsAccepted: false });
  };

  return (
    <>
      <Button variant={variant} onClick={() => setOpen(true)}>
        {buttonLabel}
      </Button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-md rounded-3xl border border-border/60 bg-card p-6 shadow-2xl">
              <h2 className="text-xl font-semibold">Zapisz się na konsultację i testy</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Zostaw podstawowe informacje, odezwę się z propozycją terminu i krótką agendą rozmowy.
              </p>
              <form
                className="mt-4 space-y-3"
                onSubmit={async (event) => {
                  event.preventDefault();
                  if (!formData.regulationsAccepted) {
                    setConsentError(true);
                    return;
                  }
                  setIsSubmitting(true);
                  setStatus("idle");
                  setConsentError(false);
                  try {
                    const response = await fetch("/api/beta-signup", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(formData),
                    });
                    if (!response.ok) {
                      throw new Error("Request failed");
                    }
                    setStatus("success");
                  } catch {
                    setStatus("error");
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <Input
                  placeholder="Imię i nazwisko"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                />
                <Input
                  type="email"
                  placeholder="Adres e-mail"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                />
                <Textarea
                  rows={4}
                  placeholder="Kilka zdań o Twojej szkole i potrzebach"
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                />
                <div className="space-y-3 rounded-2xl border border-border/70 bg-muted/20 p-4 text-sm">
                  <p>
                    Zapisuję Twój adres zgodnie z{" "}
                    <a href="/polityka-prywatnosci" className="link-accent" target="_blank" rel="noreferrer">
                      Polityką Prywatności
                    </a>{" "}
                    oraz{" "}
                    <a href="/polityka-cookies" className="link-accent" target="_blank" rel="noreferrer">
                      Polityką Cookies
                    </a>
                    , aby odpowiedzieć na Twoje zapytanie.
                  </p>
                  <label className="flex items-start gap-2 text-sm font-medium">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={formData.regulationsAccepted}
                      onChange={(event) => {
                        const checked = event.target.checked;
                        setFormData((prev) => ({ ...prev, regulationsAccepted: checked }));
                        if (checked) {
                          setConsentError(false);
                        }
                      }}
                    />
                    <span>
                      Potwierdzam, że zapoznałem się z{" "}
                      <a href="/regulamin" className="link-accent" target="_blank" rel="noreferrer">
                        Regulaminem Serwisu
                      </a>{" "}
                      i akceptuję jego treść.
                    </span>
                  </label>
                  {consentError && <p className="text-sm text-destructive">Zaakceptuj regulamin.</p>}
                </div>
                {status === "success" && (
                  <p className="text-sm text-emerald-600">Dziękuję! Odezwę się wkrótce.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive">Nie udało się wysłać zgłoszenia. Spróbuj ponownie.</p>
                )}
                <div className="flex justify-end gap-3 pt-2">
                  <Button type="button" variant="ghost" onClick={handleClose}>
                    Zamknij
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
