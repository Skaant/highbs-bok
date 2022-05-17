import React from "react"
import { CHARACTERS_DATA } from "../../../data/characters"
import { COLORS, COLORS_DATA } from "../../../data/colors"
import { ERAS_DATA } from "../../../data/eras"
import { PAGES } from "../../../data/pages"
import { PLACES_DATA } from "../../../data/places"
import { TERMS, TERMS_DATA } from "../../../data/terms"
import { TRIBES_DATA } from "../../../data/tribes"
import { WordsDataSet } from "../../../data/_types/WordsDataSet"
import Color from "../../components/Color"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import colorDescriptions from "../../components/_pages/couleurs/colorDescriptions.collection"
import WordSwitch from "../../components/_pages/couleurs/WordSwitch"
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
                    const { id, name, hexa, textWhite } = COLORS_DATA[color]
                    return (
                      <tr key={color} id={id}>
                        <td>
                          <Color color={color} link={false} />
                        </td>
                        <td>
                          <div className="mb-4">{colorDescriptions[color]}</div>
                          {COLORS_WORD_ENTRIES[color].map(({ key, type }) => {
                            return (
                              <WordSwitch
                                key={`${type}-${key}`}
                                type={type}
                                _key={key}
                              />
                            )
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
