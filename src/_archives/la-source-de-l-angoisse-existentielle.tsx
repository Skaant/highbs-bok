import React from "react"
import articles from "../../data/articles"
import { COLORS } from "../../data/colors"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import { ExtraitAcheterCTA } from "../components/_ctas/ExtraitAcheterCTA"
import { SectionRow } from "../components/_rows/SectionRow"
import "../../styles/global.scss"

export default function () {
  const { slug, title, date } = articles[4]
  return (
    <Layout pageId={slug}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <SectionRow className="col-12 col-md-10 col-lg-8 col-xl-6 spaced pb-0">
            <ButtonsMenu
              className="mt-0"
              buttons={[
                {
                  href: "/blog",
                  label: "Retour aux articles",
                  color: COLORS.PURPLE,
                },
              ]}
            />
          </SectionRow>
          <div className="row px-4 bg-white">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="my-0">{title}</h1>
              <p className="mb-6 font-size-initial">
                Publié le {date.split("-").reverse().join("/")}
              </p>
              <p>
                Qu'est-ce qui nous <b>met en mouvement</b> ?
              </p>
              <p>L'inconfort.</p>
              <p>Quel est la plus grand source d'inconfort ?</p>
              <p>
                <b>Notre mort ?</b>
              </p>
              <p>
                Non, <b>la fin de toutes choses</b>.
              </p>
            </div>
          </div>
          <SectionRow
            header={{
              level: 2,
              content: "Un problème de taille",
            }}
            className="bg-gold"
          >
            <>
              <p>
                Avez-vous bien en tête que, quoi que vous fassiez de grandiose,
                vous allez un jour disparaître ?
              </p>
              <p>
                D'abord physiquement, puis la trace de vous dans l'inconscient
                collectif.
              </p>
              <p>
                C'est parce que nous sommes des agrégats chancelants et
                imparfaits :
              </p>
              <p>
                <b>Des étapes, des outils</b>, pas dingue mais fait l'affaire
                dans le contexte.
                <i>Donc parfaits finalement ?</i>
              </p>
              <p>Notre fin arrive inexorablement.</p>
              <p>Cela doit-il nous boulverser outre mesure ?</p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 3,
              content: "Est-ce-que c'est évitable ?",
            }}
            className="bg-gold"
          >
            <>
              <p>Encore une fois, ce n'est pas la bonne question je pense.</p>
              <p>
                Quand on prend du recul, ou au contraire qu'on regarde de près
                l'inexistante frontière du "moi", on voit bien que ceci est le
                roulement d'un grand tout.
              </p>
              <p>
                À partir de là, pourquoi s'accrocher à ce moi plus qu'à son
                environnement, qu'aux autres qui ne sont que les reflets d'une
                même entité.
              </p>
              <p>
                Voilà pourquoi, au lieu de chercher à échapper à ce à quoi
                personne n'échappe ferions-nous mieux de chercher tout de suite{" "}
                <b>le chemin en nous vers cet être suprème et immortel</b>
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "La fin de toutes choses",
            }}
          >
            <>
              <p></p>
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
