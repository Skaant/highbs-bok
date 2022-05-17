import React from "react"
import { CHARACTERS } from "../../../data/characters"
import { COLORS, COLORS_DATA } from "../../../data/colors"
import { ERAS, ERAS_DATA } from "../../../data/eras"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { PLACES } from "../../../data/places"
import { TERMS } from "../../../data/terms"
import Character from "../../components/Character"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Place from "../../components/Place"
import Term from "../../components/Term"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import EraRow from "../../components/_pages/sept-eras/EraRow"
import ErasList from "../../components/_pages/sept-eras/ErasList"
import { SectionRow } from "../../components/_rows/SectionRow"
import "../../styles/global.scss"

const pageId = PAGES.L_UNIVERS_ERAS

export default function SeptEras() {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={PAGES_DATA[pageId].title} />
        <div className="container-fluid px-0">
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>
                Les sept <Term term={TERMS.ERA} plural={true} /> de l'histoire
                des <Term term={TERMS.ZUM} plural={true} />
              </h1>
              <p className="lead mb-5">
                Une épopée qui s'étend jusqu'à l'infini, et revient.
              </p>
              <p>
                Vous suivez le narrateur dans son exploration de toutes les
                époques marquantes de l'histoire des{" "}
                <Term term={TERMS.ZUM} plural={true} /> à travers l'espace et le
                temps.
              </p>
              <p>
                De la mise au point du <Term term={TERMS.HOL_ONG} />, le réseau
                de conscience collective, jusqu'au siège de la dernière ville de
                l'univers par les forces du chaos; découvrez les idées les plus
                folles sur l'avenir, la nature et le sens de toutes choses.
              </p>
              <ErasList />
            </div>
          </div>
          <EraRow era={ERAS.PRESENT}>
            <>
              <p>Prenez un instant et considérez votre position un instant :</p>
              <p>
                Vous survolez{" "}
                <b>une histoire qui s'étend d'une fin de l'univers à l'autre</b>
                , et peut-être même connaissez-vous des choses que{" "}
                <a
                  href={PAGES_DATA[PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES].url}
                  className="text-gold"
                >
                  les personnages
                </a>{" "}
                ignorent.
              </p>
              <p>
                Usez du <Term term={TERMS.PSIK} outline={true} /> si vous le
                souhaitez, puis rejoignez le narrateur dans les chapitres de l'
                <Term term={TERMS.HIGHBS_BOK} />.
              </p>
            </>
          </EraRow>
          <EraRow era={ERAS.PALEO_ERA}>
            <>
              <p>
                À cette époque, les <Term term={TERMS.ZUM} plural={true} />{" "}
                vivent sur TERA.
              </p>
              <p>
                Ils sont cruels et brutaux, et se distinguent par leur
                attachement aux choses materielles ainsi que par une empathie
                toute pragmatique.
              </p>
              <p>
                En cause :{" "}
                <b>
                  ils ne sont pas encore sortis de l'invidiualité et luttent
                  pour exister
                </b>
                .
              </p>
              <p>
                Ils vivent dans des{" "}
                <Term term={TERMS.TRIBU} plural={true} pluralSign="s" />{" "}
                hétéroclites, et ne cherchent que vaguement le{" "}
                <Character character={CHARACTERS.TOUT_UN} />.
              </p>
              <p>
                Heureusement, c'est à cette période que{" "}
                <Character character={CHARACTERS.BINDA} outline={true} /> et ses
                amis vont contribuer à emmenner les{" "}
                <Term term={TERMS.ZUM} plural={true} /> dans l'espace et les
                consciences de tous les êtres vivants sur le{" "}
                <Term term={TERMS.HOL_ONG} />.
              </p>
            </>
          </EraRow>
          <EraRow era={ERAS.PRIMA_ERA}>
            <>
              <p>
                À bord de <Character character={CHARACTERS.GRAND_ARBRE} />, la
                forêt spatiale de vaisseaux-arbres, les{" "}
                <Term term={TERMS.ZUM} plural={true} outline={true} /> commence
                leur inexorable croissance par delà TERA.
              </p>
              <p>Leur système solaire est à son tour recyclé.</p>
              <p>
                Bientôt ils lancent les graines de{" "}
                <Character character={CHARACTERS.GRAND_ARBRE} /> à travers toute
                la galaxie.
              </p>
              <p>Et ce n'est que le début ...</p>
            </>
          </EraRow>
          <EraRow era={ERAS.EXPANS_ERA}>
            <>
              <p>
                La croissance de{" "}
                <Character character={CHARACTERS.GRAND_ARBRE} outline={true} />{" "}
                a pris des proportions demesurées.
              </p>
              <p>
                L'univers est en train de se remplir de vie et de conscience.
              </p>
              <p>
                C'est l'
                <Term term={TERMS.EXPANS} /> qui génère le{" "}
                <Term term={TERMS.WIGHLD} outline={true} />, le terrain de jeu
                ultime des <Term term={TERMS.ZUM} plural={true} />.
              </p>
              <p>
                D'ailleurs les <Term term={TERMS.ZUM} plural={true} />{" "}
                rencontrent de nombreuses autres formes de vie, avec lesquelles
                ils fusionnent dans le <Term term={TERMS.HOL_ONG} />.
              </p>
              <p>Que d'idées sont générées alors !</p>
            </>
          </EraRow>
          <EraRow era={ERAS.DISPERSION_ERA}>
            <>
              <p>La dynamique s'est essouflée.</p>
              <p>
                Il ne reste encore que quelques particules extérieures au{" "}
                <Term term={TERMS.HOL_ONG} />, mais celles-ci sont si espacées
                que l'intégrité de{" "}
                <Character character={CHARACTERS.GRAND_ARBRE} /> est menacée.
              </p>
              <p>
                Les seigneurs de l'infini sont créés pour aller chercher les
                précieuses manquantes.
              </p>
            </>
          </EraRow>
          <EraRow era={ERAS.CONTRACTION_ERA}>
            <>
              <p>
                Après un battement d'immobilité, l'univers se remet en
                mouvement.
              </p>
              <p>
                Les particules convergent vers un point, ou se forme le{" "}
                <Place place={PLACES.SIEGE_PENSEE} />.
              </p>
              <p>
                Les <Term term={TERMS.ZUM} plural={true} /> font alors face à
                l'ombre matérialisée : une force mystérieuse qui grignote leurs
                terres et referme l'univers.
              </p>
              <p>
                Leurs qualités sont grandes, pourtant arriveront-ils à empêcher
                la destruction de toutes choses et le réengendrement de
                l'univers, avec son lot de joies et de peines ?
              </p>
            </>
          </EraRow>
          <EraRow era={ERAS.AURO_ERA}>
            <>
              <p>
                Voilà, tout ce qu'il reste de vivant est regroupé dans la Cité
                de l'Aube.
              </p>
              <p>
                Forteresse ultime contre l'ombre, elle sert de havre aux{" "}
                <Term term={TERMS.ZUM} plural={true} /> de la fin des temps.
              </p>
              <p>
                Là, ils oeuvrent pour donner naissance à l'
                <Character character={CHARACTERS.ANGK} />, l'être unique censé
                pouvoir conceptualiser l'
                <Term term={TERMS.HIGHBS} /> et faire basculer l'univers dans le{" "}
                <Character character={CHARACTERS.TOUT_UN} />.
              </p>
            </>
          </EraRow>
          <EraRow era={ERAS.ANGK_ERA}>
            <>
              <p>
                Le dernier être prend conscience que son monde lui est encore
                exterieur.
              </p>
              <p>
                Il le remonte pour faire sien toutes choses, même les plus
                précieuses ...
              </p>
            </>
          </EraRow>
          <SectionRow
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
          >
            <>
              <UniversePagesCTA current={pageId} buttonsColor={COLORS.PURPLE} />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
