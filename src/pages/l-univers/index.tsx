import React from "react"
import { CHARACTERS } from "../../../data/characters"
import { COLORS } from "../../../data/colors"
import { ERAS } from "../../../data/eras"
import { PAGES } from "../../../data/pages"
import { TERMS } from "../../../data/terms"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import Character from "../../components/Character"
import Era from "../../components/Era"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { ImageRowPositionAbsolute } from "../../components/_rows/ImageRowPositionAbsolute"
import { QuoteRow } from "../../components/_rows/QuoteRow"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import "../../styles/global.scss"

const pageId = PAGES.L_UNIVERS
const title = "Découvrir l'univers"

export default function () {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ImageRowPositionAbsolute
            src="/images/hb1-soln-syst.svg"
            style={{ height: "100%", minHeight: "100vh", marginTop: "-50px" }}
            imgClassName="h-100"
          />
          <div className="row px-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="mb-5">
                Le <Character character={CHARACTERS.TOUT_UN} /> ... que de{" "}
                <b>péripéties</b> ont vécu les{" "}
                <Term term={TERMS.ZUM} plural={true} /> avant d'en arriver
                jusque là.
              </p>
              <p>
                Imaginez un peu :{" "}
                <b>partis de leur planète TERA à bord d'une forêt spatiale</b>,
                ces créatures proprement fabuleuses{" "}
                <b>
                  ont été ensuite dispersées jusqu'aux frontières de l'univers
                </b>
                .
              </p>
              <p className="mb-5">
                Et ce n'est pas tout !{" "}
                <b>
                  Ils en sont revenus pour former l'
                  <Character character={CHARACTERS.ANGK} />
                </b>{" "}
                : l'être unique{" "}
                <b>capable de conceptualiser la pensée libératrice</b>, le
                concept ultime :{" "}
                <b>
                  l'
                  <Term term={TERMS.HIGHBS} />
                </b>
                .
              </p>
              <p>
                Servez-vous de ces quelques pages pour{" "}
                <b>
                  explorer plus encore l'univers épique des{" "}
                  <Term term={TERMS.ZUM} plural={true} />
                </b>
                .
              </p>
              <UniversePagesCTA current={pageId} buttonsColor={COLORS.PURPLE} />
            </div>
          </div>
          <QuoteRow
            background={COLORS.GOLD}
            legend={
              <>
                - Extrait du livret 1, chapitre 6 : <i>Sept ERAS</i>
              </>
            }
            className="px-4 pb-4"
          >
            <>
              "Lorsqu’<b>il ne restera plus dans cet univers qu’un monde</b>,
              <br />
              qu'une ville : la cité de l’aube,
              <br />
              assiégée par les hordes de l’entropie;
              <br />
              ce sera l’
              <Era era={ERAS.AURO_ERA} outline={true} textColor={COLORS.DEEP} />
              ."
            </>
          </QuoteRow>
          <div className="row px-4 pt-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Autres pages du site</h2>
              <ButtonsMenu
                buttons={[
                  {
                    href: "/acheter",
                    color: COLORS.PURPLE,
                    label: "Acheter le livret",
                  },
                  {
                    href: "/a-propos",
                    color: COLORS.LIGHT,
                    label: "A propos",
                  },
                  {
                    href: EXTRACT_DOWNLOAD_LINK,
                    color: COLORS.LIGHT,
                    label: "Télécharger l'extrait",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
