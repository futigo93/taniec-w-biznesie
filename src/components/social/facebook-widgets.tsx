"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type FacebookWidgetsProps = {
  path: string;
  className?: string;
};

const CONSENT_COOKIE = "cookieconsent_status";
const CONSENT_GRANTED = "allow";

function hasConsentCookie() {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .some((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=${CONSENT_GRANTED}`));
}

function getSdkUrl() {
  const base = "https://connect.facebook.net/pl_PL/sdk.js";
  const params = new URLSearchParams({
    xfbml: "1",
    version: "v20.0",
  });
  const appId = process.env.NEXT_PUBLIC_FB_APP_ID;
  if (appId) {
    params.set("appId", appId);
  }
  return `${base}#${params.toString()}`;
}

export function FacebookWidgets({ path, className }: FacebookWidgetsProps) {
  const consented = useSyncExternalStore(
    (listener) => {
      if (typeof window === "undefined") return () => {};
      const handle = () => listener();
      window.addEventListener("consent:change", handle);
      return () => window.removeEventListener("consent:change", handle);
    },
    hasConsentCookie,
    () => false,
  );
  const url = useMemo(() => `${siteConfig.url}${path}`, [path]);

  const handleOpenConsent = () => {
    if (typeof window === "undefined") return;
    if (window.cookieconsentInstance?.open) {
      window.cookieconsentInstance.open();
      return;
    }
  };

  useEffect(() => {
    if (!consented) return;
    if (typeof window === "undefined") return;

    if (!document.getElementById("facebook-jssdk")) {
      const fbRoot = document.getElementById("fb-root");
      if (!fbRoot) {
        const root = document.createElement("div");
        root.id = "fb-root";
        document.body.prepend(root);
      }

      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = getSdkUrl();
      document.body.appendChild(script);
      script.onload = () => {
        if (window.FB && window.FB.XFBML) {
          window.FB.XFBML.parse();
        }
      };
      return;
    }

    if (window.FB && window.FB.XFBML) {
      window.FB.XFBML.parse();
    }
  }, [consented]);

  const showWidgets = consented;

  return (
    <div className={cn("relative z-10 pointer-events-auto", className)}>
      {showWidgets ? (
        <div className="flex flex-wrap items-center gap-3 leading-none">
          <div className="fb-share-button" data-href={url} data-layout="button" />
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-3 leading-none opacity-60">
          <div className="rounded-md border border-border/70 bg-card px-3 py-1 text-xs font-semibold">
            Udostępnij
          </div>
        </div>
      )}
      {!showWidgets && (
        <div className="relative z-10 mt-2 text-[0.78rem] leading-5 text-muted-foreground pointer-events-auto">
          <p>
            Wtyczki Facebooka są dostępne po akceptacji cookies analitycznych.
          </p>
          <button
            type="button"
            onClick={handleOpenConsent}
            className="mt-1 inline-flex cursor-pointer items-center text-primary underline underline-offset-2 transition hover:text-primary/80 relative z-10"
          >
            Zmień ustawienia zgód
          </button>
        </div>
      )}
    </div>
  );
}
