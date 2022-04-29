import React from "react"
import { colors, colorsData } from "../../../data/colors"
import { PAGES } from "../../../data/pages"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import "../../styles/global.scss"

const pageId = PAGES.L_UNIVERS_COULEURS
const title = "Signification des couleurs"

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
          <ContentRowWithHeader
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4"
          >
            <>
              <p>
                Dans l'univers visuel de l'HIGHBS-BOK,{" "}
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
          </ContentRowWithHeader>
          <ContentRowWithHeader className="pt-4">
            <table className="table" style={{ background: "#f8f9facc" }}>
              <tbody>
                {Object.values(colors)
                  .filter(
                    color => ![colors.light, colors.muted].includes(color)
                  )
                  .map(color => {
                    const {
                      hexa: backgroundColor,
                      description,
                      colorWhite,
                    } = colorsData.get(color)
                    return (
                      <tr key={color}>
                        <td>
                          <span
                            className={`badge rounded-pill w-100 ${
                              colorWhite ? " text-light" : ""
                            }`}
                            style={{
                              backgroundColor,
                              maxWidth: "25vw",
                              whiteSpace: "initial",
                            }}
                          >
                            {backgroundColor} - <i>{color}</i>
                          </span>
                        </td>
                        <td>{description}</td>
                      </tr>
                    )
                  })}
              </tbody>
            </table>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
            className="bg-gold"
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
