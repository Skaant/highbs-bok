export enum COLORS {
  /* Kept default Bootstrap's palette color */
  LIGHT = "LIGHT",
  MUTED = "MUTED",
  DARK = "DARK",
  /* Custom HIGHBS-BOK's palette */
  GOLD = "GOLD",
  LIGHT_GOLD = "LIGHT_GOLD",
  BLUE = "BLUE",
  LIGHT_BLUE = "LIGHT_BLUE",
  LIGHT_DEEP = "LIGHT_DEEP",
  JEWEL = "JEWEL",
  DEEP = "DEEP",
  SKIN = "SKIN",
  DARK_SKIN = "DARK_SKIN",
  GREEN = "GREEN",
  LIGHT_PURPLE = "LIGHT_PURPLE",
  PURPLE = "PURPLE",
  TURQUOIZE = "TURQUOIZE",
}

type colorData = { hexa: string; description: string; colorWhite?: boolean }

export const COLORS_DATA: { [color in COLORS]: colorData } = {
  LIGHT: undefined,
  MUTED: undefined,
  DARK: undefined,
  GOLD: {
    hexa: "#ffcd5c",
    description: "Tout-un, rayons du tout-un, soleil",
  },
  LIGHT_GOLD: {
    hexa: "#ffde95",
    description: "Rayons diffractés du tout-un",
  },
  BLUE: {
    hexa: "#5d89ff",
    description: "Eau, TERA (planète)",
    colorWhite: true,
  },
  LIGHT_BLUE: {
    hexa: "#bfd8ff",
    description: "Eau (variation), ciel",
  },
  LIGHT_DEEP: {
    hexa: "#b6b1c5",
    description: "KANG, espace, trame temporelle",
  },
  JEWEL: {
    hexa: "#ffdcb0",
    description: "Joyau, élément proche de l'HIGHBS",
  },
  DEEP: {
    hexa: "#433869",
    description: "Entropie, dispersion",
  },
  SKIN: {
    hexa: "#ff6e38",
    description: "ZUM, amour, force gravitationnelle",
    colorWhite: true,
  },
  DARK_SKIN: {
    hexa: "#a7654d",
    description: "ZUM (variation)",
    colorWhite: true,
  },
  GREEN: {
    hexa: "#46af49",
    description: "Végétation, GRAND-ARBRE",
    colorWhite: true,
  },
  LIGHT_PURPLE: {
    hexa: "#c579ff",
    description: "PSIK (variation)",
  },
  PURPLE: {
    hexa: "#a735ff",
    description: "PSIK",
    colorWhite: true,
  },
  TURQUOIZE: {
    hexa: "#00ffab",
    description: "Donnée",
    colorWhite: true,
  },
}
