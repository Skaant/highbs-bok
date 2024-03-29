import { COLORS } from "./colors"

export enum ERAS {
  PRESENT = "PRESENT",
  PALEO_ERA = "PALEO_ERA",
  PRIMA_ERA = "PRIMA_ERA",
  EXPANS_ERA = "EXPANS_ERA",
  DISPERSION_ERA = "DISPERSION_ERA",
  CONTRACTION_ERA = "CONTRACTION_ERA",
  AURO_ERA = "AURO_ERA",
  ANGK_ERA = "ANGK_ERA",
}

export type EraData = {
  index: number
  name: string
  summary: string
  id: string
  color: COLORS
}

export type EraDataSet = { [era in ERAS]: EraData }

export const ERAS_DATA: EraDataSet = {
  PRESENT: {
    index: 0,
    name: "Présent",
    summary: `Volontairement plongé dans les flots PSIK, le narrateur introduit et commente l'histoire des ZUMS.`,
    id: "present",
    color: COLORS.PURPLE,
  },
  PALEO_ERA: {
    index: 1,
    name: "PALEO-ERA",
    summary: `C'était avant l'avènement du HOL-ONG, le réseau de conscience collective.`,
    id: "paleo-era",
    color: COLORS.BLUE,
  },
  PRIMA_ERA: {
    index: 2,
    name: "PRIMA-ERA",
    summary: `Partis de leur planète-mère TERA, les ZUMS colonisèrent rapidement tout leur système solaire.`,
    id: "prima-era",
    color: COLORS.SKIN,
  },
  EXPANS_ERA: {
    index: 3,
    name: "EXPANS-ERA",
    summary: "Les ZUMS partent à la conquête de l'univers.",
    id: "expans-era",
    color: COLORS.GREEN,
  },
  DISPERSION_ERA: {
    index: 4,
    name: "DISPERSION-ERA",
    summary:
      "Les ZUMS et la vie arrivent au bord de l'univers. Qu'y a t'il après ?",
    id: "dispersion-era",
    color: COLORS.LIGHT_DEEP,
  },
  CONTRACTION_ERA: {
    index: 5,
    name: "CONTRACTION-ERA",
    summary: `Par la force des joyaux conceptuels-trous noirs, l'univers commence à se rétracter.`,
    id: "contraction-era",
    color: COLORS.JEWEL,
  },
  AURO_ERA: {
    index: 6,
    name: "AURO-ERA",
    summary: `La dernière ville de l'univers, le berceau de l'être suprème.`,
    id: "auro-era",
    color: COLORS.GOLD,
  },
  ANGK_ERA: {
    index: 7,
    name: "ANGK-ERA",
    summary: `Le moment est venu pour le clôtureur de connaître la vérité.`,
    id: "angk-era",
    color: COLORS.LIGHT_BLUE,
  },
}
