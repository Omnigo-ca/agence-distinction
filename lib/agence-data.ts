import { media, themeImages } from "@/lib/media"

export type Theme = {
  slug: string
  title: string
  description: string
  mood: string
  audience: string
  idealMoment: string
  cta: string
  image: string
  imagePosition?: string
  category: string
  artists?: string[]
}

export type Moment = {
  title: string
  description: string
  cta: string
  href: string
  icon: string
}

export type Artist = {
  name: string
  intention: string
  style: string
  audience: string
  description: string
  image: string
  slug: string
  /** false = conserve le cadrage d'origine (ex. photo paysage) */
  imageFill?: boolean
}

export type Benefit = {
  title: string
  description: string
}

export type Stat = {
  value: string
  label: string
  note: string
}

export type GalleryImage = {
  title: string
  category: string
  image: string
}

export type AgencyVideo = {
  title: string
  description: string
  src: string
  poster: string
}

export const themeCategories = [
  "Fêtes annuelles",
  "Saisons",
  "Ambiances musicales",
  "Événements RPA",
  "Hommages",
  "Activités interactives",
  "Soirées dansantes",
  "Programmation annuelle",
] as const

export const themes: Theme[] = [
  {
    slug: "st-jean-baptiste",
    title: "St-Jean-Baptiste",
    description:
      "Une fête québécoise vibrante pour chanter, célébrer et créer une ambiance patriotique chaleureuse.",
    mood: "Festive · Québécoise · Rassembleuse",
    audience: "Résidences, RPA, CHSLD et événements communautaires",
    idealMoment: "Fin juin, activités extérieures ou salle commune",
    cta: "Créer cette activité",
    image: themeImages.stJean,
    category: "Fêtes annuelles",
    artists: ["Clément Courtois", "Miz Mia"],
  },
  {
    slug: "fete-des-peres",
    title: "Fête des Pères",
    description:
      "Un hommage musical touchant pour souligner les papas et créer un moment de complicité et de souvenirs.",
    mood: "Nostalgique · Chaleureuse · Émouvante",
    audience: "Résidences, familles et organisations",
    idealMoment: "Mi-juin, brunch ou activité après-midi",
    cta: "Créer cette activité",
    image: themeImages.fetePeres,
    imagePosition: "center 80%",
    category: "Fêtes annuelles",
    artists: ["Normand Meilleur", "Steve Barry"],
  },
  {
    slug: "fete-des-meres",
    title: "Fête des Mères",
    description:
      "Des chansons douces et des moments précieux pour célébrer les mamans avec émotion et tendresse.",
    mood: "Douce · Émouvante · Intime",
    audience: "Résidences, RPA, CHSLD et événements familiaux",
    idealMoment: "Mi-mai, activité en salle commune",
    cta: "Créer cette activité",
    image: themeImages.feteMeres,
    category: "Fêtes annuelles",
    artists: ["France Bernard", "Mélanie Haché"],
  },
  {
    slug: "noel",
    title: "Noël",
    description:
      "La magie des fêtes en musique — chants traditionnels, ambiance chaleureuse et esprit de partage.",
    mood: "Magique · Chaleureuse · Traditionnelle",
    audience: "Tous les milieux de vie et événements corporatifs",
    idealMoment: "Décembre, programmation festive",
    cta: "Créer cette activité",
    image: themeImages.noel,
    category: "Fêtes annuelles",
    artists: ["Caroline Noel", "Mélane et Michel"],
  },
  {
    slug: "nouvel-an",
    title: "Nouvel An",
    description:
      "Accueillez la nouvelle année avec une prestation festive qui fait sourire et rassembler.",
    mood: "Festive · Optimiste · Participative",
    audience: "Résidences, RPA et événements corporatifs",
    idealMoment: "Fin décembre, début janvier",
    cta: "Créer cette activité",
    image: themeImages.nouvelAn,
    category: "Fêtes annuelles",
    artists: ["Miz Mia", "Mélane et Michel"],
  },
  {
    slug: "saint-valentin",
    title: "Saint-Valentin",
    description:
      "Des mélodies romantiques et nostalgiques pour célébrer l'amour et les beaux souvenirs.",
    mood: "Romantique · Douce · Nostalgique",
    audience: "Résidences et milieux de vie",
    idealMoment: "Mi-février, activité intime en salle",
    cta: "Créer cette activité",
    image: themeImages.saintValentin,
    category: "Fêtes annuelles",
    artists: ["Stéphanie Roy", "André Lahaie"],
  },
  {
    slug: "carnaval",
    title: "Carnaval",
    description:
      "Une ambiance hivernale festive avec musique québécoise, participation et bonne humeur garantie.",
    mood: "Festive · Hivernale · Participative",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Février, activités hivernales",
    cta: "Créer cette activité",
    image: themeImages.carnaval,
    category: "Saisons",
    artists: ["Miz Mia", "Clément Courtois"],
  },
  {
    slug: "cabane-a-sucre",
    title: "Cabane à sucre",
    description:
      "Une ambiance festive, traditionnelle et rassembleuse pour faire chanter, sourire et revivre les souvenirs du printemps.",
    mood: "Chaleureuse · Québécoise · Participative",
    audience: "Résidences, RPA, CHSLD et événements familiaux",
    idealMoment: "Printemps, activités saisonnières",
    cta: "Créer cette activité",
    image: themeImages.cabaneSucre,
    category: "Saisons",
    artists: ["Clément Courtois", "Olivier Morissette"],
  },
  {
    slug: "annees-retro",
    title: "Années rétro",
    description:
      "Replongez vos résidents dans les grandes époques musicales qui font revivre les plus beaux souvenirs.",
    mood: "Nostalgique · Énergique · Participative",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Toute l'année, soirées thématiques",
    cta: "Créer cette activité",
    image: themeImages.anneesRetro,
    category: "Ambiances musicales",
    artists: ["Trio Java", "Robby Bolduc"],
  },
  {
    slug: "soiree-country",
    title: "Soirée country",
    description:
      "Bottes, guitares et chansons country pour une soirée dansante pleine d'énergie et de convivialité.",
    mood: "Énergique · Dansante · Conviviale",
    audience: "Résidences actives et événements corporatifs",
    idealMoment: "Soirées dansantes, activités spéciales",
    cta: "Créer cette activité",
    image: themeImages.soireeCountry,
    category: "Soirées dansantes",
    artists: ["Julie Levac", "Anthony Lovison"],
  },
  {
    slug: "carnaval-de-rio",
    title: "Carnaval de Rio",
    description:
      "Couleurs, rythmes latins et ambiance festive pour transporter vos résidents sous le soleil.",
    mood: "Exotique · Festive · Colorée",
    audience: "Résidences et milieux de vie",
    idealMoment: "Activités spéciales, été",
    cta: "Créer cette activité",
    image: themeImages.carnavalRio,
    category: "Activités interactives",
    artists: ["Samba Jeri", "Miz Mia"],
  },
  {
    slug: "chansons-dautrefois",
    title: "Chansons d'autrefois",
    description:
      "Les grands classiques français et québécois qui touchent le cœur et éveillent les plus beaux souvenirs.",
    mood: "Nostalgique · Douce · Émouvante",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Programmation régulière, hommages",
    cta: "Créer cette activité",
    image: themeImages.chansonsAutrefois,
    category: "Ambiances musicales",
    artists: ["André Lahaie", "Olivier Morissette"],
  },
  {
    slug: "anniversaires-du-mois",
    title: "Anniversaires du mois",
    description:
      "Célébrez chaque résident avec une prestation personnalisée qui fait sentir chacun unique et spécial.",
    mood: "Personnalisée · Chaleureuse · Joyeuse",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Chaque mois, activité récurrente",
    cta: "Créer cette activité",
    image: themeImages.anniversairesMois,
    category: "Événements RPA",
    artists: ["Mélane et Michel", "Mélanie Haché"],
  },
]

