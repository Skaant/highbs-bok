import React, { ReactElement } from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../../data/characters"
import { COLORS_DATA } from "../../../../data/colors"
import { ERAS, ERAS_DATA } from "../../../../data/eras"
import CharacterListInline from "../../CharacterListInline"

function EraRow({ era, children }: { era: ERAS; children: ReactElement }) {
  const { name, color } = ERAS_DATA[era]
  const characters = Object.entries(CHARACTERS_DATA).filter(([_, { eras }]) =>
    eras.includes(era)
  )
  return (
    <div
      key={era}
      id={era}
      className={`row px-4 py-5 align-content-center${
        color ? ` bg-${color.toLowerCase()}` : ""
      }${COLORS_DATA[color].colorWhite ? " text-light" : ""}`}
    >
      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
        <h3>{name}</h3>
        {children}
        {characters.length ? (
          <p className="mt-5">
            <b>Personnages</b>{" "}
            <CharacterListInline
              characters={characters.map(
                ([character]) => character as CHARACTERS
              )}
              outline={color}
            />
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default EraRow
