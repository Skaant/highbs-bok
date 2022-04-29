import * as React from "react"
import { CharacterData } from "../../data/characters"
import { colors } from "../../data/colors"
import Era from "./Era"
import Term from "./Term"

function EraList({ eras }: Pick<CharacterData, "eras">) {
  return (
    <>
      {eras === "all" ? (
        <Term
          term={{
            name: "Sept ERAS",
            short: "Toutes les ERAS",
            summary: "Présent tout au long de l'histoire.",
            color: colors.light,
          }}
          className="small border border-3 border-lightGold"
        />
      ) : (
        eras.map(era => {
          return <Era era={era} className="me-2 my-1 small" />
        })
      )}
    </>
  )
}

export default EraList
