export type Partner = {
  name: string
  href: string
  logo: string
  logoTransparent?: string
  alt: string
}

export const rqraPartner: Partner = {
  name: "RQRA",
  href: "https://www.rqra.qc.ca",
  logo: "/images/partners/rqra.png",
  logoTransparent: "/images/partners/rqra-transparent.png",
  alt: "Regroupement québécois des résidences pour aînés",
}

export const secondaryPartners: Partner[] = [
  {
    name: "Les Espaces Mémoria",
    href: "https://www.memoria.ca",
    logo: "/images/partners/les-espaces-memoria.png",
    alt: "Les Espaces Mémoria - Complexe funéraire",
  },
  {
    name: "Bobby Bougie",
    href: "https://bbougie.net",
    logo: "/images/partners/bobby-bougie.png",
    alt: "Bobby Bougie - Programmeur analyste",
  },
  {
    name: "HélèneDG",
    href: "https://helenedg.com",
    logo: "/images/partners/helene-designer-graphique.png",
    alt: "Hélène - Designer graphique",
  },
]
