import { CharacterDataSet } from "../characters"
import { EraDataSet } from "../eras"
import { PlaceDataSet } from "../places"
import { TermDataSet } from "../terms"
import { TribeDataSet } from "../tribes"

export type WordsDataSet =
  | TermDataSet
  | CharacterDataSet
  | EraDataSet
  | PlaceDataSet
  | TribeDataSet
