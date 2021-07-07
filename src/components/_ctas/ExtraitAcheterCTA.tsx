import React from "react"
import { colors } from "../../../data/colors"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import { ButtonsMenu } from "../ButtonsMenu"

export function ExtraitAcheterCTA({
  extraitButtonColor = colors.gold,
  acheterButtonColor = colors.purple,
}: {
  extraitButtonColor?: colors
  acheterButtonColor?: colors
}) {
  return (
    <ButtonsMenu
      className="mt-5"
      buttons={[
        {
          href: EXTRACT_DOWNLOAD_LINK,
          color: extraitButtonColor,
          label: "Téléchargez l'extrait",
        },
        {
          href: "/acheter",
          color: acheterButtonColor,
          label: "Acheter un livret imprimé",
        },
      ]}
    />
  )
}
