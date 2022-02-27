import React from "react"
import articles from "../../../data/articles"
import { colors } from "../../../data/colors"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import Figure from "../../components/Figure"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import "../../styles/global.scss"

export default function () {
  const { slug, title, date, description, tags } = articles[3]
  return (
    <Layout pageId={slug}>
      <>
        <Header
          title={title}
          metas={[
            {
              name: "description",
              content: description,
            },
            {
              name: "tags",
              content: tags.join(","),
            },
          ]}
        />
        <div className="container-fluid px-0">
          <ContentRowWithHeader className="spaced pb-0 bg-lightBlue" px="px-0">
            <ButtonsMenu
              className="mt-0 px-0"
              buttons={[
                {
                  href: "./",
                  label: "Retour aux articles",
                  color: colors.light,
                },
              ]}
            />
          </ContentRowWithHeader>
          <div className="row px-4 pt-5 bg-lightBlue">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="my-0">
                <span className="bg-gold">Tout-un</span> ou{" "}
                <span className="bg-gold">tout-une</span> ?
              </h1>
              <p className="mb-6 font-size-initial">
                Publié le {date.split("-").reverse().join("/")}
                {" · "}
                {tags.length > 0 &&
                  tags.map(tag => (
                    <span
                      key={tag}
                      className={`badge rounded-pill ${
                        tag === "tout-un" || tag === "hol-adin"
                          ? "bg-gold text-dark"
                          : "bg-purple"
                      } mx-1`}
                    >
                      {tag}
                    </span>
                  ))}
              </p>
              <p>
                C'est une question qui m'a été posée avec le plus grand sérieux.
              </p>
              <p>
                <b>
                  Pourquoi le <span className="bg-gold">tout-un</span> n'est-il
                  pas une <span className="bg-gold">tout-une</span> ?
                </b>
              </p>
              <p>
                Résumé : il est en <b>même temps</b> un, une, les deux, aucun.
              </p>
              <Figure
                src="/images/articles/3/hol-adin-droplets.jpg"
                caption={() => (
                  <>
                    Une illustration du{" "}
                    <b>
                      <span className="bg-gold">tout-un</span> dans l'HIGHBS-BOK
                    </b>
                    .
                    <br />
                    Consultable dans{" "}
                    <a href={EXTRACT_DOWNLOAD_LINK}>
                      l'extrait gratuit du volume 1
                    </a>
                    .
                  </>
                )}
              />
              <p>
                Pour moi, <b>ça paraissait normal</b>, presque évident.
                <br />
                Pourtant non.
              </p>
              <p>
                Expliquer rapidement ce sujet permet aussi de s'intéresser à{" "}
                <i>l'apparente hiérarchie des motifs</i>, et surtout de{" "}
                <b>
                  commencer à effleurer la nature du{" "}
                  <span className="bg-gold">tout-un</span>
                </b>
                .
              </p>
            </div>
          </div>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Celui qui n'a pas d'attribut",
            }}
            className="bg-purple text-light"
          >
            <>
              <p>
                Lorsqu'on remonte <i>tout en haut des idées</i>, il ne reste que{" "}
                <b>l'un, l'autre et le tout formé par les deux</b>.
              </p>
              <Figure
                src="/images/articles/3/triple-deux-un.jpg"
                caption={() => (
                  <>
                    Les deux forment un triplé.
                    <br />
                    Une fois résorbée la dualité,{" "}
                    <b>on ne peut plus rien dire que le un ne soit pas</b>.
                  </>
                )}
              />
              <p>
                Les deux peuvent tourner autour sans jamais se connaître (qui
                peut <i>connaître</i> l'autre ?) ni se superposer.
              </p>
              <p className="display-4 my-5">
                C'est le vrai et le faux,
                <br />
                Le beau et le laid,
                <br />
                Le bien et le mal.
              </p>
              <p>
                Et au-dessus il y a ce qui <b>ne peut être nommé</b>:{" "}
                <b>celui qui n'a pas d'attribut</b>.
              </p>
              <p>
                Par dépit/défaut, je l'appelle{" "}
                <span className="bg-gold text-dark">tout-un</span>.
              </p>
              <p>
                Mais <b>que peut-on dire de lui qu'il ne soit et ne soit pas</b>{" "}
                simultanément ?
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Du coup, il a un kiki ?",
            }}
            className="bg-lightGold"
          >
            <>
              <p>
                Bref,{" "}
                <b>
                  féminin et masculin se dissipe dans le{" "}
                  <span className="bg-gold">tout-un</span>
                </b>{" "}
                puisqu'il est l'un, l'autre, les deux et ni l'un ni l'autre.
              </p>
              <p>
                Au début, pour jouer sur{" "}
                <a href="/l-univers/glossaire">
                  <i>ces termes qui réinitialisent les mots</i>
                </a>
                ,{" "}
                <b>
                  je l'avais appelé <span className="bg-gold">HOL-ADIN</span>
                </b>
                .
              </p>
              <p>
                Toutefois, les premiers retours de lecture m'ont fait craindre
                que <b>trop de glossaire puisse créer une expérience pénible</b>
                .
              </p>
              <p>
                Je l'ai donc traduit comme{" "}
                <i>
                  {" "}
                  <span className="bg-gold">tout-un</span>
                </i>{" "}
                avec, de fait, sa <b>connotation masculine</b>.
              </p>
              <Figure
                src="/images/articles/3/comment-tout-devint-adin.jpg"
                caption={() => (
                  <>
                    <b>Extrait d'un storyboard</b> de l'HIGHBS-BOK réalisé en
                    2018 représentant le{" "}
                    <span className="bg-gold">HOL-ADIN</span>.
                    <br />
                    On y voit la <b>convergence de trois idées</b> (DATA) dans
                    le tout-un.
                  </>
                )}
              />
              <p>
                Conscient qu'il y a une ambiguïté que seule une nouvelle version
                du volume 1 pourrait adresser,{" "}
                <b>laissez-moi quand même éclaircir quelques points</b> ici :
              </p>
              <ul>
                <li>
                  Le <span className="bg-gold">tout-un</span> n'est pas{" "}
                  <b>un vieux monsieur surpuissant</b>.
                </li>
                <li>
                  <b>
                    C'est une idée, passive, qui attend d'être eue pour exister.
                  </b>
                </li>
                <li>
                  Le <span className="bg-gold">tout-un</span> n'est pas un{" "}
                  <i>mâle</i>.<br />
                  Il n'est pas <i>il</i>.<br />
                  D'ailleurs, <b>il n'est pas, en même temps qu'il est</b>.
                </li>
              </ul>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Bonus: HOL-ADIN ? Un rapport avec le HOL-ONG ?",
            }}
            className="bg-turquoize"
          >
            <>
              <p>
                Depuis le grec, <i>hol-</i> est une racine pour dire{" "}
                <b>la totalité</b> (holistique, holon, holocène).
              </p>
              <p>
                <b>
                  HOL-ONG signifie littéralement <i>toutes les consciences</i>.
                </b>
              </p>
              <p>
                C'est{" "}
                <b>le réseau où les consciences intéragissent entre elles</b>{" "}
                pour <i>former un tout plus grand que la somme des parties.</i>
              </p>
              <p>
                De son côté, <i>adin</i> veut dire simplement <b>un</b> en
                russe.
              </p>
              <p>
                Ce mot a aussi la sonorité "dine" des noms arabes en rapport
                avec la religion, car il y a <b>quelque chose de (sur-)divin</b>{" "}
                dans le <span className="bg-gold">HOL-ADIN</span> ...
              </p>
              <p>
                Le <span className="bg-gold">HOL-ADIN</span>, donc, c'est{" "}
                <b>quand tout, tout, ne forme plus qu'un.</b>
              </p>
              <p>
                Que <b>plus rien ne lui extérieur</b>.
              </p>
              <p className="display-4 my-5">
                Pouvez-vous conceptualiser cela ?
              </p>
              <Figure
                src="/images/articles/3/highbs-bok-banner.jpg"
                caption={() => (
                  <>
                    Baignée dans un rayon de lumière,
                    <b>l'HIGHBS, l'idée ultime</b>.<br />
                    C'est elle qui permet de faire{" "}
                    <b>se rejoindre les parties</b> dans le{" "}
                    <span className="bg-gold">tout-un</span>.
                  </>
                )}
              />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Prêt(s) à franchir le pas ?",
            }}
            className="bg-gold"
          >
            <>
              <p>
                Tentez vous aussi de{" "}
                <b>
                  vous approcher de la nature parfaite du{" "}
                  <span className="bg-gold">tout-un</span> en vous procurant un
                  exemplaire de l'HIGHBS-BOK volume 1
                </b>{" "}
                !
              </p>
              <ExtraitAcheterCTA secondaryBtnColor={colors.light} />
              <p>À bientôt !</p>
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
