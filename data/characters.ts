import { COLORS } from "./colors"
import { ERAS } from "./eras"
import { VOLUMES } from "./volumes"
import { Source } from "./_types/WordData"

export enum CHARACTERS {
  TOUT_UN = "TOUT_UN",
  BALTAZUM = "BALTAZUM",
  ANGK = "ANGK",
  NARRATEUR = "NARRATEUR",
  RAZ_LA = "RAZ_LA",
  BINDA = "BINDA",
  ZA_ZOZ = "ZA_ZOZ",
  KRAO = "KRAO",
  JING_JAM_ZUM = "JING_JAM_ZUM",
  NUK_NOK = "NUK_NOK",
  /** 
                <li>
                  Les trois anciens-anciens qui guident Binda (PALÉO-ERA),
                </li>
                <li>Quelques ZUMS de la cité de l'aube (AURO-ERA).</li> */
}

export type CharacterData = {
  name: string
  eras: ERAS[] | "all"
  summary: string
  color: COLORS
  /** First volume when the character appears. */
  volume: Source
  particle?: string
  group?: boolean
}

export type CharacterDataSet = { [character in CHARACTERS]: CharacterData }

export const CHARACTERS_DATA: CharacterDataSet = {
  TOUT_UN: {
    name: "Tout-Un",
    eras: "all",
    summary:
      "L'entité complète, en potentiel, que les ZUMS cherchent à manifester.",
    color: COLORS.GOLD,
    volume: VOLUMES.VOLUME_1,
    particle: "le ",
  },
  BALTAZUM: {
    name: "Baltazum",
    eras: [ERAS.CONTRACTION_ERA],
    summary:
      "Voyant son monde sombrer dans les ténèbres, il cherche de nouvelles idées pour éviter qu'il ne disparaisse.",
    color: COLORS.SKIN,
    volume: VOLUMES.VOLUME_1,
  },
  ANGK: {
    name: "Angk",
    eras: [ERAS.AURO_ERA, ERAS.ANGK_ERA],
    summary:
      "Le projet de corps pour l'être unique capable de réaliser l'HIGHBS et former le tout-un.",
    color: COLORS.DARK_SKIN,
    volume: VOLUMES.VOLUME_1,
    particle: "l'",
  },
  NARRATEUR: {
    name: "Narrateur",
    eras: [ERAS.PRESENT],
    summary: "Quelqu'un raconte l'HIGHBS-BOK présentement.",
    color: COLORS.JEWEL,
    volume: VOLUMES.VOLUME_1,
  },
  RAZ_LA: {
    name: "Raz-la-pouëpouët",
    eras: [ERAS.CONTRACTION_ERA],
    summary: "Le KAMI du jardin de Baltazum",
    color: COLORS.TURQUOIZE,
    volume: VOLUMES.VOLUME_2,
  },
  BINDA: {
    name: "Binda",
    eras: [ERAS.PALEO_ERA],
    summary:
      "Un membre de la tribu PSIK qui va participer à l'émergence du HOL-ONG.",
    color: COLORS.BLUE,
    volume: VOLUMES.VOLUME_2,
  },
  ZA_ZOZ: {
    name: "Za-Zoz",
    eras: [ERAS.PALEO_ERA, ERAS.CONTRACTION_ERA],
    summary:
      "KAMI de la tribu PSIK, interlocuteur (entre autres) de Binda et ses amis.",
    color: COLORS.PURPLE,
    volume: VOLUMES.VOLUME_2,
  },
  KRAO: {
    name: "Krao",
    eras: [ERAS.EXPANS_ERA],
    summary:
      "Membre de la tribu KOLOS, candidat à l'exil pour coloniser un territoire vacant.",
    color: COLORS.LIGHT_BLUE,
    volume: VOLUMES.VOLUME_2,
  },
  JING_JAM_ZUM: {
    name: "Jing-Jam-Zum",
    eras: [ERAS.AURO_ERA],
    summary: "Hérault de l'ombre et meneuse du siège de la Cité de l'Aube.",
    color: COLORS.LIGHT_DEEP,
    volume: VOLUMES.VOLUME_2,
  },
  NUK_NOK: {
    name: "Nuk-Nok",
    eras: [ERAS.AURO_ERA],
    summary: "KAMI de l'entropie, allié de Jing-Jam-Zum et de sa harde.",
    color: COLORS.DEEP,
    volume: VOLUMES.VOLUME_2,
  },
}
