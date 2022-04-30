import * as React from "react"
import { CharacterData } from "../../data/characters"
import { COLORS } from "../../data/colors"
import { ERAS_DATA } from "../../data/eras"
import Era from "./Era"
import Term from "./Term"

function EraListInline({
  eras,
  outline,
}: Pick<CharacterData, "eras"> & {
  outline?: COLORS
}) {
  return (
    <>
      {eras === "all" ? (
        <Term
          term={{
            name: "Toutes les ERAS",
            short: "Les sept ERAS",
            summary: "Présent tout au long de l'histoire.",
            color: COLORS.LIGHT,
          }}
          className="border border-3 small border-jewel"
        />
      ) : (
        eras.map(era => {
          return (
            <Era
              era={era}
              className="me-2 my-1 small"
              outline={outline && outline === ERAS_DATA[era].color}
            />
          )
        })
      )}
    </>
  )
}

export default EraListInline
