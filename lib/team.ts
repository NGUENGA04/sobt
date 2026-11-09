/**
 * Team members shown on the About page (/a-propos, /en/about).
 *
 * While this list is empty, the page only shows the general team text.
 * To add someone, copy the example below into TEAM and fill it in:
 * - photo: put the image in public/team/ (square, at least 400x400 px) and write its
 *   file name, e.g. "jean.jpg". Leave it out to show the person's initials instead.
 * - linkedin: full profile URL (optional).
 *
 * {
 *   name: "Prénom Nom",
 *   role: { fr: "Data engineer", en: "Data engineer" },
 *   bio: {
 *     fr: "Deux ou trois phrases sur le parcours : études, expériences, ce qu'il ou elle apporte aux projets.",
 *     en: "Two or three sentences about background, experience and what they bring to projects.",
 *   },
 *   skills: ["Power BI", "SQL", "Python"],
 *   photo: "prenom.jpg",
 *   linkedin: "https://www.linkedin.com/in/...",
 * },
 */
export type TeamMember = {
  name: string;
  role: { fr: string; en: string };
  bio: { fr: string; en: string };
  skills?: string[];
  photo?: string;
  linkedin?: string;
};

export const TEAM: TeamMember[] = [];
