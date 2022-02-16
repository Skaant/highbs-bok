import React from "react"
import { colors } from "../../../data/colors"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import { ButtonsMenu } from "../ButtonsMenu"

export function ExtraitAcheterCTA({
  primaryBtnColor = colors.purple,
  secondaryBtnColor = colors.gold,
}: {
  primaryBtnColor?: colors
  secondaryBtnColor?: colors
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
