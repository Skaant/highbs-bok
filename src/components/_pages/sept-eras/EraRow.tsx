import React, { ReactElement } from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../../data/characters"
import { COLORS_DATA } from "../../../../data/colors"
import { ERAS, ERAS_DATA } from "../../../../data/eras"
import CharacterListInline from "../../CharacterListInline"
import Era from "../../Era"

function EraRow({ era, children }: { era: ERAS; children: ReactElement }) {
  const { id, name, color } = ERAS_DATA[era]
  const characters = Object.entries(CHARACTERS_DATA).filter(([_, { eras }]) =>
    eras.includes(era)
  )
  return (
    <div
      key={era}
      id={id}
      className={`row px-4 py-5 align-content-center${
        color ? ` bg-${color.toLowerCase()}` : ""
      }${COLORS_DATA[color].textWhite ? " text-light" : ""}`}
    >
      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
        <h3>
          <Era era={era} link={false} outline={true} />
        </h3>
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
