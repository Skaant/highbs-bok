import React from "react"
import { colors } from "../../../data/colors"
import { pages } from "../../../data/pages"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { TableOfContent } from "../../components/TableOfContent"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import { ImageRowPositionAbsolute } from "../../components/_rows/ImageRowPositionAbsolute"
import "../../styles/global.scss"

export enum SECTIONS_ID {
  PERSONNAGES_ET_ENTITES_DU_VOLUME_1 = "personnages-et-entites-du-volume-1",
  PERSONNAGES_ET_ENTITES_DU_VOLUME_2 = "personnages-et-entites-du-volume-2",
}

const sections: { [key in SECTIONS_ID]: string } = {
  [SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_1]:
    "Personnages et entités du volume 1",
  [SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_2]:
    "Personnages et entités du volume 2",
}

const pageId = pages.L_UNIVERS_PERSONNAGES_ET_ENTITES
const title = "Personnages et entités"

export default function Glossaire() {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ImageRowPositionAbsolute
            src="/images/razette-kami-baltazum.svg"
            style={{
              marginTop: "20vh",
              overflow: "unset",
            }}
          />
          <ContentRowWithHeader
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4 bg-none"
          >
            <>
              <p>
                Apprennez-en plus sur les <b>personnages épiques</b> et les{" "}
                <b>entités mystérieuses</b> de l'univers des ZUMS.
              </p>
              <TableOfContent sections={sections} unstyled={false} />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_1}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_1],
            }}
          >
            <>
              <p>
                Dans le volume 1, on parle beaucoup des{" "}
                <a href="/l-univers/glossaire">concepts</a> et et des{" "}
                <a href="/l-univers/7-eras">ERAS</a>.
              </p>
              <p>
                Les personnages sont un peu en second plan, mais
                <b>
                  ceux introduits ici nous suivront sans doute jusqu'au bout de
                  l'histoire
                </b>
                .
              </p>
              <ul>
                <li>Le tout-un,</li>
                <li>Balthazum (CONTRACTION-ERA),</li>
                <li>L'ANGK (CONTRACTION, AURO, ANGK-ERA).</li>
              </ul>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_2}
            header={{
              level: 2,
              content: "Personnages et entités du volume 2",
            }}
          >
            <>
              <p>
                Le volume 2 n'étant pas encore sorti, son contenu est à même
                d'évoluer.
              </p>
              <ul>
                <li>Le siège de la pensée (CONTRACTION-ERA), aussi un lieu,</li>
                <li>Raz-la-pouëpouët (CONTRACTION-ERA),</li>
                <li>
                  Binda (PALÉO, <i>CONTRACTION-</i>ERA),
                </li>
                <li>
                  Za-zoz, KAMI de la tribu PSIK (PALÉO, <i>CONTRACTION</i>-ERA),
                </li>
                <li>Krao (EXPANS-ERA),</li>
                <li>Jing-Jam-Zum (AURO-ERA),</li>
                <li>
                  Les trois anciens-anciens qui guident Binda (PALÉO-ERA),
                </li>
                <li>Quelques ZUMS de la cité de l'aube (AURO-ERA).</li>
              </ul>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
            className="bg-gold"
          >
            <>
              <UniversePagesCTA current={pageId} buttonsColor={colors.purple} />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
