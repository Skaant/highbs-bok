import * as React from "react"
import { colorsData } from "../../data/colors"
import { PAGES, PAGES_DATA } from "../../data/pages"
import { TermData, TERMS, TERMS_DATA } from "../../data/terms"

function Term({
  term,
  plural = false,
  link = true,
  className: _className,
}: {
  term: TERMS | Pick<TermData, "name" | "short" | "summary" | "color">
  plural?: boolean
  link?: boolean | string
  className?: string
}) {
  const { name, short, summary, color } =
    typeof term === "object" ? term : TERMS_DATA[term]
  const className = `term bg-${color} text-${
    colorsData.get(color).colorWhite ? "light" : "dark"
  } ${_className || ""}`
  return link ? (
    <a
      href={
        typeof link === "string"
          ? link
          : `${PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}#${name}`
      }
      className={className}
      title={`${short}.\n${summary}`}
    >
      {name}
      {plural ? "S" : ""}
    </a>
  ) : (
    <span className={className} title={`${short}.\n${summary}`}>
      {name}
      {plural ? "S" : ""}
    </span>
  )
}

export default Term
