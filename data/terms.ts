import { colors } from "./colors"
import { VOLUMES } from "./volumes"

export enum TERMS {
  ABS = "ABS",
  ABS_SUTRAT = "ABS_SUTRAT",
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
  TRIGHB = "TRIGHB",
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
  color: colors
}

export const TERMS_DATA: { [key in TERMS]: TermData } = {
  ABS: {
    name: "ABS",
    short: "Abstraction",
    summary: "Abstrait, qui se rapproche de l'absolu",
    volume: "storyboards",
    color: colors.purple,
  },
  ABS_SUTRAT: {
    name: "ABS-SUTRAT",
    short: `"Soutrate" de l'abstraction`,
    summary: "Agrégat de données relatifs à l'ABS",
    volume: "storyboards",
    color: colors.purple,
  },
  AVE: {
    name: "AVE",
    short: "Salut",
    summary: "Salutation, hommage rendu.",
    volume: "storyboards",
    color: colors.jewel,
  },
  DATA: {
    name: "DATA",
    short: "Donnée/idée",
    summary: "Élément atomique de connaissance.",
    volume: "storyboards",
    color: colors.turquoize,
  },
  ERA: {
    name: "ERA",
    short: "Très longue période de temps.",
    summary:
      "Le temps, du début des ZUMS à la fin de l'univers, est découpé en sept parties.",
    volume: VOLUMES.VOLUME_1,
    color: colors.turquoize,
  },
  HIGHBS: {
    name: "HIGHBS",
    short: "Abstraction absolue",
    summary: "Motif ultime, idée la plus haute perchée.",
    volume: VOLUMES.VOLUME_1,
    color: colors.gold,
  },
  HIGHBS_BOK: {
    name: "HIGHBS-BOK",
    short: "Le livre du motif absolu",
    summary: "Un recueil de poèmes ésotériques sur l'histoire des ZUMS.",
    volume: VOLUMES.VOLUME_1,
    color: colors.lightGold,
  },
  HOL_ADIN: undefined,
  HOL_ONG: undefined,
  ONG: undefined,
  PSIK: {
    name: "PSIK",
    short: "Psychédélique",
    summary:
      "Activités, musique, substances suscitant des états de consciences modifiées, et donc de nouvelles idées.",
    volume: VOLUMES.VOLUME_1,
    color: colors.purple,
  },
  SHRIGHNE: undefined,
  TOUT_UN: {
    name: "Tout-un",
    short: "Totalité faite une",
    summary: "État d'harmonie éternelle. La quête ultime des ZUMS.",
    volume: VOLUMES.VOLUME_1,
    color: colors.gold,
  },
  TRIGHB: undefined,
  VAULT: undefined,
  ZUM: {
    name: "ZUM",
    short: "Humanoïdes",
    summary:
      "Êtres intelligents habitant la planète Tera, puis l'univers par extension.",
    color: colors.skin,
  },
}
