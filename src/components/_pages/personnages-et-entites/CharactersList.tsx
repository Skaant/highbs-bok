import * as React from "react"
import { CHARACTERS } from "../../../../data/characters"
import Character from "../../Character"

function CharactersList({ characters }: { characters: CHARACTERS[] }) {
  return (
    <ul className="mt-5">
      {characters.map(character => (
        <li key={character} className="mb-3">
          <Character character={character as CHARACTERS} />
        </li>
      ))}
    </ul>
  )
}

export default CharactersList