export const moments: Moment[] = [
  {
    title: "Célébrer une fête",
    description:
      "Noël, St-Jean, Fête des Mères… On vous aide à choisir la thématique parfaite.",
    cta: "Voir les fêtes",
    href: "/thematiques",
    icon: "party",
  },
  {
    title: "Souligner une saison",
    description:
      "Cabane à sucre, carnaval, été… Des activités qui suivent le rythme de l'année.",
    cta: "Explorer les saisons",
    href: "/thematiques",
    icon: "leaf",
  },
  {
    title: "Faire danser les résidents",
    description:
      "Soirées dansantes, country, rétro… Des prestations qui font bouger et sourire.",
    cta: "Découvrir",
    href: "/thematiques",
    icon: "music",
  },
  {
    title: "Créer un moment nostalgique",
    description:
      "Chansons d'autrefois, hommages musicaux… Des émotions qui touchent le cœur.",
    cta: "Trouver l'ambiance",
    href: "/thematiques",
    icon: "heart",
  },
  {
    title: "Organiser une activité spéciale",
    description:
      "Un événement unique, une surprise, une première… On s'adapte à votre vision.",
    cta: "En parler",
    href: "/soumission",
    icon: "sparkles",
  },
  {
    title: "Offrir un hommage musical",
    description:
      "Des prestations respectueuses et touchantes pour des moments importants.",
    cta: "Découvrir",
    href: "/services",
    icon: "flower",
  },
  {
    title: "Bâtir une programmation annuelle",
    description:
      "Planifiez vos activités pour l'année entière avec un accompagnement simplifié.",
    cta: "Bâtir ma programmation",
    href: "/rpa-chsld",
    icon: "calendar",
  },
]

