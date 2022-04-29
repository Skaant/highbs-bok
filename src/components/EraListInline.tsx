import * as React from "react"
import { CharacterData } from "../../data/characters"
import { colors } from "../../data/colors"
import Era from "./Era"
import Term from "./Term"

function EraListInline({ eras }: Pick<CharacterData, "eras">) {
  return (
    <>
      {eras === "all" ? (
        <Term
          term={{
            name: "Toutes les ERAS",
            short: "Les sept ERAS",
            summary: "Présent tout au long de l'histoire.",
            color: colors.light,
          }}
          className="border border-3 border-jewel"
        />
      ) : (
        eras.map(era => {
          return <Era era={era} className="me-2 my-1 small" />
        })
      )}
    </>
  )
}

export default EraListInline