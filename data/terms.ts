import { COLORS } from "./colors"
import { VOLUMES } from "./volumes"

export enum TERMS {
  ABS = "ABS",
  ABS_SUTRAT = "ABS_SUTRAT",
  ANCIENS_ANCIENS = "ANCIENS_ANCIENS",
  AVE = "AVE",
  DATA = "DATA",
  ERA = "ERA",
  HIGHBS = "HIGHBS",
  HIGHBS_BOK = "HIGHBS_BOK",
  HOL_ADIN = "HOL_ADIN",
  HOL_ONG = "HOL_ONG",
  ONG = "ONG",
  PSIK = "PSIK",
  SHRIGHNE = "SHRIGHNE",
  TOUT_UN = "TOUT_UN",
  TRIBU = "TRIBU",
  VAULT = "VAULT",
  ZUM = "ZUM",
}

export type TermData = {
  name: string
  /** Word translation. */
  short: string
  /** Small concept description. */
  summary?: string
  /**
   * At which volume the term has been introduced.
   *
   * @note `'storyboards'` means the term has
   *  never been introduced, while still part of
   *  the universe.
   */
  volume?: "storyboards" | VOLUMES
  color: COLORS
  /** Term will be printed w/ regular font. */
  regular?: boolean
}

export const TERMS_DATA: { [key in TERMS]: TermData } = {
  ABS: {
    name: "ABS",
    short: "Abstraction",
    summary: "Abstrait, qui se rapproche de l'absolu",
    volume: "storyboards",
    color: COLORS.PURPLE,
  },
  ABS_SUTRAT: {
    name: "ABS-SUTRAT",
    short: `"Soutrate" de l'abstraction`,
    summary: "Agrégat de DATA relatif à l'ABS",
    volume: "storyboards",
    color: COLORS.PURPLE,
  },
  ANCIENS_ANCIENS: {
    name: "Anciens-anciens",
    short: "Prédecesseur à la grande sagesse",
    summary:
      "ZUMS, ou autres, ayant senti la présence du tout-un en leur temps",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.JEWEL,
    regular: true,
  },
  AVE: {
    name: "AVE",
    short: "Salut",
    summary: "Salutation, hommage rendu.",
    volume: "storyboards",
    color: COLORS.JEWEL,
  },
  DATA: {
    name: "DATA",
    short: "Donnée/idée",
    summary: "Élément atomique de connaissance.",
    volume: "storyboards",
    color: COLORS.TURQUOIZE,
  },
  ERA: {
    name: "ERA",
    short: "Très longue période de temps.",
    summary:
      "Le temps, du début des ZUMS à la fin de l'univers, est découpé en sept parties.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.LIGHT_BLUE,
  },
  HIGHBS: {
    name: "HIGHBS",
    short: "Abstraction absolue",
    summary: "Motif ultime, idée la plus haute perchée.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.GOLD,
  },
  HIGHBS_BOK: {
    name: "HIGHBS-BOK",
    short: "Le livre du motif absolu",
    summary:
      "Un recueil de poèmes ésotériques sur l'histoire des ZUMS, leur recherche du Tout-Un et de sa porte, l'HIGHBS.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.LIGHT_GOLD,
  },
  HOL_ADIN: undefined,
  HOL_ONG: {
    name: "HOL-ONG",
    short: "Conscience collective",
    summary:
      "Réseau rassemblant les consciences de tous les créatures de Grand-Arbre.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.TURQUOIZE,
  },
  ONG: undefined,
  PSIK: {
    name: "PSIK",
    short: "Psychédélique",
    summary:
      "Activités, musique, substances suscitant des états de consciences modifiées, et donc de nouvelles idées.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.PURPLE,
  },
  SHRIGHNE: undefined,
  TRIBU: {
    name: "tribu",
    short: "Groupe de ZUMS",
    summary:
      "Les tribus regroupent, dès la PRIMA-ERA, les individus rendant des services écologiques similaires.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.DARK_SKIN,
    regular: true,
  },
  TOUT_UN: {
    name: "Tout-un",
    short: "Totalité faite une",
    summary: "État d'harmonie éternelle. La quête ultime des ZUMS.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.GOLD,
    regular: true,
  },
  VAULT: undefined,
  ZUM: {
    name: "ZUM",
    short: "Humanoïdes",
    summary:
      "Êtres intelligents habitant la planète Tera, puis l'univers par extension.",
    color: COLORS.SKIN,
  },
}
