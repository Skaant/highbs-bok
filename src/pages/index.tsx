import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../styles/global.scss"
import { EXTRACT_DOWNLOAD_LINK } from "../config"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { colors } from "../../data/colors"

const ButtonsMenuExtraitAcheter = ({
  goldBackground = false,
}: {
  goldBackground?: boolean
}) => (
  <ButtonsMenu
    className="mt-5"
    buttons={[
      {
        href: EXTRACT_DOWNLOAD_LINK,
        color: goldBackground ? colors.light : colors.gold,
        label: "Téléchargez l'extrait",
      },
      {
        href: "/acheter",
        color: colors.purple,
        label: "Acheter un livret imprimé",
      },
    ]}
  />
)

/** Page d'accueil */
export default function Home({ data }) {
  return (
    <Layout pageId="index">
      <>
        <Header title={"Accueil"} />
        <div className="container-fluid px-0" style={{ minHeight: "100vh" }}>
          <div
            className="position-absolute w-100 full-img-container align-items-center"
            style={{ height: "150vh", marginTop: "calc(10vh - 200px)" }}
          >
            <img
              src="/images/hb-banner.svg"
              className="w-100 cover position-absolute"
              data-parallax-direction="up"
            />
          </div>
          <div className="row spaced pb-5 px-4 text-center align-content-center">
            <h1 className="col-12 display-1">HIGHBS-BOK</h1>
            <p className="col-12 display-6 text-muted">
              Le livre du motif absolu
            </p>
          </div>
          <div className="row p-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-5">
                Jusqu'au <span className="bg-gold">tout-un</span> !
              </h2>
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
            </div>
          </div>
          <div className="row px-4 pb-4">
            <div className="col-10">
              <p className="display-4 text-muted">
                "Entend, horizon de tous les regards !<br />
                <b>Nous te cherchons tous à travers le PSIK</b>
                <br />
                pour te rendre,
                <br />
                conscience harmonieuse,
                <br />à la matière inerte du cosmos."
              </p>
              <p className="small mb-4">
                - Extrait du livret 1, chapitre 7 : <i>Jardins sans fin</i>.
              </p>
            </div>
          </div>
          <div className="row px-4 pt-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h3 className="my-4">Comment se procurer le premier livret ?</h3>
              <p>
                Le <b>premier épisode de l'aventure</b>, le livret 1 de
                l'HIGHBS-BOK : "L'histoire des ZUMS" est déjà disponible{" "}
                <b>à l'achat en version imprimée</b> ou à la lecture en format
                numérique dans <b>l'extrait de 5 chapitres (sur 14 !)</b>.
              </p>
              <ButtonsMenuExtraitAcheter />
            </div>
          </div>
          <div className="row px-4 pb-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-5">Les ZUMS à la conquête de l'univers</h2>
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
            </div>
          </div>
          <div className="row bg-gold p-4">
            <div className="col-10">
              <p className="display-4 text-deep">
                "Il connaît son travail, c’est le même que tous les autres ZUMS
                à travers GRAND-ARBRE :<br />
                Susciter plus d’idées encore !<br />
                Enrichir le HOL-ONG avec toujours plus de données,
                <br />
                dériver les motifs les plus hauts [...]."
              </p>
              <p className="small mb-4">
                - Extrait du livret 1, chapitre 12 : <i>Balthazum</i>.
              </p>
            </div>
          </div>
          <div className="row px-4 pt-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h3 className="my-4">Un manifeste pour les idées</h3>
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
                <b>idéant sur cet univers</b>
                psychédélique ;)
              </p>
              <ButtonsMenuExtraitAcheter goldBackground={true} />
            </div>
          </div>
          <div
            className="position-absolute w-100 full-img-container"
            style={{ height: "180vh", marginTop: "20vh" }}
          >
            <img
              src="/images/hb-droplets.svg"
              className="w-100 cover position-absolute"
              data-parallax-direction="up"
            />
          </div>
          <div className="row px-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2 className="mb-5">Un projet au long cours</h2>
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
                Malgré cela, il reste un ouvrage particulier, à la motivation
                sincère mais peut-être un peu difficile à cerner.
              </p>
              <ButtonsMenu
                className="mt-5"
                buttons={[
                  {
                    href: "/a-propos",
                    color: colors.purple,
                    label: "En savoir plus",
                  },
                ]}
              />
              <h3>Amélioration continue</h3>
              <p>
                Enfin, je publie <b>la première version</b> du premier livret.
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
              <ButtonsMenuExtraitAcheter />
            </div>
          </div>
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