export const artists: Artist[] = [
  {
    name: "André Lahaie",
    intention: "Pour créer un moment nostalgique",
    style: "Violoncelle · Classique · Pop · Chansons françaises",
    audience: "Résidences, RPA, CHSLD",
    description:
      "Virtuose du violoncelle, André marie élégance et émotion dans un répertoire éclectique et touchant.",
    image: media("Lahaie, André", "André_Lahaie_Agence_Distinction_570x570.jpg"),
    slug: "andre-lahaie",
  },
  {
    name: "Mélane et Michel",
    intention: "Pour faire danser",
    style: "Duo chanteuse & pianiste · Variété · Québécois",
    audience: "Résidences, RPA, CHSLD",
    description:
      "Un duo chaleureux et participatif qui crée des moments de joie et de complicité avec les résidents.",
    image: media(
      "Mélane et Michel",
      "Duo_Chanteuse_Mélane_et_Pianiste_Michel_Desjardins_570x570.jpg"
    ),
    slug: "melane-et-michel",
  },
  {
    name: "Trio Java",
    intention: "Pour une fête énergique",
    style: "Années 20-60 · Jazz · Swing · Rétro",
    audience: "Résidences actives, soirées dansantes",
    description:
      "Des classiques entraînants qui font lever les résidents et recréent l'énergie des grandes époques.",
    image: media("Trio Java", "Agence_Distinction_Trio_Java_570x570.jpg"),
    slug: "trio-java",
  },
  {
    name: "Mélanie Haché",
    intention: "Pour une ambiance douce et intime",
    style: "Chanson française · Pop · Acoustique",
    audience: "Milieux de vie, événements intimes",
    description:
      "Une voix chaleureuse et une présence bienveillante qui créent des moments de proximité.",
    image: media(
      "Haché, Mélanie",
      "Chanteuse_Mélanie_Haché__570x570_Agence_Distinction.jpeg"
    ),
    slug: "melanie-hache",
  },
  {
    name: "Stéphanie Roy",
    intention: "Pour une ambiance douce et intime",
    style: "Chanson française · Variété",
    audience: "Résidences, RPA, événements familiaux",
    description:
      "Une interprète sensible qui touche le cœur avec des mélodies douces et émouvantes.",
    image: media(
      "Roy, Stéphanie",
      "Agence_Distinction_Chanteuse_Stéphanie_Roy_570x570.jpg"
    ),
    slug: "stephanie-roy",
  },
  {
    name: "Clément Courtois",
    intention: "Pour une fête énergique",
    style: "Chanson québécoise · Pop · Festif",
    audience: "Résidences, événements communautaires",
    description:
      "Une énergie contagieuse et un répertoire québécois qui fait chanter et sourire.",
    image: media(
      "Courtois, Clément",
      "Chanteur_Clément_Courtois_Agence_Distinction_570x570.jpg"
    ),
    slug: "clement-courtois",
  },
  {
    name: "Julie Levac",
    intention: "Pour faire danser",
    style: "Country · Line dance · Heaven Band",
    audience: "Résidences actives, soirées dansantes",
    description:
      "Guitares, bottes et bonne humeur pour des soirées country mémorables.",
    image: media("Levac, Julie", "Agence_Distinction_Julie_Levac_570x570.jpg"),
    slug: "julie-levac",
  },
  {
    name: "Olivier Morissette",
    intention: "Pour créer un moment nostalgique",
    style: "Chansonnier · Québécois · Intemporel",
    audience: "Résidences, RPA, CHSLD",
    description:
      "Les grands classiques québécois interprétés avec authenticité et émotion.",
    image: media(
      "Morissette, Olivier",
      "Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_570x570.jpg"
    ),
    slug: "olivier-morissette",
  },
  {
    name: "Miz Mia",
    intention: "Pour une fête énergique",
    style: "Variété · Latino · Festif",
    audience: "Résidences, événements thématiques",
    description:
      "Couleurs, rythmes et bonne humeur pour des prestations vibrantes et participatives.",
    image: media("Miz Mia", "Agence_Distinction_Chanteuse_Miz_Mia_570x570_1.jpg"),
    slug: "miz-mia",
  },
  {
    name: "France Bernard",
    intention: "Pour une ambiance douce et intime",
    style: "Chanson française · Classique · Émotion",
    audience: "Milieux de vie, hommages",
    description:
      "Une voix élégante pour des moments musicaux touchants et raffinés.",
    image: media(
      "Bernard, France",
      "Agence_Distinction_Chanteuse_France_Bernard_2400x1350_3.jpg"
    ),
    slug: "france-bernard",
  },
  {
    name: "Caroline Noel",
    intention: "Pour une programmation musicale variée",
    style: "Variété · Fêtes · Saisonnier",
    audience: "Résidences, programmation annuelle",
    description:
      "Un répertoire festif et adaptable, parfait pour les célébrations de fin d'année.",
    image: media("Noel, Caroline", "Chanteuse_Caroline_Noel_570x570.jpg"),
    slug: "caroline-noel",
  },
  {
    name: "Myriam Reid",
    intention: "Pour créer un moment nostalgique",
    style: "Harpe · Classique · Hommages",
    audience: "Cérémonies, milieux de vie, moments intimes",
    description:
      "Les cordes de la harpe pour des instants d'une beauté et d'une douceur uniques.",
    image: media(
      "Reid, Myriam",
      "Agence_Distinction_Myriam_Reid_Harpiste-570x570.jpg"
    ),
    slug: "myriam-reid",
  },
  {
    name: "Samba Jeri",
    intention: "Pour une fête énergique",
    style: "Samba · Carnaval · Latino",
    audience: "Résidences, activités spéciales",
    description:
      "Rythmes brésiliens et ambiance carnavalesque pour des prestations hautes en couleur.",
    image: media(
      "Samba Jeri",
      "430962312_1356782161655710_3526931209767677816_n.jpg"
    ),
    slug: "samba-jeri",
    imageFill: false,
  },
  {
    name: "Danse Orientale Samaya Baladi",
    intention: "Pour une activité interactive",
    style: "Danse orientale · Participatif · Culturel",
    audience: "Résidences, activités spéciales",
    description:
      "Une prestation visuelle et immersive qui émerveille et fait voyager.",
    image: media(
      "Danse Orientale Samaya Baladi",
      "Samaya_Baladi_570x570.jpeg"
    ),
    slug: "samaya-baladi",
  },
  {
    name: "Steve Barry",
    intention: "Pour une programmation musicale variée",
    style: "Chanson · Pop · Rock",
    audience: "Tous publics",
    description:
      "Un répertoire varié et une présence scénique qui captive l'audience.",
    image: media(
      "Barry, Steve",
      "Chanteur_Steve_Barry_Agence_Distinction_570x570.jpg"
    ),
    slug: "steve-barry",
  },
]

