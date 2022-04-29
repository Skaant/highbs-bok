import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../styles/global.scss"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { colors } from "../../data/colors"
import { ContentRowWithHeader } from "../components/_rows/ContentRowWithHeader"
import { QuoteRow } from "../components/_rows/QuoteRow"
import { ImageRowPositionAbsolute } from "../components/_rows/ImageRowPositionAbsolute"
import { ExtraitAcheterCTA } from "../components/_ctas/ExtraitAcheterCTA"
import { PAGES } from "../../data/pages"
import MiniRowAbsolute from "../components/_rows/MiniRowAbsolute"
import { EXTRACT_DOWNLOAD_LINK } from "../config"
import Term from "../components/Term"
import { TERMS } from "../../data/terms"
import Character from "../components/Character"
import { CHARACTERS } from "../../data/characters"

const pageId = PAGES.HOME

/** Page d'accueil */
export default function Home() {
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
            <h1 className="col-12 display-1 mb-2">
              <Term term={TERMS.HIGHBS_BOK} />
            </h1>
            <p className="col-12 display-6 text-muted">
              Le livre du motif absolu
            </p>
          </div>
          <ContentRowWithHeader
            header={{
              element: (
                <h2>
                  Jusqu'au <span className="bg-gold px-3">tout-un</span> !
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
                ultime :{" "}
                <b>
                  l'
                  <Term term={TERMS.HIGHBS} />
                </b>
                *.
              </p>
              <p className="small mb-4">
                * Prononcez comme le "high" anglais, suivi de "bs", comme dans
                "abstrait" ou "absolu".
              </p>
              <p>
                Dans cette{" "}
                <b>
                  saga poétique et imagée, lecteur, tu es emmené dans la forêt
                  spatiale des <Term term={TERMS.ZUM} plural={true} />
                </b>
                , une civilisation intelligente très semblable à la nôtre partie
                conquérir l'espace{" "}
                <b>à la recherche des idées les plus hautes perchées</b>.
              </p>
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
              <b>
                Nous te cherchons tous
                <br />à travers le <Term term={TERMS.PSIK} />
              </b>
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
                Après{" "}
                <a href="https://fr.ulule.com/highbs-bok-volume-1/">
                  une campagne de pré-commandes réussie sur Ulule
                </a>
                , le <b>volume 1 est maintenant disponible à la vente</b> via
                Stripe. <b>Différentes options sont disponibles</b> sur la page{" "}
                <a href="/acheter">Acheter un livret</a>.
              </p>
              <p>
                Vous pouvez également télécharger sur ce site{" "}
                <b>un extrait de 5 chapitres (sur 14 !)</b>.
              </p>
              <ExtraitAcheterCTA />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              element: (
                <h2>
                  Les <Term term={TERMS.ZUM} plural={true} /> à la conquête de
                  l'univers
                </h2>
              ),
            }}
            className="pb-4 bg-gold"
          >
            <>
              <p className="mb-4">
                Avec leurs puissants alliés : le <Term term={TERMS.PSIK} />, la
                vie et <Character character={CHARACTERS.GRAND_ARBRE} />,{" "}
                <b>
                  les <Term term={TERMS.ZUM} plural={true} />, cette espèce de
                  singes vraiment brillants,
                </b>{" "}
                sont partis jusqu'aux confins de l'univers.
              </p>
              <p>
                Puis ils sont revenus{" "}
                <b>
                  pour tenter de réaliser l'
                  <Term term={TERMS.HIGHBS} /> et de manifester le{" "}
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
                .
              </p>
              <p>
                La cible de leur désir n'est rien de moins que ...{" "}
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
                  {
                    href: EXTRACT_DOWNLOAD_LINK,
                    color: colors.light,
                    label: "Téléchargez l'extrait",
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
                <b>pour l'ouverture d'esprit "par le haut"</b>.
              </p>
              <p>
                Dans cette histoire, les ZUMS doivent conceptualiser{" "}
                <b>toutes les idées</b> pour espérer <b>dériver l'HIGHBS</b>, le
                motif absolu.
              </p>
              <p>
                Afin de rendre <b>vivant</b> cet ouvrage et le{" "}
                <b>processus de création</b> qui y mène, je tiens un blog où je
                publie <b>des articles sur l'univers et la philosophie</b> de
                l'HIGHBS-BOK.
              </p>
              <ButtonsMenu
                className="mt-5"
                buttons={[
                  {
                    href: "/blog",
                    color: colors.purple,
                    label: "Accéder au blog",
                  },
                  {
                    href: "/acheter",
                    color: colors.light,
                    label: "Acheter le livret",
                  },
                ]}
              />
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
              </p>
              <p>
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
                    color: colors.gold,
                    label: "En savoir plus sur les motivations",
                  },
                  {
                    href: EXTRACT_DOWNLOAD_LINK,
                    color: colors.purple,
                    label: "Téléchargez l'extrait",
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
                Enfin, je publie <b>la première version</b> du volume 1.
              </p>
              <p>
                <b>Pour pouvoir le partager</b>, pas parce que je le pense
                "terminé"<b>: que cette notion n'est pas cours ici.</b>
              </p>
              <p>
                Avec <b>le temps et les retours</b> je souhaite continuer d'en
                améliorer <b>la forme et le sens</b>.
              </p>
              <p>
                Puisse-t'il même être <b>recyclé</b> par d'autres ! C'est
                finalement le but de toutes les idées.
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
