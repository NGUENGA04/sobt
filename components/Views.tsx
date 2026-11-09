import Link from "next/link";
import { Sun } from "./Sun";
import { ContactForm } from "./ContactForm";
import { PHONE, PHONE_DISPLAY, WHATSAPP, getContent, pathFor, servicePath, type Lang } from "@/lib/content";
import { SERVICE_DETAILS } from "@/lib/services";

type C = ReturnType<typeof getContent> & { lang: Lang };

function CallButtons({ t }: { t: C["t"] }) {
  return (
    <div className="row">
      <a href={`tel:${PHONE}`} className="btn btn-sun">{t.callFull}</a>
      <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-line"><span className="dot" />{t.waFull}</a>
    </div>
  );
}

export function Diagnostic({ t, compact = false }: { t: C["t"]; compact?: boolean }) {
  const wa = `${WHATSAPP}?text=${encodeURIComponent(t.diag.waText)}`;
  return (
    <div className={compact ? "diag diag-compact" : "diag"}>
      <div className="stack" style={{ gap: 14 }}>
        <span className="badge">{t.diag.badge}</span>
        <h2 className="diag-title">{t.diag.title}</h2>
        <p className="diag-text">{t.diag.text}</p>
      </div>
      <ul className="diag-points">{t.diag.points.map((p) => <li key={p}>{p}</li>)}</ul>
      <div className="row">
        <a href={wa} target="_blank" rel="noopener" className="btn btn-ink"><span className="dot" />{t.diag.cta}</a>
        <a href={`tel:${PHONE}`} className="btn btn-line">{t.callFull}</a>
      </div>
    </div>
  );
}

