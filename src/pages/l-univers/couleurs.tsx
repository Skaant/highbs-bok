import React from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../data/characters"
import { COLORS, COLORS_DATA } from "../../../data/colors"
import { ERAS, ERAS_DATA } from "../../../data/eras"
import { PAGES } from "../../../data/pages"
import { PLACES, PLACES_DATA } from "../../../data/places"
import { TERMS, TERMS_DATA } from "../../../data/terms"
import { TRIBES, TRIBES_DATA } from "../../../data/tribes"
import { WordsDataSet } from "../../../data/_types/WordsDataSet"
import Character from "../../components/Character"
import Era from "../../components/Era"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Place from "../../components/Place"
import Term from "../../components/Term"
import Tribe from "../../components/Tribe"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { SectionRow } from "../../components/_rows/SectionRow"
import "../../styles/global.scss"
import { WORD_TYPES } from "../../_enums/word-types.enum"

const pageId = PAGES.L_UNIVERS_COULEURS
const title = "Signification des couleurs"

type ColorWordEntry = {
  key: string
  type: WORD_TYPES
}

type ColorWordEntriesSet = { [color in COLORS]?: ColorWordEntry[] }

function addWordEntryToColor(
  colorsWords: ColorWordEntriesSet,
  color: COLORS,
  wordEntry: ColorWordEntry
) {
  if (!colorsWords[color]) {
    colorsWords[color] = []
  }
  colorsWords[color].push(wordEntry)
  return colorsWords
}

const COLORS_WORD_ENTRIES: ColorWordEntriesSet = ([
  {
    type: WORD_TYPES.TERM,
    dataSet: TERMS_DATA,
  },
  {
    type: WORD_TYPES.CHARACTER,
    dataSet: CHARACTERS_DATA,
  },
  {
    type: WORD_TYPES.ERA,
    dataSet: ERAS_DATA,
  },
  {
    type: WORD_TYPES.PLACE,
    dataSet: PLACES_DATA,
  },
  {
    type: WORD_TYPES.TRIBE,
    dataSet: TRIBES_DATA,
  },
] as { type: WORD_TYPES; dataSet: WordsDataSet }[]).reduce(
  (colorsWords, { type, dataSet }) => {
    Object.entries(dataSet).forEach(([key, data]) =>
      addWordEntryToColor(colorsWords, data.color, {
        key,
        type,
      })
    )
    return colorsWords
  },
  {}
)

export default function Couleurs() {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <img
            src="/images/hb-rivers.svg"
            className="position-absolute w-100 cover"
            style={{ zIndex: -1 }}
          />
          <SectionRow
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4"
          >
            <>
              <p>
                Dans l'univers visuel de l'
                <Term term={TERMS.HIGHBS_BOK} />,{" "}
                <b>
                  les couleurs tiennent une place aussi importante que les
                  termes du <a href="/l-univers/glossaire">glossaire</a>
                </b>
                . Et pour cause : ces couleurs{" "}
                <b>forment elles aussi un langage</b> !
              </p>
              <p>
                À l'image du tarot de Marseille,{" "}
                <b>le contenu chromatique est porteur de sens</b> (au pluriel),
                dont quelques uns sont <b>résumés ci-dessous</b> :
              </p>
            </>
          </SectionRow>
          <SectionRow className="pt-4">
            <table className="table" style={{ background: "#f8f9facc" }}>
              <tbody>
                {Object.values(COLORS)
                  .filter(
                    color =>
                      ![COLORS.LIGHT, COLORS.MUTED, COLORS.DARK].includes(color)
                  )
                  .map(color => {
                    const { hexa, description, colorWhite } = COLORS_DATA[color]
                    return (
                      <tr key={color}>
                        <td>
                          <span
                            className={`badge rounded-pill text-capitalize w-100 ${
                              colorWhite ? " text-light" : ""
                            }`}
                            style={{
                              backgroundColor: hexa,
                              maxWidth: "25vw",
                              whiteSpace: "initial",
                            }}
                          >
                            {color.toLowerCase().replace(/\_/g, " ")}
                          </span>
                        </td>
                        <td>
                          {COLORS_WORD_ENTRIES[color].map(({ key, type }) => {
                            const _key = `${type}-${key}`
                            switch (type) {
                              case WORD_TYPES.TERM:
                                return (
                                  <Term
                                    key={_key}
                                    term={key as TERMS}
                                    className="me-2"
                                  />
                                )
                              case WORD_TYPES.CHARACTER:
                                return (
                                  <Character
                                    key={_key}
                                    character={key as CHARACTERS}
                                    className="me-2"
                                  />
                                )
                              case WORD_TYPES.ERA:
                                return (
                                  <Era
                                    key={_key}
                                    era={key as ERAS}
                                    className="me-2"
                                  />
                                )
                              case WORD_TYPES.PLACE:
                                return (
                                  <Place
                                    key={_key}
                                    place={key as PLACES}
                                    className="me-2"
                                  />
                                )
                              case WORD_TYPES.TRIBE:
                                return (
                                  <Tribe
                                    key={_key}
                                    tribe={key as TRIBES}
                                    className="me-2"
                                  />
                                )
                            }
                          })}
                        </td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
            className="bg-gold"
          >
            <>
              <UniversePagesCTA current={pageId} buttonsColor={COLORS.PURPLE} />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
