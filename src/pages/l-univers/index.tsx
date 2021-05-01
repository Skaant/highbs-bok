import React from "react"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"

const title = "Découvrir l'univers"

export default function () {
  return (
    <Layout pageId="l-univers/index">
      <>
        <Header title={title} />
        <img
          src="/images/hb1-soln-syst.svg"
          className="position-absolute w-100 h-100"
          style={{ zIndex: -1 }}
        />
        <div className="container-fluid px-0">
          <div className="row px-4 text-center align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead">Encyclopédie du monde des ZUMS</p>
            </div>
          </div>
          <div className="row px-4 text-center align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>
                Quelques pages pour en savoir plus sur l'univers de l'HIGHBS-BOK
              </h2>
              <ul>
                <li>
                  <a href="/l-univers/7-eras">7 ERAS</a>, les sept périodes de
                  l'histoire des ZUMS,
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
