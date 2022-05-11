import React, { CSSProperties } from "react"

export function ImageRowPositionAbsolute({
  src,
  style,
  imgStyle,
  className,
  imgClassName,
  gradient,
}: {
  src: string
  style?: CSSProperties
  className?: string
  imgStyle?: CSSProperties
  imgClassName?: string
  gradient?: string
}) {
  return (
    <div
      className={`position-absolute w-100 full-img-container align-items-center ${className}`}
      style={style}
    >
      {gradient && (
        <div
          className="position-absolute w-100 h-100"
          style={{
            background: `linear-gradient(to bottom, #0000, ${gradient})`,
          }}
        >
          {" "}
        </div>
      )}
      <img
        src={src}
        className={`w-100 cover ${imgClassName || ""}`}
        style={imgStyle}
      />
    </div>
  )
}
