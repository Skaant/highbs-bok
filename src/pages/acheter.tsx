import React from "react"
import { COLORS } from "../../data/colors"
import { PAGES } from "../../data/pages"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import BuyOptions from "../components/_pages/acheter/BuyOptions"
import { SectionRow } from "../components/_rows/SectionRow"
import { ImageRowPositionAbsolute } from "../components/_rows/ImageRowPositionAbsolute"
import "../styles/global.scss"

const pageId = PAGES.ACHETER
const title = "Acheter le livret"

function ContentDedicace() {
  return (
    <>
      1 exemplaire <b className="text-gold">DÉDICACÉ</b> de l'HIGHBS-BOK volume
      1,
    </>
  )
}

function ContentHolographique() {
  return (
    <>
      1 sticker <b className="text-gold">HOLOGRAPHIQUE</b> joyau HIGHBS,
    </>
  )
}

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
          <SectionRow
            header={{
              level: 1,
              content: title,
            }}
          />
          <SectionRow
            header={{
              level: 2,
              content: "Un beau petit ouvrage",
            }}
            className="pt-0 pb-5"
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
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "Choisissez l'option qui vous convient",
            }}
            className="bg-gold"
          >
            <>
              <p>
                Les commandes sont possible via la{" "}
                <b>solution de paiement sécurisée</b> Stripe, mais les
                expéditions ne commenceront qu'aux alentours du 20 Janvier 2022.
              </p>
              <p>
                <b>Plusieurs options d'achat sont disponibles</b>, agrémentées
                de sitckers et éventuellement d'une dédicace.
              </p>
              <p>
                En France métropolitaine, pour toutes les options,{" "}
                <b>la livraison est offerte</b>.
              </p>
              <BuyOptions
                options={[
                  {
                    link: "https://buy.stripe.com/dR6dT37AGdkf5UIfZ1",
                    title: "Un livret HIGHBS-BOK 1 + 1 sticker",
                    content: [
                      "1 exemplaire de l'HIGHBS-BOK volume 1,",
                      "1 sticker de ZUM portant du PSIK.",
                    ],
                    details: [
                      "1 sticker ZUM portant du PSIK (3 x 5 cm environ) aléatoire parmi les trois disponibles.",
                    ],
                    label: "Acheter pour 15€",
                  },
                  {
                    link: "https://buy.stripe.com/fZe8yJ4oudkfere3ce",
                    title: "Un livret HIGHBS-BOK 1 dédicacé + 2 stickers",
                    content: [
                      ContentDedicace,
                      ContentHolographique,
                      "1 sticker de ZUM portant du PSIK.",
                    ],
                    details: ["Le sticker joyau HIGHBS fait 7 cm de diamètre."],
                    label: "Disponible pour 25€",
                    bgColor: COLORS.DEEP,
                    textColor: COLORS.LIGHT,
                    accentColor: COLORS.GOLD,
                  },
                  {
                    link: "https://buy.stripe.com/5kA8yJ5sy0xtdnabIM",
                    title: "Deux livrets HIGHBS-BOK 1 + 3 stickers",
                    content: [
                      "2 exemplaires de l'HIGHBS-BOK volume 1,",
                      "2 stickers de ZUMS portant du PSIK,",
                      "1 sticker de plante-idée.",
                    ],
                    details: [
                      "2 stickers ZUMS aléatoires (mais différents) parmi les trois modèles dispo.",
                      "Le sticker plante-idée mesure 4.4 x 4 cm.",
                    ],
                    label: "Disponible pour 28€",
                  },
                  {
                    link: "https://buy.stripe.com/8wM8yJcV0cgbereeUZ",
                    title: "Trois livrets HIGHBS-BOK 1 + 5 stickers",
                    content: [
                      "3 exemplaires de l'HIGHBS-BOK volume 1,",
                      "Les 3 stickers de ZUMS portant du PSIK,",
                      "1 sticker plante-idée,",
                      "1 sticker plante-PSIK.",
                    ],
                    details: [
                      "Un sticker ZUM de chacun des 3 modèles dispo.",
                      "Le sticker plante-PSIK mesure 4.4 x 4 cm.",
                    ],
                    label: "Disponible pour 40€",
                  },
                  {
                    link: "https://buy.stripe.com/6oE16h7AGcgbere14c",
                    title:
                      "Deux livrets HIGHBS-BOK 1, dont 1 dédicacé + 6 stickers",
                    content: [
                      ContentDedicace,
                      ContentHolographique,
                      "1 autre exemplaire de l'HIGHBS-BOK volume 1,",
                      "3 stickers de ZUMS portant du PSIK,",
                      "2 stickers plante-idée,",
                      "2 stickers plante-PSIK,",
                    ],
                    details: ["Un sticker ZUM de chacun des 3 modèles dispo."],
                    label: "Disponible pour 42€",
                    bgColor: COLORS.DEEP,
                    textColor: COLORS.LIGHT,
                    accentColor: COLORS.GOLD,
                  },
                  {
                    link: "https://buy.stripe.com/cN24itbQWa83ere006",
                    title: "Quatre livrets HIGHBS-BOK 1 + 8 stickers",
                    content: [
                      "4 exemplaires de l'HIGHBS-BOK volume 1,",
                      "4 stickers de ZUMS portant du PSIK,",
                      "2 stickers plante-idée,",
                      "2 stickers plante-PSIK.",
                    ],
                    details: [
                      "Au moins un sticker ZUM de chacun des trois modèles.",
                    ],
                    label: "Disponible pour 52€",
                  },
                  {
                    link: "https://buy.stripe.com/fZe16hcV0gwr96U007",
                    title: "Cinq livrets HIGHBS-BOK 1 + 10 stickers",
                    content: [
                      "5 exemplaires de l'HIGHBS-BOK volume 1,",
                      ContentHolographique,
                      "5 stickers de ZUMS portant du PSIK,",
                      "2 stickers plante-idée,",
                      "2 stickers plante-PSIK,",
                    ],
                    details: [
                      "Au moins un sticker ZUM de chacun des trois modèles.",
                    ],
                    label: "Disponible pour 64€",
                    bgColor: COLORS.DEEP,
                    textColor: COLORS.LIGHT,
                    accentColor: COLORS.GOLD,
                  },
                ]}
              />
            </>
          </SectionRow>
          {/* <SectionRow
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
                    color: COLORS.GOLD,
                    label: "Téléchargez l'extrait",
                  },
                ]}
                className="mt-5"
              />
            </>
          </SectionRow> */}
        </div>
      </>
    </Layout>
  )
}
