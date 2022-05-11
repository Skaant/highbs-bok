import * as React from "react"
import { COLORS } from "../../data/colors"
import { ERAS, ERAS_DATA } from "../../data/eras"
import { PAGES, PAGES_DATA } from "../../data/pages"
import Term from "./Term"

function Era({
  era,
  pageLink = false,
  outline,
  textColor,
  className,
}: {
  era: ERAS
  pageLink?: boolean
  outline?: boolean
  textColor?: COLORS
  className?: string
}) {
  const { name, index, summary, color } = ERAS_DATA[era]
  return (
    <Term
      term={{
        name,
        short: `Période ${index} de l'histoire des ZUMS.`,
        summary,
        color,
      }}
      link={`${pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}#${name}`}
      outline={outline}
      textColor={textColor}
      className={className}
    />
  )
}

export default Era
