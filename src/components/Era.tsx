import * as React from "react"
import { COLORS } from "../../data/colors"
import { ERAS, ERAS_DATA } from "../../data/eras"
import { PAGES, PAGES_DATA } from "../../data/pages"
import { VOLUMES } from "../../data/volumes"
import Term from "./Term"

function Era({
  era,
  link = true,
  pageLink = false,
  outline,
  textColor,
  className,
}: {
  era: ERAS
  link?: boolean
  pageLink?: boolean
  outline?: boolean
  textColor?: COLORS
  className?: string
}) {
  const { id, name, index, summary, color } = ERAS_DATA[era]
  return (
    <Term
      term={{
        name,
        short: index
          ? `Période ${index} de l'histoire des ZUMS`
          : "Notre époque",
        summary,
        color,
        volume: VOLUMES.VOLUME_1,
      }}
      link={
        link && `${pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}#${id}`
      }
      outline={outline}
      textColor={textColor}
      className={`${className}${era === ERAS.PRESENT ? " font-regular" : ""}`}
    />
  )
}

export default Era
