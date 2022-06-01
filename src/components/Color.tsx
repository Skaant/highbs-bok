import React from "react"
import { COLORS, COLORS_DATA } from "../../data/colors"
import { PAGES, PAGES_DATA } from "../../data/pages"
import { VOLUMES } from "../../data/volumes"
import Term from "./Term"

function Color({
  color,
  link,
  pageLink,
  outline,
}: {
  color: COLORS
  link?: boolean
  pageLink?: boolean
  outline?: boolean
}) {
  const { id, name, hexa, volume = VOLUMES.VOLUME_1 } = COLORS_DATA[color]
  return (
    <Term
      term={{
        id,
        name,
        short: `La couleur ${name}.`,
        summary: `Code hexa: ${hexa}`,
        color,
        volume,
      }}
      link={
        link &&
        `${
          pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_COULEURS].url
        }#${name.replace(/ /g, "-")}`
      }
      pageLink={pageLink}
      outline={outline}
      className="font-regular"
    />
  )
}

export default Color
