"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("success");
      }}
      className="space-y-4 rounded-3xl border border-border/70 bg-background p-6 shadow-inner md:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="cta-name">
            Imię i nazwisko*
          </label>
          <input
            id="cta-name"
            type="text"
            required
            className="w-full rounded-xl border border-border/70 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Twoje imię"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="cta-email">
            E-mail*
          </label>
          <input
            id="cta-email"
            type="email"
            required
            className="w-full rounded-xl border border-border/70 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="twojemail@szkolatanca.pl"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium" htmlFor="cta-school">
            Nazwa szkoły
          </label>
          <input
            id="cta-school"
            type="text"
            className="w-full rounded-xl border border-border/70 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Nazwa szkoły lub projektu"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium" htmlFor="cta-role">
            Kim jesteś*
          </label>
          <select
            id="cta-role"
            required
            className="w-full rounded-xl border border-border/70 bg-card px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Wybierz opcję</option>
            <option value="owner">Właściciel / menedżer szkoły</option>
            <option value="founder">Chcę założyć szkołę</option>
            <option value="other">Żadne z powyższych, ale treści mnie interesują</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 md:w-auto"
        >
          Zapisuję się
        </button>
        {status === "success" && <p className="text-sm text-primary">Dziękuję! Odbierz maila z ebookiem.</p>}
      </div>
    </form>
  );
}
