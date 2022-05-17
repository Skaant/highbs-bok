import React, { ReactElement } from "react"
import { COLORS, COLORS_DATA } from "../../data/colors"
import { PAGES, PAGES_DATA } from "../../data/pages"
import { TermData, TERMS, TERMS_DATA } from "../../data/terms"
import { VOLUMES } from "../../data/volumes"
import { Source } from "../../data/_types/WordData"

type UnreleasedSources = VOLUMES.VOLUME_2 | "storyboards"

function TermSource({ source }: { source: UnreleasedSources }) {
  return (
    <span
      className={`unreleased-source ${
        source === VOLUMES.VOLUME_2 ? "bg-light_purple" : "bg-light_blue"
      } px-2 rounded-pill`}
    >
      {source === VOLUMES.VOLUME_2 ? "2" : "S"}
    </span>
  )
}

function ReleasedOrNot({
  volume,
  unreleasedSource,
  children,
}: {
  volume: UnreleasedSources
  unreleasedSource: boolean
  children?: ReactElement
}) {
  return unreleasedSource ? (
    <span className="position-relative">
      {children}
      <TermSource source={volume} />
    </span>
  ) : (
    children
  )
}

function Term({
  term,
  plural = false,
  pluralSign = "S",
  link = true,
  pageLink = false,
  outline = false,
  textColor: _textColor,
  className: _className,
}: {
  term:
    | (TERMS & {
        /** @deprecated Never used, just not to throw */
        id?: string
      })
    | (Pick<TermData, "short" | "summary" | "color" | "regular" | "volume"> & {
        id?: string
        name: string | ReactElement
      })
  plural?: boolean
  pluralSign?: string
  link?: boolean | string
  /** Is the link points to current page ? Default to `false`. */
  pageLink?: boolean
  outline?: boolean
  textColor?: COLORS
  className?: string
}) {
  const { id, name, short, summary, color, regular, volume } =
    typeof term === "object" ? term : TERMS_DATA[term]
  const textColor = _textColor
    ? _textColor.toLowerCase()
    : COLORS_DATA[color]?.textWhite
    ? "light"
    : "dark"
  const unreleasedSource =
    (volume as Source) === VOLUMES.VOLUME_2 ||
    (volume as Source) === "storyboards" ||
    (typeof name === "string" ? name?.includes("tribu") : true)
  const className = `term bg-${color.toLowerCase()} text-${textColor}${
    outline ? ` border border-2 border-${textColor}` : ""
  }${regular ? " font-regular" : ""}${unreleasedSource ? " opacity-50" : ""} ${
    _className || ""
  }`
  return (
    <ReleasedOrNot volume={volume} unreleasedSource={unreleasedSource}>
      {link ? (
        <a
          href={
            typeof link === "string"
              ? link
              : `${pageLink ? "" : PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}#${
                  id || name.replace(/ /g, "-")
                }`
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
      )}
    </ReleasedOrNot>
  )
}

export default Term
