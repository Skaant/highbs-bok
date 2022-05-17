import * as React from "react"
import { ERAS, ERAS_DATA } from "../../../../data/eras"
import Era from "../../Era"

function ErasList() {
  return (
    <ul className="mt-5">
      {Object.values(ERAS).map(era => {
        ERAS_DATA[era]
        return (
          <li
            key={era}
            className={`mb-3 ${era === ERAS.PRESENT ? "font-regular" : ""}`}
          >
            <Era era={era as ERAS} pageLink={true} />
          </li>
        )
      })}
    </ul>
  )
}

export default ErasList
