import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../styles/global.scss"

/** Page d'accueil */
export default function Home({ data }) {
  return (
    <Layout pageId="index">
      <>
        <Header title={"Accueil"} />
        <div className="container-fluid px-0" style={{ minHeight: "100vh" }}>
          <div
            className="position-absolute w-100 full-img-container align-items-center"
            style={{ height: "150vh" }}
          >
            <img
              src="/images/hb-banner.svg"
              className="w-100 cover position-absolute"
              data-parallax-direction="up"
            />
          </div>
          <div className="row spaced pb-5 px-4 text-center align-content-center">
            <h1 className="col-12 display-1">HIGHBS-BOK</h1>
            <p className="col-12 display-6 text-muted">
              Le livre du motif absolu
            </p>
          </div>
          <div className="row px-4 pt-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-5">
                Jusqu'au <span className="bg-gold">tout-un</span> !
              </h2>
              <p className="mt-4 mb-2">
                Une{" "}
                <b>
                  histoire de science-fiction ésotérique et sincèrement utopiste
                </b>{" "}
                pour tenter de conceptualiser l'abstraction absolue, le motif
                ultime : <b>l'HIGHBS</b>*.
              </p>
              <p className="small mb-4">
                * Prononcez comme le "high" anglais, suivi de "bs", comme dans
                "abstrait" ou "absolu".
              </p>
              <p>
                Dans cette{" "}
                <b>
                  saga poétique et imagée, lecteur, tu es emmené dans la forêt
                  spatiale des ZUMS
                </b>
                , une civilisation intelligente très semblable à la nôtre partie
                conquérir l'espace{" "}
                <b>à la recherche des idées les plus hautes perchées</b>.
              </p>
              <p className="display-6 text-muted mt-4">
                "Entend, horizon de tous les regards !<br />
                <b>Nous te cherchons tous à travers le PSIK</b>
                <br />
                pour te rendre,
                <br />
                conscience harmonieuse,
                <br />à la matière inerte du cosmos."
              </p>
              <p className="small mb-4">
                - Extrait du livret 1, chapitre 7 : <i>Jardins sans fin</i>.
              </p>
              <p>
                Le <b>premier épisode de l'aventure</b>, le livret 1 de
                l'HIGHBS-BOK : "L'histoire des ZUMS" est déjà disponible{" "}
                <b>à l'achat en version imprimée</b> ou à la lecture en format
                numérique dans <b>l'extrait de 5 chapitres (sur 14 !)</b>.
              </p>
              <div className="d-flex flex-column flex-md-row mt-5">
                <a
                  href="/HIGHBS-BOK 1 (extrait).pdf"
                  className="btn btn-gold btn-lg rounded-pill mb-4 mx-2 px-4 py-3 shadow"
                >
                  Téléchargez l'extrait
                </a>
                <a
                  href="/acheter"
                  className="btn btn-purple btn-lg rounded-pill mb-4 mx-2 px-4 py-3 shadow"
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
                Avec leurs puissants alliés : le PSIK, la vie et GRAND-ARBRE ,{" "}
                <b>les ZUMS, cette espèce de singes vraiment brillants,</b> sont
                partis jusqu'aux confins de l'univers, et sont revenus{" "}
                <b>
                  pour tenter de réaliser l'HIGHBS et de manifester le{" "}
                  <span className="bg-gold">tout-un</span>
                </b>
                .
              </p>
              <div>
                <div className="d-flex mt-5">
                  <a
                    href="/l-univers"
                    className="btn btn-purple btn-lg rounded-pill mb-4 mx-2 px-4 py-3 shadow"
                  >
                    Découvrez l'univers des ZUMS
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="position-absolute w-100 full-img-container"
            style={{ height: "120vh" }}
          >
            <img
              src="/images/hb-droplets.svg"
              className="w-100 cover position-absolute"
              data-parallax-direction="up"
            />
          </div>
          <div className="row px-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-5">Un projet au long cours</h2>
              <p>
                L'écriture de l'HIGHBS-BOK a commencé il y a plusieurs années.
                Synthétisant{" "}
                <b>
                  des bribes de textes philosophiques et spirituels, ainsi que
                  des idées écologiques et futuristes
                </b>
                , j'ai tenté d'affiner sa forme avec le temps.
              </p>
              <p></p>
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
