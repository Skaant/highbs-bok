import React from "react"
import { CHARACTERS } from "../../../data/characters"
import { COLORS } from "../../../data/colors"
import { ERAS } from "../../../data/eras"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { TERMS } from "../../../data/terms"
import { TRIBES } from "../../../data/tribes"
import Character from "../../components/Character"
import Era from "../../components/Era"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import TribeRow from "../../components/_pages/tribus-de-l-eveil/TribeRow"
import { SectionRow } from "../../components/_rows/SectionRow"
import "../../styles/global.scss"

const page = PAGES.L_UNIVERS_TRIBUS_DE_L_EVEIL

export default function SeptEras() {
  return (
    <Layout pageId={page}>
      <>
        <Header title={PAGES_DATA[page].title} />
        <div className="container-fluid px-0">
          <div className="row px-4 pt-4 pb-5 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>
                Les <Term term={TERMS.TRIBU} plural={true} pluralSign={"s"} />{" "}
                de l'éveil
              </h1>
              <p>
                Les <Term term={TERMS.TRIBU} plural={true} pluralSign={"s"} />{" "}
                sont une des nouveautés du volume 2 (en cours d'écriture).
              </p>
              <p>
                Elles sont formées d'<b>individus dont la nature</b>, à un
                moment donné ou toute leur vie,
                <b>convergent dans leurs fonctions ecosystémiques</b>.
              </p>
              <p>
                Présentes à toutes les <Term term={TERMS.ERA} plural={true} />,{" "}
                elles commencent à former des archétypes affirmés et dirigés par
                la nature (plutôt que l'héritage spatial et culturel) à partir
                de l'
                <Era era={ERAS.EXPANS_ERA} />.
              </p>
              <p>
                Ce grand basculement va donner naissance aux myriades de tribus
                de l'éveil, mues par un même objectif, le{" "}
                <Character character={CHARACTERS.TOUT_UN} />, dont quelques unes
                emblématiques sont décrites ci-dessous.
              </p>
            </div>
          </div>
          <TribeRow tribe={TRIBES.PSIK}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.KOLOS}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.NOV}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.PERMA}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.WATCHK}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.OMRA}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.SHAPI}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.ABS}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.TRAK}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.SKIGH}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.RAAG}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.GENAENG}>
            <></>
          </TribeRow>
          <TribeRow tribe={TRIBES.ARKEO}>
            <></>
          </TribeRow>
          <SectionRow
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
          >
            <>
              <UniversePagesCTA current={page} buttonsColor={COLORS.PURPLE} />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
