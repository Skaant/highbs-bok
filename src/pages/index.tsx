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
          <div className="row px-4 text-center align-content-center">
            <h1 className="col-12 display-4">HIGHBS-BOK</h1>
            <p className="col-12 lead">Le livre du motif absolu</p>
          </div>
          <div className="row px-4 pt-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
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
                "bs", comme dans "abstrait" ou "absolu").
              </p>
              <div className="d-flex mt-5">
                <a
                  href="/HIGHBS-BOK 1 (extrait).pdf"
                  className="btn btn-gold btn-lg rounded-pill mr-4 px-4 py-3 shadow"
                >
                  Téléchargez l'extrait
                </a>
                <a
                  href="/acheter"
                  className="btn btn-purple btn-lg rounded-pill px-4 py-3 shadow"
                >
                  Acheter un livret imprimé
                </a>
              </div>
            </div>
          </div>
          <div className="row px-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-5">Les ZUMS à la conquête de l'univers</h2>
              <p>
                Avec leurs puissants alliés : le PSIK, la vie, GRAND-ARBRE
                [...], <b>les ZUMS, cette espèce de singes brillants,</b> sont
                partis jusqu'aux confins de l'univers, et sont revenus{" "}
                <b>
                  pour tenter de réaliser l'HIGHBS et de manifester le{" "}
                  <span>tout-un</span>
                </b>
                .
              </p>
              <div>
                <div className="d-flex mt-5">
                  <a
                    href="/l-univers"
                    className="btn btn-purple btn-lg rounded-pill px-4 py-3 shadow"
                  >
                    Découvrez l'univers des ZUMS
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center mt-5">
                <p className="my-0 mr-4">
                  <b>Les pages :</b>
                </p>
                <a
                  href="/l-univers/sept-eras"
                  className="btn btn-light rounded-pill mr-3 px-4 py-3 shadow"
                >
                  Sept ERAS
                </a>
                <a
                  href="/l-univers/couleurs"
                  className="btn btn-light rounded-pill mr-3 px-4 py-3 shadow"
                >
                  Les couleurs
                </a>
                <a
                  href="/l-univers/glossaire"
                  className="btn btn-light rounded-pill px-4 py-3 shadow"
                >
                  Glossaire
                </a>
              </div>
            </div>
          </div>
          <div className="row px-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-3">Un projet au long cours</h2>
              <p>
                L'écriture de l'HIGHBS-BOK a commencé il y a plusieurs années.
                Synthétisant des bribes de textes philosophiques et spirituels,
                ainsi que des idées écologiques et futuristes, sa forme s'est
                raffinée avec le temps pour en arriver à cette forme.
              </p>
              <a
                href="/a-propos"
                className="btn btn-purple btn-lg rounded-pill mt-5 px-4 py-3 shadow"
              >
                En savoir plus
              </a>
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
