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
  icon?: string
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
  note?: string
}

export type FaqItem = {
  question: string
  answer: string
}

export const siteConfig = {
  business: {
    name: "Agence Distinction",
    tagline: "Des expériences artistiques qui rassemblent",
    description:
      "Spectacles, animations et thématiques sur mesure pour résidences, RPA, CHSLD, organisations et événements humains partout au Québec.",
    region: "Québec",
    locale: "fr" as const,
  },
  seo: {
    title: "Agence Distinction | Spectacles et animations pour résidences et événements",
    description:
      "Créez des moments inoubliables avec l'Agence Distinction. Spectacles musicaux, thématiques et animations adaptées aux résidences, RPA, CHSLD et organisations.",
    openGraphLocale: "fr_CA",
  },
  cta: {
    label: "Demander une soumission",
    href: "/soumission",
  },
  secondaryCta: {
    label: "Trouver une thématique",
    href: "/thematiques",
  },
  contact: {
    goal: "formulaire" as ContactGoal,
    phone: "1-888-555-1234",
    email: "info@agencedistinction.ca",
    address: "Québec, Canada",
    bookingUrl: "/soumission",
    formFields: [
      "name",
      "organization",
      "establishmentType",
      "email",
      "phone",
      "city",
      "eventType",
      "eventDate",
      "participants",
      "ambiance",
      "theme",
      "budget",
      "needsRecommendation",
      "message",
    ] as const,
    recipientEmail: process.env.CONTACT_RECIPIENT_EMAIL ?? "",
  },
  social: {
    facebook: "https://www.facebook.com/agencedistinction",
    instagram: "",
    linkedin: "",
  },
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Thématiques", href: "/thematiques" },
    { label: "Services", href: "/services" },
    { label: "RPA / CHSLD", href: "/rpa-chsld" },
    { label: "Artistes", href: "/artistes" },
    { label: "À propos", href: "/a-propos" },
  ] satisfies NavLink[],
  enabledSections: [
    "services",
    "process",
    "testimonials",
    "faq",
  ] satisfies SiteSection[],
  hero: {
    headline:
      "Des spectacles et animations qui transforment vos événements en moments inoubliables",
    subtitle:
      "L'Agence Distinction accompagne les résidences, organisations et partenaires avec des expériences artistiques chaleureuses, thématiques et adaptées à leur public.",
    reassurance:
      "Spectacles, animations et expériences sur mesure pour résidences, organisations et événements humains.",
    badges: [
      "Résidences & RPA",
      "Thématiques clés en main",
      "Artistes sélectionnés avec soin",
    ],
    video: "/images/agence-distinction/agence-distinction-promo-01-ed.mp4",
    image: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_9.jpg",
  },
  services: {
    title: "Des expériences pensées pour votre public",
    subtitle:
      "Que vous planifiez une fête, une saison ou une programmation annuelle, on vous aide à trouver la formule idéale.",
    items: [
      {
        title: "Spectacles musicaux",
        description:
          "Des prestations live qui font chanter, sourire et rassembler vos résidents ou invités.",
        featured: true,
        icon: "music",
      },
      {
        title: "Animations thématiques",
        description:
          "Fêtes, saisons, ambiances — des activités prêtes à réserver ou à personnaliser.",
        icon: "sparkles",
      },
      {
        title: "Programmation RPA / CHSLD",
        description:
          "Un accompagnement adapté aux responsables loisirs et aux milieux de vie.",
        icon: "home",
      },
      {
        title: "Événements saisonniers",
        description:
          "Cabane à sucre, carnaval, Noël… Des moments qui suivent le rythme de l'année.",
        icon: "leaf",
      },
      {
        title: "Expériences sur mesure",
        description:
          "Une vision particulière? On crée l'événement qui correspond à votre occasion.",
        icon: "wand",
      },
      {
        title: "Cérémonies commémoratives",
        description:
          "Un accompagnement respectueux et sensible pour des moments importants.",
        icon: "flower",
      },
    ] satisfies Service[],
  },
  moments: {
    title: "Choisissez le moment, on vous aide à créer l'ambiance",
    subtitle:
      "Pas besoin de savoir quel artiste choisir — décrivez votre occasion et on vous guide vers la bonne expérience.",
  },
  themes: {
    title: "Thématiques populaires",
    subtitle:
      "Trouvez la thématique parfaite pour votre prochain événement et laissez-nous donner vie à l'ambiance.",
    viewAllLabel: "Voir toutes les thématiques",
    viewAllHref: "/thematiques",
  },
  artists: {
    title: "Des artistes choisis pour créer le bon moment",
    subtitle:
      "Chaque prestation est pensée selon votre public, votre lieu et l'ambiance recherchée. L'agence vous aide à choisir les artistes qui donneront vie à votre événement.",
    viewAllLabel: "Découvrir nos artistes",
    viewAllHref: "/artistes",
  },
  benefits: {
    title: "Une agence qui comprend autant les artistes que les milieux de vie",
    subtitle:
      "Plus qu'une banque d'artistes — un partenaire humain qui crée des moments mémorables.",
  },
  promo: {
    title: "Planifiez votre programmation annuelle",
    description:
      "Simplifiez l'organisation de vos activités pour l'année entière avec un accompagnement personnalisé.",
    ctaLabel: "Bâtir ma programmation",
  },
  about: {
    title: "Une agence née d'une passion pour les artistes, les gens et les moments qui rassemblent",
    subtitle: "L'histoire de Marie-Josée et de l'Agence Distinction",
    content: [
      "Bienvenue chez Agence Distinction, où la magie de la musique et des spectacles rencontre la sagesse et la joie de vivre des résidences pour retraités.",
      "Nous sommes bien plus qu'une simple agence de spectacles — nous sommes les artisans de moments inoubliables, les créateurs de souvenirs chaleureux, et les partenaires de confiance des responsables des loisirs à travers le pays.",
      "Derrière chaque prestation, il y a du travail invisible : comprendre vos besoins, cerner l'ambiance, choisir le bon artiste, coordonner les détails. Notre rôle, c'est de faire en sorte que tout semble simple, fluide et agréable le jour de l'événement.",
    ],
    image: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_3.jpg",
  },
  process: {
    title: "Organiser votre prochain événement devient simple",
    subtitle:
      "Un processus clair et humain, de la première conversation au moment magique sur scène.",
    steps: [
      {
        step: "01",
        title: "Vous nous parlez de votre événement",
        description:
          "Décrivez votre occasion, votre public, l'ambiance recherchée ou laissez-nous vous guider.",
      },
      {
        step: "02",
        title: "On vous recommande la bonne formule",
        description:
          "Thématique, artiste ou prestation sur mesure — on trouve l'expérience qui convient.",
      },
      {
        step: "03",
        title: "On coordonne la prestation",
        description:
          "Contrats, horaires, confirmations — tout est géré pour vous simplifier la vie.",
      },
      {
        step: "04",
        title: "Vous profitez du moment",
        description:
          "Un événement mémorable avec vos résidents, invités ou participants.",
      },
    ] satisfies ProcessStep[],
  },
  portfolio: {
    title: "Moments en images",
    subtitle: "Des prestations qui créent des souvenirs",
    items: [
      { title: "Soirée St-Jean", category: "Fête thématique" },
      { title: "Cabane à sucre", category: "Événement saisonnier" },
      { title: "Années rétro", category: "Soirée dansante" },
      { title: "Noël en chansons", category: "Fête de fin d'année" },
    ],
  },
  testimonials: {
    title: "Ce que nos partenaires en disent",
    subtitle:
      "Des témoignages qui nous inspirent à offrir des prestations toujours plus mémorables.",
    items: [
      {
        quote:
          "[Témoignage à intégrer — commentaire d'une résidence partenaire]",
        author: "[Nom à confirmer]",
        role: "Responsable des loisirs",
        note: "À VALIDER — ne pas publier sans autorisation",
      },
      {
        quote:
          "[Témoignage à intégrer — retour d'expérience client]",
        author: "[Nom à confirmer]",
        role: "Directrice générale, Résidence",
        note: "À VALIDER — ne pas publier sans autorisation",
      },
      {
        quote:
          "[Témoignage à intégrer — commentaire partenaire]",
        author: "[Nom à confirmer]",
        role: "Coordonnatrice activités",
        note: "À VALIDER — ne pas publier sans autorisation",
      },
    ] satisfies Testimonial[],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle: "Tout ce que vous devez savoir avant de planifier votre événement",
    items: [
      {
        question: "Comment choisir la bonne thématique pour mon événement?",
        answer:
          "Décrivez-nous votre occasion, votre public et l'ambiance recherchée. Si vous n'êtes pas certain, cochez l'option « J'aimerais une recommandation » dans le formulaire — on vous guidera vers la formule idéale.",
      },
      {
        question: "Est-ce que vous vous déplacez partout au Québec?",
        answer:
          "Oui, nous desservons les résidences, RPA, CHSLD et organisations partout au Québec. Contactez-nous pour confirmer la disponibilité dans votre région.",
      },
      {
        question: "Puis-je planifier une programmation pour toute l'année?",
        answer:
          "Absolument! Nous offrons un accompagnement pour bâtir votre calendrier d'activités annuel. C'est simple, structuré et adapté à votre budget.",
      },
      {
        question: "Comment fonctionne le processus de réservation?",
        answer:
          "Envoyez-nous une demande de soumission, on échange sur vos besoins, on vous recommande la bonne formule, puis on coordonne tous les détails. Vous n'avez qu'à profiter du moment.",
      },
      {
        question: "Les artistes sont-ils habitués au public aîné?",
        answer:
          "Oui, notre réseau d'artistes est sélectionné avec soin pour sa capacité à créer des liens authentiques avec les résidents et à s'adapter à chaque milieu de vie.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    title: "Prêt à créer votre prochain moment Distinction?",
    subtitle:
      "Parlez-nous de votre événement, de votre public ou de l'ambiance que vous aimeriez créer. On vous aidera à trouver la formule qui convient.",
    primaryLabel: "Demander une soumission",
    primaryHref: "/soumission",
    secondaryLabel: "Obtenir une recommandation",
    secondaryHref: "/soumission",
  },
  contactSection: {
    title: "Demandez une soumission",
    subtitle:
      "Décrivez votre événement et on vous répond rapidement avec des recommandations adaptées.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Agence Distinction. Tous droits réservés.`,
  },
  pages: {
    thematiques: {
      title: "Trouvez la thématique parfaite pour votre prochain événement",
      subtitle:
        "Fêtes, saisons, ambiances musicales — choisissez un moment et on vous aide à créer l'expérience.",
    },
    services: {
      title: "Nos services",
      subtitle:
        "Spectacles, animations et accompagnement pour créer des moments qui rassemblent.",
    },
    rpaChsld: {
      title: "Des spectacles et animations pensés pour les milieux de vie",
      subtitle:
        "Un accompagnement humain, simple et adapté aux responsables loisirs des résidences, RPA et CHSLD.",
    },
    artistes: {
      title: "Les visages et les voix qui donnent vie à vos expériences",
      subtitle:
        "Nos artistes ne sont pas un catalogue — ce sont les talents qui créent le bon moment pour votre public.",
    },
    aPropos: {
      title: "Une agence née d'une passion pour les artistes, les gens et les moments qui rassemblent",
      subtitle: "Découvrez l'histoire et la mission de l'Agence Distinction.",
    },
    soumission: {
      title: "Demandez une soumission",
      subtitle:
        "Décrivez votre événement et on vous aide à trouver la thématique, l'artiste et la formule qui conviennent.",
    },
  },
} as const

export const isSectionEnabled = (section: SiteSection) =>
  (siteConfig.enabledSections as readonly SiteSection[]).includes(section)
