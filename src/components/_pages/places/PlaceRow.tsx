import React, { ReactElement } from "react"
import { PLACES, PLACES_DATA } from "../../../../data/places"
import { COLORS_DATA } from "../../../../data/colors"
import EraListInline from "../../EraListInline"
import { SectionRow } from "../../_rows/SectionRow"
import { TERMS } from "../../../../data/terms"
import Term from "../../Term"

function PlaceRow({
  place,
  children,
}: {
  place: PLACES
  children: ReactElement
}) {
  const { name, eras, color, particle } = PLACES_DATA[place]
  return (
    <SectionRow
      id={name.replace(/ /g, "-")}
      header={{
        element: (
          <h3>
            {particle ? (
              <>
                <span className="text-capitalize">{particle}</span>{" "}
              </>
            ) : (
              ""
            )}
            {name}
          </h3>
        ),
      }}
      className={`bg-${color.toLowerCase()} text-${
        COLORS_DATA[color]?.textWhite ? "light" : "dark"
      }`}
    >
      <>
        {children}
        <p className="mt-5">
          <b className="me-3">
            <Term term={TERMS.ERA} plural={true} />
          </b>
          <EraListInline eras={eras} outline={color} />
        </p>
      </>
    </SectionRow>
  )
}

export default PlaceRow
