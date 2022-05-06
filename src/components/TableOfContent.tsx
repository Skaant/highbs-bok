import React from "react"

export function TableOfContent({
  sections,
  unstyled = true,
  className,
}: {
  sections: { [key: string]: string }
  unstyled?: boolean
  className?: string
}) {
  return (
    <ul className={`${unstyled ? "list-unstyled" : ""} ${className || ""}`}>
      {Object.entries(sections).map(([id, label]) => (
        <li key={id}>
          <a href={"#" + id}>{label}</a>
        </li>
      ))}
    </ul>
  )
}
