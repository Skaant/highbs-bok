import * as React from "react"
import { COLORS, COLORS_DATA } from "../../../../data/colors"
import Color from "../../Color"

function ColorsList({ outline }: { outline?: COLORS }) {
  return (
    <ul className="my-5">
      {Object.values(COLORS).map(color => {
        return (
          COLORS_DATA[color] && (
            <li key={color} className="mb-3">
              <Color color={color} outline={outline === color} />
            </li>
          )
        )
      })}
    </ul>
  )
}

export default ColorsList
