# SOBT Digital — site Next.js

Site vitrine de SOBT Digital (Douala, Cameroun), en Next.js (App Router), pages générées en statique.

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de production
```

## URLs

| Page      | Français     | Anglais        |
|-----------|--------------|----------------|
| Accueil   | `/`          | `/en`          |
| Services  | `/services`  | `/en/services` |
| À propos  | `/a-propos`  | `/en/about`    |
| Méthode   | `/methode`   | `/en/approach` |
| Contact   | `/contact`   | `/en/contact`  |

Le français est servi sans préfixe (`middleware.ts`) ; `/fr/...` redirige vers l'URL sans préfixe.

## SEO

- Une vraie URL et un HTML complet par page et par langue (avant : une seule page rendue en JavaScript).
- `title`, `description`, URL canonique et `hreflang` (fr / en / x-default) propres à chaque page : `lib/seo.ts`.
- Open Graph et Twitter, avec une image de partage générée par langue (`app/[lang]/opengraph-image.tsx`).
- Données structurées schema.org (JSON-LD) : `ProfessionalService` (Douala, téléphone, services), `WebSite`, `WebPage`, `BreadcrumbList`, `HowTo` sur la page Méthode.
- `sitemap.xml` (avec alternates de langue) et `robots.txt`.
- Polices auto-hébergées (`app/fonts`, via `next/font/local`), favicon SVG.

## Modifier le contenu

Tous les textes (FR/EN), les services, les étapes et les balises title/description sont dans `lib/content.ts`.

## Domaine

L'URL du site vaut `https://sobt-digital.vercel.app` par défaut. Avec un nom de domaine, définir
`NEXT_PUBLIC_SITE_URL` (par ex. `https://www.sobtdigital.com`) dans les variables d'environnement Vercel.

## Ancienne version

L'ancien site (fichier HTML unique) est conservé dans `legacy/`.
