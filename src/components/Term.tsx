import * as React from "react"
import { colorsData } from "../../data/colors"
import { PAGES, PAGES_DATA } from "../../data/pages"
import { TERMS, TERMS_DATA } from "../../data/terms"

function Term({
  term,
  plural = false,
  link = true,
}: {
  term: TERMS
  plural?: boolean
  link?: boolean
}) {
  const bgColor = TERMS_DATA[term].color
  const className = `term bg-${bgColor} text-${
    colorsData.get(bgColor).colorWhite ? "light" : "dark"
  }`
  return link ? (
    <a
      href={`${PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}#${
        TERMS_DATA[term].name
      }`}
      className={className}
      title={`${TERMS_DATA[term].short}.\n${TERMS_DATA[term].summary}`}
    >
      {TERMS_DATA[term].name}
      {plural ? "S" : ""}
    </a>
  ) : (
    <span
      className={className}
      title={`${TERMS_DATA[term].short}.\n${TERMS_DATA[term].summary}`}
    >
      {TERMS_DATA[term].name}
      {plural ? "S" : ""}
    </span>
  )
}

export default Term
