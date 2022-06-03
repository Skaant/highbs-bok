import React, { FC } from "react"

function Figure({
  src,
  alt,
  caption,
}: {
  src: string
  alt?: string
  caption?: string | FC
}) {
  return (
    <figure className="d-flex flex-column">
      <img src={src} alt={alt} />
      {caption && (
        <figcaption>
          {typeof caption === "string" ? caption : caption({})}
        </figcaption>
      )}
    </figure>
  )
}

export default Figure
