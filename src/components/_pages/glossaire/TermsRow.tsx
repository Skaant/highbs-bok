import React, { ReactElement } from "react"
import { TERMS, TERMS_DATA } from "../../../../data/terms"
import Term from "../../Term"
import { SectionRow } from "../../_rows/SectionRow"

function TermsRow({
  id,
  title,
  intro,
  terms,
  descriptions,
}: {
  id: string
  title: string
  intro: ReactElement
  terms: TERMS[]
  descriptions: { [key in TERMS]?: ReactElement }
}) {
  return (
    <SectionRow
      id={id}
      header={{
        content: title,
        level: 2,
      }}
      className="pt-4"
    >
      <>
        {intro}
        <table
          className="table table--first-row-right mt-5"
          style={{ background: "#f8f9facc" }}
        >
          <tbody>
            {terms.map(term => {
              const { name, summary } = TERMS_DATA[term]
              return (
                <tr id={name.replace(/ /g, "-")} key={name}>
                  <td>
                    <Term term={term} link={false} />
                  </td>
                  <td>{descriptions[term] || summary}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    </SectionRow>
  )
}

export default TermsRow
