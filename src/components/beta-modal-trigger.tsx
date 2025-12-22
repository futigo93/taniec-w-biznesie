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

export function BetaModalTrigger({ buttonLabel, variant = "default" }: BetaModalTriggerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
                onSubmit={(e) => {
                  e.preventDefault();
                  setOpen(false);
                }}
              >
                <Input placeholder="Imię i nazwisko" required />
                <Input type="email" placeholder="Adres e-mail" required />
                <Textarea rows={4} placeholder="Kilka zdań o Twojej szkole i potrzebach" />
                <div className="flex justify-end gap-3 pt-2">
                  <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                    Anuluj
                  </Button>
                  <Button type="submit">Wyślij</Button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
