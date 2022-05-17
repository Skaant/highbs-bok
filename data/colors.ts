import { WordData } from "./_types/WordData"

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
  DEEP = "DEEP",
  LIGHT_DEEP = "LIGHT_DEEP",
  JEWEL = "JEWEL",
  SKIN = "SKIN",
  DARK_SKIN = "DARK_SKIN",
  GREEN = "GREEN",
  PURPLE = "PURPLE",
  LIGHT_PURPLE = "LIGHT_PURPLE",
  TURQUOIZE = "TURQUOIZE",
  DARK_TURQUOIZE = "DARK_TURQUOIZE",
  ORANGE = "ORANGE",
}

type colorData = Omit<WordData, "summary" | "color"> & {
  hexa: string
}

export const COLORS_DATA: { [color in COLORS]: colorData } = {
  LIGHT: undefined,
  MUTED: undefined,
  DARK: undefined,
  GOLD: {
    id: "or",
    name: "Or",
    hexa: "#ffcd5c",
  },
  LIGHT_GOLD: {
    id: "or-clair",
    name: "Or clair",
    hexa: "#ffde95",
  },
  BLUE: {
    id: "bleu",
    name: "Bleu",
    hexa: "#5d89ff",
    textWhite: true,
  },
  LIGHT_BLUE: {
    id: "bleu-clair",
    name: "Bleu clair",
    hexa: "#bfd8ff",
  },
  DEEP: {
    id: "profond",
    name: "Profond",
    hexa: "#433869",
    textWhite: true,
  },
  LIGHT_DEEP: {
    id: "profond-clair",
    name: "Profond clair",
    hexa: "#b6b1c5",
  },
  JEWEL: {
    id: "joyau",
    name: "Joyau",
    hexa: "#ffdcb0",
  },
  SKIN: {
    id: "peau",
    name: "Peau",
    hexa: "#ff6e38",
    textWhite: true,
  },
  DARK_SKIN: {
    id: "peau sombre",
    name: "Peau sombre",
    hexa: "#a7654d",
    textWhite: true,
  },
  GREEN: {
    id: "vert",
    name: "Vert",
    hexa: "#46af49",
    textWhite: true,
  },
  PURPLE: {
    id: "violet",
    name: "Violet",
    hexa: "#a735ff",
    textWhite: true,
  },
  LIGHT_PURPLE: {
    id: "violet-clair",
    name: "Violet clair",
    hexa: "#c579ff",
  },
  TURQUOIZE: {
    id: "turquoize",
    name: "Turquoize",
    hexa: "#00ffab",
  },
  DARK_TURQUOIZE: {
    id: "turquoize-sombre",
    name: "Turquoize sombre",
    hexa: "#0298a3",
    textWhite: true,
  },
  ORANGE: {
    id: "orange",
    name: "Orange",
    hexa: "#ff9900",
  },
}
