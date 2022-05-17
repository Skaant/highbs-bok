import * as React from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../data/characters"
import { ERAS_DATA } from "../../data/eras"
import { PAGES, PAGES_DATA } from "../../data/pages"
import Term from "./Term"

function Character({
  character,
  pageLink = false,
  outline,
  className,
}: {
  character: CHARACTERS
  pageLink?: boolean
  outline?: boolean
  className?: string
}) {
  const { name, eras, summary, color, volume } = CHARACTERS_DATA[character]
  return (
    <Term
      term={{
        name: name,
        short: `Présent ${
          typeof eras === "string"
            ? "à toutes les ERAS"
            : eras.length === 1
            ? `à la période ${ERAS_DATA[eras[0]].name}`
            : `aux périodes : ${eras.map(era => ERAS_DATA[era].name).join(",")}`
        }`,
        summary,
        color,
        volume,
        regular: true,
      }}
      link={`${
        pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES].url
      }#${name.replace(/ /g, "-")}`}
      outline={outline}
      className={className}
    />
  )
}

export default Character
