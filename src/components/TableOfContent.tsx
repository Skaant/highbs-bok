import React from "react"

export function TableOfContent({
  sections,
}: {
  sections: { [key: string]: string }
}) {
  return (
    <ul className="list-unstyled">
      {Object.entries(sections).map(([id, label]) => (
        <li key={id}>
          <a href={"#" + id}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
