import React from "react"
import { CHARACTERS } from "../../../../data/characters"
import { ERAS } from "../../../../data/eras"
import { PLACES } from "../../../../data/places"
import { TERMS } from "../../../../data/terms"
import { TRIBES } from "../../../../data/tribes"
import { WORD_TYPES } from "../../../_enums/word-types.enum"
import Character from "../../Character"
import Era from "../../Era"
import Place from "../../Place"
import Term from "../../Term"
import Tribe from "../../Tribe"

function WordSwitch({ _key, type }: { _key: string; type: WORD_TYPES }) {
  const className = "me-2"
  switch (type) {
    case WORD_TYPES.TERM:
      return <Term term={_key as TERMS} className={className} />
    case WORD_TYPES.CHARACTER:
      return <Character character={_key as CHARACTERS} className={className} />
    case WORD_TYPES.ERA:
      return <Era era={_key as ERAS} className={className} />
    case WORD_TYPES.PLACE:
      return <Place place={_key as PLACES} className={className} />
    case WORD_TYPES.TRIBE:
      return <Tribe tribe={_key as TRIBES} className={className} />
  }
}

export default WordSwitch
