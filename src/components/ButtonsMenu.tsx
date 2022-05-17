import React from "react"
import { COLORS } from "../../data/colors"

export type ButtonsMenuItem = {
  href: string
  label: string
  color?: string | COLORS
  outline?: boolean
  border?: COLORS
  disabled?: boolean
}

export function ButtonsMenu({
  buttons,
  className,
}: {
  buttons: ButtonsMenuItem[]
  className?: string
}) {
  return (
    <div className={`btn-menu ${className || ""}`}>
      {buttons.map(
        (
          { href, color = COLORS.LIGHT, outline, label, border, disabled },
          index
        ) => (
          <a
            key={index}
            href={href}
            className={`btn btn-${
              outline ? "outline-" : ""
            }${color.toLowerCase()}${
              border ? ` border-${border.toLowerCase()} border-3` : ""
            }${disabled ? " disabled" : ""}`}
          >
            {label}
          </a>
        )
      )}
    </div>
  )
}
