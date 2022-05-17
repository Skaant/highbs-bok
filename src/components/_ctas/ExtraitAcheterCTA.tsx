import React from "react"
import { COLORS, COLORS_DATA } from "../../../data/colors"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import { ButtonsMenu } from "../ButtonsMenu"

export function ExtraitAcheterCTA({
  primaryBtnColor = COLORS.PURPLE,
  secondaryBtnColor = COLORS.GOLD,
  border,
}: {
  primaryBtnColor?: COLORS
  secondaryBtnColor?: COLORS
  border?: COLORS
}) {
  return (
    <ButtonsMenu
      className="mt-5"
      buttons={[
        {
          href: "/acheter",
          color: primaryBtnColor,
          label: "Acheter un livret",
          border:
            border === primaryBtnColor &&
            (COLORS_DATA[border]?.textWhite ? COLORS.LIGHT : COLORS.DARK),
        },
        {
          href: EXTRACT_DOWNLOAD_LINK,
          color: secondaryBtnColor,
          label: "Téléchargez l'extrait",
          border:
            border === secondaryBtnColor &&
            (COLORS_DATA[border]?.textWhite ? COLORS.LIGHT : COLORS.DARK),
        },
      ]}
    />
  )
}