export const artistIntentions = [
  "Pour faire danser",
  "Pour créer un moment nostalgique",
  "Pour une ambiance douce et intime",
  "Pour une fête énergique",
  "Pour une programmation musicale variée",
] as const

export const benefits: Benefit[] = [
  {
    title: "Une agence humaine et accessible",
    description:
      "Marie-Josée et son équipe sont à l'écoute, disponibles et bienveillantes à chaque étape.",
  },
  {
    title: "Une programmation adaptée aux aînés",
    description:
      "Des prestations pensées pour les résidences, RPA, CHSLD et les milieux de vie.",
  },
  {
    title: "Des artistes sélectionnés avec soin",
    description:
      "Un réseau de talents fiables, professionnels et habitués à ce public précieux.",
  },
  {
    title: "Des thématiques faciles à réserver",
    description:
      "Choisissez un moment, une ambiance ou une fête — on s'occupe du reste.",
  },
  {
    title: "Une gestion simplifiée",
    description:
      "Coordination, contrats, confirmations : tout est géré pour vous faciliter la vie.",
  },
  {
    title: "Une approche clé en main",
    description:
      "De la recommandation à la prestation, un accompagnement complet et sans stress.",
  },
  {
    title: "Des moments qui font du bien",
    description:
      "Joie, participation, souvenirs et bien-être au cœur de chaque événement.",
  },
  {
    title: "Une équipe qui comprend votre réalité",
    description:
      "Nous connaissons les défis des responsables loisirs et des milieux de vie.",
  },
]

