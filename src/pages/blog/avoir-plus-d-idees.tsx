import React from "react"
import ARTICLES_ELEMENTS from "../../../data/articles.components"
import articles from "../../../data/articles"
import { CHARACTERS } from "../../../data/characters"
import { COLORS } from "../../../data/colors"
import { ERAS } from "../../../data/eras"
import { TERMS } from "../../../data/terms"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import Character from "../../components/Character"
import Era from "../../components/Era"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { SectionRow } from "../../components/_rows/SectionRow"
import "../../styles/global.scss"
import Place from "../../components/Place"
import { PLACES } from "../../../data/places"

const INDEX = 1

export default function () {
  const { slug, title, date } = articles[INDEX]
  return (
    <Layout pageId={slug} navbarAlternativeColor={true}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <SectionRow className="col-12 col-md-10 col-lg-8 col-xl-6 spaced pb-0 bg-purple">
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
          </SectionRow>
          <div className="row px-4 bg-purple text-light">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="my-0">
                {ARTICLES_ELEMENTS[INDEX].title || title}
              </h1>
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
                  La lettre Psi, symbole du{" "}
                  <Term term={TERMS.PSIK} outline={true} /> dans l'{" "}
                  <Term term={TERMS.HIGHBS_BOK} />. La couleur violette vif y
                  est associée.
                </figcaption>
              </figure>
            </div>
          </div>
          <SectionRow
            header={{
              level: 2,
              content: "L'action d'avoir de nouvelles idées",
            }}
            className="bg-white"
          >
            <>
              <p>
                Avec des idées, et les actions nécessaires à leur{" "}
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
                  Perspective de la structure de{" "}
                  <Place place={PLACES.GRAND_ARBRE} /> pendant l'
                  <Era era={ERAS.EXPANS_ERA} />. Les{" "}
                  <Term term={TERMS.ZUM} plural={true} /> peuvent observer les
                  couloirs et les noeuds dans lesquels brillent de petits
                  soleils.
                </figcaption>
              </figure>
              <p>
                On est formé à apprendre et à restituer, mais moins à
                <strong>créer des associations d'idées transverses</strong>.
                <br />
                Pourtant les bonnes vieilles recettes ont leurs limites.
              </p>
              <p>
                Les <Term term={TERMS.ZUM} plural={true} />, les protagonistes
                de l' <Term term={TERMS.HIGHBS_BOK} />, l'ont bien compris ...
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              element: (
                <h2>
                  Pourquoi les <Term term={TERMS.ZUM} plural={true} /> utilisent
                  du <Term term={TERMS.PSIK} outline={true} /> ?
                </h2>
              ),
            }}
            className="bg-purple text-light"
          >
            <>
              <p>
                Les <Term term={TERMS.ZUM} plural={true} /> vouent désormais un
                culte au <Term term={TERMS.PSIK} outline={true} /> : l'ensemble
                des pratiques et matériaux qui{" "}
                <strong>diversifient, sinon multiplient,</strong> les idées
                qu'un individu peut générer.
              </p>
              <p>
                Que se passerait-il si l'on favorisait la création d'encore plus
                d'idées ?<br />
                Plus qualitatives et diversifiées ?
              </p>
              <figure>
                <img src="/images/articles/1/zums-consommant-du-psik.jpg" />
                <figcaption>
                  Un ZUM en train de se servir d'un appareil à vaporiser le
                  PSIK.
                </figcaption>
              </figure>
              <p>
                Grâce au <Term term={TERMS.PSIK} outline={true} />, les{" "}
                <Term term={TERMS.ZUM} plural={true} /> ont abandonné le
                fatalisme et abordent maintenant les défis de leur époque avec{" "}
                <strong>optimisme et créativité</strong>.
              </p>
              <ExtraitAcheterCTA
                primaryBtnColor={COLORS.GOLD}
                secondaryBtnColor={COLORS.LIGHT}
              />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
