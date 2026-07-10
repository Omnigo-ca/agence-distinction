/**
 * Données artistes extraites de https://agencedistinction.ca/les-artistes/
 * Généré le 2026-07-10 — ne pas éditer à la main.
 * Regénérer : node scripts/scrape-all-artists.mjs && node scripts/generate-artists-ts.mjs
 */

export type ArtistVideoType = "local" | "youtube" | "vimeo"

export type ArtistVideo = {
  title?: string
  url: string
  type?: ArtistVideoType
  thumbnail?: string
}

export type ArtistGalleryItem = {
  url: string
  alt: string
}

export type ArtistProfile = {
  id: string
  slug: string
  name: string
  image: string
  secondaryImage?: string
  videoHero?: string
  videoPoster?: string
  shortDescription?: string
  biography?: string
  primaryCategory?: string
  categories: string[]
  instruments?: string[]
  musicalStyles?: string[]
  formats?: string[]
  performanceTypes?: string[]
  themes?: string[]
  eventTypes?: string[]
  audiences?: string[]
  repertoire?: string[]
  languages?: string[]
  regions?: string[]
  videos?: ArtistVideo[]
  gallery?: ArtistGalleryItem[]
  sourceUrl?: string
}

/** Alias slug → slug canonique (ex. cartes accueil) */
export const artistSlugAliases: Record<string, string> = {
  "melane-et-michel": "melane-et-michel-desjardins",
  "danse-orientale-samaya-baladi": "samaya-baladi"
}

