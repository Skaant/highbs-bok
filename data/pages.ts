export enum PAGES {
  HOME = "HOME",
  ACHETER = "ACHETER",
  L_UNIVERS = "L_UNIVERS",
  L_UNIVERS_ERAS = "L_UNIVERS_ERAS",
  L_UNIVERS_COULEURS = "L_UNIVERS_COULEURS",
  L_UNIVERS_GLOSSAIRE = "L_UNIVERS_GLOSSAIRE",
  L_UNIVERS_PERSONNAGES_ET_ENTITES = "L_UNIVERS_PERSONNAGES_ET_ENTITES",
  L_UNIVERS_LIEUX = "L_UNIVERS_LIEUX",
  L_UNIVERS_TRIBUS_DE_L_EVEIL = "L_UNIVERS_TRIBUS_DE_L_EVEIL",
  BLOG = "BLOG",
  A_PROPOS = "A_PROPOS",
  MENTIONS_LEGALES = "MENTIONS_LEGALES",
}

type PageData = {
  title: string
  url: string
}

export const PAGES_DATA: { [key in PAGES]: PageData } = {
  HOME: {
    title: "Accueil",
    url: "/",
  },
  ACHETER: {
    title: "Acheter",
    url: "/acheter",
  },
  L_UNIVERS: {
    title: "L'univers",
    url: "/l-univers",
  },
  L_UNIVERS_ERAS: {
    title: "Sept ERAS",
    url: "/l-univers/sept-eras",
  },
  L_UNIVERS_COULEURS: {
    title: "Signification des couleurs",
    url: "/l-univers/couleurs",
  },
  L_UNIVERS_GLOSSAIRE: {
    title: "Glossaire",
    url: "/l-univers/glossaire",
  },
  L_UNIVERS_PERSONNAGES_ET_ENTITES: {
    title: "Personnages et entités",
    url: "/l-univers/personnages-et-entites",
  },
  L_UNIVERS_LIEUX: {
    title: "Lieux",
    url: "/l-univers/lieux",
  },
  L_UNIVERS_TRIBUS_DE_L_EVEIL: {
    title: "Les tribus de l'éveil",
    url: "/l-univers/tribus-de-l-eveil",
  },
  BLOG: {
    title: "Blog",
    url: "/blog",
  },
  A_PROPOS: {
    title: "À propos",
    url: "/a-propos",
  },
  MENTIONS_LEGALES: {
    title: "Mentions légales",
    url: "/mentions-legales",
  },
}
