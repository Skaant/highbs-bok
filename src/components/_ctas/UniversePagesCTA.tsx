import React from "react"
import { COLORS } from "../../../data/colors"
import { PAGES } from "../../../data/pages"
import { ButtonsMenu } from "../ButtonsMenu"

const pagesData = {
  [PAGES.L_UNIVERS]: {
    href: "/l-univers",
    label: "L'univers",
  },
  [PAGES.L_UNIVERS_ERAS]: {
    href: "/l-univers/sept-eras",
    label: "Sept ERAS",
  },
  [PAGES.L_UNIVERS_COULEURS]: {
    href: "/l-univers/couleurs",
    label: "Les couleurs",
  },
  [PAGES.L_UNIVERS_GLOSSAIRE]: {
    href: "/l-univers/glossaire",
    label: "Glossaire",
  },
  [PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES]: {
    href: "/l-univers/personnages-et-entites",
    label: "Personnages et entités",
  },
  /* [PAGES.L_UNIVERS_LIEUX]: {
    href: "/l-univers/lieux",
    outline: true,
    disabled: true,
    label: "Lieux",
  }, */
}

export function UniversePagesCTA({
  current,
  buttonsColor: color,
}: {
  current: string
  buttonsColor?: COLORS
}) {
  return (
    <ButtonsMenu
      buttons={Object.entries(pagesData)
        .filter(([id]) => id !== current)
        .map(([id, data]) => ({ ...data, color }))}
    />
  )
}
