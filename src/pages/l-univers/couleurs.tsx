import React from "react"
import { colors, colorsData } from "../../../data/colors"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"

const title = "Signification des couleurs"

export default function Couleurs() {
  return (
    <Layout pageId="l-univers/colors">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <img
            src="/images/hb-rivers.svg"
            className="position-absolute w-100 cover"
            style={{ zIndex: -1 }}
          />
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead mb-5">
                Comme le <a href="/l-univers/glossaire">glossaire</a>, mais pour
                les couleurs.
              </p>
              <p>
                Pour nous permettre de mieux lire cet univers visuel, j'utilise
                un langage couleurs qui, comme{" "}
                <a href="/l-univers/glossaire">le glossaire</a> pour les mots,
                suggère un ensemble de sens.
              </p>
            </div>
          </div>
          <div className="row px-4 pt-4 align-content-center pb-5">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Liste et détails des couleurs</h2>
              <p>
                Voici les concordances couleur-description, par ordre
                d'apparition dans l'HIGHBS-BOK :
              </p>
              <table className="table" style={{ background: "#f8f9facc" }}>
                {Object.values(colors).map(color => {
                  const { hexa: backgroundColor, description } = colorsData.get(
                    color
                  )
                  return (
                    <tr>
                      <td>
                        <span
                          className="badge rounded-pill w-100"
                          style={{ backgroundColor }}
                        >
                          &nbsp;
                        </span>
                      </td>
                      <td>
                        <span className="small text-muted text-uppercase">
                          {backgroundColor}
                        </span>
                      </td>
                      <td>{description}</td>
                    </tr>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
