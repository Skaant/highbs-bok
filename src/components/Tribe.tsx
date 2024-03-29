import * as React from "react"
import { COLORS } from "../../data/colors"
import { TRIBES, TRIBES_DATA } from "../../data/tribes"
import { PAGES, PAGES_DATA } from "../../data/pages"
import Term from "./Term"
import { VOLUMES } from "../../data/volumes"

function Tribe({
  tribe,
  link = true,
  pageLink = false,
  outline,
  textColor,
  className,
}: {
  tribe: TRIBES
  link?: boolean
  pageLink?: boolean
  outline?: boolean
  textColor?: COLORS
  className?: string
}) {
  const { name, summary, color } = TRIBES_DATA[tribe]
  return (
    <Term
      term={{
        name: (
          <>
            <span className="font-merri">tribu</span> {name}
          </>
        ),
        short: `Une tribu de l'éveil.`,
        summary,
        color,
        volume: VOLUMES.VOLUME_2,
      }}
      link={
        link &&
        `${
          pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_TRIBUS_DE_L_EVEIL].url
        }#${name}`
      }
      outline={outline}
      textColor={textColor}
      className={className}
    />
  )
}

export default Tribe
