import React from "react"
import { COLORS } from "../../../data/colors"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import { ButtonsMenu } from "../ButtonsMenu"

export function ExtraitAcheterCTA({
  primaryBtnColor = COLORS.PURPLE,
  secondaryBtnColor = COLORS.GOLD,
}: {
  primaryBtnColor?: COLORS
  secondaryBtnColor?: COLORS
}) {
  return (
    <ButtonsMenu
      className="mt-5"
      buttons={[
        {
          href: "/acheter",
          color: primaryBtnColor,
          label: "Acheter un livret",
        },
        {
          href: EXTRACT_DOWNLOAD_LINK,
          color: secondaryBtnColor,
          label: "Téléchargez l'extrait",
        },
      ]}
    />
  )
}
