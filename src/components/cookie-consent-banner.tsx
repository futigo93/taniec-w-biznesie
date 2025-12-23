"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cookieconsent: {
      initialise: (config: Record<string, unknown>) => void;
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function updateAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const value = granted ? "granted" : "denied";

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: value,
      ad_storage: "denied",
    });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "consent-update",
      consent: { analytics_storage: value },
    });
  }
}

export function CookieConsentBanner() {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css";
    document.head.appendChild(css);

    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js";
    script.async = true;
    script.onload = () => {
      if (window.cookieconsent) {
        window.cookieconsent.initialise({
          type: "opt-in",
          revokable: true,
          palette: {
            popup: { background: "#2b1e16", text: "#f6efe4" },
            button: { background: "#d97706", text: "#1a110c" },
          },
          theme: "classic",
          content: {
            message:
              "Korzystam z plików cookies do celów technicznych. Potrzebuję Twojej zgody, aby uruchomić analitykę (Google Analytics) i rozwijać treści.",
            allow: "Akceptuję analitykę",
            deny: "Tylko techniczne",
            link: "Polityka cookies",
            href: "/polityka-cookies",
          },
          onInitialise(status: string) {
            updateAnalyticsConsent(status === "allow");
          },
          onStatusChange(status: string) {
            updateAnalyticsConsent(status === "allow");
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(css);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
