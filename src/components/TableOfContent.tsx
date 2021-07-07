import React from "react"

export type Section = {
  id: string
  label: string
}

function SectionList({ sections }: { sections: Section[] }) {
  return (
    <ul className="list-unstyled">
      {sections.map(({ id, label }) => (
        <li key={id}>
          <a href={"#" + id}>{label}</a>
        </li>
      ))}
    </ul>
  )
}

export function TableOfContent({ sections }: { sections: Section[] }) {
  return <SectionList sections={sections} />
}
