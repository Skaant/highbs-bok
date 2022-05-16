import React from "react"
import { COLORS } from "../../../data/colors"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { ButtonsMenu } from "../ButtonsMenu"

export function UniversePagesCTA({
  current,
  buttonsColor,
}: {
  /** @todo Set type to PAGES */
  current: string
  buttonsColor?: COLORS
}) {
  return (
    <ButtonsMenu
      buttons={[
        PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES,
        PAGES.L_UNIVERS_ERAS,
        PAGES.L_UNIVERS_COULEURS,
        PAGES.L_UNIVERS_GLOSSAIRE,
        PAGES.L_UNIVERS_LIEUX,
        PAGES.L_UNIVERS_TRIBUS_DE_L_EVEIL,
      ]
        .filter(page => page !== current)
        .map(page => {
          const { url, title } = PAGES_DATA[page]
          return {
            href: url,
            label: title,
            color: buttonsColor,
          }
        })}
    />
  )
}
