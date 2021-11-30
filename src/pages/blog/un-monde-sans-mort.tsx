import React from "react"
import articles from "../../../data/articles"
import { colors } from "../../../data/colors"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import "../../styles/global.scss"

export default function () {
  const { slug, title, date } = articles[0]
  return (
    <Layout pageId={slug}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ContentRowWithHeader className="col-12 col-md-10 col-lg-8 col-xl-6 spaced pb-0">
            <ButtonsMenu
              className="mt-0"
              buttons={[
                {
                  href: "./",
                  label: "Retour aux articles",
                  color: colors.purple,
                },
              ]}
            />
          </ContentRowWithHeader>
          <div className="row px-4 bg-white">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="my-0">{title}</h1>
              <p className="mb-6 font-size-initial">
                Publié le {date.split("-").reverse().join("/")}
              </p>
              <p>
                Les ZUMS étaient comme nous avant ...
                <br />
                Mais un évènement mystérieux leur a fait prendre{" "}
                <strong>
                  conscience de leur appartenance à la vie et à l'univers
                </strong>
                .
              </p>
              <p>
                À partir de là, ils ont créé un{" "}
                <strong>réseau de conscience collective</strong> auquel toutes
                les créatures vivantes sont connectées et grâce auquel elles
                peuvent toutes se parler.
              </p>
              <figure>
                <img src="/images/articles/0/zums-connectes-au-hol-ong.png" />
                <figcaption>
                  On peut explorer les souvenirs des autres, et tout ceux jamais
                  eu ... Suffit d'être patient.
                </figcaption>
              </figure>
              <p>
                Pour accompagner leur désir de croissance, ils ont aussi{" "}
                <strong>
                  désintégré leur planète pour en faire une forêt spatiale
                </strong>
                . Et de là, ils sont partis conquérir tout l&#x27;univers.
              </p>
            </div>
          </div>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Une société bienveillante",
            }}
            className="bg-gold"
          >
            <>
              <p>Imaginez une environnement où :</p>
              <ul>
                <li>Vos besoins sont comblés instantanément,</li>
                <li>
                  Vous pouvez{" "}
                  <strong>accéder aux souvenirs de chaque individu</strong> et
                  bénéficier de leur expérience,
                </li>
                <li>
                  <strong>Vous ne mourrez pas</strong> et votre conscience est
                  ré-intégrée dans le réseaux lors de la disparition de votre
                  enveloppe physique.
                </li>
              </ul>
              <p>
                Dans la société des ZUMS, on a plus faim et on est pas triste.
              </p>
              <figure>
                <img src="/images/articles/0/sketch-zum-data-et-ongs.png" />
                <figcaption>
                  Chez les ZUMS, l'activité principale est la création d'idées
                  pour enrichir le HOL-ONG, le réseau de conscience collective.
                </figcaption>
              </figure>
              <p>
                Si on a un problème,{" "}
                <strong>on génère de nouvelles idées</strong> sans chercher de
                coupables. Et on a{" "}
                <strong>pas besoin de se battre pour exister</strong>.
              </p>
              <p>Ça donne envie, non ?</p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Une ombre au tableau",
            }}
          >
            <>
              <p>
                Pourtant <strong>les ZUMS ont un problème de taille</strong> :
                Au prochain cycle de ré-engendrement de l&#x27;univers,
                <strong> ils risquent de disparaître</strong>.
              </p>
              <p>
                C&#x27;est pourquoi ils cherchent activement{" "}
                <strong>le tout-un</strong>, l&#x27;être unique,
                l&#x27;éternelle harmonie.
              </p>
              <p>Vont-ils réussir ?</p>
              <p>
                C&#x27;est tout le sujet de l&#x27;HIGHBS-BOK, mon livre de
                science-fiction utopiste et ésotérique, dont{" "}
                <strong>le premier volume est en pré-vente sur Ulule</strong> :{" "}
                <a href="https://fr.ulule.com/highbs-bok-volume-1/">
                  https://fr.ulule.com/highbs-bok-volume-1/
                </a>
              </p>
              <p>
                J&#x27;ai envie de{" "}
                <strong>partager cette aventure spatiale</strong> avec tous ceux
                qu&#x27;elle pourrait intéresser :)
              </p>
              <figure>
                <img src="/images/articles/0/zums-avec-hologrammes.png" />
                <figcaption>
                  Les interfaces ZUMS sont de plus en plus proche du langage
                  conceptuel.
                </figcaption>
              </figure>
              <p>
                Si le projet vous plaît,{" "}
                <strong>
                  vous pouvez vous procurer un (ou des) exemplaire(s)
                </strong>{" "}
                et partager cette page ou lien de la campagne Ulule. Ça
                m&#x27;aiderait beaucoup !{" "}
              </p>
              <ExtraitAcheterCTA />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