export const stats: Stat[] = [
  {
    value: "X",
    label: "événements réalisés",
    note: "À VALIDER",
  },
  {
    value: "35+",
    label: "artistes dans le réseau",
    note: "Basé sur les dossiers médias — à confirmer",
  },
  {
    value: "X",
    label: "années d'expérience",
    note: "À VALIDER",
  },
  {
    value: "X",
    label: "partenaires accompagnés",
    note: "À VALIDER",
  },
]

export const galleryImages: GalleryImage[] = [
  {
    title: "Prestation en résidence",
    category: "RPA / CHSLD",
    image: media("Mélane et Michel", "IMG_20230126_194117[7853].jpg"),
  },
  {
    title: "Soirée années rétro",
    category: "Thématique",
    image: media("Trio Java", "Trio_Java_2400x1350_7.jpg"),
  },
  {
    title: "La Corde Sensible",
    category: "Moment nostalgique",
    image: media(
      "Lahaie, André",
      "Agence_Distinction_Andre_Lahaie_2400x1350_2.jpg"
    ),
  },
  {
    title: "Fête de la St-Jean",
    category: "Événement saisonnier",
    image: themeImages.stJean,
  },
  {
    title: "Magie de Noël",
    category: "Fête annuelle",
    image: themeImages.noel,
  },
  {
    title: "Danse et participation",
    category: "Animation",
    image: media(
      "Danse Orientale Samaya Baladi",
      "DonyaDanse05272023181_.jpg"
    ),
  },
  {
    title: "Duo en prestation",
    category: "Spectacle musical",
    image: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_6.jpg"),
  },
  {
    title: "Ambiance country",
    category: "Soirée dansante",
    image: media("Levac, Julie", "Band_438.jpg"),
  },
]

export const agencyVideos: AgencyVideo[] = [
  {
    title: "L'Agence Distinction",
    description:
      "Découvrez l'univers chaleureux de l'agence et la magie de ses prestations.",
    src: media("agence-distinction-promo-01-ed.mp4"),
    poster: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_9.jpg"),
  },
  {
    title: "Mélane et Michel en prestation",
    description:
      "Un aperçu d'une animation musicale en milieu de vie — joie, participation et souvenirs.",
    src: media("Mélane et Michel", "VID_20230126_194016.mp4"),
    poster: media("Mélane et Michel", "IMG_20230126_194117[7853].jpg"),
  },
]

export const detailedServices = [
  {
    title: "Spectacles musicaux",
    description:
      "Des prestations live adaptées à votre public, votre espace et l'ambiance recherchée.",
    image: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_6.jpg"),
  },
  {
    title: "Animations pour résidences",
    description:
      "Des activités pensées pour les résidents : participation, nostalgie et moments de joie.",
    image: media("Mélane et Michel", "IMG_20230126_194117[7853].jpg"),
  },
  {
    title: "Programmation thématique",
    description:
      "Fêtes, saisons, ambiances musicales — des formules prêtes à réserver ou à personnaliser.",
    image: media("Trio Java", "Trio_Java_2400x1350_7.jpg"),
  },
  {
    title: "Événements saisonniers",
    description:
      "Cabane à sucre, carnaval, Noël… Des activités qui suivent le calendrier de l'année.",
    image: themeImages.noel,
  },
  {
    title: "Prestations sur mesure",
    description:
      "Une vision particulière? On crée l'expérience qui correspond à votre événement.",
    image: media(
      "Haché, Mélanie",
      "Agence_Distinction_Melanie_Hache_2400x1350_9.jpg"
    ),
  },
  {
    title: "Événements corporatifs",
    description:
      "Émerveillez vos collègues avec des animations professionnelles et mémorables.",
    image: media(
      "Daouni, Aziz",
      "Agence_Distinction_Aziz_Daouni_2400x1350_1.jpg"
    ),
  },
  {
    title: "Cérémonies commémoratives",
    description:
      "Un accompagnement respectueux et sensible pour des moments importants.",
    image: media(
      "Reid, Myriam",
      "Agence_Distinction_Myriam_Reid_Harpiste-570x570.jpg"
    ),
  },
  {
    title: "Accompagnement planification",
    description:
      "On vous aide à bâtir votre calendrier d'activités pour l'année entière.",
    image: media("Mélane et Michel", "RPA Affiche concert M&M.png"),
  },
]
