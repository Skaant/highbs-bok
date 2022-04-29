import * as React from "react"
import { ERAS, ERAS_DATA } from "../../data/eras"
import { PAGES, PAGES_DATA } from "../../data/pages"
import Term from "./Term"

function Era({ era, className }: { era: ERAS; className?: string }) {
  const { name, index, summary, color } = ERAS_DATA[era]
  return (
    <Term
      term={{
        name,
        short: `Période ${index} de l'histoire des ZUMS.`,
        summary,
        color,
      }}
      link={`${PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}#${name}`}
      className={className}
    />
  )
}

export default Era
