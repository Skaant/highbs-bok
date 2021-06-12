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
        <div className="container-fluid px-0">
          <div
            className="position-absolute w-100 full-img-container align-items-center"
            style={{ height: "max-content", marginTop: "calc(10vh - 200px)" }}
          >
            <img
              src="/images/hb1-soln-syst.svg"
              className="w-100 cover"
              data-parallax-direction="up"
            />
          </div>
          <div className="row px-4 pt-4 pb-5">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p>
                Que de péripéties ont vécu les ZUMS avant d'en arriver jusque là
                ...
              </p>
              <p>
                Imaginez un peu :{" "}
                <b>partis de leur planète TERA à bord d'une forêt spatiale</b>,
                ces créatures proprement fabuleuses{" "}
                <b>
                  ont été ensuite dispersés jusqu'aux frontières de l'univers
                </b>
                .
              </p>
              <p>
                Et ce n'est pas tout ! Ils en sont revenus pour former l'ANGK :
                l'être unique capable de conceptualiser la pensée libératrice,
                le concept ultime : l'HIGHBS.
              </p>
              <p>
                Servez-vous de ces quelques pages pour explorer plus encore
                l'univers épique des ZUMS.
              </p>
            </div>
          </div>
          <div className="row px-4 pt-4 pb-5">
            <div className="col-12 col-xl-10">
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
          <div className="row px-4 pt-5 justify-content-start">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 offset-xl-2">
              <h2>Les sept périodes de l'histoire des ZUMS</h2>
              <div>
                <a
                  href="/l-univers/sept-eras"
                  className="btn rounded-pill btn-purple"
                >
                  Sept ERAS
                </a>
              </div>
            </div>
          </div>
          <div className="row px-4 pt-5 justify-content-start">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 offset-md-2 offset-lg-4">
              <h2>Concepts et pages de la section univers</h2>
              <ul>
                <li>
                  <a href="/l-univers/sept-eras">Sept ERAS</a>, ,
                </li>
                <li>
                  <a href="/l-univers/glossaire">Le glossaire</a> des termes
                  spécifiques à l' HIGHBS-BOK,
                </li>
                <li>
                  <a href="/l-univers/couleurs">Les couleurs</a> utilisées dans
                  les illustrations.
                </li>
                <li>
                  <a className="text-muted"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
