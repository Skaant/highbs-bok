import React, { ReactElement } from "react"
import { colors } from "../../../data/colors"

export function QuoteRow({
  background = false,
  legend,
  className,
  children,
}: {
  background?: false | colors.gold
  legend: string | ReactElement
  className?: string
  children: ReactElement
}) {
  return (
    <div
      className={`row ${background === colors.gold ? "bg-gold" : ""} ${
        className || ""
      }`}
    >
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
