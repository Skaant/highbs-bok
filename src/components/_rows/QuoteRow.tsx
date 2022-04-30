import React, { ReactElement } from "react"
import { COLORS } from "../../../data/colors"

export function QuoteRow({
  background = false,
  legend,
  className,
  children,
}: {
  background?: false | COLORS.GOLD
  legend: string | ReactElement
  className?: string
  children: ReactElement
}) {
  return (
    <div
      className={`row ${background === COLORS.GOLD ? "bg-gold" : ""} ${
        className || ""
      }`}
    >
      <div className="col-10">
        <p
          className={`display-4 ${
            background === COLORS.GOLD ? "text-deep" : "text-muted"
          }`}
        >
          {children}
        </p>
        <p className="small mb-4">{legend}</p>
      </div>
    </div>
  )
}
