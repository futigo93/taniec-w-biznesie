"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cookieconsent: {
      initialise: (
        config: Record<string, unknown>,
        onSuccess?: (popup: { open?: () => void; close?: () => void }) => void,
      ) => void;
    };
    cookieconsentInstance?: {
      open?: () => void;
      close?: () => void;
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    FB?: {
      XFBML?: {
        parse: () => void;
      };
    };
  }
}

function updateConsent(granted: boolean) {
  if (typeof window === "undefined") return;
  const value = granted ? "granted" : "denied";

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: value,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "consent-update",
      consent: { analytics_storage: value },
    });
  }

  window.dispatchEvent(
    new CustomEvent("consent:change", {
      detail: { granted },
    }),
  );
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
        window.cookieconsent.initialise(
          {
          type: "opt-in",
          revokable: true,
          palette: {
            popup: { background: "#2b1e16", text: "#f6efe4" },
            button: { background: "#d97706", text: "#1a110c" },
          },
          theme: "classic",
          content: {
            message:
              "Korzystam z plików cookies do celów technicznych. Potrzebuję Twojej zgody, aby uruchomić analitykę (Google Analytics) i wtyczki społecznościowe.",
            allow: "Akceptuję analitykę",
            deny: "Tylko techniczne",
            link: "Polityka cookies",
            href: "/polityka-cookies",
          },
          onInitialise(status: string) {
            updateConsent(status === "allow");
          },
          onStatusChange(status: string) {
            updateConsent(status === "allow");
          },
          },
          (popup) => {
            window.cookieconsentInstance = popup;
          },
        );
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
