import React, { ReactElement } from "react"
import { colors } from "../../../data/colors"

export function QuoteRow({
  background = false,
  legend,
  children,
}: {
  background?: false | colors.gold
  legend: string | ReactElement
  children: ReactElement
}) {
  return (
    <div className={`row ${background === colors.gold ? "bg-gold" : ""} p-4`}>
      <div className="col-10">
        <p
          className={`display-4 ${
            background === colors.gold ? "text-deep" : "text-muted"
          }`}
        >
          {children}
        </p>
        <p className="small mb-4">{legend}</p>
      </div>
    </div>
  )
}
