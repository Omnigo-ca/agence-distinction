/**
 * CONTENU TEMPORAIRE — textes, témoignages et visuels fictifs.
 * Remplacer facilement par du contenu client validé (photos réelles, citations autorisées).
 */

import { media } from "@/lib/media"

export type MomentGalleryItem = {
  type?: "image" | "video"
  src: string
  alt: string
  /** Vignette pour les éléments vidéo */
  poster?: string
  layout?: "wide" | "tall" | "hero"
  objectPosition?: string
}

/** @deprecated Utiliser MomentGalleryItem */
export type MomentGalleryImage = MomentGalleryItem

export type MomentTestimonial = {
  quote: string
  author: string
  role: string
}

export type MomentEvent = {
  slug: string
  href: string
  cardTitle: string
  cardDescription: string
  coverImage: string
  /** Cadrage de la photo carte (section À propos) */
  coverImagePosition?: string
  heroImage: string
  heroTitle: string
  heroIntro: string
  date: string
  venue: string
  editorial: string[]
  gallery: MomentGalleryItem[]
  testimonials: MomentTestimonial[]
}

export const recentMomentsSection = {
  title: "Voyez nos derniers moments",
  subtitle:
    "Découvrez quelques-uns des moments récents qui ont fait chanter, sourire et rassembler les résidents.",
} as const

