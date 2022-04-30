import React, { ReactElement } from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../../data/characters"
import EraListInline from "../../EraListInline"
import { ContentRowWithHeader } from "../../_rows/ContentRowWithHeader"

function CharacterRow({
  character,
  children,
}: {
  character: CHARACTERS
  children: ReactElement
}) {
  const { name, eras, color } = CHARACTERS_DATA[character]
  return (
    <ContentRowWithHeader
      id={name}
      header={{
        level: 3,
        content: name,
      }}
      className={`bg-${color.toLowerCase()}`}
    >
      <>
        {children}
        <p>
          <b className="me-3">Apparitions</b>
          <EraListInline eras={eras} />
        </p>
      </>
    </ContentRowWithHeader>
  )
}

export default CharacterRow
