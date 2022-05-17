import React from "react"
import { COLORS, COLORS_DATA } from "../../data/colors"
import Term from "./Term"

function Color({
  color,
  pageLink,
  link,
}: {
  color: COLORS
  pageLink?: boolean
  link?: boolean
}) {
  const { id, name, hexa } = COLORS_DATA[color]
  return (
    <Term
      term={{
        id,
        name,
        short: hexa,
        color,
      }}
      link={link}
      pageLink={pageLink}
      className="font-regular"
    />
  )
}

export default Color
