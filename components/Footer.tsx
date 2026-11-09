import Link from "next/link";
import { Sun } from "./Sun";
import { PAGES, PHONE, PHONE_DISPLAY, WHATSAPP, pathFor, type Dict, type Lang } from "@/lib/content";

export function Footer({ lang, t }: { lang: Lang; t: Dict }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div className="footer-brand">
            <span className="logo-word">S<Sun size={36} stroke={8} />BT<small>DIGITAL</small></span>
            <p>{t.footerTag}</p>
          </div>
          <nav aria-label="Footer">
            <ul>
              {PAGES.map((p) => (
                <li key={p}><Link href={pathFor(lang, p)}>{t.nav[p]}</Link></li>
              ))}
            </ul>
          </nav>
          <address>
            <a href={`tel:${PHONE}`} className="tel">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener">WhatsApp</a>
            <span>{t.city}</span>
            <span>{t.zoneShort}</span>
          </address>
        </div>
        <div className="copy">© {new Date().getFullYear()} SOBT Digital — Start Of the Beginning</div>
      </div>
    </footer>
  );
}
