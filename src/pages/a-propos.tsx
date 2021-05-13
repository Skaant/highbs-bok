import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../styles/global.scss"

const title = "À propos"

export default function () {
  return (
    <Layout pageId="a-propos">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead mb-5">
                En savoir plus sur le projet et l'auteur.
              </p>
            </div>
          </div>

          <div className="row px-4 pt-4 align-content-center pb-5">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Qu'est-ce que l'HIGHBS-BOK ? (Et comment le prononcer ?)</h2>
              <p>
                Ouvrage <b>synthétique</b>, l'HIGHBS-BOK prétend seulement être
                une <b>actualisation de la forme</b> donnée aux idées (images,
                mythes/histoires ...), pour continuer à les faire vivre.
              </p>
              <p>
                L'HIGHBS-BOK est également un recueil d'
                <b>associations d'idées inédites</b> !
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
