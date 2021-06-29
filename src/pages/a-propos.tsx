import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import { ContentRowWithHeader } from "../components/_rows/ContentRowWithHeader"
import "../styles/global.scss"

const title = "À propos"

enum sectionsId {
  QU_EST_CE_QUE_L_HIGHBS_BOK = "qu-est-ce-que-l-highbs-bok",
  AU_SUJET_DES_PSYCHEDELIQUES = "au-sujet-des-psychedeliques",
}

const sectionsData = {
  [sectionsId.QU_EST_CE_QUE_L_HIGHBS_BOK]: "Qu'est-ce que l'HIGHBS-BOK ?",
}

export default function () {
  return (
    <Layout pageId="a-propos">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <ul className="list-unstyled">
                {Object.entries(sectionsData).map(([id, label]) => (
                  <li key={id}>
                    <a href={id}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContentRowWithHeader
            id={sectionsId.QU_EST_CE_QUE_L_HIGHBS_BOK}
            header={{
              level: 2,
              content: sectionsData[sectionsId.QU_EST_CE_QUE_L_HIGHBS_BOK],
            }}
          >
            <>
              <p>
                Ouvrage <b>synthétique</b>, l'HIGHBS-BOK prétend seulement être
                une <b>actualisation de la forme</b> donnée aux idées (images,
                mythes et histoires), pour continuer à les faire vivre.
              </p>
              <p>
                L'HIGHBS-BOK est également un recueil d'
                <b>associations d'idées inédites</b> (les associations, pas les
                idées). Science-fiction, ésotérisme, permaculture, aventure,
                poèsie se rejoignent pour dessiner une saga utopique et
                complète.
              </p>
              <p>
                Comme nous tous plus ou moins consciemment, les ZUMS cherchent
                le
                <span className="bg-gold">tout-un</span>. La façon dont ils y
                arrivent nécessite forcément des idées transcendantes.
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sectionsId.AU_SUJET_DES_PSYCHEDELIQUES}
            header={{
              level: 2,
              content: "Au sujet des psychédéliques",
            }}
          >
            <>
              <p>
                Il existe beaucoup de façons d'entrer dans des états
                psychédéliques. <b>Certaines sont légales, d'autres non</b>.
              </p>
              <p>
                Cet ouvrage cherche à questionner leur emploi, indépendamment de
                leurs spécificités.
              </p>
              <p>
                Le "PSIK" est un terme générique cherchant à saisir cette
                multiplicité de formes, tout en identifiant de façon générique
                le concept de psychoactivité.
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 3,
              content: "La psychoactivité, un mode de vie ?",
            }}
          >
            <>
              <p>
                La psychoactivité, c'est-à-dire : le fait de générer des idées
                en quantité amplifiée et en qualité transformée (par rapport à
                un fantasmé état de sobriété); est un ensemble d'états
                aujourd'hui peu connu et relativement mal perçu.
              </p>
              <p>
                Cependant, les ZUMS ont choisi de vivre cette démarche à fond,
                dans le but d'outrepasser les défis de chaque ERA.
              </p>
              <p>
                Le postulat défendu par l'HIGHBS-BOK est qu'
                <b>avec des idées</b>, on trouve{" "}
                <b>des solutions à tous les problèmes</b> et on peut{" "}
                <b>réaliser les choses les plus folles</b>.
              </p>
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
