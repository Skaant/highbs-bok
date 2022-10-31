import { COLORS } from "./colors"
import { WordData } from "./_types/WordData"

export enum TRIBES {
  PSIK = "PSIK",
  KOLOS = "KOLOS",
  NOV = "NOV",
  PERMA = "PERMA",
  /** WATCHRS */
  WATCHK = "WATCHK",
  /** ROAMRS */
  OMRA = "OMRA",
  /** SHAPRS */
  SHAPI = "SHAPI",
  ABS = "ABS",
  TRAK = "TRAK",
  SKIGH = "SKIGH",
  /** RAWS */
  RAAG = "RAAG",
  /** GENOS */
  GENAENG = "GENAENG",
  ARKEO = "ARKEO",
}

export type TribeData = WordData

export type TribeDataSet = { [tribe in TRIBES]: TribeData }

export const TRIBES_DATA: TribeDataSet = {
  PSIK: {
    id: "psik",
    name: "PSIK",
    summary:
      "Cultive le PSIK, l'améliore, le diffuse, découvre et accompagne dans ses usages.",
    color: COLORS.PURPLE,
  },
  KOLOS: {
    id: "kolos",
    name: "KOLOS",
    summary:
      "Fabrique les mille moyens de diffusion de Grand-Arbre, et prend place à bord de ceux-ci pour s'établir dans des territoires vierges.",
    color: COLORS.TURQUOIZE,
  },
  NOV: {
    id: "nov",
    name: "NOV",
    summary:
      "Spécialistes des conditions extrèmes, ils créent des campements et développe le WIGHLD là où il n'est pas.",
    color: COLORS.LIGHT_BLUE,
  },
  PERMA: {
    id: "perma",
    name: "PERMA",
    summary:
      "Capte les flux d'énergies et de ressources pour amplifier le WIGHLD et favoriser les autres tribus.",
    color: COLORS.GREEN,
  },
  WATCHK: {
    id: "trak",
    name: "WATCHK",
    summary:
      "Accroît la connaissance des environnements, indexent les génétiques, proches des villes ou lors d'expéditions dans le WIGHLD.",
    color: COLORS.DARK_TURQUOIZE,
  },
  OMRA: {
    id: "omra",
    name: "OMRA",
    summary:
      "Population nomade, entretient les chemins qui relient les villes et villages et échange les génétiques.",
    color: COLORS.SKIN,
  },
  SHAPI: {
    id: "shapi",
    name: "SHAPI",
    summary:
      "Chercheurs de l'OPTIM, ils perfectionnent l'usage des flux pour créer des ecosystèmes exponentiellement vivants.",
    color: COLORS.JEWEL,
  },
  ABS: {
    id: "abs",
    name: "ABS",
    summary:
      "Combinent les idées pour trouver des motifs de plus en plus abstraits.",
    color: COLORS.LIGHT_PURPLE,
  },
  TRAK: {
    id: "zong",
    name: "TRAK",
    summary:
      "Développement du réseau PRIGHM à travers le WIGHLD et l'EXPANS, fluidifie localement les échanges entre les être et le HOL-ONG.",
    color: COLORS.TURQUOIZE,
  },
  SKIGH: {
    id: "skigh",
    name: "SKIGH",
    summary:
      "Relient des branches de GRAND-ARBRE lors de voyages multi-générationnels. Transportent d'innombrables génétiques dans des bosquets spatiaux.",
    color: COLORS.LIGHT_GOLD,
  },
  RAAG: {
    id: "raag",
    name: "RAAG",
    summary:
      "Hors du HOL-ONG, ses membres cherchent l'expérience la plus brute du WIGHLD pour formuler des idées en marge.",
    color: COLORS.GREEN,
  },
  GENAENG: {
    id: "genaeng",
    name: "GENAENG",
    summary:
      "Collecte des génétiques, reprogramme et tente de les aligner le plus possible sur l'OPTIM local.",
    color: COLORS.DARK_TURQUOIZE,
  },
  ARKEO: {
    id: "arkeo",
    name: "ARKEO",
    summary:
      "Explore la donnée fossilisée, archive ou vivifie des idées pour les remettre en circulation dans le HOL-ONG si elle les considère intéressante.",
    color: COLORS.DARK_SKIN,
  },
}
