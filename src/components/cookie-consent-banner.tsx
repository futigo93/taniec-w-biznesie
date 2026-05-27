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

function readThemeValue(name: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

export function CookieConsentBanner() {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css";
    document.head.appendChild(css);

    const style = document.createElement("style");
    style.textContent = `
      .cc-window.cc-banner.cc-bottom,
      .cc-window.cc-floating {
        width: min(100% - 1rem, 32rem);
        padding: 0.85rem 0.95rem;
        border-radius: 1.2rem;
        box-shadow: 0 20px 56px rgba(23, 34, 43, 0.18);
      }

      .cc-window .cc-message {
        font-size: 0.92rem;
        line-height: 1.45;
      }

      .cc-window .cc-compliance {
        gap: 0.55rem;
      }

      .cc-window .cc-btn {
        min-height: 2.6rem;
        padding: 0.72rem 1rem;
        border-radius: 999px;
        font-size: 0.86rem;
        font-weight: 600;
      }

      @media (max-width: 640px) {
        .cc-window.cc-banner.cc-bottom,
        .cc-window.cc-floating {
          width: calc(100% - 0.75rem);
          left: 0.375rem;
          right: 0.375rem;
          bottom: 0.375rem;
          padding: 0.75rem 0.8rem;
          border-radius: 1rem;
        }

        .cc-window .cc-message {
          font-size: 0.8rem;
          line-height: 1.3;
          margin-bottom: 0.55rem;
        }

        .cc-window .cc-compliance {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          width: 100%;
        }

        .cc-window .cc-btn {
          min-height: 2.2rem;
          padding: 0.56rem 0.7rem;
          font-size: 0.72rem;
          line-height: 1.2;
          margin: 0;
        }

        .cc-window .cc-link {
          display: block;
          margin-top: 0.25rem;
          font-size: 0.74rem;
        }
      }
    `;
    document.head.appendChild(style);

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
              popup: {
                background: readThemeValue("--surface-focus", "#f4f6f6"),
                text: readThemeValue("--body-strong", "#2a2f36"),
              },
              button: {
                background: readThemeValue("--cta-bg", "#355d73"),
                text: readThemeValue("--cta-fg", "#f8fafb"),
              },
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
      document.head.removeChild(style);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
