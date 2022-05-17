import React, { ReactElement } from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../../data/characters"
import { COLORS_DATA } from "../../../../data/colors"
import EraListInline from "../../EraListInline"
import { SectionRow } from "../../_rows/SectionRow"

function CharacterRow({
  character,
  children,
}: {
  character: CHARACTERS
  children: ReactElement
}) {
  const { name, eras, color, particle } = CHARACTERS_DATA[character]
  return (
    <SectionRow
      id={name.replace(/ /g, "-")}
      header={{
        element: (
          <h3>
            {particle ? (
              <>
                <span className="text-capitalize">{particle}</span>{" "}
              </>
            ) : (
              ""
            )}
            {name}
          </h3>
        ),
      }}
      className={`bg-${color.toLowerCase()} text-${
        COLORS_DATA[color]?.textWhite ? "light" : "dark"
      }`}
    >
      <>
        {children}
        <p className="mt-5">
          <b className="me-3">Apparitions</b>
          <EraListInline eras={eras} outline={color} />
        </p>
      </>
    </SectionRow>
  )
}

export default CharacterRow
