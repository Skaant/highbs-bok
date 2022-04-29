import React from "react"
import { colors, colorsData } from "../../../data/colors"
import { ERAS, ERAS_DATA } from "../../../data/eras"
import { PAGES } from "../../../data/pages"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import "../../styles/global.scss"

const pageId = PAGES.L_UNIVERS_ERAS
const title = "Les sept ERAS de l'histoire des ZUMS"

export default function SeptEras() {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead mb-5">
                Une épopée qui s'étend jusqu'à l'infini, et revient.
              </p>
              <p>
                Vous suivez le narrateur dans son exploration de toutes les
                époques marquantes de l'histoire des ZUMS à travers l'espace et
                le temps.
              </p>
              <p>
                De la mise au point du HOL-ONG, le réseau de conscience
                collective, jusqu'au siège de la dernière ville de l'univers par
                les forces du chaos; découvrez les idées les plus folles sur
                l'avenir, la nature et le sens de toutes choses.
              </p>
            </div>
          </div>
          {Object.values(ERAS).map((era: ERAS) => {
            const { name, summary, id, color } = ERAS_DATA[era]
            const { colorWhite = false } = color ? colorsData.get(color) : {}
            return (
              <div
                key={era}
                id={id}
                className={`row px-4 py-5 align-content-center${
                  color ? ` bg-${color}` : ""
                }${colorWhite ? " text-light" : ""}`}
              >
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                  <h3>{name}</h3>
                  <p>{summary}</p>
                </div>
              </div>
            )
          })}
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
          >
            <>
              <UniversePagesCTA current={pageId} buttonsColor={colors.purple} />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
