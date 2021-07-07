import React from "react"
import { colors } from "../../../data/colors"
import { pages } from "../../../data/pages"
import { ButtonsMenu } from "../ButtonsMenu"

const pagesData = {
  [pages.L_UNIVERS]: {
    href: "/l-univers",
    label: "L'univers",
  },
  [pages.L_UNIVERS_ERAS]: {
    href: "/l-univers/sept-eras",
    label: "Sept ERAS",
  },
  [pages.L_UNIVERS_COULEURS]: {
    href: "/l-univers/couleurs",
    label: "Les couleurs",
  },
  [pages.L_UNIVERS_GLOSSAIRE]: {
    href: "/l-univers/glossaire",
    label: "Glossaire",
  },
  [pages.L_UNIVERS_PERSONNAGES]: {
    href: "/l-univers/personnages-et-entites",
    outline: true,
    disabled: true,
    label: "Personnages et entités",
  },
  [pages.L_UNIVERS_LIEUX]: {
    href: "/l-univers/lieux",
    outline: true,
    disabled: true,
    label: "Lieux",
  },
}

export function UniversePagesCTA({
  current,
  buttonsColor: color,
}: {
  current: string
  buttonsColor?: colors
}) {
  return (
    <ButtonsMenu
      buttons={Object.entries(pagesData)
        .filter(([id]) => id !== current)
        .map(([id, data]) => ({ ...data, color }))}
    />
  )
}
