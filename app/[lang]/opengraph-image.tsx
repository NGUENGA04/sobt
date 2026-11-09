import { ImageResponse } from "next/og";
import { LANGS, getContent, isLang } from "@/lib/content";

export const alt = "SOBT Digital — Data · IA · ERP · Web — Douala, Cameroun";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export default async function OG({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { t } = getContent(isLang(lang) ? lang : "fr");
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#1A1814", color: "#FAF8F3", padding: 80, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 720 }}>
          <div style={{ fontSize: 30, letterSpacing: 6, color: "#F5C214" }}>SOBT DIGITAL</div>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.05 }}>{t.heroTitle}</div>
          <div style={{ fontSize: 28, color: "#CFC9BC" }}>{t.heroEyebrow}</div>
        </div>
        <svg width="300" height="300" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="26" fill="#F5C214" />
          <path d="M82 50H93M72.6 72.6L80.4 80.4M50 82V93M27.4 72.6L19.6 80.4M18 50H7M27.4 27.4L19.6 19.6M50 18V7M72.6 27.4L80.4 19.6" stroke="#F5C214" strokeWidth="7" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size
  );
}
