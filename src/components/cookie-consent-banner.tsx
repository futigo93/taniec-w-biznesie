"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cookieconsent: {
      initialise: (config: Record<string, unknown>) => void;
    };
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
          palette: {
            popup: { background: "#2b1e16", text: "#f6efe4" },
            button: { background: "#d97706", text: "#1a110c" },
          },
          theme: "classic",
          content: {
            message:
              "Używam plików cookies w celach technicznych, a w przyszłości analitycznych i marketingowych. Korzystając z serwisu zgadzasz się na ich działanie.",
            dismiss: "Zgadzam się",
            link: "Czytaj więcej",
            href: "/polityka-cookies",
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
