import React from "react"
import { colors } from "../../../data/colors"
import { pageId as INDEX_PAGE_ID } from "../../pages/l-univers/index"
import { pageId as SEPT_ERAS_PAGE_ID } from "../../pages/l-univers/sept-eras"
import { pageId as COULEURS_PAGE_ID } from "../../pages/l-univers/couleurs"
import { pageId as GLOSSAIRE_PAGE_ID } from "../../pages/l-univers/glossaire"
import { ButtonsMenu } from "../ButtonsMenu"

const PERSONNAGES_ET_ENTITES_PAGE_ID = "l-univers/personnages-et-entites"
const LIEUX_PAGE_ID = "l-univers/lieux"
const pages = {
  [INDEX_PAGE_ID]: {
    href: "/l-univers",
    label: "L'univers",
  },
  [SEPT_ERAS_PAGE_ID]: {
    href: "/l-univers/sept-eras",
    label: "Sept ERAS",
  },
  [COULEURS_PAGE_ID]: {
    href: "/l-univers/couleurs",
    label: "Les couleurs",
  },
  [GLOSSAIRE_PAGE_ID]: {
    href: "/l-univers/glossaire",
    label: "Glossaire",
  },
  [PERSONNAGES_ET_ENTITES_PAGE_ID]: {
    href: "/l-univers/personnages-et-entites",
    outline: true,
    disabled: true,
    label: "Personnages et entités",
  },
  [LIEUX_PAGE_ID]: {
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
      buttons={Object.entries(pages)
        .filter(([id]) => id !== current)
        .map(([id, data]) => ({ ...data, color }))}
    />
  )
}
