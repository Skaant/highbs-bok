import { COLORS } from "./colors"
import { VOLUMES } from "./volumes"
import { Source } from "./_types/WordData"

export enum TERMS {
  ABS = "ABS",
  ABS_LANG = "ABS_LANG",
  ABS_SUTRAT = "ABS_SUTRAT",
  ADAMAI = "ADAMAI",
  ANCIENS_ANCIENS = "ANCIENS_ANCIENS",
  AVE = "AVE",
  DATA = "DATA",
  DOM = "DOM",
  ERA = "ERA",
  EXPANS = "EXPANS",
  FOTO = "FOTO",
  GRAV = "GRAV",
  HIGHBS = "HIGHBS",
  HIGHBS_BOK = "HIGHBS_BOK",
  HOL_ADIN = "HOL_ADIN",
  HOL_ONG = "HOL_ONG",
  JING = "JING",
  KAMI = "KAMI",
  KANG = "KANG",
  MIKO = "MIKO",
  MIKO_PRIGHM = "MIKO_PRIGHM",
  ONG = "ONG",
  OPTIM = "OPTIM",
  PRIGHM = "PRIGHM",
  PSIK = "PSIK",
  PSIK_PSIK = "PSIK_PSIK",
  SHRIGHNE = "SHRIGHNE",
  SPARK = "SPARK",
  TRIBU = "TRIBU",
  TRIGHB = "TRIGHB",
  TRIKO_CITE = "TRIKO_CITE",
  VAULT = "VAULT",
  WIGHLD = "WIGHLD",
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
  volume: Source
  color: COLORS
  /** Term will be printed w/ regular font. */
  regular?: boolean
}

export type TermDataSet = { [term in TERMS]: TermData }

