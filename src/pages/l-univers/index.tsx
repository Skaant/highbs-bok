import React from "react"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import "../../styles/global.scss"

const title = "Découvrir l'univers"

export default function () {
  return (
    <Layout pageId="l-univers/index">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div
            className="position-absolute w-100 full-img-container align-items-center"
            style={{ height: "max-content", marginTop: "calc(100px - 10vh)" }}
          >
            <img
              src="/images/hb1-soln-syst.svg"
              className="w-100 cover"
              data-parallax-direction="up"
            />
          </div>
          <div className="row px-4 py-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="mb-5">{title}</h1>
              <p className="mb-5">
                Le <span className="bg-gold">tout-un</span> ... que de{" "}
                <b>péripéties</b> ont vécu les ZUMS avant d'en arriver jusque
                là.
              </p>
              <p>
                Imaginez un peu :{" "}
                <b>partis de leur planète TERA à bord d'une forêt spatiale</b>,
                ces créatures proprement fabuleuses{" "}
                <b>
                  ont été ensuite dispersées jusqu'aux frontières de l'univers
                </b>
                .
              </p>
              <p className="mb-5">
                Et ce n'est pas tout !{" "}
                <b>Ils en sont revenus pour former l'ANGK</b> : l'être unique{" "}
                <b>capable de conceptualiser la pensée libératrice</b>, le
                concept ultime : <b>l'HIGHBS</b>.
              </p>
              <p>
                Servez-vous de ces quelques pages pour{" "}
                <b>explorer plus encore l'univers épique des ZUMS</b>.
              </p>
              <div className="menu-btn mt-5">
                <a href="/l-univers/sept-eras" className="btn btn-purple">
                  Sept ERAS
                </a>
                <a href="/l-univers/sept-eras" className="btn btn-purple">
                  Les couleurs
                </a>
                <a href="/l-univers/glossaire" className="btn btn-purple">
                  Glossaire
                </a>
                <a
                  className="btn btn-outline-deep disabled"
                  title="Cette page n'est pas encore prête !"
                >
                  Personnages et entités
                </a>
                <a
                  className="btn btn-outline-deep disabled"
                  title="Cette page n'est pas encore prête !"
                >
                  Lieux
                </a>
              </div>
            </div>
          </div>
          <div className="row px-4 pt-4">
            <div className="col-10">
              <p className="display-4 text-muted">
                "Lorsqu’il ne restera plus dans cet univers qu’un monde,
                <br />
                qu'une ville : la cité de l’aube,
                <br />
                assiégée par les hordes de l’entropie;
                <br />
                ce sera l’AURO-ERA."
              </p>
              <p className="small">
                - Extrait du livret 1, chapitre 6 : <i>Sept ERAS</i>
              </p>
            </div>
          </div>
          <div className="row px-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Autres pages du site</h2>
              <div className="menu-btn">
                <a href="/a-propos" className="btn btn-outline-purple">
                  À propos
                </a>
                <a href={EXTRACT_DOWNLOAD_LINK} className="btn btn-light">
                  Télécharger l'extrait
                </a>
                <a href="/acheter" className="btn btn-purple">
                  Acheter le livret
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
