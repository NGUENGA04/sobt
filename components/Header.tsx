"use client";

import Link from "next/link";
import { useState } from "react";
import { Sun } from "./Sun";
import { PAGES, PHONE, WHATSAPP, pathFor, type Dict, type Lang, type PageKey } from "@/lib/content";

export function Header({ lang, page, t, altHref }: { lang: Lang; page: PageKey; t: Dict; altHref: string }) {
  const [open, setOpen] = useState(false);
  const links = PAGES.map((p) => (
    <Link key={p} href={pathFor(lang, p)} aria-current={p === page ? "page" : undefined} onClick={() => setOpen(false)}>
      {t.nav[p]}
    </Link>
  ));

  return (
    <header className="header">
      <div className="wrap header-bar">
        <Link href={pathFor(lang, "home")} className="logo" aria-label="SOBT Digital">
          <span className="logo-word">S<Sun size={28} stroke={8} />BT</span>
          <span className="logo-sub">DIGITAL</span>
        </Link>
        <nav className="nav" aria-label="Navigation principale">{links}</nav>
        <div className="header-actions">
          <div className="lang">
            {(["fr", "en"] as Lang[]).map((l) =>
              l === lang ? (
                <span key={l} aria-current="true" lang={l}>{l.toUpperCase()}</span>
              ) : (
                <Link key={l} href={altHref} hrefLang={l} lang={l} title={t.switchLang}>{l.toUpperCase()}</Link>
              )
            )}
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-ink header-wa"><span className="dot" />WhatsApp</a>
          <button className="burger" aria-label={t.menu} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
            <span /><span />
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label={t.menu}>
          {links}
          <div className="row">
            <a href={`tel:${PHONE}`} className="btn-sun">{t.call}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-ink">WhatsApp</a>
          </div>
        </nav>
      )}
    </header>
  );
}
