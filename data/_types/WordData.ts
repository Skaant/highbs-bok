import { COLORS } from "../colors"
import { VOLUMES } from "../volumes"

export type Source = VOLUMES | "storyboards"

export type WordData = {
  id: string
  name: string
  summary: string
  color: COLORS
  textWhite?: true
}
