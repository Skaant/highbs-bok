import { COLORS } from "./colors"
import { ERAS } from "./eras"
import { VOLUMES } from "./volumes"
import { Source, WordData } from "./_types/WordData"

export enum PLACES {
  TERA = "TERA",
  GRAND_ARBRE = "GRAND_ARBRE",
  SIEGE_PENSEE = "SIEGE_PENSEE",
  CITE_AUBE = "CITE_AUBE",
  WAILANDA = "WAILANDA",
}

export type PlaceData = WordData & {
  eras: ERAS[]
  volume: Source
  particle?: string
}

export type PlaceDataSet = { [place in PLACES]: PlaceData }

export const PLACES_DATA: PlaceDataSet = {
  CITE_AUBE: {
    id: "cite-de-l-aube",
    name: "Cité de l'Aube",
    summary:
      "Le dernier bastion des ZUMS face à l'ombre. En son coeur est créé l'ANGK.",
    color: COLORS.LIGHT_GOLD,
    eras: [ERAS.AURO_ERA],
    volume: VOLUMES.VOLUME_1,
    particle: "la ",
  },
  GRAND_ARBRE: {
    id: "grand-arbre",
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
    id: "siege-de-la-pensee",
    name: "Siège de la Pensée",
    summary:
      "Point de convergence de toutes les idées. Système reflexif, cerveau. Fait de PRIGHM. Centre spatial de l'univers et plus grosse présence sur le HOL-ONG.",
    color: COLORS.GOLD,
    eras: [ERAS.CONTRACTION_ERA, ERAS.AURO_ERA],
    volume: VOLUMES.VOLUME_2,
    particle: "le ",
  },
  TERA: {
    id: "tera",
    name: "Tera",
    summary:
      "Planète d'origine des ZUMS. Toute sa matière sert d'humus au départ de GRAND-ARBRE.",
    color: COLORS.BLUE,
    eras: [ERAS.PALEO_ERA],
    volume: VOLUMES.VOLUME_1,
  },
  WAILANDA: {
    id: "wailanda",
    name: "Wailanda",
    summary: "Territoire d'arrivée de KRAO, quelque part sur l'EXPANS.",
    color: COLORS.GREEN,
    eras: [ERAS.EXPANS_ERA],
    volume: VOLUMES.VOLUME_2,
  },
}
