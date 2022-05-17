import React from "react"
import { COLORS, COLORS_DATA } from "../../data/colors"
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
      link={link}
      pageLink={pageLink}
      outline={outline}
      className="font-regular"
    />
  )
}

export default Color