export const momentEvents: MomentEvent[] = [
  {
    slug: "saint-jean",
    href: "/moments/saint-jean",
    cardTitle: "Une Saint-Jean tout en musique",
    cardDescription:
      "Une journée festive aux couleurs du Québec, portée par la musique, les sourires et les chansons rassembleuses.",
    coverImage: media("saint-jean-moment.png"),
    coverImagePosition: "center center",
    heroImage: media("saint-jean-moment.png"),
    heroTitle: "Une Saint-Jean tout en musique",
    heroIntro:
      "Une célébration festive où les chansons québécoises ont rassemblé les résidents dans une ambiance remplie de joie.",
    date: "24 juin 2026",
    venue: "Résidence privée pour aînés, Montérégie",
    editorial: [
      "Dès l'ouverture de la salle commune, l'ambiance s'est teintée de bleu et de blanc. Des petits drapeaux discrets, des tables dressées avec soin et l'attente joyeuse des résidents annonçaient une fête à la hauteur de la Saint-Jean.",
      "L'artiste a ouvert le spectacle avec des classiques québécois que plusieurs connaissaient par cœur. Très vite, les voix se sont mêlées, les mains ont battu la mesure et les sourires se sont multipliés autour de la scène.",
      "Ce qui nous a le plus touchés, ce sont ces moments où les résidents se sont regardés, ont échangé un mot, ont repris le refrain ensemble. La musique est devenue un fil conducteur, une façon simple et chaleureuse de célébrer nos racines communes.",
      "En terminant sur une chanson rassembleuse, l'artiste a laissé derrière lui une énergie douce et festive. Plusieurs résidents en parlaient encore le lendemain, avec ce petit éclat dans le regard qu'on reconnaît quand un moment a vraiment compté.",
    ],
    gallery: [
      {
        src: media("saint-jean-card-poster.png"),
        alt: "Artiste qui chante une chanson sur le vif pour faire plaisir à un résident lors de la Saint-Jean",
        layout: "hero",
        objectPosition: "center center",
      },
      {
        type: "video",
        src: media("saint-jean-moment.mp4"),
        poster: media("saint-jean-moment-poster.png"),
        alt: "Résidents qui célèbrent la Saint-Jean, mains levées en chanson",
        objectPosition: "center center",
      },
      {
        src: media("saint-jean-moment.png"),
        alt: "Célébration de la Saint-Jean en résidence, drapeau du Québec et résidents",
        layout: "wide",
        objectPosition: "center center",
      },
    ],
    testimonials: [
      {
        quote:
          "Les résidents ont chanté du début à la fin. L'ambiance était incroyable et l'artiste a su créer un véritable lien avec le public.",
        author: "Sophie L.",
        role: "Responsable des loisirs",
      },
      {
        quote:
          "Nous avons retrouvé des chansons que nous n'avions pas entendues depuis longtemps. Cela nous a fait beaucoup de bien.",
        author: "Résidente participante",
        role: "",
      },
      {
        quote:
          "Une belle façon de célébrer la Saint-Jean ensemble. L'organisation était simple et le moment a vraiment rassemblé notre communauté.",
        author: "Lucie M.",
        role: "Technicienne en loisirs",
      },
    ],
  },
  {
    slug: "apres-midi-retro",
    href: "/moments/apres-midi-retro",
    cardTitle: "Un après-midi au rythme des souvenirs",
    cardDescription:
      "Des classiques intemporels, une ambiance chaleureuse et des résidents heureux de retrouver les chansons de leur époque.",
    coverImage: media("apres-midi-retro-moment.png"),
    coverImagePosition: "center center",
    heroImage: media("apres-midi-retro-moment.png"),
    heroTitle: "Un après-midi au rythme des souvenirs",
    heroIntro:
      "Un voyage musical dans le temps, où chaque mélodie a ravivé des souvenirs et créé de nouveaux moments de complicité.",
    date: "15 mars 2026",
    venue: "RPA, Lanaudière",
    editorial: [
      "L'après-midi s'est installé doucement dans la salle d'activités, avec une lumière chaude et une décoration sobre qui rappelait les années d'autrefois. Dès les premières notes, on a senti que ce serait un moment hors du temps.",
      "Le répertoire a été choisi avec soin : des chansons familières, des refrains que plusieurs résidents ont reconnus avant même la fin du premier couplet. Certains ont fermé les yeux, d'autres ont tapé du pied, et plusieurs ont murmuré les paroles de mémoire.",
      "L'artiste a pris le temps de créer des échanges simples entre chaque pièce, invitant les résidents à partager un souvenir ou un anecdote. Ces petites conversations ont donné à l'activité une dimension humaine très précieuse.",
      "Quand la prestation s'est terminée, plusieurs résidents sont restés un moment pour remercier l'artiste. On a compris que cet après-midi rétro avait fait plus que divertir : il avait réveillé des émotions, des images et des sourires qu'on aime retrouver en milieu de vie.",
    ],
    gallery: [
      {
        src: media("apres-midi-retro-moment.png"),
        alt: "Artiste en prestation devant les résidents en après-midi",
        layout: "hero",
        objectPosition: "center center",
      },
      {
        src: media("Larocque, Marie-Josée", "20231006_130634 principale.jpg"),
        alt: "Musicienne en prestation en milieu de vie",
        objectPosition: "center center",
      },
      {
        src: media(
          "Larocque, Marie-Josée",
          "Agence_Distinction_Marie-Josée_Larocque_2400x1350_3.jpg"
        ),
        alt: "Prestation live en salle commune, participation des résidents",
        layout: "wide",
        objectPosition: "center center",
      },
    ],
    testimonials: [
      {
        quote:
          "Le choix musical était parfaitement adapté à notre clientèle. Plusieurs résidents ont même dansé.",
        author: "Marie-Claude T.",
        role: "Technicienne en loisirs",
      },
      {
        quote:
          "J'ai reconnu presque toutes les chansons. C'était comme revivre de beaux moments de ma jeunesse.",
        author: "Gilles R.",
        role: "Résident participant",
      },
      {
        quote:
          "Une activité douce, bien rythmée et très appréciée. On sentait que l'artiste connaissait bien ce public.",
        author: "Nathalie P.",
        role: "Responsable des loisirs",
      },
    ],
  },
  {
    slug: "temps-des-fetes",
    href: "/moments/temps-des-fetes",
    cardTitle: "La magie des Fêtes en résidence",
    cardDescription:
      "Un moment musical rempli de douceur, de lumière et d'émotion pour célébrer ensemble le temps des Fêtes.",
    coverImage: media("Larocque, Marie-Josée", "20231220_132034 Noel.jpg"),
    coverImagePosition: "center 35%",
    heroImage: media("Larocque, Marie-Josée", "20231220_132034 Noel.jpg"),
    heroTitle: "La magie des Fêtes en résidence",
    heroIntro:
      "Un spectacle doux et lumineux qui a enveloppé la résidence d'une chaleur festive, au rythme des chansons de Noël.",
    date: "12 décembre 2025",
    venue: "CHSLD, Estrie",
    editorial: [
      "À l'approche des Fêtes, la résidence avait déjà pris des airs de fête. Des guirlandes discrètes, une lumière plus douce et l'attente des résidents donnaient à ce spectacle une saveur particulière.",
      "L'artiste est entré en scène avec un répertoire pensé pour évoquer la magie de Noël sans tomber dans l'excès. Des mélodies connues, des arrangements chaleureux et une présence rassurante qui a rapidement mis tout le monde à l'aise.",
      "On a vu des résidents se prendre la main, d'autres fermer les yeux pour mieux écouter, et plusieurs reprendre en chœur les refrains qu'ils affectionnent depuis toujours. Ce spectacle a créé ce sentiment rare d'être ensemble, simplement, au bon moment.",
      "En quittant la salle, plusieurs résidents ont parlé de ce moment comme d'un des plus beaux de la saison. Pas spectaculaire, pas bruyant — juste humain, tendre et exactement ce qu'il fallait pour illuminer l'hiver.",
    ],
    gallery: [
      {
        src: media("Larocque, Marie-Josée", "20231220_132034 Noel.jpg"),
        alt: "Prestation musicale de Noël en résidence",
        layout: "hero",
        objectPosition: "center 35%",
      },
      {
        src: media("Larocque, Marie-Josée", "20231205_101614 chic 3.jpg"),
        alt: "Spectacle des Fêtes devant un sapin décoré en résidence",
        layout: "wide",
        objectPosition: "center center",
      },
    ],
    testimonials: [
      {
        quote:
          "Un spectacle doux, généreux et très humain. Les résidents en parlent encore.",
        author: "Annie B.",
        role: "Responsable de la programmation",
      },
      {
        quote:
          "Les chansons de Noël ont apporté beaucoup de réconfort. Plusieurs résidents ont eu les larmes aux yeux, dans le bon sens.",
        author: "Hélène D.",
        role: "Technicienne en loisirs",
      },
      {
        quote:
          "C'était exactement l'ambiance qu'on souhaitait pour débuter la période des Fêtes. Simple, beau et très bien reçu.",
        author: "Résident participant",
        role: "",
      },
    ],
  },
]

export function getMomentBySlug(slug: string): MomentEvent | undefined {
  return momentEvents.find((event) => event.slug === slug)
}

export function getAllMomentSlugs(): string[] {
  return momentEvents.map((event) => event.slug)
}
