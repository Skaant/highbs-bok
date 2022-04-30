import React from "react"
import articles from "../../../data/articles"
import { COLORS } from "../../../data/colors"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import "../../styles/global.scss"

export default function () {
  const { slug, title, date } = articles[1]
  return (
    <Layout pageId={slug} navbarAlternativeColor={true}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ContentRowWithHeader className="col-12 col-md-10 col-lg-8 col-xl-6 spaced pb-0 bg-purple">
            <ButtonsMenu
              className="mt-0"
              buttons={[
                {
                  href: "/blog",
                  label: "Retour aux articles",
                  color: COLORS.LIGHT,
                },
              ]}
            />
          </ContentRowWithHeader>
          <div className="row px-4 bg-purple text-light">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="my-0">{title}</h1>
              <p className="mb-6 font-size-initial">
                Publié le {date.split("-").reverse().join("/")}
              </p>
              <p>
                Pour sortir de ses problèmes, il n'y a qu'une seule solution :{" "}
                <strong>avoir des idées</strong>.
              </p>
              <figure>
                <img src="/images/articles/1/symbole-psik.jpg" />
                <figcaption>
                  La lettre Psi, symbole du PSIK dans l'HIGHBS-BOK. La couleur
                  violette vif y est associée.
                </figcaption>
              </figure>
            </div>
          </div>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "L'action d'avoir de nouvelles idées",
            }}
            className="bg-white"
          >
            <>
              <p>
                Avec des idées, et les actions nécessaires à leur
                <strong>matérialisation</strong>, on peut tout résoudre : la
                faim, la pauvreté, la crise environnementale, la violence ou
                encore la dépression.
              </p>
              <p>
                <strong>
                  Alors pourquoi ne met-on pas en valeur l'action d'avoir de
                  nouvelles idées ?
                </strong>
              </p>
              <figure>
                <img src="/images/articles/1/perspectives-de-l'expans-era.jpg" />
                <figcaption>
                  Perspective de la structure de GRAND-ARBRE pendant
                  l'EXPANS-ERA. Les ZUMS peuvent observer les couloirs et les
                  noeuds dans lesquels brillent de petits soleils.
                </figcaption>
              </figure>
              <p>
                On est formé à apprendre et à restituer, mais moins à
                <strong>créer des associations d'idées transverses</strong>.
                <br />
                Pourtant les bonnes vieilles recettes ont leurs limites.
              </p>
              <p>
                Les ZUMS, les protagonistes de l'HIGHBS-BOK, l'ont bien compris
                ...
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Pourquoi les ZUMS utilisent du PSIK ?",
            }}
            className="bg-purple text-light"
          >
            <>
              <p>
                Les ZUMS vouent désormais un culte au PSIK : l'ensemble des
                pratiques et matériaux qui{" "}
                <strong>diversifient, sinon multiplient,</strong> les idées
                qu'un individu peut générer.
              </p>
              <p>
                Que se passerait-il si l'on favorisait la création d'encore plus
                d'idées ?<br />
                Plus qualitatives et diversifiées ?
              </p>
              <p>
                Grâce au PSIK, les ZUMS ont abandonné le fatalisme et abordent
                maintenant les défis de leur époque avec{" "}
                <strong>optimisme et créativité</strong>.
              </p>
              <p>
                <strong>
                  Posez-vous de nombreuses questions et générez des idées encore
                  plus belles en lisant l'HIGHBS-BOK volume 1.
                </strong>
              </p>
              <p>
                Pré-commandes sur Ulule :{" "}
                <a
                  href="https://fr.ulule.com/highbs-bok-volume-1/"
                  className="text-info"
                >
                  https://fr.ulule.com/highbs-bok-volume-1/
                </a>
                <br />
                Vous avez jusqu'au 26 Décembre !
              </p>
              <figure>
                <img src="/images/articles/1/zums-consommant-du-psik.jpg" />
                <figcaption>
                  Un ZUM en train de se servir d'un appareil à vaporiser le
                  PSIK.
                </figcaption>
              </figure>
              <ExtraitAcheterCTA
                primaryBtnColor={COLORS.GOLD}
                secondaryBtnColor={COLORS.LIGHT}
              />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
