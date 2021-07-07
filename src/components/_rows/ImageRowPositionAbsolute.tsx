import React, { CSSProperties, ReactElement } from "react"

export function ImageRowPositionAbsolute({
  src,
  style,
  imgClassName,
}: {
  src: string
  style?: CSSProperties
  imgClassName?: string
}) {
  return (
    <div
      className="position-absolute w-100 full-img-container align-items-center"
      style={style}
    >
      <img
        src={src}
        className={`w-100 cover position-absolute ${imgClassName || ""}`}
      />
    </div>
  )
}