export function Home({ t, services, steps, lang }: C) {
  return (
    <>
      <section className="wrap hero" aria-labelledby="hero-title">
        <div className="hero-text">
          <p className="eyebrow" style={{ margin: 0 }}>{t.heroEyebrow}</p>
          <h1 id="hero-title" className="display h-hero">{t.heroTitle}</h1>
          <p>{t.heroSub}</p>
          <CallButtons t={t} />
        </div>
        <div className="hero-art"><Sun /></div>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(24px,4vw,40px)" }} aria-label={t.diag.title}>
        <Diagnostic t={t} />
      </section>

      <section className="wrap sec stack" style={{ gap: 40 }} aria-labelledby="exp-title">
        <div className="sec-head">
          <h2 id="exp-title" className="h2" style={{ maxWidth: 640 }}>{t.expTitle}</h2>
          <Link href={pathFor(lang, "services")} className="link-u">{t.allServices}</Link>
        </div>
        <div className="cards">
          {services.map((s) => (
            <Link key={s.slug} href={servicePath(lang, s.slug)} className="card">
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.short}</p>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="dark" aria-labelledby="why-title">
        <div className="wrap sec stack" style={{ gap: 48 }}>
          <h2 id="why-title" className="h2">{t.whyTitle}</h2>
          <div className="why">
            {t.why.map((w) => (
              <div key={w.title}><span className="bullet" aria-hidden="true" /><h3>{w.title}</h3><p>{w.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap sec stack" style={{ gap: 40 }} aria-labelledby="method-title">
        <div className="sec-head">
          <h2 id="method-title" className="h2">{t.methodTitle}</h2>
          <Link href={pathFor(lang, "method")} className="link-u">{t.seeMethod}</Link>
        </div>
        <ol className="steps">
          {steps.map((st) => (
            <li key={st.n}><span className="step-n" aria-hidden="true">{st.n}</span><h3>{st.title}</h3><p>{st.text}</p></li>
          ))}
        </ol>
      </section>

      <section className="sand" aria-labelledby="who-title">
        <div className="wrap who">
          <h2 id="who-title">{t.whoTitle}</h2>
          <ul className="chips">{t.who.map((c) => <li key={c}>{c}</li>)}</ul>
        </div>
      </section>
    </>
  );
}

export function Services({ t, services, lang }: C) {
  return (
    <>
      <section className="dark">
        <div className="wrap sec stack" style={{ gap: 20 }}>
          <p className="eyebrow" style={{ margin: 0 }}>{t.nav.services}</p>
          <h1 className="display h-page">{t.servTitle}</h1>
          <p className="lead">{t.servSub}</p>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: 24, paddingBottom: "clamp(56px,8vw,100px)" }}>
        {services.map((s) => (
          <article key={s.slug} id={s.slug} className="service">
            <div className="stack" style={{ gap: 12, alignItems: "flex-start" }}>
              <span className="num">{s.num}</span>
              <h2><Link href={servicePath(lang, s.slug)}>{s.title}</Link></h2>
              <Link href={servicePath(lang, s.slug)} className="link-u" style={{ marginTop: 8 }}>{t.sp.more} →</Link>
            </div>
            <p className="text" style={{ textWrap: "pretty" }}>{s.long}</p>
            <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
          </article>
        ))}
      </section>
    </>
  );
}

export function About({ t }: C) {
  return (
    <>
      <section className="wrap sec" style={{ display: "flex", flexWrap: "wrap", gap: 56, alignItems: "center" }}>
        <div className="stack" style={{ flex: "1 1 520px", gap: 24 }}>
          <p className="eyebrow" style={{ margin: 0 }}>{t.nav.about}</p>
          <h1 className="display h-page">Start Of the Beginning</h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.6, fontWeight: 600, maxWidth: 600 }}>{t.aboutLead}</p>
          <p className="text" style={{ maxWidth: 600 }}>{t.aboutText}</p>
        </div>
        <div style={{ flex: "1 1 280px", display: "flex", justifyContent: "center" }}>
          <Sun className="about-sun" />
        </div>
      </section>
      <section className="dark">
        <div className="wrap sec stack" style={{ gap: 40 }}>
          <h2 className="h2">{t.valuesTitle}</h2>
          <div className="values">
            {t.values.map((v) => <div key={v.title}><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="wrap sec team">
        <div className="stack" style={{ gap: 16 }}>
          <h2 className="h2">{t.teamTitle}</h2>
          <p className="text">{t.teamText}</p>
          <p className="text">{t.zoneText}</p>
        </div>
        <div className="photo" aria-hidden="true">{t.teamPhoto}</div>
      </section>
    </>
  );
}

export function Method({ t, steps }: C) {
  return (
    <section className="wrap sec stack" style={{ maxWidth: 1000, gap: 20 }}>
      <p className="eyebrow" style={{ margin: 0 }}>{t.nav.method}</p>
      <h1 className="display h-page">{t.methodPageTitle}</h1>
      <p className="lead">{t.methodSub}</p>
      <ol className="method-list">
        {steps.map((st) => (
          <li key={st.n}>
            <span className="method-n" aria-hidden="true">{st.n}</span>
            <div className="stack" style={{ gap: 10, paddingTop: 6 }}>
              <h2>{st.title}</h2>
              <p>{st.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Contact({ t, services }: C) {
  return (
    <section className="wrap sec stack" style={{ gap: 40 }}>
      <div className="stack" style={{ gap: 16 }}>
        <p className="eyebrow" style={{ margin: 0 }}>{t.nav.contact}</p>
        <h1 className="display h-page">{t.contactTitle}</h1>
        <p className="lead">{t.contactSub}</p>
      </div>
      <Diagnostic t={t} compact />
      <div className="contact-grid">
        <div className="contact-card dark">
          <div className="stack" style={{ gap: 6 }}>
            <span className="label">{t.phone}</span>
            <a href={`tel:${PHONE}`} className="big">{PHONE_DISPLAY}</a>
          </div>
          <div className="row" style={{ gap: 10 }}>
            <a href={`tel:${PHONE}`} className="btn btn-sun">{t.call}</a>
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-line"><span className="dot" />WhatsApp</a>
          </div>
          <address className="info"><span className="label">{t.location}</span><span>{t.city}</span></address>
          <div className="info"><span className="label">{t.zone}</span><span>{t.zoneShort}</span></div>
        </div>
        <div className="form-card">
          <ContactForm t={t} services={services} />
        </div>
      </div>
    </section>
  );
}

export function Cta({ t }: C) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="stack" style={{ gap: 12, maxWidth: 640 }}>
          <h2 id="cta-title">{t.ctaTitle}</h2>
          <p>{t.ctaSub}</p>
        </div>
        <div className="row">
          <a href={`tel:${PHONE}`} className="btn btn-ink">{PHONE_DISPLAY}</a>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-line">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailView({ t, services, lang, index }: C & { index: number }) {
  const s = services[index];
  const d = SERVICE_DETAILS[lang][index];
  return (
    <>
      <section className="dark">
        <div className="wrap sec stack" style={{ gap: 20 }}>
          <nav aria-label="Breadcrumb" className="crumbs">
            <Link href={pathFor(lang, "home")}>{t.nav.home}</Link><span aria-hidden="true">/</span>
            <Link href={pathFor(lang, "services")}>{t.nav.services}</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{s.title}</span>
          </nav>
          <p className="eyebrow" style={{ margin: 0 }}>{s.num} — {t.nav.services}</p>
          <h1 className="display h-page">{s.title}</h1>
          <p className="lead" style={{ maxWidth: 720 }}>{d.intro}</p>
          <div className="row" style={{ marginTop: 8 }}>
            <a href={`${WHATSAPP}?text=${encodeURIComponent(t.diag.waText)}`} target="_blank" rel="noopener" className="btn btn-sun">{t.diag.cta}</a>
            <a href={`tel:${PHONE}`} className="btn btn-line">{t.callFull}</a>
          </div>
        </div>
      </section>

      <section className="wrap sec sd-grid">
        <div className="stack" style={{ gap: 20 }}>
          <h2 className="h2">{t.sp.problems}</h2>
          <ul className="checks">{d.problems.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
        <div className="stack" style={{ gap: 20 }}>
          <h2 className="h2">{t.sp.deliver}</h2>
          <div className="deliver">
            {d.deliverables.map((x) => (
              <div key={x.title}><h3>{x.title}</h3><p>{x.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sand">
        <div className="wrap who">
          <h2>{t.sp.tools}</h2>
          <ul className="chips">{d.tools.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section className="wrap sec stack" style={{ gap: 32 }}>
        <div className="stack" style={{ gap: 10 }}>
          <h2 className="h2">{t.sp.cases}</h2>
          <p className="text">{t.sp.casesNote}</p>
        </div>
        <div className="why why-light">
          {d.useCases.map((u) => (
            <div key={u.title}><span className="bullet" aria-hidden="true" /><h3>{u.title}</h3><p>{u.text}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: "clamp(56px,8vw,100px)" }}>
        <Diagnostic t={t} />
      </section>

      <section className="wrap stack" style={{ gap: 24, paddingBottom: "clamp(56px,8vw,100px)", maxWidth: 1000 }}>
        <h2 className="h2">{t.sp.faq}</h2>
        <div className="faq">
          {d.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="wrap stack" style={{ gap: 24, paddingBottom: "clamp(56px,8vw,100px)" }}>
        <div className="sec-head">
          <h2 className="h2">{t.sp.others}</h2>
          <Link href={pathFor(lang, "services")} className="link-u">{t.sp.back}</Link>
        </div>
        <div className="cards">
          {services.filter((_, i) => i !== index).map((o) => (
            <Link key={o.slug} href={servicePath(lang, o.slug)} className="card" style={{ minHeight: 200 }}>
              <span className="num">{o.num}</span>
              <h3>{o.title}</h3>
              <p>{o.short}</p>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
