import React from "react"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import "../../styles/global.scss"

const title = "Découvrir l'univers"

export default function () {
  return (
    <Layout pageId="l-univers/index">
      <>
        <Header title={title} />
        <img
          src="/images/hb1-soln-syst.svg"
          className="position-absolute w-100 cover"
          style={{ zIndex: -1 }}
        />
        <div className="container-fluid px-0">
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead mb-5">
                Prémices de l'encyclopédie du monde des ZUMS
              </p>
              <p>
                Quelques pages pour en savoir plus sur l'univers de
                l'HIGHBS-BOK, l'histoire des ZUMS et de la vie, les éléments de
                contexte de leur quête.
              </p>
            </div>
          </div>
          <div className="row px-4 pt-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Concepts et pages de la section univers</h2>
              <ul>
                <li>
                  <a href="/l-univers/sept-eras">Sept ERAS</a>, les sept
                  périodes de l'histoire des ZUMS,
                </li>
                <li>
                  <a href="/l-univers/glossaire">Le glossaire</a> des termes
                  spécifiques à l' HIGHBS-BOK,
                </li>
                <li>
                  <a href="/l-univers/couleurs">Les couleurs</a> utilisées dans
                  les illustrations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
