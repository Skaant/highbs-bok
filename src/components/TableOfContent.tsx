import React from "react"

export function TableOfContent({
  sections,
  unstyled = true,
}: {
  sections: { [key: string]: string }
  unstyled?: boolean
}) {
  return (
    <ul className={`${unstyled ? "list-unstyled" : ""}`}>
      {Object.entries(sections).map(([id, label]) => (
        <li key={id}>
          <a href={"#" + id}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
