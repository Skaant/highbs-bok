import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import "../styles/global.scss"
import { Layout } from "../components/Layout/Layout"

/** Page d'accueil */
export default function Home({ data }) {
  return (
    <Layout pageId="index">
      <>
        <Header title={"Accueil"} />
        <div className="container-fluid px-0" style={{ minHeight: "100vh" }}>
          <img
            src="/images/hb-banner.svg"
            className="position-absolute w-100 h-100"
            style={{ zIndex: -1 }}
          />
          <div
            className="row px-4 text-center align-content-center"
            style={{ height: "50vh" }}
          >
            <h1 className="col-12 display-4" style={{ paddingTop: "50vh" }}>
              HIGHBS-BOK
            </h1>
            <p className="col-12 lead">Le livre du motif absolu</p>
          </div>
          <div className="row px-4">
            <h2 className="mb-5">
              Jusqu'au <span className="bg-gold">tout-un</span> !
            </h2>
            <p>
              Une{" "}
              <b>
                histoire de science-fiction ésotérique et sincèrement utopiste
              </b>{" "}
              pour tenter de conceptualiser l'abstraction absolue :{" "}
              <b>l'HIGHBS</b> (prononcez comme le "high" anglais, suivi de
              "bs").
            </p>
          </div>
          <div className="row px-4 bg-gold">
            <h2 className="mb-5">Les ZUMS à la conquête de l'univers</h2>
            <p>
              Avec leurs puissants alliés : le PSIK, la vie, GRAND-ARBRE [...],{" "}
              <b>les ZUMS, cette espèce de singes brillants,</b> sont partis
              jusqu'aux confins de l'univers, et sont revenus{" "}
              <b>
                pour tenter de réaliser l'HIGHBS et de manifester le{" "}
                <span>tout-un</span>
              </b>
              .
            </p>
            <a href="/l-univers" className="btn btn-light mt-4">
              Découvrez l'univers des ZUMS
            </a>
          </div>
          <div className="row px-4">
            <div className="col-12 col-lg-8">
              <h2 className="mb-3">
                Téléchargez gratuitement les premiers chapitres de l'
                <span className="lexic">HIGHBS-BOK</span>!
              </h2>
              <p>
                Bientôt disponible entièrement illustrée, au format électronique
                ou papier; découvrez les premiers chapitres de
                <b>la palpitante épopée des ZUMS à travers l'espace</b>.
              </p>
              <p>
                Cliquez
                <a href="/assets/HIGHBS-BOK 1 - livret démo.pdf">sur ce lien</a>
                , pour télécharger le livret démo :D
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