export const artistProfiles: ArtistProfile[] = [
  {
    id: "88",
    slug: "andre-lahaie",
    name: "André Lahaie",
    image: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Andr%C3%A9_Lahaie_Agence_Distinction_570x570.jpg",
    biography: "Fort d'une carrière musicale riche de plus de 40 ans sur la scène québécoise, André Lahaie, accompagné de son fidèle violoncelle, vous invite à découvrir l'univers envoûtant de La Corde Sensible. Ce virtuose du violoncelle marie avec élégance et virtuosité un répertoire éclectique, puisant dans les trésors de la musique classique, les mélodies intemporelles de la pop, la nostalgie des chansons françaises, les émotions captivantes des musiques de films, et bien plus encore.\n\nDe Bach à Schubert, de Fauré à Piazzola, chaque note résonne avec une profondeur émotionnelle, transportant l'auditoire à travers les siècles et les genres musicaux. Joni Mitchell et les Beatles se mêlent harmonieusement aux grands compositeurs classiques, offrant ainsi un voyage musical inoubliable, où la tradition rencontre la modernité dans un crescendo captivant. La magie opère aussi bien lors de réceptions privées intimistes que sur les terrasses ensoleillées, les vernissages artistiques, les unions sacrées des mariages ou encore lors de prestations scéniques captivantes. La formule proposée par André Lahaie et La Corde Sensible s'adapte avec fluidité à tous les événements, apportant une touche d'élégance et de raffinement, ainsi qu'une ambiance envoûtante à chaque occasion. Laissez-vous emporter par la magie du violoncelle et des mélodies intemporelles, pour un moment musical qui restera gravé dans les mémoires.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=glnBEl0belU",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andre_Lahaie_1.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andre_Lahaie_2.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andre_Lahaie_220x500_1.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andre_Lahaie_220x500_2.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andre_Lahaie_2400x1350_1.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andre_Lahaie_2400x1350_2.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Agence_Distinction_Andr%C3%A9_Lahaie_Agence_Distinction_370x370_2.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "/images/agence-distinction/Lahaie%2C%20Andr%C3%A9/Andr%C3%A9_Lahaie_Agence_Distinction_370x370.jpg",
        alt: "Lahaie, André"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Andre_Lahaie_2400x1350_2.jpg",
        alt: "André Lahaie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/André_Lahaie_Agence_Distinction_370x370_2.jpg",
        alt: "André Lahaie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/André_Lahaie_Agence_Distinction_370x370.jpg",
        alt: "André Lahaie"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/88/André-Lahaie"
  },
  {
    id: "233",
    slug: "anick-gagnon",
    name: "Anick Gagnon",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003841_ccf65098eef46f38e973.jpg",
    biography: "Une voix puissante, une présence lumineuse\n\nIssue d’une famille de musiciens, Anick Gagnon baigne dans la musique depuis toujours. Sa voix exceptionnelle l’a menée aux quatre coins du Canada, aux États-Unis et jusqu’en Asie. On a pu l’entendre au Cirque du Soleil (Crystal) et lors de la cérémonie d’ouverture des Jeux panaméricains de Toronto. Participante à La Voix dans l’équipe d’Éric Lapointe, elle poursuit sa carrière avec trois albums à succès et deux nominations au Gala Country. Sur scène, Anick rayonne par son énergie positive et sa complicité naturelle avec le public. Elle propose des spectacles sur mesure, adaptés à chaque groupe, où s’enchaînent classiques francophones, succès rétro et coups de cœur populaires. \n💫 Formules offertes : Spectacle solo intimiste\nDuo guitare-voix ou piano-voix\nBand complet pour les grands événements\nAvec Anick Gagnon, chaque prestation devient un moment rempli de chaleur, de plaisir et d’émotions.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo",
      "chanteur(se)/pianiste",
      "groupe de musique (band)",
      "soliste"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo",
      "Duo - Chanteur(se)/Pianiste",
      "Groupe de musique (Band)",
      "Soliste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=nmgilxEBoio",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=6lbjPOe82KI",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=4Hng_8XO7DY",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=PDXFQkDsgJE",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003592_5198313d767a47bac664.jpg",
        alt: "Anick Gagnon"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003581_baa3f90b1347e569fb86.jpg",
        alt: "Anick Gagnon"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003584_52ed738428f75d7bc16a.jpg",
        alt: "Anick Gagnon"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003573_0539cb7dac7d74b954cb.jpg",
        alt: "Anick Gagnon"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003570_7bbdf44870d8576af51f.jpg",
        alt: "Anick Gagnon"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003577_7d463a0463b5204e1cd1.jpg",
        alt: "Anick Gagnon"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763003588_cdb6004b71789e3df9c4.jpg",
        alt: "Anick Gagnon"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/233/anick-gagnon"
  },
  {
    id: "178",
    slug: "annie-thibault",
    name: "Annie Thibault",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/photo_Annie_flute_570_x_570.jpeg",
    biography: "Annie Thibault a étudié la flûte traversière au Conservatoire de musique de Québec avec Barbara Todd-Simard et Jean Morin, obtenant un prix en flûte et en musique de chambre. Elle participe à de nombreux stages au Domaine Forget avec les maîtres Trevor Wye, Alain Marion. Leone Buyse et Raymond Guiot et également au réputé Tanglewood Center of Music et reçoit une bourse d’étude pour s’y perfectionner auprès de Doriot Dwyer. Elle participe également à un stage de perfectionnement avec le flûtiste William Bennett qui a eu une influence notable sur son jeu d’interprétation.\n\nPar la suite, Annie oriente sa carrière en tant que musicienne d’orchestre et obtient un Diplôme d’études supérieures spécialisées en répertoire d’orchestre à l’Université de Montréal auprès du flûtiste Denis Bluteau. Elle joue le plus souvent à Québec au sein de l’Orchestre symphonique de Québec et également au sein d’autres orchestres tels que l’Orchestre de musique de chambre Gilles Auger, l’Orchestre du Domaine Forget, le Thunder Bay Symphony Orchestra et l’Orchestre du festival de musique contemporaine de Québec.\n\nEn plus de se produire actuellement avec l’ensemble de flûtes Les flûtistes de Montréal avec qui elle y joue également du piccolo et de la flûte en sol, Annie se produit encore régulièrement dans la région montréalaise au sein de l’Orchestre symphonique de l’Isle où elle a pu interpréter le Poème de Charles Griffes avec orchestre. Elle se produit également au sein de l’ensemble Tantango avec José Maria Gianelli en duo flûte et piano, pour y interpréter des pièces du répertoire tango mais aussi, et de plus en plus, des pièces du répertoire latin pour y jouer des sambas, des bossas nova, des chorros, etc. Également, en compagnie du pianiste Stéphane Lance, elle interprète plusieurs pièces du répertoire de flûte plus classique et moderne. Elle se produit également avec d’autres orchestres dont l’orchestre du Chœur d’été de Montréal et du chœur de Laval avec le chef Dany Wiseman, l’orchestre du chœur de La Prairie avec Martin Dagenais, l’orchestre Azimut pour le spectacle le fantôme de l’opéra et aussi l’orchestre du spectacle Edgar et ses fantômes où elle y joue la flûte solo.\n\nDes volutes de flûte (SOLO)\n\nC’est un grand honneur de pouvoir partager avec vous ce moment particulier par le biais de la musique. Aujourd'hui, je vous propose une performance riche et variée, à travers des pièces aussi diverses que captivantes.\n\nLa flûte, avec son timbre doux et aérien, possède une capacité unique à toucher les cœurs et à évoquer des émotions profondes. En prestation solo, je jouerai une sélection de morceaux plus classiques, avec ses harmonies subtiles et son élégance intemporelle et en duo, des compositions empreintes des rythmes envoûtants du tango et des sonorités vivantes de la musique brésilienne et latines.\n\nQue vous soyez en quête de moments de réflexion, de célébration ou simplement de plaisir musical, cette diversité de répertoire a été soigneusement choisie pour apporter sérénité, réconfort et joie. Fermez les yeux, laissez-vous emporter par les volutes musicales et laissez la musique vous envelopper.\n\nAux saveurs latines (DUO) Un voyage imaginaire au cœur de l’Amérique latine et de l’Argentine où les rythmes du Rio de la Plata mais aussi du Brésil et de Cuba, se mélangent aux airs folkloriques traditionnels. Animé par maestro José Maria Gianelli et la flûtiste Annie Thibault, ce sont des classiques latins que vous pourrez savourer en leur présence singulière!",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=7pnuamrVyqM",
        type: "youtube"
      }
    ],
    gallery: [],
    sourceUrl: "https://agencedistinction.ca/artists/view/178/Annie-Thibault"
  },
  {
    id: "131",
    slug: "anthony-lovison",
    name: "Anthony Lovison",
    image: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Chanteur_Anthony_Lovison_570x570_2.jpg",
    biography: "Anthony Lovison a fait le tour du monde comme chansonnier. Il a joué dans son pays natal en France, en Nouvelle-Calédonie, en Australie, en Nouvelle-Zélande, en Thaïlande, au Japon, aux États-Unis. Il se spécialise autant dans les succès français que dans les hits de l’heure. Accompagné de sa guitare, ce chanteur à la voix riche et puissante vous bercera par ses reprises des plus grands succès d'ici et d'ailleurs.\n\nAprès plusieurs distinctions telles que la première partie de Garou, les prix du meilleur album rock/folk et le prix du public aux Flèches de la musique 2015, Étoile du métro de Montréal, artiste du Club Med et plus d'un million de visites sur sa page Youtube, Anthony continue son parcours musical au Québec dans son univers pop/folk.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=BB77Tlwd2Rs",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=RzvW6JWYa0o",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=uekMKo-A-CI",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=hCGPsQnpb7U",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=EkS9zqehxrk",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=q3ReoC9QOv8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=NzZyYovo-_o",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=mHidUmOrWsY",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Anthony_Lovison_220x500_1.jpg",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Anthony_Lovison_220x500_2.png",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Anthony_Lovison_Banniere_2400x1350_1.jpg",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Chanteur_Anthony_Lovison_370x370.jpg",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Chanteur_Anthony_Lovison_370x370_2.jpg",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Agence_Distinction_Chanteur_Anthony_Lovison_570x570.jpg",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Anthony%20Lovison.jpg",
        alt: "Lovison, Anthony"
      },
      {
        url: "/images/agence-distinction/Lovison%2C%20Anthony/Anthony%20Lovison.png",
        alt: "Lovison, Anthony"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Anthony_Lovison_Banniere_2400x1350_1.jpg",
        alt: "Anthony Lovison"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1781205971_c99b4e56a0e8fc35d8e8.jpg",
        alt: "Anthony Lovison"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1781205966_053c944da0f7df6119d6.jpg",
        alt: "Anthony Lovison"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1781205982_6a90d9495752a3c52b1c.jpg",
        alt: "Anthony Lovison"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1781205988_7ca90ca5dcc1d63b418b.jpg",
        alt: "Anthony Lovison"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1781205958_f163c81ff33ec79a79f1.jpg",
        alt: "Anthony Lovison"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/131/Anthony-Lovison"
  },
  {
    id: "166",
    slug: "antoine-vrana",
    name: "Antoine Vrana",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Antoine_Vrana_-_570x570.jpeg",
    biography: "Né d'un père guitariste classique et d'une mère flûtiste, Antoine Vrana plonge dans l'univers de la musique dès un très jeune âge.\n\nFormé en Théâtre Musical au Collège Lionel-Groulx et en écriture de chansons à l'École Nationale de la Chanson de Granby, Antoine ne cesse de cumuler les expériences professionnelles depuis qu'il est artiste à son compte.\n\nExplorateur de la vie et des arts, ce dernier nous offre son cœur dans une grande sensibilité dotée d'une touche comique indéniable.\n\nCe musicien, chanteur, comédien, animateur et clown possède plus d'une corde à son arc pour assurer un spectacle de qualité, bourré de nuances et de moments magiques et amusants.\n\nC'est dans une joie candide et une grande sincérité qu'il nous chante les plus grands succès de l'époque, dans un spectacle dynamique et interactif.\n\nPlusieurs formules sont disponibles afin de faire passer des moments magiques à vos résidents : animation musicale avec le projet Musicofolie, formule spectacle acoustique solo et duo familial avec son père guitariste classique, Sydney Vrana !\n\nLe plaisir sera au rendez-vous !",
    primaryCategory: "auteur",
    categories: [
      "auteur",
      "compositeur",
      "interprète",
      "chanteur(se)",
      "guitariste"
    ],
    themes: [
      "Atelier musical pour aînés",
      "Cabane à sucre",
      "Chanson française",
      "Fête des mères",
      "Fête du printemps",
      "Jour de l'an",
      "Noël",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Auteur-compositeur-interprète",
      "Chanteur(se)",
      "Guitariste"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Animation et personnages"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=n1sJVvxtvFU",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=V01IZruU7DI",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=_MhHVjV6vGQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=Ia5j2zDPi6g",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence-Distinction-Antoine-Vrana-Banniere-v2.jpg",
        alt: "Antoine Vrana"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/166/Antoine-Vrana"
  },
  {
    id: "225",
    slug: "ateliers-pour-aines-musicofolie",
    name: "Ateliers pour aînés Musicofolie",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761063442_e8256696771be2a32041.jpg",
    biography: "NOS ATELIERS\n\nDans le but de soutenir les potentialités cognitives, motrices, affectives, sociales et créatives des ainés, les ateliers Musicofolie présentent des animations musicales adaptées et évolutives. Dans un espace d’exploration et guidés par les animateurs, les résidents participent à un spectacle interactif, jouent de différents instruments de percussion, s’amusent à faire des devinettes musicales, travaillent leur mémoire avec des chansons traditionnelles, se détendent au son d’une méditation guidée et bien plus. Les ateliers Musicofolie permettent aux résidents de revivre les soirées d'antan, de socialiser, de s’exprimer et de développer leur confiance en leurs capacités. Douze thématiques, une par mois, sont disponibles sous forme de programme évolutif ou à la carte, permettant ainsi la création d’un lien entre les animateurs et les résidents ainsi qu’une grande variété de choix d’animations musicales selon vos besoins.\n\nNos activités sont adaptées pour les personnes à mobilité réduite, troubles cognitifs et moteurs. La joie sera assurément au rendez-vous !\n\nQUI SOMMES-NOUS?\n\nNous sommes une équipe de musiciens et d’animateurs chevronnés qui ont à cœur le bien-être des personnes âgées. Ayant plusieurs années d’animations, de spectacles et d’enseignement musical derrière la cravate, notre équipe offre des ateliers complets de manière professionnelle et dynamique. Attentionnés, énergiques et créatifs, nous créons nos ateliers musicaux dans le but de partager notre passion et d’offrir tous les bienfaits de la musique à notre clientèle. Une joie de vivre contagieuse, de grandes capacités d’animations et une passion pour la musique marquante ; nos animateurs sauront certainement faire rayonner les résidents.\n\nCE QUE NOUS OFFRONS\n\nAtelier d’exploration\nCette option donne accès à un atelier d’exploration afin de vous familiariser avec nos ateliers. C’est aussi une occasion pour notre équipe de mieux cibler les besoins de vos résidents. Idéal pour une première expérience avec Musicofolie ! Programme annuel : 12 ateliers mensuels évolutifs\nCe programme permet de développer un lien avec les résidents et leur permet de se dépasser musicalement. À travers 12 thématiques, une pour chaque mois, les résidents explorent des rythmes musicaux, connectent, travaillent leur mobilité et leurs fonctions cognitives tout en s’amusant.\n\nTHÉMATIQUES\n\nJANVIER / Jour de l’anFEVRIER / St-ValentinMARS / Cabane à sucre / St-PatrickAVRIL / PrintempsMAI / Fête des mèresJUIN / Fête des pèresJUILLET / ÉtéAOÛT / Fête acadienne (15 août)SEPTEMBRE / AutomneOCTOBRE / HalloweenNOVEMBRE / Atelier d’explorationDÉCEMBRE / Noël\n\nPOUR LE BON DÉROULEMENT DE L’ACTIVITÉ\n\nUne personne responsable doit nous accompagner lors de l’activité pour assurer la sécurité de tous. Notre atelier comporte de la gestion de matériel et des ajustements personnalisés. Nous tenons à ce que chaque résident se sente accompagné. Soyez sans crainte, le plaisir est garanti !\n\nLe lieu de l’activité devrait permettre aux résidents de se placer en demi-cercle et d’avoir de l’espace pour manipuler de petits instruments de percussions. Nous nous adapterons aux différents espaces au besoin.\n\nNous avons besoin de 30 minutes avant et entre les ateliers afin de faire l’installation du matériel ou d’en faire le démontage.\n\nNOTRE SERVICE COMPREND\n\nSelon votre budget, un ou deux animateurs et musiciens professionnels disponibles pour la durée de l’atelier choisi. Une installation de 30 à 45 minutes. Les frais de déplacements sont inclus dans le tarif. Le matériel nécessaire à l’atelier (instruments pour les résidents, instruments variés pour de l’exploration, équipement de sonorisation). La préparation préalable de chaque atelier thématique. Nos ateliers évoluent et changent régulièrement dans le but de s’adapter tout type de clientèle et d’offrir un service varié.\n\nOffrez à vos résidents une expérience musicale unique et stimulante avec les ateliers Musicofolie! Des moments de plaisir et de créativité, adaptés à chaque besoin, pour renforcer la mémoire, la mobilité et les liens sociaux.\n\nRéservez vite pour une animation vivante, interactive et pleine de joie !",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo",
      "guitariste"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Atelier musical pour aînés",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo",
      "Guitariste"
    ],
    eventTypes: [
      "Concert musical",
      "Troubadour (Unité de soins)",
      "Animation et personnages"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=YeEUMbNo_8o",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=V01IZruU7DI",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761063378_cf43bce3d59789474d97.jpg",
        alt: "Ateliers pour aînés Musicofolie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761063373_d376531cc083bc7c7b99.jpg",
        alt: "Ateliers pour aînés Musicofolie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761062787_bee7168e6c776c67456f.jpg",
        alt: "Ateliers pour aînés Musicofolie"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/225/atelier-pour-aines-musicofolie"
  },
  {
    id: "62",
    slug: "aziz-daouni",
    name: "Aziz Daouni",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Aziz_Daouni_Conférencier_570x570.jpg",
    biography: "L’artiste que nous vous présentons, Aziz Daouni, est un nom à découvrir ou à redécouvrir. Né à Casablanca, Aziz traduit sa passion pour la musique en jouant du Oud. Une passion qu’il partage avec ses élèves car, parallèlement à sa chronique à Radio Centre-Ville, il donne des cours de musique. Son premier album intitulé «Les mélodies poétiques» est sorti en 2006, deux autres sont en cours de préparation. Après le Duo d’Orient, Aziz a formé d’autres duos et a multiplié les concerts dans différents festivals à travers le monde.\n\nIl a commencé sa carrière il y a plus de 14 ans. Il a entrepris de faire de son art sa passion et le meilleur moyen de réaliser son rêve de rapprochement entre les cultures. Le nom de l’artiste a traversé plusieurs frontières dans le monde. Notons des villes comme Vienne Graz, Long Beach, Casablanca, Stübing, Siem Reap, etc. Fin connaisseur de la musique arabe et de ses instruments qui lui confèrent sa magie, il a choisi l’Oud. Un instrument réservé aux maîtres tellement il est sensible entre des doigts habiles. Aziz nous en fait une démonstration magistrale tant par sa technique parfaitement maîtrisée que par la source de son inspiration.\n\nSur le chemin de sa recherche musicale permanente, il va rencontrer d’autres artistes extraordinaires et tous aussi passionnés. La particularité de ces rencontres ? C’est la découverte de l’autre dans son rapport à son instrument. Faisant de ces découvertes, un capital à investir dans des collaborations inédites.\n\nAziz Daouni a enseigné, a fait des conférences sur la musique arabe et ses instruments. Il a assuré une chronique culturelle à Radio Centre-ville en qualité de grand connaisseur de la musique arabe. Depuis, il n’a cessé de parcourir le monde à la rencontre de musiciens en Chine, au Japon prochainement, en Afrique, mais aussi en Europe à Vienne.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=yVqZ9_wcJeo",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=VN4JH_Mtogc",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=1QnJZ2tLhxw",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Aziz_Daouni_Conferencier_2400x1350_banniere3c.jpg",
        alt: "Aziz Daouni"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Aziz_Daouni_Conférencier_370x370_2.jpg",
        alt: "Aziz Daouni"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Aziz_Daouni_Conférencier_370x370.jpg",
        alt: "Aziz Daouni"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Aziz_Daouni_Conférencier_370x370_3.jpg",
        alt: "Aziz Daouni"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/62/Aziz-Daouni"
  },
  {
    id: "177",
    slug: "bryan-alexandre",
    name: "Bryan Alexandre",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/BRYAN_Alexandre_570_x_570.jpeg",
    biography: "Bryan Alexandre est né à Laval de deux parents portugais. Grand fan de Lady Gaga, il lui attribue un peu le crédit de son amour pour la musique. Il a commencé jeune à faire des reprises de chansons à succès, après quoi ses parents ont décidé de l'inscrire à des cours de chant. Il a fait de la comédie musicale au secondaire et étudie aujourd'hui en musique au cégep Marie-Victorin, Il rêve d'aller à New York ou à Los Angeles et de faire carrière sous les projecteurs, porté par son timbre de voix unique ainsi que que par sa capacité à faire vibrer les gens.\n\nSuite à son passage à La Voix... Un talentueux jeune chanteur avec une voix fort impressionnante, qu'il contrôle avec une justesse hallucinante, s'est amené sur scène pour offrir une performance magistrale qui frôlait la perfection, gagnant rapidement le cœur des quatres coachs et il a même reçu une ovation en terminant sa chanson.\n\nLe but de ce jeune chanteur est de transmettre l'émotion de chaque chanson qu'il chante afin que vous passiez un moment inoubliable!\n\nÀ bientôt!",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=ntFYFtU0e7I",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=pUEO7UJ7k1E",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=yrd_k2sbhJE",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=zzrN1fOsNso",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/LaVoix10_AAA_Jour2_Photosdeplateau_parBertrandExertier190copie2400.jpeg",
        alt: "Bryan Alexandre"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/177/Bryan-Alexandre"
  },
  {
    id: "241",
    slug: "camila-woodman",
    name: "Camila Woodman",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773260853_a82ff950926e5fb23a1d.jpg",
    biography: "Camila Woodman est une chanteuse au talent remarquable et à la présence scénique chaleureuse qui sait captiver son public dès les premières notes. Dotée d’une voix riche, expressive et d’une grande sensibilité artistique, elle propose des spectacles spécialement conçus pour les aînés, alliant souvenirs musicaux, énergie et moments d’émotion. Son répertoire varié permet de rejoindre différents goûts musicaux tout en créant une ambiance conviviale et dynamique où le public est invité à chanter, taper des mains et revivre de grands classiques.\n\nSpectacles Jazz, Soul, Funk, Motown… & Les grandes chansons françaises! Ce spectacle débute dans une atmosphère feutrée avec quelques grands standards de jazz, mettant en valeur la douceur et la profondeur de la voix de Camila. Ces premières chansons créent une ambiance élégante et chaleureuse qui transporte immédiatement le public dans l’univers intemporel du jazz.\n\nLa seconde partie du spectacle prend ensuite une tournure plus rythmée et énergique avec un hommage vibrant aux grandes légendes de la Soul, du Funk et de la Motown. Camila revisite avec passion des succès incontournables d’artistes mythiques tels que Michael Jackson, The Temptations, Ray Charles et Stevie Wonder, entre autres. Les rythmes entraînants, les mélodies connues et l’énergie communicative de l’interprétation créent une ambiance festive où le public retrouve le plaisir de chanter et de bouger au son de ces classiques indémodables.\n\nAvec un répertoire riche de grandes chansons francophones qui ont marqué plusieurs générations, Camila interprète avec émotion et authenticité des œuvres d’artistes marquants tels que La Chicane, Édith Piaf, Charles Aznavour et Isabelle Boulay, parmi plusieurs autres. Ces chansons, empreintes de nostalgie et de poésie, font revivre de beaux souvenirs au public et créent des moments touchants et rassembleurs.\n\nUne expérience musicale chaleureuse\nQue ce soit dans un style jazz élégant, dans l’énergie de la Motown ou dans la profondeur des chansons francophones, Camila Woodman sait créer une véritable connexion avec son public. Son approche humaine, sa sensibilité et son amour de la musique transparaissent dans chacune de ses interprétations.\n\nSes spectacles sont pensés pour offrir un moment de bonheur, de souvenirs et de partage, où la musique devient un pont entre les générations et où chaque chanson fait revivre une époque, une émotion ou un souvenir précieux.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=4uEMU40DzpA",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=ApczYnSH0BY",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773260890_29f2cc57ec7fe3325dca.jpg",
        alt: "Camila Woodman"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773260895_347c3151340b8d1309f5.jpg",
        alt: "Camila Woodman"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773260875_97fa4b9e1ac3df7fcd8d.jpg",
        alt: "Camila Woodman"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773260880_249c7f0245fbb1ba6756.jpg",
        alt: "Camila Woodman"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773260901_70704cdd1b598933fe68.jpg",
        alt: "Camila Woodman"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/241/camila-woodman"
  },
  {
    id: "32",
    slug: "caroline-noel",
    name: "Caroline Noel",
    image: "/images/agence-distinction/Noel%2C%20Caroline/Chanteuse_Caroline_Noel_570x570.jpg",
    biography: "Originaire de Sept-Îles, Caroline Noel compte déjà à son actif plusieurs centaines de spectacles. Formée à la prestigieuse école de Marcin Brzezinski, elle fait son entrée professionnelle sur scène en 2001 où elle devient chanteuse soliste et choriste pour plusieurs formations.\n\nDepuis maintenant 7 ans, elle est la voix officielle du Train touristique Orford Express situé à Magog en Estrie où elle a été vue et entendue par plus de 250 000 personnes provenant des quatre coins du Québec, du Canada, des États-Unis et de l’Asie.\n\nEn 2014, elle enregistre la chanson thème de la Lotte Parade diffusée à Séoul en Corée du Sud réalisée par Benoît Jutras et Rob Heaney, collaborateurs de longue date du Cirque du Soleil. Caroline a également lancé en octobre 2016 l’extrait radio « Oublie-moi », une adaptation francophone du succès populaire des années 80 « Missing you » de John Waite.\n\nDe plus, elle prête sa voix à des publicités radio pour (Lallier Kia et Honda) et télévision (Cashmere). Elle est également choriste pour l'Hommage Ultime à Johnny Hallyday et Elvis Fever.\n\nDepuis 2012, elle a autoproduit quatre albums “Coups de coeur” qui se sont écoulés à plus de 8000 exemplaires jusqu’à maintenant. Elle travaille actuellement à l’écriture d’un projet qui verra le jour en 2020.\n\nLe spectacle de Caroline Noel vous fera passer par toute une gamme d'émotions et vous ramènera à l'époque des années 40 à aujourd'hui. Son répertoire est composé de différents styles musicaux, en passant par Connie Francis, Patsy Cline, Charles Aznavour, Édith Piaf, Alys Robi, Georges Moustaki, Shirley Theroux, Charles Trenet, Monique Leyrac et Jenny Rock, pour ne nommer que ceux-ci.\n\nElle interprète avec brio « ses coups de coeur » qui sont de grands classiques intemporels autant francophones qu'anglophones. Vous serez charmés dès la première écoute et vous vous laisserez bercer par la douce nostalgie de vos souvenirs.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Atelier musical pour aînés",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=jao4egih2vM",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=YsH02a8t0Hg",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Noel%2C%20Caroline/Agence_Distinction_Caroline_Noel_220x500_1.jpg",
        alt: "Noel, Caroline"
      },
      {
        url: "/images/agence-distinction/Noel%2C%20Caroline/Agence_Distinction_Caroline_Noel_2400x1350_1.jpg",
        alt: "Noel, Caroline"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Caroline_Noel_2400x1350_1.jpg",
        alt: "Caroline Noel"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Chanteuse-Caroline-Noel-370x370.jpg",
        alt: "Caroline Noel"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/32/Caroline-Noel"
  },
  {
    id: "182",
    slug: "cassandra-nadeau",
    name: "Cassandra Nadeau",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Cassandra_Nadeau_570_x_570.jpeg",
    biography: "Biographie\n\nAprès dix ans de ballet classique, Cassandra explora le théâtre avant de se perfectionner en musique. Diplômée en arts et lettres, profil théâtre, puis en chant pop-jazz au Collège Lionel-Groulx, son amour pour les arts de la scène la motive à poursuivre une carrière artistique.\n\nDurant ses années collégiales, Cassandra s'implique dans plusieurs projets en tant que choriste, créant des arrangements vocaux pour Alexandre Bélair, Raphaël Roberge et l'Académie des arts Trouve ta voie. Elle se joint aussi une chorale professionnelle dirigée par Gregory Charles, lui offrant la chance de partager la scène avec des artistes renommés tels que Marie-Mai, Marc Dupré, Éric Lapointe, Isabelle Boulay et Louis-Jean Cormier.\n\nEn 2018, un an après la fin de ses études, Cassandra fut diagnostiquée d'un cancer du sein, modifiant drastiquement son parcours artistique. Après la première phase de traitements, son rétablissement lui demanda plus de stabilité et de repos. Elle se consacra donc sur son travail au sein de l'Académie des arts Trouve ta voie et sur l'enseignement du chant, mettant de côté ses rêves artistiques pendant quelques années.\n\nEn 2022, Cassandra, en collaboration avec ses collègues de l'Académie, lança un projet de spectacles dans les résidences pour personnes âgées incluant des membres de l'organisme. Cette expérience éveilla en elle une véritable passion pour ce répertoire et ce public.\n\nAnimée par une grande sensibilité et un désir d'offrir plus de joie et de réconfort, Cassandra créa son propre spectacle dédié aux personnes âgées. Elle adore l'expressivité et le dynamisme des chansons d'époques qui la rapproche de son amour pour les comédies musicales. Elle s'investit avec enthousiasme dans ce domaine et poursuit son chemin artistique, persuadée que l'art est le plus doux des remèdes pour l'âme!\n\nDescription du spectacle\n\nCassandra vous invite à un voyage musical où le hasard est le maître du jeu ! Préparez-vous à revivre des moments inoubliables grâce à un répertoire éclectique qui éveillera vos souvenirs des années 50 à 90.\n\nDe la chanson populaire québécoise aux classiques français, en passant par le rock'n roll, le jazz, le country et le rock, chaque performance est unique et imprévisible ! À chaque tirage, laissez-vous emporter par un nouveau thème qui se déploiera sous vos yeux, instaurant une ambiance dynamique et lumineuse !",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Vbxah05fRYc",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/IMG_19051.jpeg",
        alt: "Cassandra Nadeau"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/182/Cassandra-Nadeau"
  },
  {
    id: "54",
    slug: "clement-courtois",
    name: "Clément Courtois",
    image: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Chanteur_Cl%C3%A9ment_Courtois_Agence_Distinction_570x570.jpg",
    biography: "Clément Courtois chante dès son plus jeune âge avec son frère les plus grands succès de la chanson française et du rock britannique. Ce dernier lui apprend la guitare et Clément forme son premier groupe à 14 ans. À 19 ans, pendant 3 ans, il entre à l’école Périmony pour apprendre l’art dramatique. Parallèlement, il fera des spectacles de chansons à Paris. Ses années de bohème parisienne lui apprennent à travailler la précision et la force de sa voix.\n\nEn 2007, Clément fait un voyage à Montréal et rencontre les membres de son groupe pop-rock, qui deviendra SHERLOCK. Il décide de s'installer dans la grande métropole et d'y rester. À ce jour, il a été résident dans plusieurs bars de Montréal comme le Gainzbar, l’Ambroisie, L’Grand Lionel. Il a fait des tournées à travers le Québec dont les Îles-de-la-Madeleine, au resto-bar le Vent du Large. Il est aussi un des administrateurs de Musi\nMétro Montréal.\n\nClément Courtois est un artiste à la voix puissante et chaleureuse. Avec un répertoire des années 50 à fin 90, Clément chante avec cœur et chaleur les grandes chansons québécoises, françaises et anglaises (Leclerc, Ferland, Beau Dommage, Fugain, Brassens, Reggiani ou encore Sinatra, The Beatles, Elvis... et tellement d'autres). Accompagné de sa guitare, il est doté d’une grande capacité d’adaptation au public et il est en mesure de satisfaire son audience de par la vaste étendue de son répertoire.\n\nIl propose également trois (3) formules spectacles-hommage des plus grands chanteurs français. Vous pourrez choisir entre Charles Aznavour, Joe Dassin et Jacques Brel. Un artiste au talent brut à découvrir!",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=FU09L5cuqlg",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=sE2kZXCLtDQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=O9gzWG_44h4",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=oUHK7ffjpWo",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Clement_Courtois_orig_1.JPG",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Clement_Courtois_orig_2.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Clement_Courtois_orig_3.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Clement_Courtois_orig_4.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Clement_Courtois_orig_5.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_1.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_2.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_3.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_4.png",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_5.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_6.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_7.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_220x500_8.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_1.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_2.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_3.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_4.png",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_5.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_6.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_7.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/Agence_Distinction_Cl%C3%A9ment_Courtois_2400x1350_8.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/DSC_4365.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "/images/agence-distinction/Courtois%2C%20Cl%C3%A9ment/clem%20st%20jean.jpg",
        alt: "Courtois, Clément"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Chanteur_Clément_Courtois_Agence_Distinction_370x370.jpg",
        alt: "Clément Courtois"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Chanteur_Clément_Courtois_Agence_Distinction_370x370_5.jpg",
        alt: "Clément Courtois"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Chanteur_Clément_Courtois_Agence_Distinction_370x370_3.jpg",
        alt: "Clément Courtois"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Chanteur_Clément_Courtois_Agence_Distinction_370x370_4.jpg",
        alt: "Clément Courtois"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Chanteur_Clément_Courtois_Agence_Distinction_370x370_6.jpg",
        alt: "Clément Courtois"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/54/Clément-Courtois"
  },
  {
    id: "185",
    slug: "dano-peace",
    name: "Dano Peace",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761581577_a277f67a362fa3350a7d.jpg",
    biography: "Jazznavour solo Plongez dans une soirée musicale envoûtante avec Dano Peace, un artiste solo au charisme irrésistible et à la voix captivante. Accompagné de pistes sonores soigneusement orchestrées, il rend hommage aux grands classiques des crooners américains comme Frank Sinatra, Tony Bennett et Nat King Cole, transportant son public dans l'élégance intemporelle des années dorées du jazz et du swing. Enrichissant son spectacle d’une touche francophone, Peace interprète également un vibrant hommage à Charles Aznavour, revisitant les chefs-d’œuvre de cet icône légendaire avec émotion et authenticité. Que ce soit pour un concert intime ou un événement grandiose, Dano Peace offre une prestation empreinte de charme et de passion, capturant les cœurs à chaque note. Préparez-vous à une expérience musicale inoubliable, où la nostalgie rencontre le talent moderne.\n\nJamaïque - Reggae ensoleillé Embarquez pour un voyage musical vibrant et chaleureux avec Dano Peace, un interprète charismatique accompagné de pistes sonores qui font revivre les classiques intemporels du reggae. Avec sa voix envoûtante et son énergie contagieuse, il rend hommage aux légendes du genre, comme Bob Marley, Jimmy Cliff et Peter Tosh, tout en partageant la joie et la positivité qui font la force de cette musique universelle. Porté par des rythmes ensoleillés et des mélodies irrésistibles, Dano Peace crée une ambiance authentique qui invite à la détente et à la fête. Chaque performance est une célébration du reggae dans toute sa richesse, transportant le public directement sous les palmiers, bercé par des sons chaleureux et entraînants. Un moment unique qui promet de faire vibrer les âmes et réchauffer les cœurs\n\nForever Stones - Hommage aux Rolling Stones Forever Stones est un hommage vibrant au groupe légendaire les Rolling Stones. Les performances dynamiques des rockers vétérans Dano Peace, David Segreti et Steve Creep font revivre les moments inoubliables des Stones à travers chaque succès. Avec une énergie contagieuse et une fidélité impressionnante, ils capturent l'essence des concerts originaux du groupe. Les nouveaux venus autant que les fans de longue date seront séduits par la magie du répertoire des Stones interprété avec l’aplomb des musiciens du OLP.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo",
      "groupe de musique (band)"
    ],
    themes: [
      "Bal en blanc",
      "Beach Party",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo",
      "Groupe de musique (Band)"
    ],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=YubPdrSO-xk",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=YGSSQRjlpjs",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=myFi8qe-4A0",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=9-FK9QQElNw",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761581828_c217e7c199f1c64d1a16.jpg",
        alt: "Dano Peace"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/185/Dano-Peace"
  },
  {
    id: "35",
    slug: "duo-daroy",
    name: "Duo Daroy",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Duo_Daroy_Chanteuse_Stéphanie_Roy_Guitariste_Ghyslain_Darsigny2_570x570.jpg",
    biography: "Duo Daroy comprend la chanteuse Stéphanie Roy, accompagnée de son guitariste Ghyslain Darsigny. Ils vous proposent un spectacle acoustique biographique qui présente les plus grands succès des chanteuses populaires québécoises qui ont chacune à leur époque gravi les palmarès.\n\nAvec tout leur professionnalisme, les deux artistes vous invitent à entrer dans leur univers musical. D’Alys Robi à Nanette Workman, en passant par Dominique Michel, Claude Valade, Ginette Reno et bien d’autres, vous serez charmés par leurs interprétations.\n\nVenez vous souvenir en fredonnant les succès qui s’enchaînent les uns après les autres pour votre plus grand plaisir.",
    primaryCategory: "batteur",
    categories: [
      "batteur",
      "chanteur(se)",
      "contrebassiste",
      "duo",
      "guitariste",
      "percussionniste"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Batteur",
      "Chanteur(se)",
      "Contrebassiste",
      "Duo",
      "Guitariste",
      "Percussionniste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=sRijBLLKCTo",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=cP3RnciOH28",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Stephanie_Roy_2400x1350_1.jpg",
        alt: "Duo Daroy"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Duo_Daroy_Chanteuse_Stéphanie_Roy_Guitariste_Ghyslain_Darsigny1_370x370.jpg",
        alt: "Duo Daroy"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Duo_Daroy_Chanteuse_Stéphanie_Roy_Guitariste_Ghyslain_Darsigny2_370x370.jpg",
        alt: "Duo Daroy"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/35/Duo-Daroy-"
  },
  {
    id: "73",
    slug: "emilie-d-amour",
    name: "Émilie D'Amour",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Émilie-DAmour_570x570.jpg",
    biography: "Émilie D’Amour commence à chanter dès l’âge de 7 ans. Haute comme trois pommes, ne sachant ni lire ni écrire, elle sait déjà que la musique fera partie intégrante de son existence. Le chant reste jusqu’à présent la plus grande histoire d’amour de sa vie. Des nombreux cours de chant aux multiples performances, son obsession pour la musique l’a amenée à en faire une carrière.\n\nAprès une technique en théâtre musical au Cégep Lionel-Groulx et deux années à chanter professionnellement sur des bateaux de croisières avec la compagnie Carnival Cruise Line, Émilie se lance en 2018 dans un baccalauréat en chant pour approfondir sa technique vocale et aller au bout de ses connaissances. Elle vous partage son univers très diversifié et elle adore faire danser son auditoire. Dans sa musique, elle vous connecte directement à vos émotions, une note à la fois. La voici, simplement, Émilie D'Amour.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=-nGmN4FLwe8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=i2wmqkRehgU",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=TKLG8bsHDA8",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Emilie_Damour_2400x1350_4.jpg",
        alt: "Émilie D'Amour"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/73/Émilie-D-Amour"
  },
  {
    id: "159",
    slug: "france-bernard",
    name: "France Bernard",
    image: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_2400x1350_3.jpg",
    biography: "Découvrez l'artiste polyvalente France Bernard, une auteure-compositrice-interprète de renom, enseignante chevronnée depuis quatre décennies et experte en direction chorale depuis plus de 20 ans. Récompensée par le prestigieux prix \"Ma première place des arts\" en 2011, France Bernard incarne la quintessence de l'art vocal\n\nDotée d'une voix soprano d'une pureté envoûtante et d'une habileté au piano incomparable, France envoûte son public avec une élégance et un charisme indéniables. Sa voix, légère et cristalline, navigue avec aisance du lyrisme à la pop, transportant l'auditoire dans un voyage musical captivant.\n\nSon répertoire varié comprend des trésors de la chanson française et québécoise, des airs sacrés tels que les Ave Maria, ainsi que des pépites de la pop. Au cœur de chacune de ses interprétations réside un thème immuable : l'amour. Que ce soit à travers des ballades romantiques ou des hymnes joyeux, France Bernard captive les cœurs avec ses paroles poignantes et ses mélodies envoûtantes.\n\nOffrez à vos résidents une expérience musicale inoubliable en invitant France Bernard à partager son talent dans votre résidence pour aînés. Avec son charme et son expertise, elle apportera une touche de grâce et d'émotion à chaque performance, créant ainsi des souvenirs précieux pour tous ceux et celles qui auront le privilège de l'écouter.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=3QRNj9HKCHg",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=vaNkQ-wsGWU",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=DVORP_QkaF0",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=OIjSzsUZ3d8",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Bernard%2C%20France/1924373_480584758710752_5409631523486294528_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/33624358_1229360283833192_9181155420322922496_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/33677581_1229360883833132_2492425897609527296_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/33757407_1229360493833171_5456115003008483328_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/33822789_1229360593833161_651010904841781248_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/422151006_876455047818255_2395421351445082686_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/426174905_886367540160339_3674754330805364986_n.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_220x500.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_220x500_2.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_220x500_3.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_2400x1350.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_2400x1350_2.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_370x370.jpg",
        alt: "Bernard, France"
      },
      {
        url: "/images/agence-distinction/Bernard%2C%20France/Agence_Distinction_Chanteuse_France_Bernard_370x370_2.jpg",
        alt: "Bernard, France"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_France_Bernard_2400x1350_3.jpg",
        alt: "France Bernard"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/159/France-Bernard"
  },
  {
    id: "224",
    slug: "francis-gallant",
    name: "Francis Gallant",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012582_b20206a39bb3fcc4dafd.jpg",
    biography: "Francis Gallant compile plus de 20 ans d’expérience sur scène et en communication. Il est une figure bien connue des téléspectateurs des régions de l’Est-du-Québec, où il office à titre de journaliste culturel et présentateur météo pour le TVA-Nouvelles sur les ondes de CIMT-TVA et CHAU-TVA. Reconnu pour son ton chaleureux et sa proximité avec le public, il s’est forgé au fil des années une réputation de communicateur polyvalent, capable de combiner information, divertissement et culture. Parallèlement à sa carrière dans les médias, il mène aussi une carrière artistique en tant que chanteur, auteur-compositeur-interprète et animateur d’événements.\n\nSon premier projet discographique Ma Vie En Stéréo, lancé en 2014, l’a fait connaître comme auteur-compositeur-interprète. Les chansons Ma Vie en Stéréo et Le Monde S’arrête ce sont retrouvées en réaction forte du Palmarès de l’Adisq. Il a notamment repris la chanson Tout va changer de (Michel Fugain) en duo avec son fils Loïc, une prestation saluée pour sa dimension familiale et touchante.\n\nAu fil des années, il a rejoint la distribution du Rétro\nShow et de Maximum Hits-80 comme tête d’affiche. En tournée, il a fait parti du Spectacle du 25e anniversaire du groupe Les B. B. comme artiste invité. En 2025, il rejoint la distribution de la revue musicale Crazy Country Western, comme chanteur principal, animateur et maître de cérémonie. Il a incarner le “fil conducteur” entre les numéros et assurer une dynamique de proximité avec le public.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Fiesta Mexicaine",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Animation et personnages",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=j1BcbvGyoz0",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=dffiuTJZs9I",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=211DFyykNII",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=yotvvaLk4a8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=0vi2L4tsWi8",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012654_2d6a1307b4f37ac35215.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012660_e7f2525aa3d66f962256.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012664_36a5c72ac5b7212ac417.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012669_80e47646f73e83cbf38d.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012675_72a42e5206dd1f478925.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012686_93fcfea80baedde4e834.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012694_c96e4fe39479aafbfdea.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012705_2c2e2bae0303134e9738.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012711_92c43924942d5e207ad2.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012723_594ce58957fd9f7664fa.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012731_4ad75f0407b8a6f05823.jpg",
        alt: "Francis Gallant"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761012740_452f1a16b0ef7ae5fac4.jpg",
        alt: "Francis Gallant"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/224/francis-gallant"
  },
  {
    id: "234",
    slug: "frank-jones",
    name: "Frank Jones",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763521854_f4a78b1d5bd84e38cf1d.jpg",
    biography: "Frank Jones – Chanteur polyvalent et passionné\nFrank Jones est un chanteur versatile qui propose plusieurs formules de spectacles adaptées à tous les types de publics. Que ce soit en solo ou accompagné de musiciens, il offre des performances empreintes de charme, d’énergie et de nostalgie. Hommage aux grands crooners En français, en anglais ou dans une formule bilingue, Frank revisite les classiques intemporels de Sinatra, Aznavour, Bublé et autres légendes de la chanson. Un moment élégant et raffiné qui traverse les générations. Rock’n’roll Revival Dans cette formule festive, il fait revivre l’âge d’or du rock’n’roll à travers ses plus grands succès. Accompagné de musiciens ou en version solo, il recrée l’ambiance électrique des années 50 et 60. La musique francophone à l’honneur De Joe Dassin à Claude François, en passant par Charlebois, Vigneault ou Les Colocs, Frank interprète les grandes chansons françaises et québécoises avec émotion et authenticité. Toutes ces formules sont offertes en version acoustique ou avec musiciens, selon les besoins de votre événement. Une voix, une présence, une passion pour la musique qui rassemble.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Beach Party",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Pâques",
      "Rétro",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=RzUoQW5uWWE",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=IX7evsrtQrY",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=BuOpZQ08KO4",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1763521884_4c51b7b3383dea7f5f80.jpg",
        alt: "Frank Jones"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/234/frank-jones"
  },
  {
    id: "165",
    slug: "jeremie-domenico",
    name: "Jérémie Domenico",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Jeremie_Domenico_-_570x570.jpeg",
    biography: "Jérémie Domenico commence à chanter à l'âge de 10 ans et, très vite, multiplie les expériences musicales qui le mèneront sur les plus grandes scènes du Québec. À seulement 13 ans, il sort son premier album, produit de manière indépendante, qu'il parvient à vendre à 500 exemplaires par lui-même. À 16 ans, il entreprend un voyage en solitaire en Argentine, le pays de ses ancêtres, une expérience qu'il renouvellera sept fois par la suite. Ce périple lui fait découvrir un monde musical riche et profond, qui deviendra une source d'inspiration inépuisable pour ses projets futurs. C'est depuis, avec une passion ardente, que Jérémie s'efforce de transmettre son amour pour ses racines québécoises et argentines. Bien qu'il chante en neuf langues, ce sont surtout les pièces en espagnol et en français qui vibrent le plus en lui. Son répertoire éclectique comprend du tango, des ballades, du folklore et bien d'autres surprises. Titulaire d'un baccalauréat et d'une maîtrise en opéra de l'Université de Montréal, il perfectionne sa voix de ténor en se spécialisant dans les rôles comiques. En 2021, en pleine pandémie, il tente sa chance au concours de l'émission \"La semaine des 4 Julie\" où il atteint les demi-finales. Depuis, il s'emploie à créer un son qui lui est propre, en collaboration avec le guitariste Francis Tétu. Son album \"Un monde à l'envers\" révèle le fruit de ses nombreux voyages.\n\nAssister à son spectacle, c'est découvrir l'Amérique latine sous un nouveau jour, empreint de ses riches expériences et de sa passion inébranlable. Une chose est sûre, vous ne verrez plus jamais ce continent de la même oreille ! Albums : Entre vous et moi (2007)Un monde à l'envers (à paraître en 2024)Spectacles offerts:\n\n- En formule duo (voix-guitare)\n\n- En formule trio (voix-guitare-percussions)\n\n- En band (voix-guitare-contrebasse-percussions)",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=68ojNaAqzfw",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=Drsf7DabrZQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=rTVkk6IPVqs",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/logo_JeremieDomenico_couleur1.jpeg",
        alt: "Jérémie Domenico"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/165/Jérémie-Domenico"
  },
  {
    id: "226",
    slug: "joel-mirano",
    name: "Joël Mirano",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762122025_45694f8f71dd437cc64a.jpg",
    biography: "Joël : Un parcours musical de 15 ans au service de l'émotion\n\nDepuis quinze ans, Joël partage sa passion musicale à travers tout le Québec. Formé solidement dans la tradition classique grâce à la Formation Musicale Intensive pendant ses études secondaires, il a eu la chance d'être sélectionné pour un voyage musical en France lors de sa formation au Collège Lionel-Groulx.\n\nAu fil de sa carrière, Joël a eu le privilège d'accompagner plusieurs artistes que vous connaissez bien : Nathalie Simard, Marie Denise Pelletier, Marie Carmen, Joe Bocan, Luce Dufault et Kim Richardson, pour ne nommer que ceux-là. Cette riche expérience lui a permis de développer ses talents multiples : piano, accordéon, arrangements musicaux, composition et à la direction musicale.\n\nAujourd'hui propriétaire du Studio JBG Musique, Joël prépare son premier album personnel tout en continuant d'offrir des spectacles intimistes.\n\nSpectacle au piano : Mélodies d'ici et d'ailleurs\n\nUn voyage musical émouvant où Joël vous fait redécouvrir les grands succès québécois comme Tous les cris les SOS, L'amour a pris son temps et Une chance qu'on s'a. Il vous transporte également dans l'univers du jazz avec des standards intemporels tels que Somewhere Over The Rainbow et My Favorite Things, sans oublier ces musiques de films qui nous ont fait rêver au cinéma.\n\nSpectacle à l'accordéon : Escale en France\n\nLaissez-vous charmer par l'authenticité de l'accordéon français. Joël vous emmène dans les rues de la métropole avec Sous le ciel de Paris, vous fait revivre les succès d'Aznavour avec La Bohème et bien d'autres perles de la chanson française qui évoquent la douceur de vivre et les souvenirs d'antan.\n\nChaque spectacle est",
    primaryCategory: "accordéoniste",
    categories: [
      "accordéoniste",
      "duo",
      "pianiste"
    ],
    themes: [
      "Cabane à sucre",
      "Chanson française",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Jazz",
      "Noël",
      "Pâques",
      "St-Valentin"
    ],
    formats: [
      "Accordéoniste",
      "Duo",
      "Pianiste"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Qfd3NvXuiOQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=T85oipZmGdw",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=062qY0WvQx4",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=wJfQWu8z7jY",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762122050_b0a65a401fd8b3975d96.jpg",
        alt: "Joël Mirano"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762122044_23df06c62a5dfd1e2733.jpg",
        alt: "Joël Mirano"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/226/pianiste-joel-mirano"
  },
  {
    id: "176",
    slug: "julie-levac",
    name: "Julie Levac",
    image: "/images/agence-distinction/Levac%2C%20Julie/Agence_Distinction_Julie_Levac_570x570.jpg",
    biography: "Connue du grand public, comme la femme enceinte de la première édition de « La Voix 1 », dans l’équipe de Marc Dupré. Julie, roule sa bosse depuis plus de 25 ans comme chanteuse professionnelle. Suite à l’obtention de son premier contrat d’une durée de 5 mois en Chine en 1999, l’aventure dans le merveilleux monde du spectacle ne faisait que commencer pour elle. À son retour, les contrats se succédèrent à un point ou elle n’eut de choix que de se dédier à plein temps au métier de chanteuse et d’en faire son métier.\n\nÀ son retour au Québec, elle obtient un premier rôle comme chanteuse et danseuse au sein de la réputée revue musicale « Danse\nSing » avec qui elle fera une tournée des casinos d’Amérique du Nord, d’Atlantic City et à Paris. S’en suivra avec les années les revues musicales « Hollywood Melodies », « Showboat », « On Broadway Avenue », « The Legends of Yesterday », « Magique », et « The Magic Christmas Show ». Julie fait également les revues musicales « L’Air du Rock ‘n’Roll », « Québec, Je me Souviens », « Directions Country », « Hommage à Grease » et la revue « Showtime », pour ne nommer que celles-là.\n\nJulie a également fait l’Hymne national pour les Alouettes de Mtl plus de dix fois, au centre Bell pour les Bulldogs d’Hamilton et au Colisée Pepsi pour le Canadiens de Mtl, fait une tournée pour l’armée à Dubaï en Arabie Saoudite et a été artiste invitée à trois reprises pour chanter au Nouvel An à Hong Kong. Elle est également choriste pour plusieurs spectacles et a travaillé avec différents orchestres. Elle se consacre depuis la dernière décennie à ses propres bands dont le Ju. No. Band, le Heaven Country Band, Accent Bleu et le trio Trifecta Noël.\n\nUn carnet de route incroyable… son professionnalisme et son charisme vous charmeront à coup sûr !!",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo",
      "groupe de musique (band)",
      "quatuor",
      "trio"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Cabane à sucre",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Jazz",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo",
      "Groupe de musique (Band)",
      "Quatuor",
      "Trio"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=0P3_xpx2I9Y",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=9k9JJLUg3lE",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=JO8Ey6bs0mw",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=W3waCtuGeL4",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=PCdqttBP1aw",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=ZAABIefu-LI",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/1.png",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/2.png",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/3.png",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/4.png",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_340%20Bannie%CC%80re.jpeg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_340%20copie.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_406.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_438.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_459.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_521.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Band_700.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Heaven%202_10-Modifier.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Heaven%202_21-Modifier.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Heaven%20DUO%20poster%202019.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Julie%20Levac%20500%20x%20220%201.jpeg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Julie%20Levac%20500%20x%20220%202.jpeg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Julie%20Levac%20500%20x%20220%203.jpeg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Julie_249.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Poster%20Accent%20Bleu%20(8%2C5%20x%2014%20po)).jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Poster%20Ju.No.%20BAND.jpg",
        alt: "Levac, Julie"
      },
      {
        url: "/images/agence-distinction/Levac%2C%20Julie/Poster%20Juno%20DUO.png",
        alt: "Levac, Julie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Band_340copie.jpeg",
        alt: "Julie Levac"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/176/Julie-Levac"
  },
  {
    id: "231",
    slug: "kevin-cummings",
    name: "Kevin Cummings",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762274262_034a5a334d68eb7761a8.jpeg",
    biography: "Né au début des années 80, Kevin Cummings est un interprète et chansonnier natif de la rive-sud de Montréal. Ses racines sont profondément ancrées dans les paysages maritimes de la Côte-Nord et des Îles-de-la-Madeleine. C’est là, entre le vent salin et les histoires de bord de mer, qu’il forge sa sensibilité artistique, teintée de folk, de chanson québécoise et de country.\n\nÀ tout juste 16 ans, il monte sur scène pour la première fois dans les bars et restaurants de sa région. Nous sommes alors au tournant des années 2000, et déjà, sa voix chaleureuse et son charisme naturel attirent l’attention. Deux décennies plus tard, c’est un artiste accompli, fort d’un répertoire gigantesque qui traverse les époques et les styles.\n\nChanteur de scène passionné, Kevin se produit plus de 150 fois par année. Son parcours l’a mené à chanter partout où la musique rassemble : dans les clubs Med, sur les scènes de festivals, dans les campings, les bars et les restaurants aux quatre coins du Québec, et même jusqu’aux Îles Saint-Pierre-et-Miquelon.\n\nQu’il reprenne les classiques ou qu’il livre des chansons plus actuelles, Kevin Cummings offre chaque prestation avec la même intensité : celle d’un amoureux des mots, des mélodies, et surtout du public. Une voix, une guitare, une présence : c’est tout ce qu’il lui faut pour faire vibrer les cœurs.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=W4rN4tjlBUE",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=TLwMUat7ef8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=Fvwmjp8u0QM",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762274272_80a8b08035c8e601d664.jpg",
        alt: "Kevin Cummings"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/231/kevin-cummings"
  },
  {
    id: "240",
    slug: "luc-marquis",
    name: "Luc Marquis",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773113466_70b63f8a1e43fa6b3220.jpg",
    biography: "Luc Marquis\n\nUn spectacle rempli de cœur et de souvenirs. Luc Marquis vous invite à revivre les grands succès d’hier et d’aujourd’hui dans une ambiance chaleureuse et participative. Avec sa touche personnelle et sa grande sensibilité, chaque chanson devient un moment de partage, de rires et d’émotions. Un instant précieux où la musique rassemble, fait chanter, sourire… et ravive de beaux souvenirs.\n\nUn spectacle chaleureux et participatif spécialement conçu pour les résidences de personnes âgées. Luc Marquis vous fait voyager à travers les grands succès d’hier jusqu’aux chansons d’aujourd’hui, revisités à sa couleur unique. Un moment rempli d’émotions, de rires et de folie douce, où le public est invité à chanter, taper des mains et partager le plaisir de la musique.\n\nAteliers de Djembé - Percu-Temps\n\nLes ateliers de djembé proposés par Percu‑Temps sont une expérience 100% participative, ouverte à tous et conçue pour rassembler. Que ce soit pour un événement extérieur, une activité corporative ou une fête privée, chaque session transforme le groupe en un véritable ensemble de percussions, où le rythme devient un langage commun. Guidés par des animateurs passionnés, les participants découvrent les bases du djembé, explorent différentes techniques de jeu et apprennent à créer des rythmes collectifs. Ces ateliers favorisent la créativité artistique, stimulent l’expression corporelle et renforcent le sentiment d’appartenance. Ils sont également un excellent moyen de développer l’écoute, la coordination et le travail d’équipe. Plus qu’une simple activité musicale, les ateliers Percu‑Temps sont une expérience libératrice et énergisante où le plaisir est au cœur de chaque battement. Peu importe l’âge ou le niveau, chacun repart avec la satisfaction d’avoir contribué à une œuvre rythmique commune et d’avoir partagé un moment réellement rassembleur.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Atelier musical pour aînés",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=VQhtS-6laHQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=ie-J2Q5raDw",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=uyYymND-2-A",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=ZhHqkfhwkMc",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773113484_26f1e577b78423a3e228.jpg",
        alt: "Luc Marquis"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773113491_3c3598268b492969aab6.jpg",
        alt: "Luc Marquis"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773163489_be9c5b2f07d55f699aca.jpg",
        alt: "Luc Marquis"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/240/luc-marquis"
  },
  {
    id: "232",
    slug: "magicien-david-lepage",
    name: "Magicien David Lepage",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762996246_5e90c248632dd48a90dd.jpg",
    biography: "SPECTACLE DE MAGIEUne expérience magique pour nos aînés\nOffrez à vos résidents un moment d'émerveillement et de joie partagée !\n\nDavid Lepage présente un spectacle de magie captivant, spécialement conçu pour les RPA. Avec plus de d'expérience, il maîtrise l'art de créer une atmosphère chaleureuse où chaque résident se sent inclus et émerveillé.\n\nCe qui rend ce spectacle unique :\n\nTours de magie visuels et interactifs, adaptés à tous les niveaux de mobilité\nInteraction respectueuse avec les résidents volontaires\nHumour bienveillant qui rassemble les générations\nMusique d'époque qui évoque de beaux souvenirs\nMatériel professionnel fourni (décor, système de son de qualité)Bénéfices pour votre résidence :\n\nStimulation cognitive et émotionnelle positive pour vos résidents\nMoment de détente apprécié par votre équipe\nAnimation clé en main sans stress organisationnel\nSouvenirs durables et conversations animées pendant des semaines\nFormule spectacle : 60 minutes de pur divertissement Installation : 60 minutes | Démontage : 30 minutes\n\nMICROMAGIEL'animation parfaite pour vos événements spéciaux\nDavid se déplace de table en table ou circule lors de vos cocktails et événements. Cette formule intimiste permet des interactions personnalisées où chaque résident devient le héros de moments magiques uniques.\n\nIdéal pour : Unités de soins de chambre en chambre, repas thématiques, fêtes d'anniversaire, événements familiaux, ou en complément avant le spectacle principal.",
    primaryCategory: "soliste",
    categories: [
      "soliste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Hollywood",
      "Kermesse"
    ],
    formats: [
      "Soliste"
    ],
    eventTypes: [
      "Troubadour (Unité de soins)",
      "Animation et personnages"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=X_I-_tEACLo",
        type: "youtube"
      }
    ],
    gallery: [],
    sourceUrl: "https://agencedistinction.ca/artists/view/232/magicien-david-lepage"
  },
  {
    id: "83",
    slug: "mariane-vallieres",
    name: "Mariane Vallières",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mariane_Vallières_570x570.jpeg",
    biography: "Autant pour un concert chanté que pour une prestation troubadour à la guitare, Mariane est une chanteuse et animatrice expérimentée qui saura autant faire lever vos événements qu'apaiser vos résidents. Dynamique, empathique et chaleureuse, elle sait s'adapter à tous les types de clientèle et pige dans son grand répertoire pour faire chanter et danser les résidents (et les employé.e.s) ! Avec un baccalauréat en musique et plus de 17 ans d'expérience derrière la cravate, Mariane transforme n'importe quelle journée en jour de fête en plus de faire preuve d'un grand professionnalisme et d'une passion sans égal. Souvent qualifiée comme un rayon de soleil, elle égayera et énergisera vos résidents tout en témoignant d'une écoute active de leurs besoins et de leurs envies.\n\nInvitez-la pour un concert ou pour du troubadour, vous serez conquis vous aussi !",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=V01IZruU7DI",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=OhHHHf-uPns",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=pBUI0FlmjAE",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=TKLG8bsHDA8",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Mariane_Vallieres_2400x1350_1.jpg",
        alt: "Mariane Vallières"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mariane_Vallières_370x370_4.jpg",
        alt: "Mariane Vallières"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mariane_Vallières_370x370_3.jpg",
        alt: "Mariane Vallières"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mariane_Vallières_370x370.jpeg",
        alt: "Mariane Vallières"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mariane_Vallières_370x370_2.jpg",
        alt: "Mariane Vallières"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/83/Mariane-Vallières"
  },
  {
    id: "38",
    slug: "marie-josee-landry",
    name: "Marie-Josée Landry",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Marie-Josée_Landry_570x570.jpg",
    biography: "À propos de l’artiste\nArtiste passionnée et polyvalente, Marie-Josée Landry œuvre depuis plusieurs années sur la scène musicale québécoise, où elle se distingue par sa voix chaleureuse, sa présence rassembleuse et sa grande capacité d’adaptation aux publics qu’elle rencontre. Issue de racines musicales bien ancrées dans la chanson populaire et les traditions d’ici, elle développe au fil du temps une approche artistique profondément humaine, axée sur l’émotion, le partage et l’authenticité.\n\nParallèlement à sa carrière sur scène, elle agit également comme directrice artistique et directrice d’agence, ce qui lui permet de comprendre finement les besoins des diffuseurs, des résidences et des milieux institutionnels. Cette double expertise se reflète dans chacun de ses projets : des spectacles bien structurés, sensibles, accessibles et toujours portés par une grande rigueur professionnelle.\n\nSa versatilité musicale lui permet de naviguer avec aisance entre différents univers, que ce soit dans un contexte intimiste, festif ou thématique, en solo comme en formation réduite ou élargie.\n\nUn spectacle aux racines musicales et à la grande versatilité\nDans ce premier spectacle, Marie-Josée Landry propose un voyage musical qui puise dans ses racines, tout en mettant en lumière la richesse et la diversité de son répertoire. Accompagnée en duo, trio ou quatuor selon la formule choisie, elle revisite des chansons marquantes qui ont traversé le temps, en y insufflant une touche personnelle et actuelle.\n\nCe spectacle se distingue par sa proximité avec le public, son rythme équilibré et sa capacité à créer une ambiance chaleureuse, propice aux souvenirs et à la participation. Une proposition musicale rassembleuse, idéale pour des publics variés et intergénérationnels.\n\nLe spectacle de Noël – La magie des Fêtes en musique\nPour le temps des Fêtes, Marie-Josée Landry présente un spectacle de Noël empreint de douceur, de nostalgie et de féérie. À travers les plus beaux classiques de Noël et des chansons incontournables de saison, elle invite le public à ralentir, à se souvenir et à célébrer ensemble.\n\nDécliné en Duo Guitare-Voix, Trio Guitare-Voix-Basse ou Quatuor Guitare-Voix-Basse-Violon, ce spectacle s’adapte parfaitement aux différents types de salles et d’événements. Chaque formule conserve la même intention : créer un moment sincère, lumineux et profondément humain, où la musique devient un véritable lien entre les gens.\n\nMusique pour funérailles et célébrations de vie\nMarie-Josée Landry offre également un accompagnement musical tout en respect et en sensibilité lors de funérailles et de célébrations de vie. Grâce à une approche humaine et à l’écoute, elle propose des interprétations sobres et émouvantes, choisies en collaboration avec les familles afin d’honorer la mémoire d’un être cher.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "soliste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Atelier musical pour aînés",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Soliste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=PsBswifzONc",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=2ky7lPeb39s",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=WyR5juQBKgI",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Marjo_2400x1350_2.jpg",
        alt: "Marie-Josée Landry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Marie-Josée_Landry_370x370.jpg",
        alt: "Marie-Josée Landry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Marie-Josée_Landry_370x370_5.jpg",
        alt: "Marie-Josée Landry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Marie-Josée_Landry_370x370_3.jpg",
        alt: "Marie-Josée Landry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Marie-Josée_Landry_370x370_6.jpg",
        alt: "Marie-Josée Landry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Marie-Josée_Landry_370x370_4.jpg",
        alt: "Marie-Josée Landry"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/38/Marie-Josée-Landry"
  },
  {
    id: "129",
    slug: "marie-josee-larocque",
    name: "Marie-Josée Larocque",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Marie-Josee_Larocque_-_570_x_570.jpeg",
    biography: "Laissez-vous emporter par les mélodies populaires interprétées par notre talentueuse saxophoniste Marie-Josée Larocque. Elle vous propose un spectacle instrumental qui ravivera vos plus beaux souvenirs et dont vous vous rappellerez longtemps.\n\nMarie-Josée Larocque est présente sur la scène artistique depuis sa tendre enfance dans divers groupes de tous genres (rétro/rock 'n roll, jazz, classique, musique de films, etc.). Son talent et sa grande polyvalence l'ont mené sur les plus belles scènes du Québec, dont le Lion D'Or, le Cabaret du Casino de Montréal, l'étoile du Dix Trente, le Festival International de Jazz de Montréal et le Capitol de Québec, ainsi qu'à la télévision et à la radio.\n\nElle vous présente maintenant son spectacle instrumental solo aux saxophones alto et soprano. Son superbe répertoire est rempli de grandes chansons bien connues en version courte, de façon à rendre le spectacle encore plus varié et vivant. Elle saura vous charmer par ses mélodies tantôt douces, tantôt bien entraînantes, mais toujours joyeuses, sur lesquelles vous ne pourrez pas résister de fredonner, taper des mains, chanter et danser !\n\nElle vous offre aussi une seconde formule avec une musique plus feutrée, allant vers le jazz tout autant que vers le \"soft rock\" pour créer une ambiance chaleureuse lors de vos cocktails et rencontres.",
    primaryCategory: "saxophoniste",
    categories: [
      "saxophoniste",
      "soliste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Jazz",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Saxophoniste",
      "Soliste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=17yM5BzWZFY",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Marie-Josee_Larocque_2400x1350_6edit.jpg",
        alt: "Marie-Josée Larocque"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Saxophoniste_Marie-Josée_Larocque_370x370.jpg",
        alt: "Marie-Josée Larocque"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Saxophoniste_Marie-Josée_Larocque_370x370_2.jpg",
        alt: "Marie-Josée Larocque"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/129/Marie-Josée-Larocque"
  },
  {
    id: "152",
    slug: "maud-cicciarello",
    name: "Maud Cicciarello",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064039_a892dda45f3d5889b211.jpg",
    biography: "Maud Cicciarello est une chanteuse aux multiples talents, évoluant dans l'industrie musicale depuis plus de 20 ans. Sa voix puissante et envoûtante lui permet d'explorer différents styles de musique avec aisance. Que ce soit le jazz, la pop ou les danses en ligne, Maud excelle dans chacun de ces genres. C'est une artiste incroyablement talentueuse qui a su conquérir nos cœurs avec sa voix envoûtante et ses mélodies captivantes. Sa passion pour la musique transparaît dans chacune de ses performances, nous transportant dans un univers imaginaire et poétique. Son timbre de voix unique et sa maîtrise parfaite de l'émotion font d'elle une interprète exceptionnelle, capable de nous faire vibrer au rythme de ses chansons.\n\nAu fil des années, Maud Cicciarello a su se forger une solide réputation dans l'industrie musicale, collaborant avec de nombreux artistes renommés et se produisant sur les plus grandes scènes du Québec. Son talent indéniable et sa passion constante pour la musique font d'elle une artiste incontournable de la scène musicale actuelle. Maud possède également un charisme qui séduit son public et lui permet de créer une connexion profonde avec chacune des personnes dans la salle . Sa présence sur scène est magnétique, sa prestance impressionnante et sa simplicité touchante. En bref, Maud Cicciarello est une artiste complète, qui combine à la perfection talent, sensibilité et charme.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "dj"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "DJ"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Animation et personnages",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=z8YwHEwCX3I",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=IQiytkN23Vs",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=bLcYO62s2hc",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=0vi2L4tsWi8",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Maud_Cicciarello_2400x1350_3.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064059_ecae96f1f84cb3d0c390.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064064_302625a91b6b104d6fd5.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064068_7bb284ca843604f7b9e2.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064083_c5f02ff6ec3494a4b463.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064088_57a26d391cf7b2473b76.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064097_28c435a82707ed3fcb8d.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064144_e5c980606b304a558fc1.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1761064156_1202cea876bbda374969.jpg",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662392_42a70cc37cf8f62a4d94.png",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662408_94c02ed8251fcd783bf7.png",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662421_1db51f99606d7be01947.png",
        alt: "Maud Cicciarello"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773108295_dca19314ecf1189ff376.jpg",
        alt: "Maud Cicciarello"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/152/Maud-Cicciarello"
  },
  {
    id: "136",
    slug: "maya-marin-poulin",
    name: "Maya Marin-Poulin",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Maya_Marin-Poulin_570x570.jpg",
    biography: "Du Brésil à la Beauce en passant par Gatineau et Montréal, Maya Marin-Poulin possède un bagage culturel et musical qui lui permet de s’adapter à de nombreux contextes. La musique est très présente tout au long de son enfance et surtout lors des « partys » de famille autour du piano. Ses premières prestations prennent place à Gatineau au restaurant-cabaret « La Ferme Rouge » où Maya chante et danse dès ses 16 ans. Elle part ensuite étudier en musique et en gestion d’entreprises culturelles au Collège Lionel Groulx, à l’UQAM et au HEC où elle développe ses aptitudes et fait de nombreuses rencontres.\n\nParmi ses expériences importantes, l’artiste peut compter des spectacles au sein du groupe de musique Groove Affair, une prestation au Festival de Jazz de Montréal et des apparitions télé aux émissions En direct de l’univers, Qui sait chanter et Info, sexe et mensonges. Elle est également très fière de ses origines brésiliennes et se réjouit à chaque occasion de faire découvrir cette culture.\n\nGrâce à ses études, son expérience de scène et son bagage culturel, Maya développe une grande versatilité lui permettant d’aller du cocktail jazz à la soirée corporative en chantant du répertoire en français, en anglais, en portugais et en espagnol.\n\nOffrez à vos invités une soirée à thématique latine avec cette artiste qui pourra performer seule ou encore accompagnée de musiciens et de danseuses brésiliennes. Beau temps, mauvais temps il fera soleil à coups sûr!\"",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Carnaval de Rio - Brésil",
      "Croisière",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Fiesta Mexicaine",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=RpFfYT6IDe4",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=L24JuJZYOPM",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=NlaGqKMZjZg",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=6BjCVbwvKQs",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Maya_Marin_Poulin_2400x1350_4.jpg",
        alt: "Maya Marin-Poulin"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Maya_Marin-Poulin_370x370_3.jpg",
        alt: "Maya Marin-Poulin"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Maya_Marin-Poulin_370x370_4.jpg",
        alt: "Maya Marin-Poulin"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Maya_Marin-Poulin_370x370_2.jpg",
        alt: "Maya Marin-Poulin"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Maya_Marin-Poulin_370x370.jpg",
        alt: "Maya Marin-Poulin"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Maya_Marin-Poulin_370x370_5.jpg",
        alt: "Maya Marin-Poulin"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/136/Maya-Marin-Poulin"
  },
  {
    id: "239",
    slug: "mc-divertissement-votre",
    name: "MC Divertissement Vôtre",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772938247_e68897919b68c5ca7071.jpg",
    biography: "L’animation qui élève votre événement. La musique qui le rend inoubliable\nDerrière MC Divertissement Vôtre, il y a Maud Cicciarello — animatrice chevronnée et artiste reconnue que plusieurs connaissent également comme chanteuse.\n\nAvec plus de 20 ans d’expérience sur scène et en événementiel, Maud incarne l’équilibre parfait entre élégance, énergie, professionnalisme et intuition artistique. Sa présence naturelle et sa grande sensibilité à l’ambiance d’une salle font d’elle une animatrice capable de transformer chaque événement en une expérience mémorable.\n\nUne animatrice qui crée le rythme\nMaud ne se contente pas d’animer un événement : elle en devient le fil conducteur.\n\nElle assure la fluidité de la soirée, crée des transitions naturelles entre les moments clés et capte l’énergie de la salle avec justesse. Grâce à son expérience et à son sens du timing, elle sait exactement quand insuffler humour, émotion ou dynamisme pour maintenir l’attention et l’enthousiasme du public.\n\nElle anime avec brio une grande variété d’événements, notamment des galas, des mariages haut de gamme, des soirées corporatives, des congrès ainsi que divers événements privés, en apportant à chacun une touche d’élégance, de dynamisme et de professionnalisme.\n\nSa présence rassurante, élégante et pétillante crée une ambiance à la fois raffinée, chaleureuse et parfaitement maîtrisée.\n\nUn service DJ qui comprend l’âme de votre soirée\nAvec MC Divertissement Vôtre, l’animation et la musique travaillent en parfaite harmonie.\n\nNos DJ professionnels adaptent la trame sonore en temps réel selon l’énergie de la piste de danse, le profil des invités et l’ambiance souhaitée — que ce soit un chic lounge élégant ou un party électrisant.\n\nNotre service comprend :\n\nÉquipement professionnel de haute qualité Sonorisation impeccable Éclairage d’ambiance Playlist personnalisée Service clé en main\n\nChaque détail est pensé pour créer une expérience musicale immersive et parfaitement adaptée à votre événement.\n\nPourquoi choisir MC Divertissement Vôtre ? Parce que vous ne choisissez pas seulement une animatrice ou un DJ. Vous choisissez :\n\nUne vision artistique globale de votre événement Une maîtrise du protocole et du timing Une présence scénique forte et élégante Une expérience événementielle haut de gamme Une équipe fiable, professionnelle et structurée\n\nAvec Maud Cicciarello, votre événement n’est pas simplement animé. Il est orchestré.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "dj"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Carnaval de Rio - Brésil",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Fiesta Mexicaine",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "DJ"
    ],
    eventTypes: [
      "Concert musical dansant",
      "Animation et personnages"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=s25vuIw9PJ0",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=z8YwHEwCX3I",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=IQiytkN23Vs",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=bLcYO62s2hc",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772515983_0072a532749c023dbf3f.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772515989_8d0c3ce0ca32d73c6d90.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772515998_0f486b79723404abafd3.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516009_c83bdc103e476c4987c0.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516016_5becad9096c10ae06cc3.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516042_c04c302dfc7f6e6ce5ba.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516053_ec0a21bd0ba0b52f62c4.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516102_126762e2bda66dc64be3.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516118_25af07b14137ec119785.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516133_08af054e8a4ca045c671.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1772516145_6679626578988b215826.jpg",
        alt: "MC Divertissement Vôtre"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773110946_26bce0b7dfa2eeeaed8d.jpg",
        alt: "MC Divertissement Vôtre"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/239/dj-maud-cicciarello"
  },
  {
    id: "44",
    slug: "melane-et-michel-desjardins",
    name: "Mélane et Michel Desjardins",
    image: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_570x570_1.jpg",
    biography: "Mélane se distingue par sa voix envoûtante, son animation chaleureuse, et son authenticité sur scène. Avec un spectacle modulable en français ou en anglais selon vos préférences, ses interprétations touchantes captivent et rappellent ses débuts dans les bars western de son Abitibi natale. Au programme : répertoire québécois, folk, country, jazz, chansons françaises et classiques internationaux. Chaque morceau est sublimé par des interventions captivantes et des interprétations magistrales, suscitant tour à tour émotion et bonheur.\n\nElle est accompagnée de son complice de longue date, le talentueux pianiste Michel Desjardins, connu pour ses collaborations avec Marie Carmen, Bruno Pelletier, Luc Plamondon, et bien d’autres. Ensemble, ils forment un duo attachant et passionné, capable de créer une véritable magie sonore. Forts de plus de 2000 spectacles au Québec et à l’international, quatre albums pour la chanteuse, et un répertoire impressionnant de 675 chansons, ce duo, en activité depuis 22 ans, ne cesse de conquérir les cœurs. Coup de cœur garanti !\n\nTRIO JAVA: C'est la rencontre d'harmonies vocales et des personnalités attachantes de trois chanteuses d'exception. Maniant les accords musicaux de façon sublime, elles vous feront voyager en vous amenant dans les anciennes mélodies de la chanson française au swing des Andrew Sisters. Ce trio vintage revisite également des succès récents avec leur touche originale. Un spectacle 100% francophone à la demande, aussi disponible avec un répertoire international.\n\nUn spectacle de Noël avec Trio Java! Goûtez à la magie des fêtes en ajoutant la douce présence de nos trois chanteuses à votre fête privée, marché de Noël, devant votre commerce, etc. Toujours bien agencées avec leurs costumes flamboyants, elles sauront vous rappeler l'esprit des fêtes des années 50 en vous faisant chanter à votre tour! Pour vos évènements intérieurs et extérieurs.",
    primaryCategory: "duo",
    categories: [
      "duo",
      "chanteur(se)/pianiste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Duo - Chanteur(se)/Pianiste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Yh2CVoTg-5Y",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=t8MzY0hT0b8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=6CU9-Ec1Eb4",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=K60yYtZBfDk",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=MFwLSNBZnm0",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=Tyx6q_F0nnY",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=TJuRDLdN90E",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=mbTNx3TaNYA",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=P6O9Ex9tQR0",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/ANY22594.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Agence_Distinction_Duo_Chanteuse_M%C3%A9lane_et_Michel_370x370.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Agence_Distinction_Duo_Chanteuse_M%C3%A9lane_et_Michel_370x370_2.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Banner%2021%20sans.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Chanteuse_M%C3%A9lane_370x370.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Duo_Chanteuse_M%C3%A9lane_et_Pianiste_Michel_Desjardins_370x370(2).jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Duo_Chanteuse_M%C3%A9lane_et_Pianiste_Michel_Desjardins_370x370.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Duo_Chanteuse_M%C3%A9lane_et_Pianiste_Michel_Desjardins_370x370_2.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Duo_Chanteuse_M%C3%A9lane_et_Pianiste_Michel_Desjardins_570x570.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Duo_Chanteuse_M%C3%A9lane_et_Pianiste_Michel_Desjardins_570x570_2.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_20230125_184616.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_20230126_194117%5B7853%5D.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_2151.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74271675359447361.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74281675359447362.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74291675359447362.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74301675359447363.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74311675359447363.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74321675359447363.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74381675359447364.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/IMG_74391675359447364.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_1.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_10.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_11.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_12.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_13.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_14.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_15.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_2.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_3.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_4.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_5.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_6.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_7.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_8.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_220x500_9.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_1.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_10.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_11.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_12.png",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_13.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_14.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_15.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_16.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_17.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_2.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_3.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_4.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_5.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_6.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_7.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_8.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_9.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Pianiste_Michel_Desjardins_370x370.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/RPA%20Affiche%20concert%20M%26M.png",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/RPA%20Affiche%20concert%20MM%20(002).png",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Session%20Sans%20Titre10011-Modifier.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Session%20Sans%20Titre10055-Modifier.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Session%20Sans%20Titre10066.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Session%20Sans%20Titre9350-Modifier.jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Session%20Sans%20Titre9527-Modifier%20(1).jpg",
        alt: "Mélane et Michel"
      },
      {
        url: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/tmp_ae1b00b0-c533-4777-8436-dd2243f90dd4.jpeg",
        alt: "Mélane et Michel"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Melane_et_Michel_Desjardins_2400x1350.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Duo_Piano-Voix_Mélane_et_Michel_370x370_3.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Duo_Piano-Voix_Mélane_et_Michel_370x370_2.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771649689_f5f2a4524cfc7e19e04e.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771649678_1804eee1114e040767ea.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771649702_0c4b61e62231f3e81c69.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771649669_40b537022db7047f880b.jpg",
        alt: "Mélane et Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Duo_Piano-Voix_Mélane_et_Michel_370x370.jpg",
        alt: "Mélane et Michel Desjardins"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/44/Duo-Mélane-et-Michel-Desjardins",
    videoHero: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/VID_20230126_194016.mp4",
    videoPoster: "/images/agence-distinction/M%C3%A9lane%20et%20Michel/Melane_Et_Michel_2400x1350_9.jpg"
  },
  {
    id: "67",
    slug: "melanie-hache",
    name: "Mélanie Haché",
    image: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_570x570.jpg",
    biography: "Originaire de la petite île de Lamèque au Nouveau-Brunswick, Mélanie Haché réside au Québec depuis plus de 30 ans. Créatrice de spectacles alliant passion, voix chaleureuse et émotion profonde, elle s'est faite connaître à travers diverses formations musicales, explorant le country, le jazz, le disco, le rock, le québecois, la chanson française et le top 40. Sa présence chaleureuse sur scène captive le public à chaque performance.\n\nSon dernier album, \"Country \", en collaboration avec l'honorable Paul Daraîche a marqué son parcours musical. En 2023, elle a brillé jusqu'au quart de finale de l'émission \"La Voix\", démontrant sa fougue, sa passion, son originalité et surtout, son amour pour la musique. Ces éléments sont ceux qui forgent l'unicité de son art.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Atelier musical pour aînés",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=sMkBpWpPyPc",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=4Khm7FNCNhc",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=i3CgtwptM1Y",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=xfukt13pRC0",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=zi2aYQSpe68",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_1.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_10.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_11.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_12.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_13.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_14.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_15.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_16.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_17.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_2.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_3.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_4.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_5.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_6.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_7.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_8.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_220x500_9.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_1.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_10.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_11.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_12.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_13.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_14.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_15.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_16.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_17.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_2.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_3.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_4.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_5.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_6.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_7.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_8.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Agence_Distinction_Melanie_Hache_2400x1350_9.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Chanteuse_M%C3%A9lanie_Hach%C3%A9_2_570x570_Agence_Distinction.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Chanteuse_M%C3%A9lanie_Hach%C3%A9__570x570_Agence_Distinction.jpeg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel1.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel10.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel11.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel12.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel13.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel2.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel3.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel4.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel5.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel6.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel7.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel8.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/Mel9.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/mel%20final%206-2.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/mel%20final%206-3.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/mel%20final%206-4.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/mel%20final%206-5.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/mel%20final%206-6.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "/images/agence-distinction/Hach%C3%A9%2C%20M%C3%A9lanie/mel%20final%206.jpg",
        alt: "Haché, Mélanie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Melanie_Hache_2400x1350_16.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662075_b7ae3a06b41eeba13f47.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662086_be6d92bfd18c70978e61.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662098_f55cd0f9c58662d39f68.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662106_ceb1f8a14f7dcba5e888.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662114_7a378e6b5f49e9d81a25.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662185_9fd9c8fe0f79dab63767.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662190_26eedfd5da7dcd6fd241.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662201_8b67f1130954dcb45490.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1767662235_6dc9567532983e3efa80.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mélanie_Haché_370x370_20.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mélanie_Haché_370x370_21.jpg",
        alt: "Mélanie Haché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Mélanie_Haché_370x370_22.jpg",
        alt: "Mélanie Haché"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/67/Mélanie-Haché"
  },
  {
    id: "229",
    slug: "merci-dalida-par-marie-claude-dubeau",
    name: "Merci Dalida ! par Marie-Claude Dubeau",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773108137_0d2eb4276d03416b2720.jpg",
    biography: "MERCI DALIDA! Égypte : De l’âme à la voix\n\nC’est au Caire, en Égypte, qu’est née Dalida, cette étoile de la chanson française qui a illuminé la scène internationale. Avec son charme envoûtant et sa voix inoubliable, elle a su marier l’élégance de la France aux parfums et aux couleurs de l’Orient. Son parcours hors du commun en a fait une artiste universelle, aimée et admirée aux quatre coins du monde.\n\nDans ce spectacle hommage, la chanteuse Marie-Claude Dubeau nous invite à un véritable voyage musical entre l’Égypte et la France, où souvenirs, émotions et nostalgie se rencontrent. En revisitant les plus grands succès de Dalida – de Gigi l’amoroso à J’attendrai, en passant par Laissez-moi danser et Il venait d’avoir 18 ans – elle fait revivre la passion et la tendresse de cette icône intemporelle.\n\nÀ travers sa voix vibrante et sa présence chaleureuse, Marie-Claude recrée l’univers de Dalida : un monde à la fois lumineux et touchant, empreint d’humanité, de douceur et de poésie. Les spectateurs sont transportés au cœur d’un spectacle qui célèbre non seulement la musique, mais aussi les racines égyptiennes et le rayonnement international d’une artiste qui a marqué plusieurs générations.\n\nUn hommage vibrant, où chaque note est un pont entre l’Orient et l’Occident, entre le passé et le présent, entre la mémoire et l’émotion.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Bal en blanc",
      "Beach Party",
      "Chanson française",
      "Croisière",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=qoUhor93lOM",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773108151_a3fa5abb1e137478fda2.jpg",
        alt: "Merci Dalida ! par Marie-Claude Dubeau"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762123446_3c798449bd15d512b348.jpg",
        alt: "Merci Dalida ! par Marie-Claude Dubeau"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773108158_135818090059c5962e6b.jpg",
        alt: "Merci Dalida ! par Marie-Claude Dubeau"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773108164_1309b2f49dc8917e2797.jpg",
        alt: "Merci Dalida ! par Marie-Claude Dubeau"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/229/marie-claude-dubeau"
  },
  {
    id: "154",
    slug: "miz-mia",
    name: "Miz Mia",
    image: "/images/agence-distinction/Miz%20Mia/Agence_Distinction_Chanteuse_Miz_Mia_570x570_1.jpg",
    biography: "Plongez dans l'univers envoûtant de Miz Mia, une chanteuse-interprète d'origine acadienne dont le talent transcende les frontières. Avec une carrière riche de plus de 35 ans, elle possède un répertoire diversifié qui vous fera voyager à travers les époques et les cultures. Que ce soit en français, en anglais, en espagnol ou dans d'autres langues, Miz Mia sait captiver son public avec sa voix envoûtante et sa présence scénique incomparable.\n\nImaginez une soirée où les résidents de votre maison de retraite sont transportés par les mélodies intemporelles de la chanson française, bercés par les classiques anglophones ou envoûtés par les rythmes enjoués de la musique latine. Avec Miz Mia, chaque prestation est une expérience unique, où la douceur, l'intensité et la tendresse se mêlent pour créer des moments inoubliables.\n\nChoisissez parmi nos formules flexibles pour adapter le spectacle à vos besoins et à vos préférences. Optez pour un solo envoûtant avec des trames musicales riches et entraînantes, ou laissez-vous séduire par un duo guitare-voix qui apporte une touche d'élégance et de raffinement à chaque chanson. Pour une expérience encore plus immersive, pourquoi ne pas opter pour un trio jazz, où le piano, la voix et le saxophone ou le violon s'harmonisent pour créer une ambiance feutrée et chaleureuse ?\n\nEt si vous souhaitez une expérience musicale complète, notre Full Band vous offre une performance dynamique avec voix, piano, brass et batterie, pour une soirée inoubliable qui ravira tous les sens. Enfin, pour ajouter une dimension supplémentaire à votre spectacle, Miz Mia peut également être choriste en accompagnant d'autres talentueux artistes. Elle viendra enrichir les harmonies et donner encore plus d'éclat à chaque morceau.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo",
      "groupe de musique (band)",
      "trio"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Bal en blanc",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "Soirée canadienne",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo",
      "Groupe de musique (Band)",
      "Trio"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=bx-G_cXkTVA",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=aqPK8RqIc8o",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=0vi2L4tsWi8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=HnuUZhwwp5Y",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=hJ_5Rw6Cq3E",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=JteDQVgJQ7o",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Miz%20Mia/258189167_10165816868585076_2707354340195483361_n.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Agence_Distinction_Chanteuse_Miz_Mia_220x500_1.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Agence_Distinction_Chanteuse_Miz_Mia_220x500_2.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Agence_Distinction_Chanteuse_Miz_Mia_220x500_3.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Agence_Distinction_Chanteuse_Miz_Mia_370x370_2.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Agence_Distinction_Chanteuse_Miz_Mia_570x570_2.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%2011.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%202.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%203.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%204.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%205.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%206.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%207.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia%208.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz%20Mia.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_1.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_2.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_3.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_4.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_5.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_6.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_7.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_220x500_8.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_1.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_2.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_3.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_4.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_5.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_6.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_7.jpg",
        alt: "Miz Mia"
      },
      {
        url: "/images/agence-distinction/Miz%20Mia/Miz_Mia_2400x1350_8.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Miz_Mia_2400x1350_6.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773367989_f27d17e884bc93e683de.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773367993_d434e2f953891578a9d1.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368000_4b5b2041e6ad4a4b3d08.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368006_e2c538779c58fe7c53d3.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368014_54f5085e87e567f36167.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368021_d9550765c2204f6557c2.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368027_ff33ff2119b4e6ed7cdb.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368038_994dd2a2dedcc842d037.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368045_76b3c844e54f2c087a93.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368051_3273e11fc49bc244ba78.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773368060_11a87803496403539a43.jpg",
        alt: "Miz Mia"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Miz_Mia_370x370_2.jpg",
        alt: "Miz Mia"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/154/Miz-Mia"
  },
  {
    id: "15",
    slug: "myriam-reid",
    name: "Myriam Reid",
    image: "/images/agence-distinction/Reid%2C%20Myriam/Agence_Distinction_Harpiste_Myriam_Reid_570x570.jpg",
    biography: "Myriam Reid est diplômée de la faculté de musique de l'Université de Montréal. Après avoir étudié le piano, la guitare et le chant, c'est vers la harpe que son amour de la musique l'a menée. Cet instrument mythique au son incomparable est rapidement devenu sa passion.\n\nDepuis plusieurs années, Myriam Reid se produit régulièrement lors d'événements divers (corporatifs ou privés), tant dans la grande région de Montréal qu'ailleurs au Québec. Elle utilise autant la harpe traditionnelle que la harpe électrique moderne. Son répertoire, un amalgame de musique classique, populaire, électro-lounge et celtique, inclut également plusieurs de ses propres compositions. La richesse et l'originalité de celles-ci lui ont d'ailleurs valu un prix international au concours d'écriture et d'arrangement New Century Harp Competition.\n\nSes cinq albums: Brumes (2007), Feux Follets (2010), Neige Folle (2011), La Nuit des Temps (2015) et L'Automne (2018) se sont attirés de nombreuses critiques élogieuses, tant au niveau de la qualité des mélodies que de la finesse de l'interprétation.\n\nHarpiste polyvalente, Myriam Reid a participé à des projets de toutes sortes : enregistrement en studio avec des groupes pop/rock ainsi qu'avec des interprètes classiques, enregistrement de musique de film (Love and Savagery, en nomination dans la catégorie « meilleure musique » aux prix Jutras et aux prix Génies 2010) et nombreux spectacles en compagnie d'artistes de la scène culturelle. Suite à l'obtention d'une bourse du Conseil des Arts du Canada, elle a également été accueillie en résidence d'artiste au Centre international des Arts de Banff.\n\nParallèlement à sa carrière solo, Myriam Reid est aussi harpiste au sein de la formation folk francophone Helium.\n\nHarpe acoustique (harpe traditionnelle) Musique de harpe solo, mélange de pièces populaires, classique et/ou celtiques. Ambiance feutrée et look raffiné. Convient à une cérémonie et/ou un cocktail. La harpe peut être amplifiée au besoin.\n\nHarpe électrique Musique électro-lounge accompagnée de trames sonores jouées par un système audio. Ambiance et look moderne. Convient à un cocktail privé ou corporatif.",
    primaryCategory: "harpiste",
    categories: [
      "harpiste"
    ],
    themes: [
      "Bal en blanc",
      "Chanson française",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Jazz",
      "Noël",
      "Pâques",
      "St-Valentin"
    ],
    formats: [
      "Harpiste"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=Wcv_OBTL6UQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=yOzhp9dR514",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=i-I5aCFE4io",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=a_dnmxvNBHQ",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Reid%2C%20Myriam/Agence_Distinction_Myriam_Reid_Harpiste-570x570.jpg",
        alt: "Reid, Myriam"
      },
      {
        url: "/images/agence-distinction/Reid%2C%20Myriam/Agence_Distinction_Myriam_Reid_Harpiste.jpg",
        alt: "Reid, Myriam"
      },
      {
        url: "/images/agence-distinction/Reid%2C%20Myriam/Myriam_Reid_220x500_1.jpg",
        alt: "Reid, Myriam"
      },
      {
        url: "/images/agence-distinction/Reid%2C%20Myriam/Myriam_Reid_220x500_2.jpg",
        alt: "Reid, Myriam"
      },
      {
        url: "/images/agence-distinction/Reid%2C%20Myriam/Myriam_Reid_2400x1350_1.jpg",
        alt: "Reid, Myriam"
      },
      {
        url: "/images/agence-distinction/Reid%2C%20Myriam/Myriam_Reid_2400x1350_2.jpg",
        alt: "Reid, Myriam"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Myriam_Reid_2400x1350_1.jpg",
        alt: "Myriam Reid"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/harpiste4-370x320.jpg",
        alt: "Myriam Reid"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/harpiste3-370x320.jpg",
        alt: "Myriam Reid"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/harpiste5-370x320.jpg",
        alt: "Myriam Reid"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/harpiste2-370x320.jpg",
        alt: "Myriam Reid"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/harpiste.jpg",
        alt: "Myriam Reid"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/15/Myriam-Reid"
  },
  {
    id: "179",
    slug: "natalie-byrns",
    name: "Natalie Byrns",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Natalie_Byrns_01_avatar_carre_570x570.jpeg",
    biography: "Chansons de fantaisie : un concert bonbon pour les nostalgiques!\n\nComme une boîte de chocolats aux saveurs assorties qui charment nos papilles, Natalie Byrns ravit les cœurs avec un tour de chant solo aux influences variées. Traversant plusieurs époques, l'interprète s'attarde au répertoire des décennies 60 et 70 qu'elle affectionne tout spécialement. S'accompagnant en douceur sur son ukulélé baryton, Natalie marie les ingrédients de son propre héritage musical : les chansonniers québécois, la chanson française et les variétés, une pincée de country-folk et quelques airs traditionnels. Des chansons qui racontent les lacs, les saisons, les trésors cachés et les rêves d'artiste. Des histoires fantaisistes qui fleurent bon la mer, l'amour et le chocolat...\n\nÀ propos de Natalie\n\nComédienne issue du Conservatoire d’art dramatique de Québec et créatrice primée aux Canadian Folk Music Awards, Natalie Byrns évolue sur scène tour à tour comme actrice-chanteuse au sein de diverses productions (notamment Décembre et Le Petit Noël de Québec Issime, Un violon sur le toit, Mamma Mia!, La beauté sauvera le monde, Le Rétroshow) et à titre d’auteure-compositrice-interprète et musicienne. Elle compte à son actif deux albums en solo (Carnets d’insomnie, Le soleil sur l’épaule) et deux albums avec son duo folk ANCOLIE (Les ébranlements, Le soleil en bulle).\n\nSite internet\n\nhttps://www.nataliebyrns.com",
    primaryCategory: "auteur",
    categories: [
      "auteur",
      "compositeur",
      "interprète",
      "chanteur(se)",
      "duo",
      "soliste",
      "ukuléliste"
    ],
    themes: [
      "Chanson française",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Auteur-compositeur-interprète",
      "Chanteur(se)",
      "Compositeur",
      "Duo",
      "Soliste",
      "Ukuléliste"
    ],
    eventTypes: [
      "Concert musical",
      "Troubadour (Unité de soins)"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=iMU8PosT_sg",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=Km4qXzvO8uA",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=L0aUHuqcnig",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/NatalieByrns_02_couverture1.jpeg",
        alt: "Natalie Byrns"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/179/Natalie-Byrns"
  },
  {
    id: "222",
    slug: "olivier-morissette",
    name: "Olivier Morissette",
    image: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_570x570.jpg",
    biography: "Musicien passionné depuis l'enfance, Olivier Morissette manie la guitare avec virtuosité depuis l'âge de 8 ans. Son parcours musical l'a mené aux quatre coins du monde : il a sillonné les 7 continents en tant que musicien professionnel à bord de bateaux de croisières, enrichissant son expérience artistique de cette diversité culturelle unique.\n\nDe retour au Québec, Olivier a su se faire une place de choix sur la scène musicale provinciale. Il a notamment accompagné des artistes reconnus tels que Mélissa Bédard, Joannie Benoit et François Lachance. Il participe également au spectacle Guitar Story, un hommage vibrant aux guitaristes les plus influents de la dernière décennie.\n\nArtiste polyvalent, Olivier excelle tant à la guitare qu'à la basse et au chant. Il évolue dans plusieurs formations musicales explorant des univers variés : pop, rock, country, funk et bien d'autres styles encore. Cette richesse stylistique transparaît dans ses performances de chansonnier, où il puise dans un répertoire impressionnant de plus de 500 chansons.\n\nChansonnier accompli depuis plusieurs années, Olivier continue d'enrichir constamment son répertoire, garantissant à son public des soirées musicales toujours renouvelées et captivantes.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [
      "Années 50 - Rock and Roll",
      "Années 70 - Disco",
      "Beach Party",
      "Cabane à sucre",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=OhOJMW30bDA",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=wU9Z5br5kR4",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_220x500_7.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_220x500_8.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_220x500_9.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_370x370.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_370x370_2.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_370x370_3.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Agence_Distinction_Chansonnier_Olivier_Oli_Morissette_570x570_2.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "/images/agence-distinction/Morissette%2C%20Olivier/Oli%20Morissette%20blanc.jpg",
        alt: "Morissette, Olivier"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1760998668_21592368e5c895dd1e17.jpg",
        alt: "Olivier Morissette"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1760998684_92ce85d49dafc0947fa3.jpg",
        alt: "Olivier Morissette"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1760998655_354cc2202c588c4e086d.jpg",
        alt: "Olivier Morissette"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/222/olivier-morissette"
  },
  {
    id: "235",
    slug: "pianiste-michel-desjardins",
    name: "Pianiste Michel Desjardins",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233496_e98c5baecbe805ca34ec.jpg",
    biography: "🎹 Le pianiste qui transforme chaque moment en souvenir mémorable\n\nLaissez entrer la magie dans votre résidence!\n\nAvec son talent incomparable et plus de 50 ans d’expérience, Michel Desjardins offre une prestation solo qui séduit instantanément. Son piano remplit la salle d’une chaleur réconfortante, d’énergie positive et de mélodies qui font du bien.\n\nClassiques québécois, chansons populaires, airs doux et pièces intemporelles : Michel sait exactement comment créer l’ambiance parfaite pour vos résidents. Professionnel, flexible et profondément humain, il offre un spectacle clé en main qui fait rayonner votre programmation.\n\n🎤🎹 Le duo Mélane & Michel Desjardins\nUn coup de cœur assuré pour vos résidents! Et pour un événement encore plus marquant, Michel se joint à sa conjointe Mélane, une chanteuse charismatique qui charme dès les premières notes. Ensemble, ils forment un duo irrésistible, complice et rempli d’émotions.\n\nLeur répertoire festif et rassembleur — en français ou en anglais — fait voyager vos résidents à travers leurs plus beaux souvenirs : grands classiques, chansons d’hier à aujourd’hui, jazz, folk, country et variété.\n\nC’est la formule parfaite pour vos fêtes, vos soirées spéciales ou toute occasion où vous souhaitez offrir quelque chose de vraiment exceptionnel.",
    primaryCategory: "duo",
    categories: [
      "duo",
      "chanteur(se)/pianiste",
      "pianiste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Hollywood",
      "Jazz",
      "Noël",
      "Pâques",
      "St-Valentin"
    ],
    formats: [
      "Duo - Chanteur(se)/Pianiste",
      "Pianiste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=t8MzY0hT0b8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=Tyx6q_F0nnY",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=TJuRDLdN90E",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=mbTNx3TaNYA",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233603_2e4506a2ab515b3a639d.jpg",
        alt: "Pianiste Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233648_ae67dc6bce031ab96c4f.jpg",
        alt: "Pianiste Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233565_fb1757d157ac6ebc06e2.jpg",
        alt: "Pianiste Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233579_c3c3df32f10093a1b29a.jpg",
        alt: "Pianiste Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233631_99bfff62dc174978799b.jpg",
        alt: "Pianiste Michel Desjardins"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1765233622_ae80e4c085f942a3d27c.jpg",
        alt: "Pianiste Michel Desjardins"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/235/michel-desjardins"
  },
  {
    id: "243",
    slug: "quizical",
    name: "Quizical",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786131_905d543ab779c21bb7ac.jpg",
    biography: "Quizical – Le quiz musical pensé pour les résidences pour aînés\nQuizical est une animation interactive spécialement conçue pour les résidents en RPA, alliant le plaisir du quiz à la richesse des souvenirs musicaux.\n\nBien plus qu’un simple jeu de questions, Quizical propose une expérience vivante où la musique accompagne chaque moment. Les participants sont invités à reconnaître des chansons, compléter des paroles, associer des airs connus à des thématiques ou encore répondre à des questions inspirées de leur époque.\n\nUne activité stimulante et accessible\nLe concept est adapté au rythme et aux capacités des résidents :\n\nQuestions claires et variées Musiques familières et rassembleuses Participation individuelle ou en équipe Animation bienveillante et inclusive\n\nChaque participant peut contribuer à sa façon, que ce soit en répondant, en chantant ou simplement en se laissant porter par la musique.\n\nUn voyage dans les souvenirs\nLes thématiques proposées permettent de raviver des souvenirs précieux et de susciter des échanges riches entre les participants.\n\nCinéma classique Vedettes d'autrefois Chansons d'hier à aujourd'hui Histoire du Québec Halloween Noël\n\nLa musique devient un véritable outil de connexion, favorisant la mémoire, les émotions et le sentiment d’appartenance.\n\nUne ambiance chaleureuse et rassembleuse\nQuizical crée un moment de plaisir partagé où les résidents rient, chantent et participent activement. L’activité favorise :\n\nLa socialisation La stimulation cognitive Le bien-être émotionnel\n\nUne animation clé en main\nMatériel sonore adapté Durée flexible selon vos besoins Contenu personnalisable selon votre clientèle Expérience professionnelle en milieu RPA\n\nDurée:60 minutes de quiz et musique 30 musiques de correction en groupe Remise de certificat pour les 3 équipes gagnantes\n\nQuizical, c’est une activité qui fait du bien, qui rassemble et qui fait revivre de beaux souvenirs… en musique.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)"
    ],
    themes: [],
    formats: [
      "Chanteur(se)"
    ],
    eventTypes: [
      "Concert musical",
      "Animation et personnages"
    ],
    audiences: [],
    videos: [],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786236_bb53ba915e13bd90e02c.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786205_5674369bd33af1c7b65f.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786213_dfe23ad20021aa1a4fea.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786159_5fb5e82c65a4801a2ac2.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786141_e581aab7587736420fda.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786185_ac6911802aa6022d9033.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786199_efe33c24f4ae77cc3f3e.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786221_514c4fc2f58af1485632.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786172_641b641aa2383772b031.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786166_589e55051bcd33c5687e.jpg",
        alt: "Quizical"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1773786147_afa8e452897a0e3c15eb.jpg",
        alt: "Quizical"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/243/quizical-cicciarello"
  },
  {
    id: "238",
    slug: "rendez-vous-a-la-chandelle",
    name: "Rendez-vous à la chandelle",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771908928_5886afbff72293ecd300.jpg",
    biography: "Une expérience sensorielle hors du temps\nRendez-vous à la chandelle est un spectacle immersif où musique, narration et lumière se rencontrent pour créer un moment suspendu.\n\nDes centaines de chandelles enveloppent la scène dans une atmosphère intime, chaleureuse et raffinée, transformant chaque lieu en écrin lumineux.\n\nChaque représentation devient une véritable rencontre entre les artistes et le public. Ici, on ne vient pas seulement écouter :\n\nOn partage\n\nOn se reconnaît\n\nOn participe\n\nOn vit ensemble une soirée mémorable\n\nL’échange, la proximité et la participation font partie intégrante de l’expérience.\n\nUne production clé en main\nLe décor, l’éclairage sécuritaire et le système de son sont entièrement fournis par la production.\n\nVous bénéficiez d’une expérience élégante, professionnelle et sans souci — adaptée à votre salle et à votre réalité.\n\nSoirée romantique aux chandelles\nUn voyage musical à travers les plus grandes chansons d’amour, des années 20 à aujourd’hui.\n\nLettres, souvenirs et confidences se mêlent à la musique pour créer une ambiance douce, chic et intemporelle.\n\nLe public chante, sourit, se remémore et participe naturellement à cette célébration de l’amour et des émotions.\n\nCérémonie commémorative & hommage\nUne soirée lumineuse et profondément humaine, dédiée aux souvenirs, à la mémoire et à l’amour éternel.\n\nLes chansons évoquent la résilience, l’espoir et la tendresse dans un climat apaisant et respectueux.\n\nUn moment de recueillement partagé où l’émotion circule librement entre la scène et le public.\n\nSoirée vintage aux chandelles\nUn retour élégant dans l’univers des années 20–30.\n\nCabarets, anecdotes, jazz, swing et grands standards recréent le glamour d’un autre siècle.\n\nFestif, théâtral et sophistiqué, ce spectacle invite le public à voyager dans le temps avec sourire et complicité.\n\nNoël d’antan aux chandelles\nUne immersion dans la magie des Noëls d’autrefois :\n\nGrandes familles réunies, histoires racontées au salon et musique partagée à la chandelle.\n\nUne soirée chaleureuse, rassembleuse et nostalgique qui fait revivre les souvenirs précieux.\n\nRendez-vous à la chandelle : Country\nUn voyage musical à travers le temps.\n\nDes années 20 à aujourd’hui, les plus grands succès country — américains, canadiens, acadiens et québécois — sont revisités dans une ambiance chaleureuse inspirée des vieux bars de grange, des saloons texans et de l’esprit festif des rassemblements country d’antan.\n\nSoirée VIP Signature\nUne expérience haut de gamme mêlant romance, jazz et grands classiques dans une ambiance feutrée et luxueuse.\n\nIdéale pour les événements corporatifs et soirées prestige où l’élégance rencontre l’émotion.\n\n🎶 Formules flexibles\nNous proposons plusieurs formules adaptées à votre événement :\n\nDuo acoustique intime\n\nSpectacle avec conteur et narration\n\nFormation avec musiciens multiples\n\nExpérience immersive complète aux chandelles\n\nNous nous adaptons à votre budget, à votre salle et à votre type d’événement.\n\nChaque prestation est personnalisée afin d’offrir une expérience unique et mémorable.\n\nEn exclusivité avec Mélanie Haché & Éric Rock",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "duo",
      "guitariste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Années 50 - Rock and Roll",
      "Bal en blanc",
      "Chanson française",
      "Crooner",
      "Festival Country",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Duo",
      "Guitariste"
    ],
    eventTypes: [
      "Concert musical",
      "Concert musical dansant",
      "Musique d'ambiance",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=sMkBpWpPyPc",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771908964_6cfe016c59ab683065a0.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771909014_e39d960f3384b421db8f.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771909033_9112bfdc44d153d828a4.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771908973_ba99ce71635f10b78c91.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771909040_7c21341c5616b87d4ad2.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771909062_074bde10c1f0e95f20a3.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771908978_6d2eefbc1eff1a772b4d.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771909051_c24dd9e78da30c9ca1df.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771909005_ea767cc463fb4e313061.jpg",
        alt: "Rendez-vous à la chandelle"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771908986_05f054fea4d43a115fb3.jpg",
        alt: "Rendez-vous à la chandelle"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/238/mel-eric-hache-rock"
  },
  {
    id: "236",
    slug: "robby-bolduc",
    name: "Robby Bolduc",
    image: "/images/agence-distinction/Bolduc%2C%20Robby/Agence_Distinction_Robby_Bolduc_570x570.jpg",
    biography: "Originaire de la Beauce, Robby Bolduc a commencé à jouer de la guitare à 7 ans. À 15 ans, il sillonnait déjà le circuit des bars de l'est du Québec. À 19 ans, il accompagnait la chanteuse Claire Vezina alors sous contrat avec Sony Music.\n\nPendant ses études en musique classique et jazz, il se produit une centaine de fois par année avec le groupe country Canyon.\n\nIl se retrouve par la suite à Singapour et au Maroc en tant que band leader dans différentes formations. Riche de l'expérience, il part en haute mer pendant plus d'un an comme musicien pour les compagnies RCCL et Holland America. C'est dans la ville de Los Angels qu'il s'établit alors et travail comme pigiste avec différents artistes tels Raquel Zonte, Kesha et Trishia O'Keefe.\n\nDe retour au Québec, il accompagnera sur scène et/ou en studio une pléiade d'artistes dont: Mario Pelchat, Nicola Ciccone, Gabrielle Destroismaisons, Dany Bedar, Tuesday 5, In Motion, Audrey Demontigny, René Lajoie, Bruno Labrie, Valérie Boivin, Marc-André Niquet et bien d'autres.\n\nAlors qu'il est sonorisateur à Montréal, il décide d'autoproduire un disque Country original. Aidé par Samuel Busque et Magali Bergeron, il réussit a tourner sur les radios du Québec. Le single 'Danser' atteint le top des palmarès Country pour y rester plusieurs semaines. D'autres titres dont 'La gare' et 'Les heures qui restent' tournent encore sur les ondes country.\n\nEn 2007, il joint le groupe légendaire OFFENBACH. Il s'en suivra plusieurs tournées au Québec, en Ontario et au Nouveau-Brunswick.\n\nPour ce qui est de la partie purement Country, Robby a été chef d'orchestre, musicien ou réalisateur pour divers artistes dont, notamment, Robby Johnson, Dave Roussy, Nanou Linteau, Marie-Chantal Cartier et Ovila Landry.\n\nIl partage maintenant son temps entre ses 3 enfants, ses nombreuses guitares et Le Cowboy Studio.\n\nRobby Bolduc est disponible en prestation solo avec sa guitare pour une soirée spéciale chansonnier. Réservez vos dates le plus tôt possible!",
    primaryCategory: "bassiste",
    categories: [
      "bassiste",
      "chanteur(se)",
      "guitariste"
    ],
    themes: [
      "Cabane à sucre",
      "Crooner",
      "Festival Country",
      "Fête des pères",
      "Halloween",
      "Jour de l'an",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Bassiste",
      "Chanteur(se)",
      "Guitariste"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=-d0vC-d5rhQ",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=CXHWeXgQkzI",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=JK5QdUA17vw",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Bolduc%2C%20Robby/Agence_Distinction_Chansonnier_Robby_Bolduc_570x570.jpg",
        alt: "Bolduc, Robby"
      },
      {
        url: "/images/agence-distinction/Bolduc%2C%20Robby/Agence_Distinction_Robby_Bolduc_220x500_1.jpg",
        alt: "Bolduc, Robby"
      },
      {
        url: "/images/agence-distinction/Bolduc%2C%20Robby/Agence_Distinction_Robby_Bolduc_2400x1350_1.jpg",
        alt: "Bolduc, Robby"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163530_1ab146eb782bc5eed67f.jpg",
        alt: "Robby Bolduc"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163503_b8c0b3821234ab67c7e7.jpg",
        alt: "Robby Bolduc"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163507_72f927f61ecd7a467ad4.jpg",
        alt: "Robby Bolduc"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163519_58d207a40031103e737e.jpg",
        alt: "Robby Bolduc"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163497_bd13e861091db39288b9.jpg",
        alt: "Robby Bolduc"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163512_5965ed71e7d0e61f2088.jpg",
        alt: "Robby Bolduc"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1770163535_64acd2e20f44b59cd5a2.jpg",
        alt: "Robby Bolduc"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/236/robby-bolduc"
  },
  {
    id: "128",
    slug: "samaya-baladi",
    name: "Samaya Baladi",
    image: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/Agence_Distinction_Danse_Orientale_Samaya_Baladi_570x570.jpg",
    biography: "Description\nPour une ambiance orientale digne des mille et unes nuits, un spectacle de danse baladi avec Samaya fera de votre événement un moment inoubliable. Elle enchantera l'audience avec des accessoires spectaculaires tels que costumes scintillants, voiles de soie ou éventails. Sa grâce et son élégance sont toujours grandement appréciées lors des spectacles. Elle se déplace avec aisance en dansant entre les tables pour que tous puissent profiter du spectacle. Plusieurs styles de danse orientale ainsi que des rythmes différents captivent le public et offrent un spectacle varié. Plusieurs formules sont disponibles telles que courte prestation surprise, plusieurs apparitions, changements de costumes. À l'occasion, Samaya est accompagnée d'autres danseuses expérimentées. Il est possible de faire participer le publique et\\ou les employés. Une séance de photos avec les résidents termine agréablement l'événement. Il est également possible de présenter un spectacle de danses gitanes. Biographie\nSamaya est une danseuse accomplie qui pratique la danse orientale avec passion. Elle a dirigé sa propre école de danse dans les Laurentides pendant plusieurs années. Elle est également organisatrice d'événements rassembleurs tels que soirées cabaret en restaurant et spectacles pour causes humanitaires. Elle a remporté plusieurs prix lors de compétitions d'envergure internationale, notamment la première place dans la catégorie Folklore au Festival of The Nile en Floride en 2024. Elle est la directrice et chorégraphe principale de la troupe de danse orientale Les Étincelles, plusieurs fois primée également depuis sa création en 2015.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=IGm2Gx7Q18I",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/315714733_10210063301616089_4108373403903397502_n.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/325598523_1585460038572660_634146768531520005_n.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/326821680_957135455288548_6303398223670306254_n.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/349599476_254689047147717_7902949667687795746_n.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/349682753_771747784324668_4150172736308488904_n.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/350498552_600745995357218_7637077191731797117_n.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/DonyaDanse05272023181_.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/IMG_3914-2.jpg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/Samaya%20baladi%20500x220%201.jpeg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/Samaya%20baladi%20500x220%202.jpeg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/Samaya%20baladi%20500x220%203.jpeg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "/images/agence-distinction/Danse%20Orientale%20Samaya%20Baladi/Samaya_Baladi_570x570.jpeg",
        alt: "Danse Orientale Samaya Baladi"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Samaya_Baladi_570x570.jpeg",
        alt: "Samaya Baladi"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/128/Danse-Orientale-Samaya-Baladi"
  },
  {
    id: "146",
    slug: "samba-jeri",
    name: "Samba Jeri",
    image: "/images/agence-distinction/Samba%20Jeri/Agence_Distinction_Samba_Jeri_570x570.jpg",
    biography: "Vous désirez passer un bon moment avec des gens sympathiques, danser et faire la fête comme les Brésiliens en plein Carnaval ? Alors, Choisissez la Troupe Samba Jeri ! En effet, Mel et son groupe vous propose une immersion totale au Brésil avec ses danses et ses rythmes dynamiques et animés. Mel est la directrice du groupe Samba Jeri. Tous ses spectacles sont personnalisés et interactifs. Samba Jeri a été fondée au Brésil en 2009, dans une ville qui s'appelle Jericoacoara ; d'où le nom Samba JERI. Mel danse depuis son plus jeune âge, ayant fait son premier spectacle à l'âge de 5 ans, la danse fait partie intégrale de sa vie. Elle a su communiquer sa passion et avec ce projet et plus de 20 ans d'expérience, elle nous propose un retour à ses racines tout en couleurs et en rythmes. Choisissez la Troupe SAMBA JERI du Brésil.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=LMhGzKDWrPE",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=HrFjufn3_Ps",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Samba%20Jeri/430962312_1356782161655710_3526931209767677816_n.jpg",
        alt: "Samba Jeri"
      },
      {
        url: "/images/agence-distinction/Samba%20Jeri/65181786_10216332958188270_3869710034128601088_o.jpg",
        alt: "Samba Jeri"
      },
      {
        url: "/images/agence-distinction/Samba%20Jeri/Screenshot_20230810_172722_Facebook.jpg",
        alt: "Samba Jeri"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/65181786_10216332958188270_3869710034128601088_o.jpg",
        alt: "Samba Jeri"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/146/Samba-Jeri"
  },
  {
    id: "135",
    slug: "stephanie-labbe",
    name: "Stéphanie Labbé",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Violoniste_Stéphanie_Labbé_570x570_3.jpg",
    biography: "Détentrice d’une maitrise en didactique instrumentale à l’université Laval, Stéphanie gravite dans le milieu musical professionnel depuis son tout jeune âge. Passionnée de musique traditionnelle, country, pop, jazz, classique… cette grande variété de style l’a amené à participer à plusieurs événements d’envergures: « En direct de l’univers », « Comédie\nHa! », « Aller-retour country », « La poule aux oeufs d’or - édition country »… et aussi donner des spectacles dans plusieurs pays: France, Belgique, Allemagne, Espagne, Corée du Nord, presque tout le canada et plusieurs parties des États-Unis.\n\nVous l’aurez peut-être vu auprès de vos artistes préférés; Édith Butler, Claire Pelletier, Renée Martel, Patrick Normand, Marie-Denise Pelletier, Laurence Jalbert, Annie Blanchard, Manon Bédard, Marie-Michèle Desrosiers, Paul Daraîche… Avec déjà 4 albums personnels à son actif, Stéphanie présente depuis plusieurs années des spectacles de musique traditionnelle dans des festivals à travers le Québec, l’Ontario, l’ouest canadien et américain et même parfois en Europe.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=8sYW1aXeQws",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=wJfQWu8z7jY",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=i3CgtwptM1Y",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=2syEBC5ZIHk",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=t3a3CskOECo",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Violoniste_Stéphanie_Labbé_370x370.jpg",
        alt: "Stéphanie Labbé"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Violoniste_Stéphanie_Labbé_370x370_3.jpg",
        alt: "Stéphanie Labbé"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Violoniste_Stéphanie_Labbé_370x370_1.jpeg",
        alt: "Stéphanie Labbé"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/135/Stéphanie-Labbé"
  },
  {
    id: "37",
    slug: "stephanie-roy",
    name: "Stéphanie Roy",
    image: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_570x570.jpg",
    biography: "Plongez dans l'univers musical polyvalent de Stéphanie Roy, une chanteuse talentueuse qui apporte une touche d'élégance et de dynamisme à chaque performance. Forte d'une expérience de plus de 20 ans dans le domaine, Stéphanie excelle aussi bien en solo qu'accompagnée de musiciens chevronnés.\n\nSon répertoire varié saura combler tous les amateurs de musique, qu'ils affectionnent la danse sociale, le country, le rock, le disco ou les succès populaires. En tant qu'ancienne enseignante de chant pendant plus d'une décennie, Stéphanie possède une maîtrise vocale exceptionnelle et une capacité à transmettre sa passion pour la musique à ses élèves.\n\nEn parallèle à sa carrière d'interprète, Stéphanie s'est également distinguée en tant que directrice artistique et animatrice de nombreux spectacles. Elle a prêté sa voix de choriste à diverses formations, aussi bien en studio qu'en direct sur scène. Son talent l'a même conduite à participer à des émissions télévisées prestigieuses telles que « En direct de l'Univers », animée par France Beaudoin sur les ondes de Radio-Canada.\n\nDepuis plus de cinq ans, Stéphanie collabore avec l'Agence Distinction, où elle a su séduire un public varié lors de soirées corporatives, dans des restaurants, des brasseries, des soirées d'anniversaire et des mariages. Son vaste répertoire, fruit d'un travail assidu et d'une passion débordante pour la musique, promet des moments inoubliables pour les danseurs et les mélomanes.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=sRijBLLKCTo",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_1.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_2.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_220x500_1.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_220x500_2.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_2400x1350_1.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_2400x1350_2.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_370x370.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_370x370_2.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "/images/agence-distinction/Roy%2C%20St%C3%A9phanie/Agence_Distinction_Chanteuse_St%C3%A9phanie_Roy_570x570_2.jpg",
        alt: "Roy, Stéphanie"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Stephanie_Roy_2400x1350_2.jpg",
        alt: "Stéphanie Roy"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Stephanie_Roy_370x370.jpg",
        alt: "Stéphanie Roy"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteuse_Stephanie_Roy_370x370_2.jpg",
        alt: "Stéphanie Roy"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/37/Stéphanie-Roy"
  },
  {
    id: "94",
    slug: "steve-barry",
    name: "Steve Barry",
    image: "/images/agence-distinction/Barry%2C%20Steve/Agence_Distinction_Steve_Barry_570x570.jpg",
    biography: "BIOGRAPHIENé le 30 janvier 1965 et fils unique, Sylvain-Steve grandit à Marieville dans un environnement musical riche où résonnent constamment les grandes voix d’Elvis Presley, de Tom Jones et de plusieurs autres artistes marquants. En 1977, il découvre les harmonies uniques des frères Gibb, du groupe Bee Gees, qui deviennent rapidement ses frères d’âme et sa plus grande source d’inspiration musicale. Cette influence le pousse vers la composition dès 1980, lorsqu’il acquiert sa première guitare.\n\nÀ l’âge de 16 ans, Steve monte sur scène pour la première fois avec sa formation musicale Heaven’s Shadows, lors du Carnaval de Richelieu, puis au spectacle de fin d’année de son école, l’école Mgr Euclide-Théberge à Marieville. C’est à ce moment qu’il attire l’attention du groupe progressif local Olocus Satyre, avec qui il chante de 1981 à 1983. Cette expérience lui permet de découvrir la scène des bars et d’apprendre la discipline et l’endurance qu’exige la vie d’artiste.\n\nCROONEREn 2019, Steve lance son deuxième album solo, « Saveur Crooner », qui met en lumière son côté charmeur et son talent d’interprète. Il devient également chanteur au sein du Tuxedo Big Band.\n\nDurant la période de confinement liée à la pandémie de COVID-19, Steve publie une courte vidéo sur les réseaux sociaux où il interprète Stayin’ Alive des Bee Gees a cappella. La vidéo connaît un vif succès et dépasse les 100 000 visionnements.\n\nMalgré les défis de la pandémie, Steve poursuit sa route musicale avec la sortie des chansons « Noël en confinement » et « De Marieville à Ville-Marie », cette dernière étant un hommage à sa ville natale. Il collabore également avec le réseau FADOQ, pour lequel il compose une chanson thème en compagnie de son fils Samuel.\n\nRÉTROPassionné par la musique des décennies passées, Steve fait partie de plusieurs formations spécialisées dans le répertoire rétro des années 50, 60 et 70, notamment The Wonders Band, Around the Beatles et Rétro en tête et du Duo Harmonie Rétro avec Diane Lavoie.\n\nCOUNTRYArtiste polyvalent, Steve explore aussi l’univers de la musique country. En 2017, il fonde sa propre maison de disques, AKBCO Productions, et lance son premier album solo country intitulé « Saveur Country ».\n\nL’album comprend la chanson « La p’tite fille de papa », qui obtient des rotations sur plusieurs radios country du Québec et lui vaut des invitations à se produire notamment aux Festivals Country de Longueuil et de Saint-Amable. La chanson, écrite par Barry Gibb du groupe Bee Gees, a été adaptée en français par Steve avec l’approbation officielle de l’auteur. Une vidéo de la chanson est également lancée.\n\nLa chanson est disponible sur les principales plateformes de téléchargement et d’écoute, dont i\nTunes et Google Play.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=wShsNnlb8v8",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=gxGLknZIFPk",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=1hWE0zS3xYA",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=jVxL70njNZc",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "/images/agence-distinction/Barry%2C%20Steve/Agence_Distinction_Steve_Barry_220x500_1.jpg",
        alt: "Barry, Steve"
      },
      {
        url: "/images/agence-distinction/Barry%2C%20Steve/Agence_Distinction_Steve_Barry_2400x1350_1.jpg",
        alt: "Barry, Steve"
      },
      {
        url: "/images/agence-distinction/Barry%2C%20Steve/Chanteur_Steve_Barry_Agence_Distinction_370x370.jpg",
        alt: "Barry, Steve"
      },
      {
        url: "/images/agence-distinction/Barry%2C%20Steve/Chanteur_Steve_Barry_Agence_Distinction_570x570.jpg",
        alt: "Barry, Steve"
      },
      {
        url: "/images/agence-distinction/Barry%2C%20Steve/FB_IMG_1720563160941.jpg",
        alt: "Barry, Steve"
      },
      {
        url: "/images/agence-distinction/Barry%2C%20Steve/exported__20230118_120108_476_37.jpg",
        alt: "Barry, Steve"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Steve_Barry_2400x1350_1.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1778875682_75b6ec3e10a54d1ff74d.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277908_ad282fe7ef9e21f2e6d0.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277890_7dc66e6b3bb1804907fa.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277900_4b06ced52344bbb774b7.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277882_7727f6c587219010daa5.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1778875693_1191b63212c642fff1c9.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277894_e15d2c3fec6d530689ed.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277912_8878a28e438691775808.jpg",
        alt: "Steve Barry"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762277885_b3de3a01bdcdc42f645f.jpg",
        alt: "Steve Barry"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/94/Steve-Barry"
  },
  {
    id: "156",
    slug: "sv-ray",
    name: "SV Ray",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_SV_Ray_570x570.jpg",
    biography: "Découvrez SV Ray, l'artiste qui fait vibrer les cœurs et égaye les esprits partout sur son passage. Avec sa guitare toujours fidèle à ses côtés, SV Ray vous transporte d'un univers musical à un autre, passant avec aisance de Félix Leclerc à Willie Nelson, de Johnny Cash à Francis Cabrel. Attention, il saura vous entraîner à taper du pied au rythme de ses chansons entraînantes!\n\nFort d'une expérience scénique et télévisuelle impressionnante, SV Ray établit un lien authentique avec son public. Il est l'un des rares artistes à avoir atteint deux finales du prestigieux concours « Le Festival de la chanson de Granby », une en tant qu'auteur-compositeur et l'autre en tant qu'interprète, démontrant ainsi l'étendue de son talent.\n\nAu fil des ans, SV Ray a enchanté les salles du Théâtre des Deux-Rives et du Cabaret Théâtre du Vieux St-Jean à Saint-Jean-sur-Richelieu lors de spectacles solos et de ses engagements pour la santé mentale à travers son projet \"Ces Voix Oubliées\". Il a également brillé à trois reprises sur la scène de la Salle Claude Léveillé de la Place des Arts dans le cadre du prestigieux concours \"Ma Première Place des Arts\", ainsi que lors de concerts privés. Ses apparitions télévisuelles, notamment dans « Musi-art » en 1988 sur TVA animé par Daniel Lavoie, ainsi que sur MaTV et Radio-Canada, lui ont valu une reconnaissance croissante, lui permettant de partager sa passion pour la musique country et de promouvoir ses albums via les émissions \"Pour l'Amour du Country\" (Patrick Norman), \"Aller-Retour Country\" (Karo Laurendeau) et \"En Route Vers l'Ouest\" (Véronique Labbé).\n\nAvec un répertoire comprenant un album populaire, quatre albums de musique traditionnelle québécoise et quatre albums country, SV Ray incarne le talent, le charisme et l'humour. Sa voix chaude et puissante saura vous captiver et vous emporter dans un tourbillon d'émotions. Après plus de 200 concerts dans les CHSLD et résidences pour aînés depuis 2005, SV Ray reste passionné et déterminé à partager sa musique avec nos aînés.\n\nPour une expérience musicale mémorable, SV Ray est l'artiste incontournable pour vos événements.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=cld058Sj0v4",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=q3gOGocqhsw",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=AgW12VjyMPQ",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/SV_Ray_2400x1350_6.jpg",
        alt: "SV Ray"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_SV_Ray_370x370.jpg",
        alt: "SV Ray"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/156/SV-Ray"
  },
  {
    id: "115",
    slug: "thomas-piche",
    name: "Thomas Piché",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteur_Thomas_Piché_570x570_3.jpg",
    biography: "Personne ne reste indifférent au son de Thomas Piché, l’homme-orchestre. Tantôt touchant, tantôt enlevant, son répertoire pop, rock & folk acoustique vous réserve autant de belles surprises que de valeurs sûres. Une rencontre empreinte d’authenticité et de plaisir.\n\nThomas a commencé à faire de la musique à l’âge de 13 ans. D’abord batteur, puis chanteur et harmoniciste, il peaufine la guitare et entreprend son projet d’homme-orchestre! Thomas vous invite au voyage à travers son répertoire ‘Acoustic Pop, Rock et Folk.",
    categories: [],
    themes: [],
    formats: [],
    eventTypes: [],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=cbavhJ5I_8Q",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteur_Thomas_Piche_2400x1350_1.jpg",
        alt: "Thomas Piché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteur_Thomas_Piché_370x370_2.jpg",
        alt: "Thomas Piché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteur_Thomas_Piché_370x370_3.jpg",
        alt: "Thomas Piché"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/Agence_Distinction_Chanteur_Thomas_Piché_370x370.jpg",
        alt: "Thomas Piché"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/115/Thomas-Piché"
  },
  {
    id: "230",
    slug: "titoine-clown-de-bien-etre-pour-aines",
    name: "Titoine - Clown de bien-être pour aînés",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124072_c9c1f5b7b81ef45f431d.jpeg",
    biography: "Titoine, le Clown de Bien-Être pour Aînés\nUn souffle de joie, de musique et d’humanité dans vos unités de soins\n\nTitoine n’est pas un clown comme les autres. Derrière son nez rouge et ses éclats de rire se cache un accompagnateur de cœur, musicien-comédien-animateur formé en clown théâtral et clown thérapeutique, qui utilise le jeu, la musique et l’humour pour semer du bien-être chez les aînés.\n\nLors de ses visites, Titoine apporte une valise remplie d’instruments de musique, de chansons et de surprises sensorielles. Il improvise avec sensibilité, s’adapte à chaque personne et à chaque lieu — que ce soit en chambre, dans les espaces communs ou lors d’activités spéciales. Il chante, joue, écoute, mime, crée des liens, et parfois se tait… juste assez pour que la magie opère.\n\nLes bienfaits sont nombreux : - Amélioration de l’humeur et réduction de l’anxiété\n\n- Stimulation cognitive et émotionnelle\n\n- Création d’instants de partage et de complicité\n\n- Une ambiance apaisante, empreinte de tendresse et de légèreté\n\nInviter Titoine, c’est offrir un moment vrai, sensible et joyeux aux résidents, où la musique et la rencontre clownesque prennent soin autrement.\n\nContactez-nous pour planifier des visites adaptées à votre milieu.",
    primaryCategory: "chanteur(se)",
    categories: [
      "chanteur(se)",
      "guitariste",
      "ukuléliste"
    ],
    themes: [
      "Atelier musical pour aînés",
      "Bal en blanc",
      "Chanson française",
      "Croisière",
      "Crooner",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Chanteur(se)",
      "Guitariste",
      "Ukuléliste"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Animation et personnages",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124383_84244007cb271baff86e.jpeg",
        alt: "Titoine - Clown de bien-être pour aînés"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124404_ecf8720357918c0040a3.jpeg",
        alt: "Titoine - Clown de bien-être pour aînés"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124389_d97d2ccd5994033657ec.jpeg",
        alt: "Titoine - Clown de bien-être pour aînés"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124364_9e322a443e9e14716762.jpeg",
        alt: "Titoine - Clown de bien-être pour aînés"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124082_c876f63f8c5c64a59510.jpeg",
        alt: "Titoine - Clown de bien-être pour aînés"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1762124396_b55130fe162c6392f8ba.jpeg",
        alt: "Titoine - Clown de bien-être pour aînés"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/230/titoine-clown-de-bien-etre-pour-a"
  },
  {
    id: "237",
    slug: "yanick-coderre-saxophoniste",
    name: "Yanick Coderre - Saxophoniste",
    image: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771879295_46db17b898e4d2ca141f.jpg",
    biography: "Gentleman Saxophoniste « Gentleman Saxophoniste » est le projet musical pour vos événements corporatifs, combinant le charme sophistiqué du saxophone à une ambiance jazzy enveloppante. Yanick Coderre crée une atmosphère spéciale et unique qui garantit le succès de votre événement. Son répertoire inclusif, allant du jazz classique à des touches de musique pop soigneusement sélectionnées, assure une expérience musicale inoubliable pour tous vos invités. Trio Jazz: JST Jazz sessions trio, c’est beaucoup plus qu’un simple trio jazz. Cette formation est une expérience musicale, un voyage dans le temps et le présent. Ces trois musiciens accomplis revisitent les classiques jazz mais ont aussi leurs propres adaptations jazz des succès populaires d’aujourd’hui. Jazz sessions trio, c’est 20 ans de passion et d’expérience interprétés par 3 Gentlemans n’ayant qu’une mission: rendre à votre événement le succès que vous souhaitez.",
    primaryCategory: "musicien de musique du monde",
    categories: [
      "musicien de musique du monde",
      "saxophoniste"
    ],
    themes: [
      "Années 20 - Charleston / Gatsby",
      "Bal en blanc",
      "Chanson française",
      "Croisière",
      "Fête des mères",
      "Fête des pères",
      "Fête du printemps",
      "Halloween",
      "Hollywood",
      "Jazz",
      "Jour de l'an",
      "Kermesse",
      "Noël",
      "Pâques",
      "Rétro",
      "St-Jean-Baptiste",
      "St-Valentin"
    ],
    formats: [
      "Musicien de musique du monde",
      "Saxophoniste"
    ],
    eventTypes: [
      "Concert musical",
      "Musique d'ambiance",
      "Troubadour (Unité de soins)",
      "Cérémonie commémorative"
    ],
    audiences: [],
    videos: [
      {
        url: "https://www.youtube.com/watch?v=AHpIaT_vwns",
        type: "youtube"
      },
      {
        url: "https://www.youtube.com/watch?v=jt-1Ui8Oovc",
        type: "youtube"
      }
    ],
    gallery: [
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771879332_4f2e61a2419e3dc2d93d.jpg",
        alt: "Yanick Coderre - Saxophoniste"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771879327_440211964aa5d374e3ad.jpg",
        alt: "Yanick Coderre - Saxophoniste"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771879339_b3f16de1c85082b7c5b1.jpg",
        alt: "Yanick Coderre - Saxophoniste"
      },
      {
        url: "https://gestion.agencedistinction.ca//resources/profile_uploads/imgs/1771879356_2af209ffc120afad10b6.jpg",
        alt: "Yanick Coderre - Saxophoniste"
      }
    ],
    sourceUrl: "https://agencedistinction.ca/artists/view/237/yanick-coderre"
  }
]

export function resolveArtistSlug(slug: string): string {
  return artistSlugAliases[slug] ?? slug
}

export function getArtistBySlug(slug: string): ArtistProfile | undefined {
  const resolved = resolveArtistSlug(slug)
  return artistProfiles.find((artist) => artist.slug === resolved)
}

export function getAllArtistProfiles(): ArtistProfile[] {
  return artistProfiles
}

export function getArtistById(id: string): ArtistProfile | undefined {
  return artistProfiles.find((artist) => artist.id === id)
}

/** Aperçu court pour les cartes (dérivé de la biographie, jamais tronqué avec ...) */
export function getArtistPreview(artist: ArtistProfile, maxLength = 180): string | undefined {
  if (!artist.biography) return undefined
  const firstParagraph = artist.biography.split(/\n\n+/)[0]?.replace(/\s+/g, " ").trim()
  if (!firstParagraph) return undefined
  if (firstParagraph.length <= maxLength) return firstParagraph
  const cut = firstParagraph.slice(0, maxLength).replace(/\s+\S*$/, "")
  return cut + "…"
}

/** Catégories sans doublons ni répétition de la catégorie principale */
export function getArtistCategories(artist: ArtistProfile): string[] {
  const primary = artist.primaryCategory?.toLowerCase().trim()
  return artist.categories.filter(
    (category) => category.toLowerCase().trim() !== primary
  )
}
