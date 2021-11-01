import React from "react"
import { colors } from "../../data/colors"
import { pages } from "../../data/pages"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import { ContentRowWithHeader } from "../components/_rows/ContentRowWithHeader"
import { ImageRowPositionAbsolute } from "../components/_rows/ImageRowPositionAbsolute"
import { EXTRACT_DOWNLOAD_LINK } from "../config"
import "../styles/global.scss"

const pageId = pages.ACHETER
const title = "Acheter le livret"

export default function () {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ImageRowPositionAbsolute
            src="/images/hb1-24-further.svg"
            style={{ height: "70vw", minHeight: "400px", marginTop: "80px" }}
          />
          <ContentRowWithHeader
            header={{
              level: 1,
              content: title,
            }}
          />
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Un beau petit ouvrage",
            }}
            className="pt-0"
          >
            <>
              <p>
                Mis en page et imprimé <b>par des professionnels</b>, le livret
                A5 à la couverture cartonnée est{" "}
                <b>un bel objet à lire, méditer et relire</b>.
              </p>
              <p className="mb-5">
                Les illustrations minimalistes, aux couleurs vives{" "}
                <a href="/l-univers/couleurs">et riches de sens</a>, sont{" "}
                <b>superbement mises en valeur</b> par le support papier.
              </p>
              <p id="soon">
                Pour <b>vous procurer un exemplaire</b> du volume 1 (48 pages)
                et commencer la lecture, il vous faudra encore{" "}
                <b>être patient</b> : la première impression sera{" "}
                <b>disponible en Janvier 2022</b> !
              </p>
              <p>
                Vous pouvez déjà <b>pré-commander</b> votre exemplaire en vous
                rendant <b>sur la page Ulule</b> de l'HIGHBS-BOK :)
              </p>
              <ButtonsMenu
                buttons={[
                  {
                    href: process.env.ULULE_VOL1_URL,
                    label: "Lien vers les pré-commandes Ulule",
                    color: colors.purple,
                    disabled: true,
                  },
                ]}
                className="mt-5"
              />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Bientôt une version électronique ?",
            }}
          >
            <>
              <p>
                Je n'ai pas pris le temps de m'intéresser aux plateformes qui
                propose d'héberger et de vendre des e-books. Mais on pourrait y
                venir.
              </p>
              <p>
                En attendant,{" "}
                <b>
                  vous pouvez déjà lire les cinq premiers chapitres du livret 1
                </b>{" "}
                au format PDF en cliquant sur le lien suivant :
              </p>
              <ButtonsMenu
                buttons={[
                  {
                    href: EXTRACT_DOWNLOAD_LINK,
                    color: colors.gold,
                    label: "Téléchargez l'extrait",
                  },
                ]}
                className="mt-5"
              />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
