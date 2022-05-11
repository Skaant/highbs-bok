import { ERAS } from "./eras"
import { VOLUMES } from "./volumes"

export enum PLACES {
  TERA = "TERA",
  SIEGE_PENSEE = "SIEGE_PENSEE",
  CITE_AUBE = "CITE_AUBE",
  WAILANDA = "WAILANDA",
}

export type PlaceData = {
  id: string
  name: string
  eras: ERAS[]
  volume: VOLUMES
  particle?: string
}

export const PLACES_DATA: { [key in PLACES]: PlaceData } = {
  CITE_AUBE: {
    id: "cite-de-l-aube",
    name: "Cité de l'Aube",
    eras: [ERAS.AURO_ERA],
    volume: VOLUMES.VOLUME_1,
    particle: "la ",
  },
  SIEGE_PENSEE: {
    id: "siege-de-la-pensee",
    name: "Siège de la Pensée",
    eras: [ERAS.CONTRACTION_ERA, ERAS.AURO_ERA],
    volume: VOLUMES.VOLUME_2,
    particle: "le ",
  },
  TERA: {
    id: "tera",
    name: "Tera",
    eras: [ERAS.PALEO_ERA],
    volume: VOLUMES.VOLUME_1,
  },
  WAILANDA: {
    id: "wailanda",
    name: "Wailanda",
    eras: [ERAS.EXPANS_ERA],
    volume: VOLUMES.VOLUME_2,
  },
}
