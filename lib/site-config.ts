import { mediaAssets } from "./media"

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

export type ServiceLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  price?: string
  featured?: boolean
  icon?: string
  links?: ServiceLink[]
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
  logo: {
    official: "/images/agence-distinction/Logo_Officiel.png",
    signature: "/images/agence-distinction/Logo_Signature.png",
    alt: "Agence Distinction",
  },
  seo: {
    title: "Agence Distinction | Spectacles et animations pour résidences et événements",
    description:
      "Créez des moments inoubliables avec l'Agence Distinction. Spectacles musicaux, thématiques et animations adaptées aux résidences, RPA, CHSLD et organisations.",
    openGraphLocale: "fr_CA",
  },
  cta: {
    label: "Planifiez votre agenda de spectacles",
    href: "/soumission",
  },
  secondaryCta: {
    label: "Trouver une thématique",
    href: "/thematiques",
  },
  calendly: {
    label: "Prendre rendez-vous avec Marie-Josée",
    href: "https://calendly.com/info-8d6k/rencontre-google-meet",
  },
  contact: {
    goal: "formulaire" as ContactGoal,
    phone: "514-260-1569",
    email: "info@agencedistinction.ca",
    address: "Montréal, Montérégie, Estrie, Lanaudière, Laurentides, Capitale-Nationale, Mauricie",
    bookingUrl: "https://calendly.com/info-8d6k/rencontre-google-meet",
    formFields: [
      "name",
      "phone",
      "email",
      "serviceType",
      "eventDate",
      "cityAddress",
      "budget",
      "theme",
      "needsRecommendation",
      "annualProgramming",
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
    "promo",
    "process",
    "testimonials",
    "faq",
  ] satisfies SiteSection[],
  credibility: {
    line:
      "Bientôt 10 ans d'expérience · Partenaire du RQRA · Plus de 10 000 représentations",
    specialty:
      "Spécialisée auprès des aînés autonomes et en perte d'autonomie",
    cards: [
      {
        value: "~10 ans",
        subtitle: "D'EXPÉRIENCE",
        description:
          "Une expertise reconnue auprès des milieux de vie pour aînés.",
        icon: "award",
      },
      {
        value: "RQRA",
        subtitle: "PARTENAIRE RECONNU",
        description:
          "Fier partenaire du Réseau québécois des résidences pour aînés.",
        icon: "handshake",
      },
      {
        value: "10 000+",
        subtitle: "REPRÉSENTATIONS",
        description:
          "Des milliers de moments musicaux qui ont fait sourire et rassembler.",
        icon: "heart-handshake",
      },
    ],
  },
  rqraAdvantage:
    "Avantage membre RQRA : 5 % de rabais à la signature d'un contrat admissible, selon les modalités applicables.",
  regions: {
    title: "Des spectacles offerts dans plusieurs régions du Québec.",
    items: [
      "Montréal",
      "Montérégie",
      "Estrie",
      "Lanaudière",
      "Laurentides",
      "Capitale-Nationale",
      "Mauricie",
    ],
  },
  hero: {
    headline:
      "Des spectacles qui font sourire, chanter et rassembler vos résidents.",
    subtitle:
      "Pour les RPA, CHSLD et résidences, l’Agence Distinction vous aide à planifier des spectacles chaleureux, thématiques et adaptés à vos résidents.",
    video: "/images/agence-distinction/agence-distinction-promo-01-ed.mp4",
    image: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_9.jpg",
  },
  services: {
    title: "Services",
    subtitle:
      "L'Agence Distinction aide les responsables loisirs à planifier leur agenda de spectacles, choisir les bonnes thématiques et trouver les artistes adaptés. Décrivez votre occasion, on vous guide vers la bonne expérience.",
    items: [
      {
        title: "Spectacles pour RPA et résidences",
        description:
          "Des prestations live fiables et chaleureuses, pensées pour les aînés autonomes en milieu de vie.",
        featured: true,
        icon: "home",
      },
      {
        title: "Troubadours en unités de soins",
        description:
          "Des animations musicales en chambre, adaptées aux résidents en perte d'autonomie.",
        icon: "heart",
      },
      {
        title: "Soirées dansantes et animations musicales",
        description:
          "Soirées dansantes, country, rétro… Des prestations énergiques qui font bouger, sourire et rassembler vos résidents.",
        icon: "music",
        links: [{ label: "Découvrir", href: "/thematiques" }],
      },
      {
        title: "Spectacles thématiques",
        description:
          "Fêtes, saisons et ambiances nostalgiques : Noël, St-Jean, cabane à sucre, chansons d'autrefois… Des activités prêtes à réserver ou à personnaliser.",
        icon: "sparkles",
        links: [
          { label: "Voir les fêtes", href: "/thematiques" },
          { label: "Explorer les saisons", href: "/thematiques" },
          { label: "Trouver l'ambiance", href: "/thematiques" },
        ],
      },
      {
        title: "Cérémonies, hommages et commémorations",
        description:
          "Représentation d'artistes avec respect et sensibilité pour les moments importants, les hommages musicaux et les cérémonies commémoratives.",
        icon: "flower",
        links: [{ label: "Découvrir", href: "/services" }],
      },
      {
        title: "Programmation annuelle ou mensuelle",
        description:
          "Bâtissez votre calendrier de spectacles pour l'année entière avec un accompagnement simple, structuré et adapté à votre établissement.",
        icon: "calendar",
        links: [{ label: "Bâtir ma programmation", href: "/rpa-chsld" }],
      },
      {
        title: "Spectacles corporatifs et événements sur mesure",
        description:
          "Pour entreprises, villes et organisations : un événement unique, une surprise ou un moment humain et mémorable, adapté à votre vision.",
        icon: "building",
        links: [{ label: "En parler", href: "/soumission" }],
      },
    ] satisfies Service[],
  },
  moments: {
    title: "Choisissez le moment, on vous aide à créer l'ambiance",
    subtitle:
      "Pas besoin de savoir quel artiste choisir, décrivez votre occasion et on vous guide vers la bonne expérience.",
  },
  themes: {
    title: "Thématiques populaires",
    subtitle:
      "Trouvez la thématique parfaite pour votre prochain spectacle, on vous aide à choisir l'ambiance adaptée à vos résidents et à votre calendrier d'activités.",
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
      "Techniciennes et responsables loisirs, on connaît votre réalité : remplir un calendrier, trouver des idées fiables et offrir des moments stimulants à vos résidents.",
    ctaLabel: "Découvrir notre approche",
    ctaHref: "/soumission",
    flipCards: [
      {
        title: "Une agence humaine et accessible",
        subtitle: "Un accompagnement attentif à chaque étape",
        description:
          "Marie-Josée et son équipe prennent le temps de comprendre votre établissement, votre public et vos besoins avant de vous recommander une formule.",
        features: [
          "Écoute personnalisée",
          "Réponses rapides",
          "Conseils adaptés",
          "Suivi humain",
        ],
        variant: "rose",
      },
      {
        title: "Une expertise adaptée aux aînés",
        subtitle: "Des prestations pensées pour les milieux de vie",
        description:
          "Les artistes et les formules sont choisis selon le niveau d'autonomie, l'ambiance recherchée et la réalité de vos résidents.",
        features: [
          "RPA et CHSLD",
          "Unités de soins",
          "Artistes expérimentés",
          "Formats adaptés",
        ],
        variant: "burgundy",
      },
      {
        title: "Une planification simplifiée",
        subtitle: "Moins de recherche, plus de tranquillité",
        description:
          "L'agence vous aide à choisir les thématiques, coordonne les artistes et prend en charge les détails essentiels de la prestation.",
        features: [
          "Recommandations",
          "Contrats",
          "Confirmations",
          "Coordination",
        ],
        variant: "cream",
      },
      {
        title: "Des moments qui font du bien",
        subtitle: "Joie, souvenirs et participation",
        description:
          "Chaque événement est pensé pour créer une expérience chaleureuse qui fait sourire, chanter et rassembler les résidents.",
        features: [
          "Participation",
          "Bien-être",
          "Souvenirs",
          "Moments humains",
        ],
        variant: "gold",
      },
    ],
  },
  promo: {
    title: "Planifiez votre programmation de spectacles, un mois à la fois.",
    description:
      "Marie-Josée vous accompagne dans le choix des artistes, des thématiques et des moments clés de l'année pour bâtir une programmation variée, adaptée et simple à organiser, idéalement avec 1 spectacle par mois.",
    benefits: [
      "Moins de recherche à faire",
      "Une programmation plus variée",
      "Des spectacles adaptés aux résidents",
      "Des thématiques alignées avec les saisons",
      "Une coordination plus simple",
      "Un accompagnement humain",
    ],
    ctaLabel: "Bâtir ma programmation",
    ctaHref: "/soumission",
  },
  musicofolie: {
    title: "Un volet spécialisé pour les unités de soins",
    description:
      "L'Agence Distinction développe également un volet thérapeutique, orchestré par Musicofolie, pour offrir des animations musicales adaptées aux aînés en perte d'autonomie dans les unités de soins.",
  },
  about: {
    title: "Une agence née d'une passion pour les artistes, les gens et les moments qui rassemblent",
    subtitle: "L'histoire de Marie-Josée et de l'Agence Distinction",
    content: [
      "Bienvenue chez Agence Distinction, où la magie de la musique et des spectacles rencontre la sagesse et la joie de vivre des résidences pour retraités.",
      "Nous sommes bien plus qu'une simple agence de spectacles, nous sommes les artisans de moments inoubliables, les créateurs de souvenirs chaleureux, et les partenaires de confiance des responsables des loisirs à travers le pays.",
      "Derrière chaque prestation, il y a du travail invisible : comprendre vos besoins, cerner l'ambiance, choisir le bon artiste, coordonner les détails. Notre rôle, c'est de faire en sorte que tout semble simple, fluide et agréable le jour de l'événement.",
    ],
    image: mediaAssets.about.agency,
  },
  process: {
    title: "Organiser votre prochain spectacle devient simple",
    subtitle:
      "Un processus clair pour les responsables loisirs, de la planification de votre agenda au moment magique sur scène.",
    steps: [
      {
        step: "01",
        title: "Vous nous parlez de votre calendrier",
        description:
          "Décrivez votre établissement, vos résidents, vos dates ou laissez-nous vous guider vers une programmation.",
      },
      {
        step: "02",
        title: "On vous recommande la bonne formule",
        description:
          "Thématique, artiste ou prestation sur mesure, adaptée à votre public et à votre budget.",
      },
      {
        step: "03",
        title: "On coordonne la prestation",
        description:
          "Contrats, horaires, confirmations, tout est géré pour vous simplifier la vie.",
      },
      {
        step: "04",
        title: "Vos résidents profitent du moment",
        description:
          "Un spectacle stimulant, humain et chaleureux qui fait du bien à tous.",
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
          "[Témoignage à intégrer, commentaire d'une résidence partenaire]",
        author: "[Nom à confirmer]",
        role: "Responsable des loisirs",
        note: "À VALIDER, ne pas publier sans autorisation",
      },
      {
        quote:
          "[Témoignage à intégrer, retour d'expérience client]",
        author: "[Nom à confirmer]",
        role: "Directrice générale, Résidence",
        note: "À VALIDER, ne pas publier sans autorisation",
      },
      {
        quote:
          "[Témoignage à intégrer, commentaire partenaire]",
        author: "[Nom à confirmer]",
        role: "Coordonnatrice activités",
        note: "À VALIDER, ne pas publier sans autorisation",
      },
    ] satisfies Testimonial[],
  },
  faq: {
    title: "Questions fréquentes",
    subtitle:
      "Réponses courtes pour les responsables loisirs qui planifient des spectacles en milieu de vie.",
    items: [
      {
        question: "Quels types de spectacles offrez-vous en résidence pour aînés?",
        answer:
          "Spectacles musicaux, thématiques, soirées dansantes, troubadours en unités de soins, programmation annuelle et prestations corporatives. Chaque formule est adaptée à votre public.",
      },
      {
        question: "Est-ce que les spectacles sont adaptés aux personnes en perte d'autonomie?",
        answer:
          "Oui. Nos artistes sont sélectionnés pour ce public et nous offrons des prestations adaptées, incluant un volet thérapeutique en développement avec Musicofolie pour les unités de soins.",
      },
      {
        question: "Pouvez-vous nous aider à choisir une thématique?",
        answer:
          "Absolument. Décrivez-nous votre occasion ou cochez « J'aimerais une recommandation » dans le formulaire, on vous guidera vers la formule idéale.",
      },
      {
        question: "Est-il possible de réserver une programmation complète pour l'année?",
        answer:
          "Oui! Marie-Josée peut vous accompagner pour bâtir un calendrier de spectacles, idéalement avec 1 prestation par mois, alignée sur les saisons et les fêtes.",
      },
      {
        question: "Dans quelles régions vous déplacez-vous?",
        answer:
          "Montréal, Montérégie, Estrie, Lanaudière, Laurentides, Capitale-Nationale et Mauricie. Contactez-nous pour confirmer la disponibilité dans votre secteur.",
      },
      {
        question: "Offrez-vous des spectacles pour les unités de soins?",
        answer:
          "Oui, notamment avec nos troubadours et le volet Musicofolie en développement pour des animations musicales adaptées aux aînés en perte d'autonomie.",
      },
      {
        question: "Est-ce que vous offrez des spectacles corporatifs ou pour les villes?",
        answer:
          "Oui, nous offrons des prestations pour entreprises, villes et organisations qui souhaitent créer un moment humain et mémorable.",
      },
      {
        question: "Comment fonctionne une demande de soumission?",
        answer:
          "Remplissez le formulaire en ligne, décrivez votre besoin et on vous répond rapidement avec des recommandations adaptées. Vous pouvez aussi prendre rendez-vous avec Marie-Josée.",
      },
      {
        question: "Quel budget prévoir pour un spectacle?",
        answer:
          "Le budget varie selon l'artiste, la durée et le type de prestation. Indiquez une fourchette dans le formulaire et on vous proposera des options adaptées.",
      },
      {
        question: "Est-ce que les membres du RQRA ont droit à un avantage?",
        answer:
          "Oui. Avantage membre RQRA : 5 % de rabais à la signature d'un contrat admissible, selon les modalités applicables.",
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    title: "Prêt à planifier votre agenda de spectacles?",
    subtitle:
      "Parlez-nous de votre établissement, de vos résidents ou de votre calendrier d'activités. On vous aidera à trouver les thématiques et les artistes qui conviennent.",
    primaryLabel: "Planifiez votre agenda de spectacles",
    primaryHref: "/soumission",
    secondaryLabel: "Prendre rendez-vous avec Marie-Josée",
    secondaryHref: "https://calendly.com/info-8d6k/rencontre-google-meet",
  },
  contactSection: {
    title: "Planifiez votre agenda de spectacles",
    subtitle:
      "Décrivez votre besoin et on vous répond rapidement avec des recommandations adaptées à votre milieu de vie.",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Agence Distinction. Tous droits réservés.`,
  },
  pages: {
    thematiques: {
      title: "Trouvez la thématique parfaite pour votre prochain spectacle",
      subtitle:
        "Explorez des idées de spectacles, d'animations et d'expériences musicales pensées pour les résidences, les RPA, les CHSLD et les milieux de vie.",
    },
    services: {
      title: "Nos services",
      subtitle:
        "L'Agence Distinction aide les responsables loisirs à planifier leur agenda de spectacles, choisir les bonnes thématiques et trouver les artistes adaptés à leur public.",
    },
    rpaChsld: {
      title: "Des spectacles et animations pensés pour les milieux de vie",
      subtitle:
        "Un accompagnement humain pour les techniciennes et responsables loisirs des résidences, RPA et CHSLD, spectacles fiables, thématiques et programmation simplifiée.",
    },
    artistes: {
      title: "Les visages et les voix qui donnent vie à vos expériences",
      subtitle:
        "Nos artistes ne sont pas un catalogue, ce sont les talents qui créent le bon moment pour votre public.",
    },
    aPropos: {
      title: "Une agence née d'une passion pour les artistes, les gens et les moments qui rassemblent",
      subtitle: "Découvrez l'histoire et la mission de l'Agence Distinction.",
    },
    soumission: {
      title: "Planifiez votre agenda de spectacles",
      subtitle:
        "Décrivez votre besoin et on vous aide à trouver la thématique, l'artiste et la formule adaptées à vos résidents.",
    },
  },
} as const

export const isSectionEnabled = (section: SiteSection) =>
  (siteConfig.enabledSections as readonly SiteSection[]).includes(section)
