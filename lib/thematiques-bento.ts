import { media, themeImages } from "@/lib/media"

export type BentoMediaType = "image" | "video"

export type BentoThemeItem = {
  id: string
  slug: string
  type: BentoMediaType
  title: string
  desc: string
  url: string
  imagePosition?: string
  /** > 1 = dézoom (affiche plus de l'image). 1 ou absent = cadrage normal. */
  imageZoom?: number
  /** cover par défaut ; contain pour afficher l'image entière sans crop agressif */
  imageFit?: "cover" | "contain"
  /** Léger zoom visuel (ex. 1.08), appliqué via transform */
  imageScale?: number
  videoPoster?: string
  category: string
  filters: string[]
  mood: string
  audience: string
  idealMoment: string
  artists?: string[]
  cta: string
  span: string
}

const spanLarge = "col-span-1 row-span-1 lg:col-span-2 lg:row-span-2"
const spanTall = "col-span-1 row-span-1 lg:col-span-1 lg:row-span-2"
const spanWide = "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1"
const spanNormal = "col-span-1 row-span-1"

export const thematiquesBentoCategories = [
  "Fêtes et célébrations",
  "Saisons et traditions",
  "Événements thématiques",
  "Spectacles musicaux",
  "Animations interactives",
  "Moments commémoratifs",
  "Programmation RPA / CHSLD",
  "Expériences sur mesure",
] as const

export const thematiquesBentoFilters = [
  "Toutes",
  ...thematiquesBentoCategories,
] as const

export type ThematiquesBentoFilter = (typeof thematiquesBentoFilters)[number]

const cta = "Demander une proposition"

