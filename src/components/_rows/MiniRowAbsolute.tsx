import React from "react"

function MiniRowAbsolute({
  id,
  justify,
}: {
  id: "psik" | "data-plant"
  justify: "left" | "right"
}) {
  return (
    <div className={`mini-row-absolute row position-absolute ${justify}`}>
      <img src={`/images/mini-${id}.svg`} />
    </div>
  )
}

export default MiniRowAbsolute