export const TERMS_DATA: TermDataSet = {
  ABS: {
    name: "ABS",
    short: "Abstraction",
    summary: "Abstrait, qui se rapproche de l'absolu",
    volume: "storyboards",
    color: COLORS.PURPLE,
  },
  ABS_LANG: {
    name: "ABS-LANG",
    short: "Langage des concepts",
    summary:
      "Lorsqu'on parle en concepts, qu'on utilise les termes de l'HIGHBS-BOK.",
    volume: "storyboards",
    color: COLORS.LIGHT_PURPLE,
  },
  ABS_SUTRAT: {
    name: "ABS-SUTRAT",
    short: `"Soutrate" de l'abstraction`,
    summary: "Agrégat de DATA relatif à l'ABS",
    volume: "storyboards",
    color: COLORS.PURPLE,
  },
  ADAMAI: {
    name: "ADAMAI",
    short: "Adamantin",
    summary: "Qui a la dureté du diamant, structure très pure.",
    volume: "storyboards",
    color: COLORS.JEWEL,
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
  DOM: {
    name: "DOM",
    short: "Maison",
    summary:
      "Structure organique offrant gîte, et partie du couvert, aux ZUMS et autres.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.LIGHT_BLUE,
  },
  ERA: {
    name: "ERA",
    short: "Très longue période de temps",
    summary:
      "Le temps, du début des ZUMS à la fin de l'univers, est découpé en sept parties.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.LIGHT_BLUE,
  },
  EXPANS: {
    name: "EXPANS",
    short: "Expansion",
    summary:
      "Croissance exponentielle de nouvelles terres, de nouvelles génétiques et de nouvelles idées.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.BLUE,
  },
  FOTO: {
    name: "FOTO",
    short: "Photonique",
    summary:
      "Énergie lumineuse, tirée des astres, transformée en JING et en SPARK.",
    volume: "storyboards",
    color: COLORS.LIGHT_GOLD,
  },
  GRAV: {
    name: "GRAV",
    short: "Gravitation",
    summary: "Énergie de contraction qui attire les éléments entre eux.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.SKIN,
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
  HOL_ADIN: {
    name: "HOL-ADIN",
    short: "Tout-Un",
    summary: "Nom du Tout-Un en ABS-LANG.",
    volume: "storyboards",
    color: COLORS.GOLD,
  },
  HOL_ONG: {
    name: "HOL-ONG",
    short: "Conscience collective",
    summary:
      "Réseau rassemblant les consciences de tous les créatures de Grand-Arbre.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.TURQUOIZE,
  },
  JING: {
    name: "JING",
    short: "Énergie nutritive",
    summary:
      "Produite par les plantes et autres, consommée par tous les êtres.",
    volume: "storyboards",
    color: COLORS.SKIN,
  },
  KAMI: {
    name: "KAMI",
    short: "Esprit",
    summary:
      "Personnification d'un concept du HOL-ONG. Interface d'une idée avec les êtres vivants, pour se rendre perceptible et compréhensible.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.TURQUOIZE,
  },
  KANG: {
    name: "KANG !",
    short: "Mouvement",
    summary:
      "Force motrice de l'univers. Donne aussi bien naissance à l'énergie GRAV qu'à l'entropie.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.DEEP,
  },
  MIKO: {
    name: "MIKO",
    short: "Mycellaire",
    summary: "Forme de réseau nodoescent.",
    volume: "storyboards",
    color: COLORS.DARK_SKIN,
  },
  MIKO_PRIGHM: {
    name: "MIKO-PRIGHM",
    short: "Réseau nodoescent construit de PRIGHM",
    summary:
      "Support au HOL-ONG. Fait de la matière la plus subtile pour pouvoir s'étendre sans fin et pour le moins coûteux possible.",
    volume: "storyboards",
    color: COLORS.TURQUOIZE,
  },
  ONG: {
    name: "ONG",
    short: "Conscience",
    summary:
      "Extension de la conscience des êtres, pour se connecter au HOL-ONG.",
    volume: "storyboards",
    color: COLORS.LIGHT_GOLD,
  },
  OPTIM: {
    name: "OPTIM",
    short: "Climax",
    summary: "Culmination de l'efficience énergétique d'un système.",
    volume: "storyboards",
    color: COLORS.JEWEL,
  },
  PRIGHM: {
    name: "PRIGHM",
    short: "Particule",
    summary:
      "Plus petit élément de l'univers. Ensemble, les particules PRIGHM forment les mille milliards de millions d'agrégats.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.TURQUOIZE,
  },
  PSIK: {
    name: "PSIK",
    short: "Psychédélique",
    summary:
      "Activités, musique, substances suscitant des états de consciences modifiées, et donc de nouvelles idées.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.PURPLE,
  },
  PSIK_PSIK: {
    name: "PSIK-PSIK",
    short: "PSIK très puissant",
    summary: "Élixir de PSIK, infusé des idées les plus abstraites.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.LIGHT_PURPLE,
  },
  SHRIGHNE: {
    name: "SHRIGHNE",
    short: "Sanctuaire",
    summary:
      "Espace aux vibrations très élevées. VAULT dédiée au Tout-Un, abritant une idée très très conceptuelle.",
    volume: "storyboards",
    color: COLORS.JEWEL,
  },
  SPARK: {
    name: "SPARK",
    short: "Electricité",
    summary:
      "Energie conductible et stockable, pour alimenter les objets physiques.",
    volume: "storyboards",
    color: COLORS.ORANGE,
  },
  TRIBU: {
    name: "tribu",
    short: "Groupe de ZUMS",
    summary:
      "Les tribus regroupent, dès la PRIMA-ERA, les individus rendant des services écologiques similaires.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.DARK_SKIN,
    regular: true,
  },
  TRIGHB: {
    name: "TRIGHB",
    short: "Tribu",
    summary: 'Le mot "tribu" en ABS-LANG.',
    volume: "storyboards",
    color: COLORS.DARK_SKIN,
  },
  TRIKO_CITE: {
    name: "TRIKO-CITÉ",
    short: "Ville-trichome",
    summary: "Ville dont l'agrégat de VAULTS émet et distille du PSIK-PSIK.",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.DARK_TURQUOIZE,
  },
  VAULT: {
    name: "VAULT",
    short: "Voute",
    summary: "Agrégat physique de données : musée, monument.",
    volume: VOLUMES.VOLUME_1,
    color: COLORS.PURPLE,
  },
  WIGHLD: {
    name: "WIGHLD",
    short: "Nature vierge",
    summary:
      "Eco-systèmes générés par l'EXPANS et pas encore habités par les ZUMS, pas encore bien connecté au HOL-ONG",
    volume: VOLUMES.VOLUME_2,
    color: COLORS.GREEN,
  },
  ZUM: {
    name: "ZUM",
    short: "Humanoïdes",
    summary:
      "Êtres intelligents habitant la planète Tera, puis l'univers par extension.",
    color: COLORS.SKIN,
    volume: VOLUMES.VOLUME_1,
  },
}
