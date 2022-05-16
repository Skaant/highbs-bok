import React, { ReactElement } from "react"
import { COLORS_DATA } from "../../../../data/colors"
import { TRIBES, TRIBES_DATA } from "../../../../data/tribes"
import Tribe from "../../Tribe"

function TribeRow({
  tribe,
  children,
}: {
  tribe: TRIBES
  children: ReactElement
}) {
  const { name, color, summary } = TRIBES_DATA[tribe]
  return (
    <div
      key={tribe}
      id={tribe}
      className={`row px-4 py-5 align-content-center${
        color ? ` bg-${color.toLowerCase()}` : ""
      }${COLORS_DATA[color].colorWhite ? " text-light" : ""}`}
    >
      <div className="col-12 col-md-10 col-lg-8 col-xl-6">
        <h3>
          <Tribe tribe={TRIBES[tribe]} className="text-capitalize" />
        </h3>
        {children}
        {summary}
      </div>
    </div>
  )
}

export default TribeRow
