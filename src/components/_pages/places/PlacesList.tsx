import * as React from "react"
import { PLACES, PLACES_DATA } from "../../../../data/places"
import Place from "../../Place"

function PlacesList({ places }: { places: PLACES[] }) {
  return (
    <ul className="mt-5">
      {places.map(place => {
        const { particle } = PLACES_DATA[place]
        return (
          <li key={place} className="mb-3">
            {particle ? (
              <span className="text-capitalize">{particle}</span>
            ) : (
              ""
            )}
            <Place place={place as PLACES} />
          </li>
        )
      })}
    </ul>
  )
}

export default PlacesList
