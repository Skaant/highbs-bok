import React from "react"
import articles from "../../../data/articles"
import { colors } from "../../../data/colors"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import Figure from "../../components/Figure"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import "../../styles/global.scss"

export default function () {
  const { slug, title, date } = articles[2]
  return (
    <Layout pageId={slug}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ContentRowWithHeader className="spaced pb-0 bg-blue">
            <ButtonsMenu
              className="mt-0"
              buttons={[
                {
                  href: "./",
                  label: "Retour aux articles",
                  color: colors.light,
                },
              ]}
            />
          </ContentRowWithHeader>
          <div className="row px-4 pt-5 bg-blue text-light">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="my-0">{title}</h1>
              <p className="mb-6 font-size-initial">
                Publié le {date.split("-").reverse().join("/")}
              </p>
              <p>
                Après plusieurs semaines de communication autour de{" "}
                <a
                  href="https://fr.ulule.com/highbs-bok-volume-1/"
                  className="text-light"
                >
                  la campagne Ulule
                </a>
                , le <b>projet a été validé</b> grâce au soutien de{" "}
                <b>35 contributeurs</b>.
              </p>
              <p>
                L'impression a été lancée, les dédicaces executées et{" "}
                <b>les enveloppes ont été envoyées ou remises</b>.
              </p>
              <p>
                Au total, <b>51 exemplaires ont été distribués</b>. J'ai hâte
                d'avoir les retours de leurs lecteurs !
              </p>
              <Figure
                src="/images/articles/2/enveloppes-contenant-l-highbs-bok.jpg"
                caption={() => (
                  <>
                    J'ai passé plusieurs soirées à faire des dédicaces, écrire
                    des petits mots, répartir les stickers et préparer les
                    enveloppes.
                  </>
                )}
              />
            </div>
          </div>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Et maintenant ?",
            }}
            className="bg-gold"
          >
            <>
              <p>
                Cette campagne m'aura appris, entre autres choses, qu'
                <b>il n'y a pas un moment où le projet est fini</b>.
              </p>
              <p>
                Il a fallu synthétiser mes notes et idées, leur donner forme
                (histoire et illustrations), mobiliser les contributeurs, puis
                les ressources nécessaires, et enfin, réaliser chaque colis
              </p>
              <p>
                Pourtant ça ne s'arrête pas. J'ai très{" "}
                <b>envie d'insuffler la vie dans l'HIGHBS-BOK</b> et pour cela,
                le travail commence !
              </p>
              <p>Pour moi, la suite c'est :</p>
              <ul>
                <li>
                  Continuer à <b>communiquer autour du volume 1</b>,
                </li>
                <li>
                  <b>Fabriquer le volume 2</b> et, pareil, communiquer autour de
                  celui-ci et de son élaboration.
                </li>
              </ul>
              <p>
                Maintenant que l'univers a été posé,{" "}
                <b>j'ai très envie de continuer à le développer</b>. J'ai très
                envie, en fait, de la partager et de vous faire réver avec.
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            className="bg-light"
            header={{
              level: 2,
              content: "Je vous tease sur le volume 2",
            }}
          >
            <>
              <p>
                <b>De quoi parlera l'HIGHBS-BOK volume 2 ?</b> Déjà, il y a de
                fortes chances pour qu'il soit un peu plus gros que le volume 1.
                Mais encore ...
              </p>
              <p>
                En fait, comme les idées principales de l'HIGHBS-BOK ont été
                présentées, il y aura <b>un peu plus d'histoires</b>.{" "}
                <b>Certains concepts haut perchés seront approfondis</b>.
              </p>
              <p>
                Sur le site cela se traduira par l'
                <b>ajout de ces nouvelles pages ou sections de page</b> :
              </p>
              <ul>
                <li>
                  L'univers / <b>Les lieux</b>,
                </li>
                <li>
                  L'univers / <b>Les personnages</b>,
                </li>
                <li>
                  Nouvelles entrées dans L'univers / <b>Glossaire</b> (max. une
                  dizaine promis),
                </li>
              </ul>
              <Figure
                src="/images/articles/2/les-zums-ont-mis-des-kamis-dans-les-choses.jpg"
                caption={() => (
                  <>
                    Dans le volume 2 ont parlera des extraordinairement sages
                    anciens anciens ainsi que des très utiles KAMIS.
                  </>
                )}
              />
              <p>
                On devrait voir apparaître aussi (dans un horizon moyen terme){" "}
                <b>des pages thématiques plus poussées</b> sur les personnages,
                les lieux, les ERAS etc.
              </p>
              <p>
                <b>Stay tuned !</b>
              </p>
              <p>
                Si vous ne vous vous êtes pas encore{" "}
                <b>procuré votre exemplaire</b>, ou que vous souhaitez très
                justement <b>en offrir un à quelqu'un</b>, rendez-vous sur{" "}
                <a href="/acheter">la page Acheter {":)"}</a>
              </p>
              <ExtraitAcheterCTA />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
