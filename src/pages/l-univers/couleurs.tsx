import React from "react"
import { CHARACTERS_DATA } from "../../../data/characters"
import { COLORS, COLORS_DATA } from "../../../data/colors"
import { ERAS_DATA } from "../../../data/eras"
import { PAGES } from "../../../data/pages"
import { PLACES_DATA } from "../../../data/places"
import { TERMS, TERMS_DATA } from "../../../data/terms"
import { TRIBES_DATA } from "../../../data/tribes"
import { VOLUMES } from "../../../data/volumes"
import { Source } from "../../../data/_types/WordData"
import { WordsDataSet } from "../../../data/_types/WordsDataSet"
import Color from "../../components/Color"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import colorDescriptions from "../../components/_pages/couleurs/colorDescriptions.collection"
import ColorsList from "../../components/_pages/couleurs/ColorsList"
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

const WORD_TYPES_DATASET: { [type in WORD_TYPES]: WordsDataSet } = {
  TERM: TERMS_DATA,
  CHARACTER: CHARACTERS_DATA,
  ERA: ERAS_DATA,
  PLACE: PLACES_DATA,
  TRIBE: TRIBES_DATA,
}

const COLORS_WORD_ENTRIES: ColorWordEntriesSet = Object.entries(
  WORD_TYPES_DATASET
).reduce((colorsWords, [type, dataSet]) => {
  Object.entries(dataSet).forEach(([key, data]) =>
    addWordEntryToColor(colorsWords, data.color, {
      key,
      type: type as WORD_TYPES,
    })
  )
  return colorsWords
}, {})

const SOURCES_SORT_VALUE: { [key in Source]: number } = {
  VOLUME_1: 2,
  VOLUME_2: 1,
  storyboards: 0,
}

function getSource(type: WORD_TYPES, key: string): Source {
  return (
    WORD_TYPES_DATASET[type][key].volume ||
    (type === WORD_TYPES.ERA
      ? VOLUMES.VOLUME_1
      : type === WORD_TYPES.TRIBE
      ? VOLUMES.VOLUME_2
      : "storyboards")
  )
}

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
              <ColorsList outline={COLORS.BLUE} />
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
                    return (
                      <tr key={color} id={COLORS_DATA[color].id}>
                        <td>
                          <Color color={color} link={false} />
                        </td>
                        <td>
                          <div className="mb-4">{colorDescriptions[color]}</div>
                          {COLORS_WORD_ENTRIES[color]
                            .sort(
                              (
                                { type: aType, key: aKey },
                                { type: bType, key: bKey }
                              ) =>
                                (SOURCES_SORT_VALUE[getSource(bType, bKey)] ||
                                  -1) -
                                (SOURCES_SORT_VALUE[getSource(aType, aKey)] ||
                                  -1)
                            )
                            .map(({ key, type }) => {
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
