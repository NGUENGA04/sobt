"use client";

import { useState, type FormEvent } from "react";
import { WHATSAPP, type Dict } from "@/lib/content";

/**
 * The original form only displayed a thank-you message and sent nothing.
 * Here the request is also forwarded to WhatsApp, pre-filled, so the lead is not lost.
 */
export function ContactForm({ t, services }: { t: Dict; services: { title: string }[] }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const lines = [
      t.f.waIntro,
      `${t.f.name} : ${d.get("name")}`,
      d.get("company") ? `${t.f.company} : ${d.get("company")}` : "",
      `${t.f.phone} : ${d.get("phone")}`,
      d.get("email") ? `${t.f.email} : ${d.get("email")}` : "",
      `${t.f.service} : ${d.get("service")}`,
      d.get("message") ? `${t.f.message} : ${d.get("message")}` : "",
    ].filter(Boolean);
    window.open(`${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="thanks" role="status">
        <span aria-hidden="true" />
        <p>{t.f.thanks}</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>{t.f.name}<input name="name" required autoComplete="name" /></label>
        <label>{t.f.company}<input name="company" autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>{t.f.phone}<input name="phone" type="tel" required autoComplete="tel" /></label>
        <label>{t.f.email}<input name="email" type="email" autoComplete="email" /></label>
      </div>
      <label>{t.f.service}
        <select name="service">{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
      </label>
      <label>{t.f.message}<textarea name="message" rows={5} /></label>
      <button type="submit" className="btn btn-ink">{t.f.send}</button>
    </form>
  );
}
