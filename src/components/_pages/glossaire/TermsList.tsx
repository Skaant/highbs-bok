import * as React from "react"
import { TERMS } from "../../../../data/terms"
import Term from "../../Term"

function TermsList({ terms }: { terms: TERMS[] }) {
  return (
    <ul className="my-5">
      {terms.map(term => {
        return (
          <li key={term} className="mb-3">
            <Term term={term as TERMS} pageLink={true} />
          </li>
        )
      })}
    </ul>
  )
}

export default TermsList
