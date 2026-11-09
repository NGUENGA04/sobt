import Link from "next/link";
import { Sun } from "./Sun";
import { ContactForm } from "./ContactForm";
import { PHONE, PHONE_DISPLAY, WHATSAPP, getContent, pathFor, type Lang } from "@/lib/content";

type C = ReturnType<typeof getContent> & { lang: Lang };

function CallButtons({ t }: { t: C["t"] }) {
  return (
    <div className="row">
      <a href={`tel:${PHONE}`} className="btn btn-sun">{t.callFull}</a>
      <a href={WHATSAPP} target="_blank" rel="noopener" className="btn btn-line"><span className="dot" />{t.waFull}</a>
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

      <section className="wrap sec stack" style={{ gap: 40 }} aria-labelledby="exp-title">
        <div className="sec-head">
          <h2 id="exp-title" className="h2" style={{ maxWidth: 640 }}>{t.expTitle}</h2>
          <Link href={pathFor(lang, "services")} className="link-u">{t.allServices}</Link>
        </div>
        <div className="cards">
          {services.map((s) => (
            <Link key={s.slug} href={`${pathFor(lang, "services")}#${s.slug}`} className="card">
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

export function Services({ t, services }: C) {
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
            <div className="stack" style={{ gap: 12 }}>
              <span className="num">{s.num}</span>
              <h2>{s.title}</h2>
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
