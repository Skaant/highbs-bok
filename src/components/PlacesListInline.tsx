import * as React from "react"
import { PLACES, PLACES_DATA } from "../../data/places"
import { COLORS } from "../../data/colors"
import Place from "./Place"

function PlaceListInline({
  places,
  outline,
}: {
  places: PLACES[]
  outline?: COLORS
}) {
  return (
    <>
      {places.map(place => {
        return (
          <Place
            place={place}
            className="me-2 my-1 small text-capitalize"
            outline={outline && outline === PLACES_DATA[place].color}
          />
        )
      })}
    </>
  )
}

export default PlaceListInline
