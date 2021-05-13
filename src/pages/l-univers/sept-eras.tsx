import React from "react"
import { colors, colorsData } from "../../../data/colors"
import { eras, erasData } from "../../../data/eras"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import "../../styles/global.scss"

const title = "Les sept ERAS de l'histoire des ZUMS"
const erasRowColor = {
  [eras.presentEra]: colors.purple,
  [eras.paleoEra]: colors.turquoize,
  [eras.primaEra]: colors.green,
  [eras.expansionEra]: colors.skin,
  [eras.dispersionEra]: colors.lightDeep,
  [eras.contractionEra]: colors.jewel,
  [eras.auroEra]: colors.gold,
  [eras.angkEra]: colors.blue,
}

export default function SeptEras() {
  return (
    <Layout pageId="index/sept-eras">
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
          {Object.values(eras).map((era: eras) => {
            const { name, description } = erasData.get(era)
            const color = erasRowColor[era]
            const { colorWhite = false } = color ? colorsData.get(color) : {}
            return (
              <div
                key={era}
                className={`row px-4 py-5 align-content-center${
                  color ? ` bg-${color}` : ""
                }${colorWhite ? " text-light" : ""}`}
              >
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </>
    </Layout>
  )
}
