import { colors } from "./colors"
import { ERAS } from "./eras"

export enum CHARACTERS {
  TOUT_UN = "TOUT_UN",
  BALTAZUM = "BALTAZUM",
  ANGK = "ANGK",
  GRAND_ARBRE = "GRAND_ARBRE",
}

export type CharacterData = {
  name: string
  eras: ERAS[] | "all"
  summary: string
  color: colors
}

export const CHARACTERS_DATA: { [key in CHARACTERS]: CharacterData } = {
  TOUT_UN: {
    name: "Le tout-un",
    eras: "all",
    summary:
      "L'entité complète, en potentiel, que les ZUMS cherchent à manifester.",
    color: colors.gold,
  },
  BALTAZUM: {
    name: "Baltazum",
    eras: [ERAS.CONTRACTION_ERA],
    summary:
      "Voyant son monde sombrer dans les ténèbres, il cherche de nouvelles idées pour éviter qu'il ne disparaisse.",
    color: colors.skin,
  },
  ANGK: {
    name: "L'ANGK",
    eras: [ERAS.AURO_ERA, ERAS.ANGK_ERA],
    summary:
      "Le projet de corps pour l'être unique capable de réaliser l'HIGHBS et former le tout-un.",
    color: colors.darkSkin,
  },
  GRAND_ARBRE: {
    name: "Grand-Arbre",
    eras: [
      ERAS.PRIMA_ERA,
      ERAS.EXPANSION_ERA,
      ERAS.DISPERSION_ERA,
      ERAS.CONTRACTION_ERA,
    ],
    summary:
      "La structure organique qui sert de support à la colonisation de l'univers par les ZUMS.",
    color: colors.green,
  },
}
