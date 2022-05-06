import * as React from "react"
import { COLORS, COLORS_DATA } from "../../data/colors"
import { PAGES, PAGES_DATA } from "../../data/pages"
import { TermData, TERMS, TERMS_DATA } from "../../data/terms"

function Term({
  term,
  plural = false,
  pluralSign = "S",
  link = true,
  outline = false,
  textColor: _textColor,
  className: _className,
}: {
  term:
    | TERMS
    | Pick<TermData, "name" | "short" | "summary" | "color" | "regular">
  plural?: boolean
  pluralSign?: string
  link?: boolean | string
  outline?: boolean
  textColor?: COLORS
  className?: string
}) {
  const { name, short, summary, color, regular } =
    typeof term === "object" ? term : TERMS_DATA[term]
  const textColor = _textColor
    ? _textColor.toLowerCase()
    : COLORS_DATA[color]?.colorWhite
    ? "light"
    : "dark"
  const className = `term bg-${color.toLowerCase()} text-${textColor} ${
    outline ? `border border-2 border-${textColor}` : ""
  } ${regular ? "font-regular" : ""} ${_className || ""}`
  return link ? (
    <a
      href={
        typeof link === "string"
          ? link
          : `${PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}#${name.replace(
              / /g,
              "-"
            )}`
      }
      className={className}
      title={`${short}.\n${summary}`}
    >
      {name}
      {plural ? pluralSign : ""}
    </a>
  ) : (
    <span className={className} title={`${short}.\n${summary}`}>
      {name}
      {plural ? pluralSign : ""}
    </span>
  )
}

export default Term
