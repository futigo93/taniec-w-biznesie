import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SiteChrome } from "@/components/layout/site-chrome";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;
const themeInitScript = `
  document.documentElement.dataset.theme = "graphite-bold";
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.author,
  category: "business",
  icons: {
    icon: "/twb_logo.ico",
    shortcut: "/twb_logo.ico",
    apple: "/taniec_w_biznesie_logo.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/taniec_w_biznesie_logo.png",
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.author,
    images: ["/taniec_w_biznesie_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang="pl" data-theme="graphite-bold" suppressHydrationWarning>
      <head>
        {fbAppId ? <meta property="fb:app_id" content={fbAppId} /> : null}
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SiteChrome>{children}</SiteChrome>
        <CookieConsentBanner />
        {gaId && isProd ? (
          <>
            <Script id="ga-consent-default" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied'
                });
              `}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="beforeInteractive"
            />
            <Script id="ga-config" strategy="afterInteractive">
              {`
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
