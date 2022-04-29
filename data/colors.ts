export enum colors {
  /** Kept default Bootstrap's palette */
  light = "light",
  muted = "muted",
  /** Custom HIGHBS-BOK's palette */
  gold = "gold",
  lightGold = "lightGold",
  blue = "blue",
  lightBlue = "lightBlue",
  lightDeep = "lightDeep",
  jewel = "jewel",
  deep = "deep",
  skin = "skin",
  darkSkin = "darkSkin",
  green = "green",
  lightPurple = "lightPurple",
  purple = "purple",
  turquoize = "turquoize",
}

export const colorsData = new Map<
  colors,
  { hexa: string; description: string; colorWhite?: boolean }
>([
  [
    colors.light,
    {
      hexa: "",
      description: "",
    },
  ],
  [
    colors.gold,
    {
      hexa: "#ffcd5c",
      description: "Tout-un, rayons du tout-un, soleil",
    },
  ],
  [
    colors.lightGold,
    {
      hexa: "#ffde95",
      description: "Rayons diffractés du tout-un",
    },
  ],
  [
    colors.blue,
    { hexa: "#5d89ff", description: "Eau, TERA (planète)", colorWhite: true },
  ],
  [
    colors.lightBlue,
    {
      hexa: "#bfd8ff",
      description: "Eau (variation), ciel",
    },
  ],
  [
    colors.lightDeep,
    {
      hexa: "#b6b1c5",
      description: "KANG, espace, trame temporelle",
    },
  ],
  [
    colors.jewel,
    {
      hexa: "#ffdcb0",
      description: "Joyau, élément proche de l'HIGHBS",
    },
  ],
  [
    colors.deep,
    {
      hexa: "#433869",
      description: "Entropie, dispersion",
    },
  ],
  [
    colors.skin,
    {
      hexa: "#ff6e38",
      description: "ZUM, amour, force gravitationnelle",
      colorWhite: true,
    },
  ],
  [
    colors.darkSkin,
    {
      hexa: "#a7654d",
      description: "ZUM (variation)",
      colorWhite: true,
    },
  ],
  [
    colors.green,
    {
      hexa: "#46af49",
      description: "Végétation, GRAND-ARBRE",
      colorWhite: true,
    },
  ],
  [
    colors.lightPurple,
    {
      hexa: "#c579ff",
      description: "PSIK (variation)",
    },
  ],
  [
    colors.purple,
    {
      hexa: "#a735ff",
      description: "PSIK",
      colorWhite: true,
    },
  ],
  [
    colors.turquoize,
    {
      hexa: "#00ffab",
      description: "Donnée",
      colorWhite: true,
    },
  ],
])
