import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../styles/global.scss"
import { EXTRACT_DOWNLOAD_LINK } from "../config"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { colors } from "../../data/colors"
import { ContentRowWithHeader } from "../components/_rows/ContentRowWithHeader"
import { QuoteRow } from "../components/_rows/QuoteRow"
import { ImageRowPositionAbsolute } from "../components/_rows/ImageRowPositionAbsolute"
import { ExtraitAcheterCTA } from "../components/_ctas/ExtraitAcheterCTA"
import { pages } from "../../data/pages"
import MiniRowAbsolute from "../components/_rows/MiniRowAbsolute"

const pageId = pages.HOME

/** Page d'accueil */
export default function Home({ data }) {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={"Accueil"} />
        <div className="container-fluid px-0" style={{ minHeight: "100vh" }}>
          <ImageRowPositionAbsolute
            src="/images/hb-banner.svg"
            style={{ height: "150vh", marginTop: "calc(10vh - 400px)" }}
          />
          <div className="row spaced pb-5 px-4 text-center align-content-center">
            <h1 className="col-12 display-1 mb-2">HIGHBS-BOK</h1>
            <p className="col-12 display-6 text-muted">
              Le livre du motif absolu
            </p>
          </div>
          <ContentRowWithHeader
            header={{
              element: (
                <h2>
                  Jusqu'au <span className="bg-gold">tout-un</span> !
                </h2>
              ),
            }}
            className="py-4"
          >
            <>
              <p className="mt-4 mb-2">
                Une{" "}
                <b>
                  histoire de science-fiction ésotérique et sincèrement utopiste
                </b>{" "}
                pour tenter de conceptualiser l'abstraction absolue, le motif
                ultime : <b>l'HIGHBS</b>*.
              </p>
              <p className="small mb-4">
                * Prononcez comme le "high" anglais, suivi de "bs", comme dans
                "abstrait" ou "absolu".
              </p>
              <p>
                Dans cette{" "}
                <b>
                  saga poétique et imagée, lecteur, tu es emmené dans la forêt
                  spatiale des ZUMS
                </b>
                , une civilisation intelligente très semblable à la nôtre partie
                conquérir l'espace{" "}
                <b>à la recherche des idées les plus hautes perchées</b>.
              </p>
              <ButtonsMenu
                className="mt-5"
                buttons={[
                  {
                    href: process.env.ULULE_VOL1_URL,
                    color: colors.purple,
                    label: "En ce moment, en pré-commande sur Ulule",
                  },
                ]}
              />
            </>
          </ContentRowWithHeader>
          <QuoteRow
            legend={
              <>
                - Extrait du livret 1, chapitre 7 : <i>Jardins sans fin</i>.
              </>
            }
          >
            <>
              "Entend, horizon de tous les regards !<br />
              <b>Nous te cherchons tous à travers le PSIK</b>
              <br />
              pour te rendre,
              <br />
              conscience harmonieuse,
              <br />à la matière inerte du cosmos."
            </>
          </QuoteRow>
          <MiniRowAbsolute id="psik" justify="right" />
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Comment se procurer le premier livret ?",
            }}
            className="pt-4"
          >
            <>
              <p>
                Le <b>premier épisode de l'aventure</b>, le volume 1 de
                l'HIGHBS-BOK : L'histoire des ZUMS, est maintenant disponible{" "}
                <b>en pré-commande sur Ulule</b>.
              </p>
              <p>
                Vous pouvez également télécharger sur ce site
                <b>un extrait de 5 chapitres (sur 14 !)</b>.
              </p>
              <ExtraitAcheterCTA />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Les ZUMS à la conquête de l'univers",
            }}
            className="pb-4 bg-gold"
          >
            <>
              <p className="mb-4">
                Avec leurs puissants alliés : le PSIK, la vie et GRAND-ARBRE ,{" "}
                <b>les ZUMS, cette espèce de singes vraiment brillants,</b> sont
                partis jusqu'aux confins de l'univers, et sont revenus{" "}
                <b>
                  pour tenter de réaliser l'HIGHBS et de manifester le{" "}
                  <span className="bg-gold">tout-un</span>
                </b>
                .
              </p>
              <p className="mb-4">
                Les ZUMS, conscients de la destruction imminente de leur monde,
                ont commencé à{" "}
                <b>
                  susciter des idées pour s'extraire du douloureux cycle des
                  naissances et des morts
                </b>
                . La cible de leur désir n'est rien de moins que ...{" "}
                <b>se fixer dans une posture d'éternelle harmonie !</b>
              </p>
              <p>
                Dans cette quête insensée, leur imagination débridée par{" "}
                <b>le pouvoir abstrayant du PSIK</b> sera la clé de leur
                salvation !
              </p>
              <ButtonsMenu
                className="mt-5"
                buttons={[
                  {
                    href: "/l-univers",
                    color: colors.purple,
                    label: "Découvrez l'univers des ZUMS",
                  },
                ]}
              />
            </>
          </ContentRowWithHeader>
          <QuoteRow
            background={colors.gold}
            legend={
              <>
                - Extrait du livret 1, chapitre 12 : <i>Balthazum</i>.
              </>
            }
          >
            <>
              "Il connaît son travail, c’est le même que tous les autres ZUMS à
              travers GRAND-ARBRE :<br />
              Susciter plus d’idées encore !<br />
              Enrichir le HOL-ONG avec toujours plus de données,
              <br />
              dériver les motifs les plus hauts [...]."
            </>
          </QuoteRow>
          <ContentRowWithHeader
            header={{
              level: 3,
              content: "Un manifeste pour les idées",
            }}
            className="pt-4 bg-gold"
          >
            <>
              <p>
                Le monde de l'imagination est <b>sans limite</b>, il est{" "}
                <b>sans commencement ni fin</b> !{" "}
                <b>Alors pourquoi vouloir l'enfermer ?</b>
              </p>
              <p>
                L'HIGHBS-BOK est un manifeste{" "}
                <b>pour l'ouverture d'esprit "par le haut"</b>. Dans cette
                histoire, les ZUMS doivent conceptualiser{" "}
                <b>toutes les idées</b> pour espérer <b>dériver l'HIGHBS</b>, le
                motif absolu.
              </p>
              <p>
                <b>Vous pourriez y contribuer</b> aussi en{" "}
                <b>idéant sur cet univers</b> psychédélique ;)
              </p>
              <ExtraitAcheterCTA primaryBtnColor={colors.light} />
            </>
          </ContentRowWithHeader>
          <ImageRowPositionAbsolute
            src="/images/hb-droplets.svg"
            style={{ height: "180vh", marginTop: "20vh" }}
          />
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Un projet au long cours",
            }}
            className="pb-4"
          >
            <>
              <p>
                L'écriture de l'HIGHBS-BOK a commencé il y a plusieurs années.
                Synthétisant{" "}
                <b>
                  des bribes de textes philosophiques et spirituels, ainsi que
                  des idées écologiques et futuristes
                </b>
                , j'ai tenté d'affiner sa forme avec le temps.
              </p>
              <p className="mb-0">
                Malgré cela, il reste un ouvrage particulier, aux motivations
                sincères mais peut-être un peu difficiles à cerner.
              </p>
              <ButtonsMenu
                className="mt-5"
                buttons={[
                  {
                    href: "/a-propos",
                    color: colors.purple,
                    label: "En savoir plus sur les motivations",
                  },
                ]}
              />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 3,
              content: "Amélioration continue",
            }}
            className="pt-4"
          >
            <>
              <p>
                Enfin, je publie <b>la première version</b> du premier livret.{" "}
                <b>Pour pouvoir le partager</b>, pas parce que je le pense
                "terminé". <b>Que cette notion n'est pas cours ici ...</b>
              </p>
              <p>
                Avec <b>le temps et les retours</b> je souhaite continuer d'en
                améliorer <b>la forme et le sens</b>. Puisse-t'il même être{" "}
                <b>recyclé</b> par d'autres ! C'est finalement le but de toutes
                les idées.
              </p>
              <p>
                Mais maintenant mon but est bien de pouvoir montrer
                l'HIGHBS-BOK,{" "}
                <b>de pouvoir le faire lire et d'obtenir un feedback</b>,
                bienvenu, dessus.
              </p>
              <p>
                Donc, bonne lecture et <b>bonne aventure :D</b>.
              </p>
              <ExtraitAcheterCTA />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
