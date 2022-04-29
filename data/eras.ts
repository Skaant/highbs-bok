import { colors } from "./colors"

export enum ERAS {
  PRESENT_ERA = "PRESENT_ERA",
  PALEO_ERA = "PALEO_ERA",
  PRIMA_ERA = "PRIMA_ERA",
  EXPANSION_ERA = "EXPANSION_ERA",
  DISPERSION_ERA = "DISPERSION_ERA",
  CONTRACTION_ERA = "CONTRACTION_ERA",
  AURO_ERA = "AURO_ERA",
  ANGK_ERA = "ANGK_ERA",
}

type EraData = { name: string; description: string; id: string; color: colors }

export const ERAS_DATA: { [key in ERAS]: EraData } = {
  PRESENT_ERA: {
    name: "Présent",
    description: `Volontairement plongé dans les flots PSIK, le narrateur introduit la SAGA ZUMA : l'histoire des ZUMS.`,
    id: "present-era",
    color: colors.purple,
  },
  PALEO_ERA: {
    name: "PALEO-ERA",
    description: `C'était avant l'avènement du HOL-ONG, le réseau de conscience collective.`,
    id: "paleo-era",
    color: colors.blue,
  },
  PRIMA_ERA: {
    name: "PRIMA-ERA",
    description: `Partis de leur planète-mère TERA, les ZUMS colonisèrent rapidement tout leur système solaire.`,
    id: "prima-era",
    color: colors.skin,
  },
  EXPANSION_ERA: {
    name: "EXPANSION-ERA",
    description: "Les ZUMS partent à la conquête de l'univers.",
    id: "expansion-era",
    color: colors.green,
  },
  DISPERSION_ERA: {
    name: "DISPERSION-ERA",
    description:
      "Les ZUMS et la vie arrivent au bord de l'univers. Qu'y a t'il après ?",
    id: "dispersion-era",
    color: colors.lightDeep,
  },
  CONTRACTION_ERA: {
    name: "CONTRACTION-ERA",
    description: `Par la force des joyaux conceptuels-trous noirs, l'univers commence à se rétracter.`,
    id: "contraction-era",
    color: colors.jewel,
  },
  AURO_ERA: {
    name: "AURO-ERA",
    description: `La dernière ville de l'univers, le berceau de l'être suprème.`,
    id: "auro-era",
    color: colors.gold,
  },
  ANGK_ERA: {
    name: "ANGK-ERA",
    description: `Le moment est venu pour le clôtureur de connaître la vérité.`,
    id: "angk-era",
    color: colors.turquoize,
  },
}
