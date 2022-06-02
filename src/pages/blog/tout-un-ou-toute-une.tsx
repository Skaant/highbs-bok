import React from "react"
import articles from "../../../data/articles"
import { CHARACTERS } from "../../../data/characters"
import { COLORS } from "../../../data/colors"
import { TERMS } from "../../../data/terms"
import { VOLUMES } from "../../../data/volumes"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import Character from "../../components/Character"
import Figure from "../../components/Figure"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { SectionRow } from "../../components/_rows/SectionRow"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import "../../styles/global.scss"

const TOUT_UNE = {
  id: "tout-une",
  name: "Tout-Une",
  short: 'Féminin d\'un "tout-un mâle".',
  summary:
    "Le Tout-Un est profondément neutre et ne peut tolérer de genre, car cela entrainerait une sortie de son unicité.",
  color: COLORS.GOLD,
  volume: VOLUMES.VOLUME_1, // Bad data
  regular: true,
}

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
          <SectionRow className="spaced pb-0 bg-light_blue" px="px-0">
            <ButtonsMenu
              className="mt-0 px-0"
              buttons={[
                {
                  href: "/blog",
                  label: "Retour aux articles",
                  color: COLORS.LIGHT,
                },
              ]}
            />
          </SectionRow>
          <div className="row px-4 pt-5 bg-light_blue">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="mt-0 mb-3">
                <Character character={CHARACTERS.TOUT_UN} /> ou{" "}
                <Term term={TOUT_UNE} /> ?
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
                  Pourquoi le <Character character={CHARACTERS.TOUT_UN} /> n'
                  <i>est-il</i> pas une <Term term={TOUT_UNE} /> ?
                </b>
              </p>
              <p>
                <b>Résumé</b> : il est en <b>même temps</b> un, une, les deux,
                aucun.
              </p>
              <Figure
                src="/images/articles/3/hol-adin-droplets.jpg"
                caption={() => (
                  <>
                    Une illustration du{" "}
                    <b>
                      <Character character={CHARACTERS.TOUT_UN} /> dans l'
                      <Term term={TERMS.HIGHBS_BOK} />
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
                  <Character character={CHARACTERS.TOUT_UN} />
                </b>
                .
              </p>
            </div>
          </div>
          <SectionRow
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
                <Character character={CHARACTERS.TOUT_UN} />.
              </p>
              <p>
                Mais <b>que peut-on dire de lui qu'il ne soit et ne soit pas</b>{" "}
                simultanément ?
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "Du coup, il a un kiki ?",
            }}
            className="bg-light_gold"
          >
            <>
              <p>
                Bref,{" "}
                <b>
                  féminin et masculin se dissipe dans le{" "}
                  <Character character={CHARACTERS.TOUT_UN} />
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
                  je l'avais appelé <Term term={TERMS.HOL_ADIN} />
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
                  <Character character={CHARACTERS.TOUT_UN} />
                </i>{" "}
                avec, de fait, sa <b>connotation masculine</b>.
              </p>
              <Figure
                src="/images/articles/3/comment-tout-devint-adin.jpg"
                caption={() => (
                  <>
                    <b>Extrait d'un storyboard</b> de l'
                    <Term term={TERMS.HIGHBS_BOK} /> réalisé en 2018
                    représentant le <Term term={TERMS.HOL_ADIN} />.
                    <br />
                    On y voit la <b>convergence de trois idées</b> (
                    <Term term={TERMS.DATA} />) dans le tout-un.
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
                  Le <Character character={CHARACTERS.TOUT_UN} /> n'est pas{" "}
                  <b>un vieux monsieur surpuissant</b>.
                </li>
                <li>
                  <b>
                    C'est une idée, passive, qui attend d'être eue pour exister.
                  </b>
                </li>
                <li>
                  Le <Character character={CHARACTERS.TOUT_UN} /> n'est pas un{" "}
                  <i>mâle</i>.<br />
                  Il n'est pas <i>il</i>.<br />
                  D'ailleurs, <b>il n'est pas, en même temps qu'il est</b>.
                </li>
              </ul>
            </>
          </SectionRow>
          <SectionRow className="bg-turquoize">
            <>
              <h2>
                Bonus: <Term term={TERMS.HOL_ADIN} /> ? Un rapport avec le{" "}
                <Term term={TERMS.HOL_ONG} outline={true} /> ?
              </h2>
              <p>
                Depuis le grec, <i>hol-</i> est une racine pour dire{" "}
                <b>la totalité</b> (holistique, holon, holocène).
              </p>
              <p>
                <b>
                  <Term term={TERMS.HOL_ONG} outline={true} /> signifie
                  littéralement <i>toutes les consciences</i>.
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
                dans le <Term term={TERMS.HOL_ADIN} /> ...
              </p>
              <p>
                Le <Term term={TERMS.HOL_ADIN} />, donc, c'est{" "}
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
                    <b>
                      l'
                      <Term term={TERMS.HIGHBS} />, l'idée ultime
                    </b>
                    .<br />
                    C'est elle qui permet de faire{" "}
                    <b>se rejoindre les parties</b> dans le{" "}
                    <Character character={CHARACTERS.TOUT_UN} />.
                  </>
                )}
              />
            </>
          </SectionRow>
          <SectionRow
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
                  <Character character={CHARACTERS.TOUT_UN} outline={true} /> en
                  vous procurant un exemplaire de l'
                  <Term term={TERMS.HIGHBS_BOK} /> volume 1
                </b>{" "}
                !
              </p>
              <ExtraitAcheterCTA secondaryBtnColor={COLORS.LIGHT} />
              <p>À bientôt !</p>
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
