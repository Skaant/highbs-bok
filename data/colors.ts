export enum colors {
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

export const colorsData = new Map<colors, { hexa: string; definition: string }>(
  [
    [
      colors.gold,
      {
        hexa: "#ffcd5c",
        definition: "Tout-un, rayons du tout-un, soleil",
      },
    ],
    [
      colors.lightGold,
      {
        hexa: "#ffde95",
        definition: "Rayons diffractés du tout-un",
      },
    ],
    [colors.blue, { hexa: "#5d89ff", definition: "Eau, TERA (planète)" }],
    [
      colors.lightBlue,
      {
        hexa: "#bfd8ff",
        definition: "Eau (variation), ciel",
      },
    ],
    [
      colors.lightDeep,
      {
        hexa: "#b6b1c5",
        definition: "#b6b1c5",
      },
    ],
    [
      colors.jewel,
      {
        hexa: "#ffdcb0",
        definition: "Joyau, élément proche de l'HIGHBS",
      },
    ],
    [
      colors.deep,
      {
        hexa: "#433869",
        definition: "Entropie, dispersion",
      },
    ],
    [
      colors.skin,
      {
        hexa: "#ff6e38",
        definition: "ZUM, amour, force gravitationnelle",
      },
    ],
    [
      colors.darkSkin,
      {
        hexa: "#a7654d",
        definition: "ZUM (variation)",
      },
    ],
    [
      colors.green,
      {
        hexa: "#46af49",
        definition: "Végétation, GRAND-ARBRE",
      },
    ],
    [
      colors.lightPurple,
      {
        hexa: "#c579ff",
        definition: "PSIK (variation)",
      },
    ],
    [
      colors.purple,
      {
        hexa: "#a735ff",
        definition: "PSIK",
      },
    ],
    [
      colors.turquoize,
      {
        hexa: "#00ffab",
        definition: "Donnée",
      },
    ],
  ]
)
