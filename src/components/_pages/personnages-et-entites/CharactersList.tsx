import * as React from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../../data/characters"
import Character from "../../Character"

function CharactersList({ characters }: { characters: CHARACTERS[] }) {
  return (
    <ul className="mt-5">
      {characters.map(character => {
        const { particle } = CHARACTERS_DATA[character]
        return (
          <li key={character} className="mb-3">
            {particle ? (
              <span className="text-capitalize">{particle}</span>
            ) : (
              ""
            )}
            <Character character={character as CHARACTERS} />
          </li>
        )
      })}
    </ul>
  )
}

export default CharactersList
