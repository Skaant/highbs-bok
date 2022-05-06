import * as React from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../data/characters"
import { COLORS } from "../../data/colors"
import Character from "./Character"

function CharacterListInline({
  characters,
  outline,
}: {
  characters: CHARACTERS[]
  outline?: COLORS
}) {
  return (
    <>
      {characters.map(character => {
        return (
          <Character
            character={character}
            className="me-2 my-1 small text-capitalize"
            outline={outline && outline === CHARACTERS_DATA[character].color}
          />
        )
      })}
    </>
  )
}

export default CharacterListInline
