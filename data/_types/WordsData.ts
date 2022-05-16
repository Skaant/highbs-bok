import { CharacterData } from "../characters"
import { EraData } from "../eras"
import { PlaceData } from "../places"
import { TermData } from "../terms"
import { TribeData } from "../tribes"

export type WordsData =
  | TermData
  | CharacterData
  | EraData
  | PlaceData
  | TribeData
