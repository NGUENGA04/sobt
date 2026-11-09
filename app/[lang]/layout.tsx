import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Unbounded, Sora, JetBrains_Mono } from "next/font/google";
import { LANGS, SITE_URL, isLang } from "@/lib/content";
import "../globals.css";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-unbounded", display: "swap" });
const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-sora", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "SOBT Digital", template: "%s | SOBT Digital" },
  applicationName: "SOBT Digital",
  authors: [{ name: "SOBT Digital" }],
  creator: "SOBT Digital",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true },
  other: { google: "notranslate" },
};

export const viewport: Viewport = { themeColor: "#1A1814", width: "device-width", initialScale: 1 };

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}
export const dynamicParams = false;

// Plays the sun intro only on the first page view of a visit, so it does not
// get in the way of navigation between pages.
const introScript = `try{if(!sessionStorage.getItem('sobt_intro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('play-intro');sessionStorage.setItem('sobt_intro','1')}}catch(e){}`;

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} translate="no" className={`${unbounded.variable} ${sora.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
