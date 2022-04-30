import { COLORS } from "./colors"
import { ERAS } from "./eras"
import { VOLUMES } from "./volumes"

export enum CHARACTERS {
  TOUT_UN = "TOUT_UN",
  BALTAZUM = "BALTAZUM",
  ANGK = "ANGK",
  GRAND_ARBRE = "GRAND_ARBRE",
  SIEGE_PENSEE = "SIEGE_PENSEE",
  RAZ_LA = "RAZ_LA",
  BINDA = "BINDA",
  ZA_ZOZ = "ZA_ZOZ",
  KRAO = "KRAO",
  JING_JAM_ZUM = "JING_JAM_ZUM",
  ENTROPIUS = "ENTROPIUS",
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
  volume: VOLUMES
  group?: boolean
}

export const CHARACTERS_DATA: { [key in CHARACTERS]: CharacterData } = {
  TOUT_UN: {
    name: "Le Tout-Un",
    eras: "all",
    summary:
      "L'entité complète, en potentiel, que les ZUMS cherchent à manifester.",
    color: COLORS.GOLD,
    volume: VOLUMES.VOLUME_1,
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
    name: "L'Angk",
    eras: [ERAS.AURO_ERA, ERAS.ANGK_ERA],
    summary:
      "Le projet de corps pour l'être unique capable de réaliser l'HIGHBS et former le tout-un.",
    color: COLORS.DARK_SKIN,
    volume: VOLUMES.VOLUME_1,
  },
  GRAND_ARBRE: {
    name: "Grand-Arbre",
    eras: [
      ERAS.PRIMA_ERA,
      ERAS.EXPANS_ERA,
      ERAS.DISPERSION_ERA,
      ERAS.CONTRACTION_ERA,
    ],
    summary:
      "La structure organique qui sert de support à la colonisation de l'univers par les ZUMS.",
    color: COLORS.GREEN,
    volume: VOLUMES.VOLUME_1,
  },
  SIEGE_PENSEE: {
    name: "Le Siège de la Pensée",
    eras: [ERAS.CONTRACTION_ERA, ERAS.AURO_ERA],
    summary:
      "Le point de convergence de tous les idées de l'univers, le cerveau ultime.",
    color: COLORS.GOLD,
    volume: VOLUMES.VOLUME_2,
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
    summary: "KAMI de la tribu PSIK, interlocuteur de Binda et ses amis.",
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
  ENTROPIUS: {
    name: "Entropius",
    eras: [ERAS.AURO_ERA],
    summary: "KAMI de l'entropie, allié de Jing-Jam-Zum et de sa harde.",
    color: COLORS.DEEP,
    volume: VOLUMES.VOLUME_2,
  },
}
