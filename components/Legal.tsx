import Link from "next/link";
import { COMPANY, HOST } from "@/lib/company";
import { PHONE, PHONE_DISPLAY, WHATSAPP, pathFor, type Lang } from "@/lib/content";

/** Legal notice and privacy page. Empty company fields (lib/company.ts) are not displayed. */
export function Legal({ lang }: { lang: Lang }) {
  const fr = lang === "fr";
  const rows: [string, React.ReactNode][] = (
    [
      [fr ? "Raison sociale" : "Company name", COMPANY.name],
      [fr ? "Forme juridique" : "Legal form", COMPANY.legalForm],
      [fr ? "Capital social" : "Share capital", COMPANY.capital],
      ["RCCM", COMPANY.rccm],
      [fr ? "NIU" : "Taxpayer ID (NIU)", COMPANY.niu],
      [fr ? "Siège" : "Head office", COMPANY.address],
      [fr ? "Téléphone" : "Phone", <a key="tel" href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>],
      ["WhatsApp", <a key="wa" href={WHATSAPP} target="_blank" rel="noopener">{PHONE_DISPLAY}</a>],
      ["Email", COMPANY.email && <a key="mail" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>],
      [fr ? "Directeur de la publication" : "Publication director", COMPANY.director],
    ] as [string, React.ReactNode][]
  ).filter(([, v]) => Boolean(v));
  const contact = (
    <>
      {fr ? "par téléphone ou WhatsApp au " : "by phone or WhatsApp on "}
      <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
      {COMPANY.email && <>{fr ? ", ou par e-mail à " : ", or by email at "}<a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></>}
    </>
  );

  return (
    <section className="wrap sec stack" style={{ gap: 8 }}>
      <p className="eyebrow" style={{ margin: 0 }}>{fr ? "Informations légales" : "Legal information"}</p>
      <h1 className="display h-page" style={{ marginBottom: 16 }}>{fr ? "Mentions légales" : "Legal notice"}</h1>
      <div className="legal">
        <h2>{fr ? "Éditeur du site" : "Website publisher"}</h2>
        <p>{fr ? "Le présent site est édité par :" : "This website is published by:"}</p>
        <dl>{rows.map(([k, v]) => [<dt key={`${k}-t`}>{k}</dt>, <dd key={`${k}-d`}>{v}</dd>])}</dl>

        <h2>{fr ? "Hébergement" : "Hosting"}</h2>
        <p>
          {HOST.name}, {fr ? HOST.address : HOST.address.replace("États-Unis", "United States")} —{" "}
          <a href={HOST.url} target="_blank" rel="noopener">{HOST.url.replace("https://", "")}</a>
        </p>

        <h2>{fr ? "Propriété intellectuelle" : "Intellectual property"}</h2>
        <p>
          {fr
            ? "L'ensemble des contenus de ce site (textes, logo, graphismes, mise en page) est la propriété de SOBT Digital, sauf mention contraire. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite."
            : "All content on this website (text, logo, graphics, layout) belongs to SOBT Digital unless stated otherwise. Any full or partial reproduction or reuse without prior written permission is prohibited."}
        </p>

        <h2>{fr ? "Données personnelles" : "Personal data"}</h2>
        <p>
          {fr
            ? "Le formulaire de la page Contact ne stocke aucune donnée sur ce site : à l'envoi, votre message est préparé dans WhatsApp, et c'est vous qui choisissez de l'envoyer. Les informations que vous nous transmettez (nom, entreprise, téléphone, e-mail, description du projet) servent uniquement à répondre à votre demande et à établir un devis. Elles ne sont ni vendues ni cédées à des tiers."
            : "The form on the Contact page does not store any data on this website: when you submit it, your message is prepared in WhatsApp and you choose whether to send it. The information you send us (name, company, phone, email, project description) is used only to answer your request and prepare a quote. It is never sold or passed on to third parties."}
        </p>
        <p>
          {fr
            ? "Les échanges par WhatsApp sont également soumis à la politique de confidentialité de WhatsApp."
            : "Conversations on WhatsApp are also subject to WhatsApp's privacy policy."}
        </p>
        <p>
          {fr
            ? "Vous pouvez à tout moment demander l'accès, la rectification ou la suppression des informations vous concernant en nous contactant "
            : "You may at any time request access to, correction or deletion of your information by contacting us "}
          {contact}.
        </p>

        <h2>{fr ? "Cookies et mesure d'audience" : "Cookies and audience measurement"}</h2>
        <p>
          {fr
            ? "Ce site n'utilise pas de cookies publicitaires ni de traceurs à des fins de profilage. Pour mesurer sa fréquentation et ses performances, nous utilisons Vercel Web Analytics et Vercel Speed Insights, qui fonctionnent sans cookies et produisent des statistiques agrégées et anonymes (pages consultées, pays, type d'appareil, temps de chargement)."
            : "This website does not use advertising cookies or tracking for profiling purposes. To measure traffic and performance, we use Vercel Web Analytics and Vercel Speed Insights, which work without cookies and produce aggregated, anonymous statistics (pages viewed, country, device type, loading times)."}
        </p>
        <p>
          {fr
            ? "Le site enregistre uniquement dans votre navigateur, pour la durée de la visite, une indication technique permettant de ne pas rejouer l'animation d'accueil à chaque page."
            : "The site only stores, in your browser and for the duration of your visit, a technical flag so that the intro animation is not replayed on every page."}
        </p>

        <h2>{fr ? "Liens externes" : "External links"}</h2>
        <p>
          {fr
            ? "Le site peut contenir des liens vers d'autres sites (WhatsApp, LinkedIn…). SOBT Digital n'est pas responsable de leur contenu ni de leurs pratiques en matière de données."
            : "The site may contain links to other websites (WhatsApp, LinkedIn…). SOBT Digital is not responsible for their content or their data practices."}
        </p>

        <h2>{fr ? "Contact" : "Contact"}</h2>
        <p>
          {fr ? "Pour toute question concernant ce site, contactez-nous " : "For any question about this website, contact us "}
          {contact}, {fr ? "ou via la page " : "or through the "}
          <Link href={pathFor(lang, "contact")}>{fr ? "Contact" : "Contact page"}</Link>.
        </p>
      </div>
    </section>
  );
}
