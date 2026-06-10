export type ContactGoal =
  | "appeler"
  | "formulaire"
  | "rendezVous"
  | "acheter"
  | "infolettre"

export type SiteSection =
  | "services"
  | "promo"
  | "about"
  | "process"
  | "portfolio"
  | "testimonials"
  | "faq"

export type NavLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  price?: string
  featured?: boolean
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  author: string
  role?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteConfig = {
  business: {
    name: "[À CONFIRMER : Nom de l'entreprise]",
    tagline: "[À CONFIRMER : Sous-titre / proposition de valeur]",
    description:
      "[À CONFIRMER : Description courte de l'entreprise, ~155 caractères pour le SEO]",
    region: "[À CONFIRMER : Région desservie]",
    locale: "fr" as const,
  },
  seo: {
    title: "[Entreprise] | [Service principal] à [Région]",
    description:
      "[À CONFIRMER : Meta description orientée conversion, ~155 caractères]",
    openGraphLocale: "fr_CA",
  },
  cta: {
    label: "[À CONFIRMER : Texte du bouton principal]",
    href: "#contact",
  },
  contact: {
    goal: "formulaire" as ContactGoal,
    phone: "[À CONFIRMER : Téléphone]",
    email: "[À CONFIRMER : Courriel]",
    address: "[À CONFIRMER : Adresse]",
    bookingUrl: "[À CONFIRMER : Lien Calendly / prise de rendez-vous]",
    formFields: ["name", "email", "phone", "message"] as const,
    recipientEmail: process.env.CONTACT_RECIPIENT_EMAIL ?? "",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  navigation: [
    { label: "Services", href: "#services" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  enabledSections: [
    "services",
    "about",
    "faq",
  ] satisfies SiteSection[],
  hero: {
    headline: "[À CONFIRMER : Headline orienté bénéfice client]",
    subtitle: "[À CONFIRMER : Sous-titre du hero]",
    badges: ["[À CONFIRMER : Badge confiance 1]", "[À CONFIRMER : Badge confiance 2]"],
  },
  services: {
    title: "Nos services",
    subtitle: "[À CONFIRMER : Sous-titre section services]",
    items: [
      {
        title: "[À CONFIRMER : Service 1]",
        description: "[À CONFIRMER : Description du service 1]",
        featured: true,
      },
      {
        title: "[À CONFIRMER : Service 2]",
        description: "[À CONFIRMER : Description du service 2]",
      },
      {
        title: "[À CONFIRMER : Service 3]",
        description: "[À CONFIRMER : Description du service 3]",
      },
    ] satisfies Service[],
  },
  promo: {
    title: "[À CONFIRMER : Titre promotion]",
    description: "[À CONFIRMER : Description de l'offre limitée]",
    ctaLabel: "[À CONFIRMER : CTA promotion]",
  },
  about: {
    title: "À propos",
    subtitle: "[À CONFIRMER : Sous-titre section à propos]",
    content: [
      "[À CONFIRMER : Paragraphe 1 — histoire, mission ou équipe]",
      "[À CONFIRMER : Paragraphe 2 — différenciateurs, expérience]",
    ],
  },
  process: {
    title: "Comment ça marche",
    subtitle: "[À CONFIRMER : Sous-titre section processus]",
    steps: [
      {
        step: "01",
        title: "[À CONFIRMER : Étape 1]",
        description: "[À CONFIRMER : Description étape 1]",
      },
      {
        step: "02",
        title: "[À CONFIRMER : Étape 2]",
        description: "[À CONFIRMER : Description étape 2]",
      },
      {
        step: "03",
        title: "[À CONFIRMER : Étape 3]",
        description: "[À CONFIRMER : Description étape 3]",
      },
    ] satisfies ProcessStep[],
  },
  portfolio: {
    title: "Réalisations",
    subtitle: "[À CONFIRMER : Sous-titre section portfolio]",
    items: [
      { title: "[À CONFIRMER : Projet 1]", category: "[Catégorie]" },
      { title: "[À CONFIRMER : Projet 2]", category: "[Catégorie]" },
      { title: "[À CONFIRMER : Projet 3]", category: "[Catégorie]" },
      { title: "[À CONFIRMER : Projet 4]", category: "[Catégorie]" },
    ],
  },
  testimonials: {
    title: "Témoignages",
    subtitle: "[À CONFIRMER : Sous-titre section témoignages]",
    items: [
      {
        quote: "[À CONFIRMER : Témoignage client — ne jamais inventer]",
        author: "[À CONFIRMER : Nom du client]",
        role: "[À CONFIRMER : Rôle ou entreprise]",
      },
    ] satisfies Testimonial[],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "[À CONFIRMER : Sous-titre section FAQ]",
    items: [
      {
        question: "[À CONFIRMER : Question 1]",
        answer: "[À CONFIRMER : Réponse 1]",
      },
      {
        question: "[À CONFIRMER : Question 2]",
        answer: "[À CONFIRMER : Réponse 2]",
      },
    ] satisfies FaqItem[],
  },
  contactSection: {
    title: "Contactez-nous",
    subtitle: "[À CONFIRMER : Sous-titre section contact]",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} [À CONFIRMER : Nom de l'entreprise]. Tous droits réservés.`,
  },
} as const

export const isSectionEnabled = (section: SiteSection) =>
  (siteConfig.enabledSections as readonly SiteSection[]).includes(section)
