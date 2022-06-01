import React, { ReactElement } from "react"
import Character from "../src/components/Character"
import Term from "../src/components/Term"
import { CHARACTERS } from "./characters"
import { TERMS } from "./terms"

const ARTICLES_ELEMENTS: { title?: ReactElement }[] = [
  {
    title: (
      <>
        Les <Term term={TERMS.ZUM} plural={true} /> ne meurent pas
      </>
    ),
  },
  {
    title: (
      <>
        <Term term={TERMS.PSIK} outline={true} />, le nectar des idées
      </>
    ),
  },
  {},
  {
    title: (
      <>
        <Character character={CHARACTERS.TOUT_UN} />, tout-un ou tout-une ?
      </>
    ),
  },
]

export default ARTICLES_ELEMENTS