/** Ordre optimisé pour la grille dense (lg: 4 colonnes). */
export const thematiquesBentoItems: BentoThemeItem[] = [
  {
    id: "st-jean-baptiste",
    slug: "st-jean-baptiste",
    type: "image",
    title: "St-Jean-Baptiste",
    desc: "Une fête québécoise vibrante pour chanter, célébrer et créer une ambiance patriotique chaleureuse avec vos résidents.",
    url: themeImages.stJean,
    category: "Fêtes et célébrations",
    filters: ["Fêtes et célébrations"],
    mood: "Festive · Québécoise · Rassembleuse",
    audience: "Résidences, RPA, CHSLD et événements communautaires",
    idealMoment: "Fin juin, activités extérieures ou en salle commune",
    artists: ["Clément Courtois", "Miz Mia"],
    cta,
    span: spanLarge,
  },
  {
    id: "noel",
    slug: "noel",
    type: "image",
    title: "Noël",
    desc: "Un moment musical doux, lumineux et rassembleur pour célébrer la magie des Fêtes avec chaleur et émotion.",
    url: themeImages.noel,
    imagePosition: "55% center",
    category: "Fêtes et célébrations",
    filters: ["Fêtes et célébrations"],
    mood: "Magique · Chaleureuse · Réconfortante",
    audience: "Résidences, familles et milieux de vie",
    idealMoment: "Décembre, fêtes de fin d'année, événements familiaux",
    artists: ["Caroline Noel", "Mélane et Michel"],
    cta,
    span: spanTall,
  },
  {
    id: "saint-valentin",
    slug: "saint-valentin",
    type: "image",
    title: "Saint-Valentin",
    desc: "Des chansons d'amour, de la douceur et une ambiance tendre pour créer un moment rempli de souvenirs.",
    url: themeImages.saintValentin,
    category: "Fêtes et célébrations",
    filters: ["Fêtes et célébrations"],
    mood: "Romantique · Douce · Nostalgique",
    audience: "Résidences et milieux de vie",
    idealMoment: "Février, activité spéciale, après-midi musical",
    artists: ["Stéphanie Roy", "André Lahaie"],
    cta,
    span: spanNormal,
  },
  {
    id: "nouvel-an",
    slug: "nouvel-an",
    type: "image",
    title: "Nouvel An",
    desc: "Accueillez la nouvelle année avec une prestation festive qui fait sourire, chanter et rassembler.",
    url: themeImages.nouvelAn,
    category: "Fêtes et célébrations",
    filters: ["Fêtes et célébrations"],
    mood: "Festive · Optimiste · Participative",
    audience: "Résidences, RPA et événements corporatifs",
    idealMoment: "Fin décembre, début janvier, soirée de célébration",
    artists: ["Miz Mia", "Mélane et Michel"],
    cta,
    span: spanNormal,
  },
  {
    id: "fete-des-meres",
    slug: "fete-des-meres",
    type: "image",
    title: "Fête des Mères",
    desc: "Une prestation remplie de douceur et de reconnaissance pour souligner les femmes, les familles et les beaux souvenirs.",
    url: themeImages.feteMeres,
    category: "Fêtes et célébrations",
    filters: ["Fêtes et célébrations", "Programmation RPA / CHSLD"],
    mood: "Touchante · Élégante · Chaleureuse",
    audience: "Résidences, familles, événements intergénérationnels",
    idealMoment: "Mai, brunch, activité hommage en salle commune",
    artists: ["France Bernard", "Mélanie Haché"],
    cta,
    span: spanWide,
  },
  {
    id: "cabane-a-sucre",
    slug: "cabane-a-sucre",
    type: "image",
    title: "Cabane à sucre",
    desc: "Une ambiance festive, traditionnelle et rassembleuse pour faire chanter, sourire et revivre les souvenirs du printemps.",
    url: themeImages.cabaneSucre,
    category: "Saisons et traditions",
    filters: ["Saisons et traditions"],
    mood: "Chaleureuse · Québécoise · Participative",
    audience: "Résidences, RPA, CHSLD et activités saisonnières",
    idealMoment: "Printemps, repas thématiques, activités spéciales",
    artists: ["Clément Courtois", "Olivier Morissette"],
    cta,
    span: spanLarge,
  },
  {
    id: "carnaval",
    slug: "carnaval",
    type: "image",
    title: "Carnaval",
    desc: "Une ambiance hivernale festive avec musique québécoise, participation et bonne humeur garantie.",
    url: themeImages.carnaval,
    category: "Saisons et traditions",
    filters: ["Saisons et traditions"],
    mood: "Festive · Hivernale · Participative",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Février, activités hivernales, semaine carnaval",
    artists: ["Miz Mia", "Clément Courtois"],
    cta,
    span: spanNormal,
  },
  {
    id: "fete-des-peres",
    slug: "fete-des-peres",
    type: "image",
    title: "Fête des Pères",
    desc: "Un spectacle convivial et rassembleur pour célébrer les papas avec musique, souvenirs et bonne humeur.",
    url: themeImages.fetePeres,
    imagePosition: "center 80%",
    category: "Fêtes et célébrations",
    filters: ["Fêtes et célébrations"],
    mood: "Conviviale · Musicale · Nostalgique",
    audience: "Résidences, familles, groupes mixtes",
    idealMoment: "Juin, repas thématique, activité spéciale",
    artists: ["Normand Meilleur", "Steve Barry"],
    cta,
    span: spanNormal,
  },
  {
    id: "annees-retro",
    slug: "annees-retro",
    type: "image",
    title: "Années rétro",
    desc: "Un voyage musical dans les souvenirs avec les chansons qui ont marqué plusieurs générations.",
    url: themeImages.anneesRetro,
    category: "Spectacles musicaux",
    filters: ["Spectacles musicaux", "Animations interactives"],
    mood: "Nostalgique · Joyeuse · Participative",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Activités mensuelles, après-midis musicaux, soirées thématiques",
    artists: ["Trio Java", "Robby Bolduc"],
    cta,
    span: spanTall,
  },
  {
    id: "soiree-country",
    slug: "soiree-country",
    type: "image",
    title: "Soirée country",
    desc: "Une ambiance entraînante et accessible pour faire taper du pied, chanter et danser doucement.",
    url: themeImages.soireeCountry,
    category: "Spectacles musicaux",
    filters: ["Spectacles musicaux", "Animations interactives"],
    mood: "Énergique · Dansante · Sympathique",
    audience: "Résidences, soirées dansantes, événements corporatifs",
    idealMoment: "Soirées thématiques, fêtes, programmation mensuelle",
    artists: ["Julie Levac", "Anthony Lovison"],
    cta,
    span: spanNormal,
  },
  {
    id: "chansons-dautrefois",
    slug: "chansons-dautrefois",
    type: "image",
    title: "Chansons d'autrefois",
    desc: "Les grands classiques français et québécois qui touchent le cœur et éveillent les plus beaux souvenirs.",
    url: themeImages.chansonsAutrefois,
    category: "Spectacles musicaux",
    filters: ["Spectacles musicaux"],
    mood: "Nostalgique · Douce · Émouvante",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Programmation régulière, après-midis musicaux, hommages",
    artists: ["André Lahaie", "Olivier Morissette"],
    cta,
    span: spanNormal,
  },
  {
    id: "thematique-mexicaine",
    slug: "thematique-mexicaine",
    type: "image",
    title: "Thématique mexicaine",
    desc: "Une expérience musicale ensoleillée et conviviale pour transporter les résidents dans une ambiance chaleureuse.",
    url: media("thematiques", "mexicaine.png"),
    category: "Événements thématiques",
    filters: ["Événements thématiques"],
    mood: "Ensoleillée · Festive · Dépaysante",
    audience: "Résidences, activités estivales, événements thématiques",
    idealMoment: "Été, Cinco de Mayo, repas thématique",
    artists: ["Miz Mia", "Samba Jeri"],
    cta,
    span: spanNormal,
  },
  {
    id: "carnaval-de-rio",
    slug: "carnaval-de-rio",
    type: "image",
    title: "Thématique brésilienne / carnaval de Rio",
    desc: "Une thématique colorée, rythmée et stimulante pour créer une ambiance festive et dépaysante.",
    url: themeImages.carnavalRio,
    category: "Événements thématiques",
    filters: ["Événements thématiques", "Animations interactives"],
    mood: "Colorée · Rythmée · Festive",
    audience: "Résidences, événements spéciaux, fêtes d'été",
    idealMoment: "Carnaval, été, événements à thème",
    artists: ["Samba Jeri", "Miz Mia"],
    cta,
    span: spanWide,
  },
  {
    id: "danse-sociale",
    slug: "danse-sociale",
    type: "image",
    title: "Danse sociale",
    desc: "Une formule vivante pour faire bouger, sourire et rassembler les résidents autour d'une musique accessible.",
    url: media("Trio Java", "Trio_Java_2400x1350_7.jpg"),
    category: "Animations interactives",
    filters: ["Animations interactives", "Spectacles musicaux"],
    mood: "Dansante · Joyeuse · Participative",
    audience: "Résidences, RPA, événements spéciaux",
    idealMoment: "Soirées, fêtes, programmation mensuelle",
    artists: ["Trio Java", "Mélane et Michel"],
    cta,
    span: spanWide,
  },
  {
    id: "hommage-musical",
    slug: "hommage-musical",
    type: "image",
    title: "Hommage musical",
    desc: "Un moment délicat et sensible pour accompagner une cérémonie avec une prestation musicale adaptée et respectueuse.",
    url: media("Reid, Myriam", "Myriam_Reid_2400x1350_1.jpg"),
    category: "Moments commémoratifs",
    filters: ["Moments commémoratifs"],
    mood: "Respectueuse · Émotive · Sobre",
    audience: "Familles, cérémonies commémoratives, hommages",
    idealMoment: "Cérémonies, moments de recueillement, prestations personnalisées",
    artists: ["Myriam Reid"],
    cta,
    span: spanNormal,
  },
  {
    id: "moments-hommage-commemoration",
    slug: "moments-hommage-commemoration",
    type: "image",
    title: "Moments hommage / commémoration",
    desc: "Des prestations pensées avec délicatesse pour honorer un être cher et créer un moment de recueillement humain.",
    url: media("Reid, Myriam", "Myriam_Reid_2400x1350_2.jpg"),
    category: "Moments commémoratifs",
    filters: ["Moments commémoratifs", "Expériences sur mesure"],
    mood: "Recueillie · Sensible · Apaisante",
    audience: "Familles, résidences, cérémonies et hommages",
    idealMoment: "Commémorations, moments de mémoire, activités hommage",
    artists: ["Myriam Reid", "André Lahaie"],
    cta,
    span: spanNormal,
  },
  {
    id: "anniversaires-du-mois",
    slug: "anniversaires-du-mois",
    type: "image",
    title: "Anniversaires du mois",
    desc: "Célébrez chaque résident avec une prestation personnalisée qui fait sentir chacun unique et spécial.",
    url: themeImages.anniversairesMois,
    category: "Programmation RPA / CHSLD",
    filters: ["Programmation RPA / CHSLD"],
    mood: "Personnalisée · Chaleureuse · Joyeuse",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Chaque mois, activité récurrente, célébration des résidents",
    artists: ["Mélane et Michel", "Mélanie Haché"],
    cta,
    span: spanNormal,
  },
  {
    id: "journee-speciale-residents",
    slug: "journee-speciale-residents",
    type: "image",
    title: "Journée spéciale des résidents",
    desc: "Une activité marquante pour mettre vos résidents à l'honneur et créer un moment collectif mémorable.",
    url: media("Mélane et Michel", "Melane_Et_Michel_2400x1350_6.jpg"),
    category: "Programmation RPA / CHSLD",
    filters: ["Programmation RPA / CHSLD", "Expériences sur mesure"],
    mood: "Festive · Personnalisée · Rassembleuse",
    audience: "Résidences, RPA, CHSLD",
    idealMoment: "Journées thématiques, semaines spéciales, activités signature",
    artists: ["Mélane et Michel", "Mélanie Haché"],
    cta,
    span: spanWide,
  },
  {
    id: "evenements-intergenerationnels",
    slug: "evenements-intergenerationnels",
    type: "image",
    title: "Événements intergénérationnels",
    desc: "Des spectacles qui rapprochent les générations et créent des liens chaleureux entre résidents, familles et invités.",
    url: themeImages.intergenerationnel,
    category: "Expériences sur mesure",
    filters: ["Expériences sur mesure", "Programmation RPA / CHSLD"],
    mood: "Humaine · Chaleureuse · Inclusive",
    audience: "Résidences, familles, événements intergénérationnels",
    idealMoment: "Portes ouvertes, fêtes familiales, activités spéciales",
    artists: ["Mélane et Michel", "France Bernard"],
    cta,
    span: spanLarge,
  },
]

export function filterBentoItems(
  items: BentoThemeItem[],
  filter: ThematiquesBentoFilter
): BentoThemeItem[] {
  if (filter === "Toutes") return items
  return items.filter((item) => item.filters.includes(filter))
}

export function getBentoItemsBySlugs(slugs: string[]): BentoThemeItem[] {
  return slugs
    .map((slug) => thematiquesBentoItems.find((item) => item.slug === slug))
    .filter((item): item is BentoThemeItem => item != null)
}
