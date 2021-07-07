import React from "react"
import { colors } from "../../data/colors"

export type ButtonsMenuItem = {
  href: string
  label: string
  color?: string | colors
  outline?: boolean
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
        ({ href, color = colors.light, outline, label, disabled }, index) => (
          <a
            key={index}
            href={href}
            className={`btn btn-${outline ? "outline-" : ""}${color} ${
              disabled ? "disabled" : ""
            }`}
          >
            {label}
          </a>
        )
      )}
    </div>
  )
}
