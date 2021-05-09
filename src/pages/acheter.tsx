import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"

const title = "Acheter le livret"

export default function () {
  return (
    <Layout pageId="acheter">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 text-center align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead">Procurez-vous un exemplaire</p>
            </div>
          </div>
          <div className="row px-4 pb-4 align-content-center bg-gold">
            <div className="col-12 col-md-10 col-xl-8">
              <h2>Deux versions papier</h2>
              <p>
                Lisez l'HIGHBS-BOK sur support imprimé. Deux versions pour deux
                budgets.
              </p>
            </div>
          </div>
          <div className="row px-4 pt-4 align-content-center bg-gold">
            <div className="col-12 col-md-10 col-lg-5 col-xl-4 px-lg-4">
              <h3>"Maître zen"</h3>
              <p>
                Sans fioriture, la version "maître zen" est imprimée à la maison
                en noir et blanc. Lisez l'HIGHBS-BOK pour la modique somme de
                6€.
              </p>
            </div>
            <div className="col-12 col-md-10 col-lg-5 col-xl-4">
              <h3>"Connaisseur"</h3>
              <p>
                Imprimée par des pros, en couleur et avec une petite couverture
                sympa. La version idéale pour ceux qui aime les beaux objets, à
                16€.
              </p>
            </div>
          </div>
          <div className="row px-4 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Bientôt une version électronique ?</h2>
              <p>
                Je n'ai pas pris le temps de m'intéresser aux plateformes qui
                propose d'héberger et de vendre des e-books. Mais on pourrait y
                venir.
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
