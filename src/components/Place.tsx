import * as React from "react"
import { PLACES, PLACES_DATA } from "../../data/places"
import { ERAS_DATA } from "../../data/eras"
import { PAGES, PAGES_DATA } from "../../data/pages"
import Term from "./Term"

function Place({
  place,
  pageLink = false,
  outline,
  className,
}: {
  place: PLACES
  pageLink?: boolean
  outline?: boolean
  className?: string
}) {
  const { name, summary, eras, color, volume } = PLACES_DATA[place]
  return (
    <Term
      term={{
        name: name,
        short: `Lieu ${
          typeof eras === "string"
            ? "de toutes les ERAS"
            : eras.length === 1
            ? `de la période ${ERAS_DATA[eras[0]].name}`
            : `des périodes : ${eras.map(era => ERAS_DATA[era].name).join(",")}`
        }`,
        summary,
        color,
        volume,
        regular: true,
      }}
      link={`${
        pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_LIEUX].url
      }#${name.replace(/ /g, "-")}`}
      outline={outline}
      className={className}
    />
  )
}

export default Place
