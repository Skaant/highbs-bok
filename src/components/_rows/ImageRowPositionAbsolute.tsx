import React, { CSSProperties, ReactElement } from "react"

export function ImageRowPositionAbsolute({
  src,
  style,
  imgStyle,
  className,
  imgClassName,
}: {
  src: string
  style?: CSSProperties
  className?: string
  imgStyle?: CSSProperties
  imgClassName?: string
}) {
  return (
    <div
      className={`position-absolute w-100 full-img-container align-items-center ${className}`}
      style={style}
    >
      <img
        src={src}
        className={`w-100 cover ${imgClassName || ""}`}
        style={imgStyle}
      />
    </div>
  )
}
